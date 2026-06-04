import type { Block, BlockCategory, ElementorQaStatus } from "@/types/block";

export type ElementorQaIssue = {
  severity: "warning" | "review";
  title: string;
  detail: string;
};

const genericSelectors = ["body", "html", "main", "section", "article", "h1", "h2", "h3", "p", "a", "img"];
const genericClasses = ["container", "button", "card", "hero", "section"];
const approvedPrefixes = ["sh-", "ng-", "dy-", "sm-"];
const allowedExternalPrefixes = ["elementor"];
const stagingPatterns = ["sg-host.com", "staging", "localhost", "127.0.0.1"];
const placeholderPatterns = ["placehold.co", "placeholder", "dummyimage", "picsum.photos", "unsplash.it"];

export function analyzeElementorQa({ html, css, category, combinedCode }: { html: string; css: string; category?: BlockCategory; combinedCode?: string }) {
  const issues: ElementorQaIssue[] = [];
  const combined = combinedCode ?? `${html}\n<style>\n${css}\n</style>`;
  const imageUrls = collectUrls(`${html}\n${css}`);
  const emptyImageSources = collectEmptyImageSources(html);

  if (!html.trim()) {
    issues.push({ severity: "review", title: "Missing HTML", detail: "Combined export should include the block HTML before pasting into Elementor." });
  }

  if (!css.trim()) {
    issues.push({ severity: "review", title: "Missing CSS", detail: "Combined export should include CSS inside a style tag." });
  }

  if (!/<style\b[\s\S]*<\/style>/i.test(combined)) {
    issues.push({ severity: "review", title: "Missing style tag", detail: "Combined Elementor exports should include a style tag for the CSS." });
  }

  for (const selector of genericSelectors) {
    if (hasGenericSelector(css, selector)) {
      issues.push({
        severity: "review",
        title: `Generic selector: ${selector}`,
        detail: `CSS targets "${selector}" directly. Scope it with an approved class prefix before pasting into Elementor.`
      });
    }
  }

  for (const className of genericClasses) {
    if (new RegExp(`\\.${className}(?![-_a-zA-Z0-9])`).test(css)) {
      issues.push({
        severity: "review",
        title: `Generic class: .${className}`,
        detail: "Generic class names can collide with themes, Elementor widgets or plugins."
      });
    }
  }

  if (category !== "Global Foundation" && /^\s*@import\s+/im.test(css)) {
    issues.push({ severity: "warning", title: "@import in block CSS", detail: "Font imports should live in the foundation CSS, not section-specific CSS." });
  }

  if (/:root\s*\{/i.test(css)) {
    issues.push({ severity: "warning", title: ":root in block CSS", detail: "Variables should live in the foundation CSS so lean block CSS stays portable." });
  }

  if (/!important\b/i.test(css)) {
    issues.push({ severity: "warning", title: "!important used", detail: "Avoid !important unless it is required to override Elementor or theme output." });
  }

  if (/position\s*:\s*fixed\b/i.test(css)) {
    issues.push({ severity: "review", title: "position: fixed used", detail: "Fixed elements can conflict with Elementor sticky headers, modals and mobile viewports." });
  }

  const highZIndexes = Array.from(css.matchAll(/z-index\s*:\s*(-?\d+)/gi)).map((match) => Number(match[1])).filter((value) => value >= 1000);
  if (highZIndexes.length) {
    issues.push({ severity: "warning", title: "High z-index value", detail: `Found z-index ${Math.max(...highZIndexes)}. Keep stacking values modest unless needed.` });
  }

  imageUrls.forEach((url) => {
    if (url.startsWith("http://")) {
      issues.push({ severity: "review", title: "HTTP image URL", detail: `${url} should use HTTPS before publishing.` });
    }
    if (stagingPatterns.some((pattern) => url.toLowerCase().includes(pattern))) {
      issues.push({ severity: "warning", title: "Staging image URL", detail: `${url} looks like a staging or local asset.` });
    }
    if (placeholderPatterns.some((pattern) => url.toLowerCase().includes(pattern))) {
      issues.push({ severity: "warning", title: "Placeholder image URL", detail: `${url} looks like placeholder media.` });
    }
  });

  emptyImageSources.forEach((source) => {
    issues.push({ severity: "warning", title: "Empty image source", detail: `${source} should be replaced with a final image URL before publishing.` });
  });

  if (/<a\b[^>]*href=(["'])#\1/i.test(html) || /<a\b(?=[^>]*href=#)/i.test(html)) {
    issues.push({ severity: "warning", title: "Placeholder link", detail: "One or more links use href=\"#\". Replace with final URLs." });
  }

  if (/<script\b/i.test(html)) {
    issues.push({ severity: "review", title: "Script tag found", detail: "Avoid scripts in Elementor HTML widgets unless explicitly approved." });
  }

  if (/<form\b/i.test(html) && category !== "Forms / Enquiry") {
    issues.push({ severity: "review", title: "Form tag outside form category", detail: "Use form tags only in approved Forms / Enquiry blocks." });
  }

  if (!hasResponsiveCss(css)) {
    issues.push({ severity: "warning", title: "No responsive CSS detected", detail: "No media query, clamp(), min(), max() or responsive grid rule was found." });
  }

  const unapprovedClasses = getUnapprovedCssClasses(css);
  if (unapprovedClasses.length) {
    issues.push({
      severity: "review",
      title: "Unapproved class prefix",
      detail: `CSS class selectors should use sh-, ng-, dy- or sm-. Review: ${unapprovedClasses.slice(0, 6).join(", ")}${unapprovedClasses.length > 6 ? "..." : ""}`
    });
  }

  if (!usesApprovedPrefix(`${html}\n${css}`)) {
    issues.push({ severity: "review", title: "No approved prefix found", detail: "Use classes prefixed with sh-, ng-, dy- or sm- to reduce Elementor/theme collisions." });
  }

  if (/\b(?:flex|grid|hidden|block|inline-flex|items-center|justify-center|rounded|px-\d|py-\d|text-\w+|bg-\w+):|next\/image|data-nextjs|__next/i.test(`${html}\n${css}`)) {
    issues.push({ severity: "warning", title: "Possible app-only dependency", detail: "Check this export does not rely on the block library app, Tailwind utilities or Next.js-only markup." });
  }

  return {
    issues,
    status: getQaStatus(issues)
  };
}

export function analyzeBlocksForElementorQa(blocks: Block[]) {
  return analyzeElementorQa({
    html: blocks.map((block) => block.html).join("\n\n"),
    css: blocks.map((block) => block.css).join("\n\n"),
    category: blocks.some((block) => block.category !== "Forms / Enquiry") ? undefined : "Forms / Enquiry"
  });
}

function getQaStatus(issues: ElementorQaIssue[]): ElementorQaStatus {
  if (issues.some((issue) => issue.severity === "review")) {
    return "Needs Review";
  }

  return issues.length ? "Warnings" : "Pass";
}

function hasGenericSelector(css: string, selector: string) {
  return css
    .split("{")
    .slice(0, -1)
    .flatMap((chunk) => chunk.split("}").pop()?.split(",") ?? [])
    .some((candidate) => new RegExp(`^${selector}(?=[\\s:.#\\[]|$)`, "i").test(candidate.trim()));
}

function collectUrls(value: string) {
  const urls = [
    ...Array.from(value.matchAll(/\bsrc=(["'])(.*?)\1/gi)).map((match) => match[2]),
    ...Array.from(value.matchAll(/url\(\s*(["']?)(.*?)\1\s*\)/gi)).map((match) => match[2])
  ];

  return urls.filter((url) => /^https?:\/\//i.test(url));
}

function collectEmptyImageSources(html: string) {
  return Array.from(html.matchAll(/\bsrc=(["'])(.*?)\1/gi))
    .map((match) => match[0])
    .filter((source) => /src=(["'])\s*\1/i.test(source));
}

function hasResponsiveCss(css: string) {
  return /@media|clamp\(|min\(|max\(|auto-fit|auto-fill|grid-template-columns\s*:\s*repeat\(/i.test(css);
}

function usesApprovedPrefix(value: string) {
  return approvedPrefixes.some((prefix) => value.includes(prefix));
}

function getUnapprovedCssClasses(css: string) {
  const classes = Array.from(css.matchAll(/\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/g))
    .map((match) => match[1])
    .filter((className) => !approvedPrefixes.some((prefix) => className.startsWith(prefix)))
    .filter((className) => !allowedExternalPrefixes.some((prefix) => className === prefix || className.startsWith(`${prefix}-`)));

  return Array.from(new Set(classes));
}
