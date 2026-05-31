import { createCssVariables } from "@/lib/theme-presets";
import { ASSEMBLY_STORAGE_KEY } from "@/lib/local-blocks";
import type { Block, DesignSettings } from "@/types/block";

export type PageTemplate = {
  id: string;
  name: string;
  blockIds: string[];
};

export const pageTemplates: PageTemplate[] = [
  {
    id: "home",
    name: "Home",
    blockIds: [
      "nikita-desktop-header-navigation",
      "nikita-homepage-hero",
      "nikita-meet-doctor-intro",
      "nikita-time-attention-consultation-process",
      "nikita-services-preview",
      "nikita-reviews-placeholder",
      "nikita-request-consultation-cta",
      "nikita-footer"
    ]
  },
  {
    id: "about",
    name: "About",
    blockIds: [
      "nikita-desktop-header-navigation",
      "nikita-about-hero",
      "nikita-professional-background",
      "nikita-how-dr-grover-works",
      "nikita-nutrition-lifestyle-support",
      "nikita-about-next-step-cta",
      "nikita-footer"
    ]
  },
  {
    id: "services",
    name: "Services",
    blockIds: [
      "nikita-desktop-header-navigation",
      "nikita-services-hero",
      "nikita-service-areas-intro",
      "nikita-full-service-areas-grid",
      "nikita-diagnostics-and-support",
      "nikita-services-next-step-cta",
      "nikita-footer"
    ]
  },
  {
    id: "approach",
    name: "Approach",
    blockIds: [
      "nikita-desktop-header-navigation",
      "nikita-approach-hero",
      "nikita-patient-journey-summary-strip",
      "nikita-patient-journey-process",
      "nikita-clinical-philosophy",
      "nikita-insight-to-action",
      "nikita-approach-next-step-cta",
      "nikita-footer"
    ]
  },
  {
    id: "faq",
    name: "FAQ",
    blockIds: [
      "nikita-desktop-header-navigation",
      "nikita-faq-hero",
      "nikita-safety-enquiry-notice",
      "nikita-common-questions",
      "nikita-still-unsure-cta",
      "nikita-footer"
    ]
  },
  {
    id: "contact",
    name: "Contact",
    blockIds: [
      "nikita-desktop-header-navigation",
      "nikita-contact-hero",
      "nikita-practice-enquiries-contact-panel",
      "nikita-enquiry-form-intro-instructions",
      "nikita-contact-form-block",
      "nikita-footer"
    ]
  },
  {
    id: "dy-home",
    name: "DY Skin Clinic Home",
    blockIds: [
      "dy-header-navigation",
      "dy-hero-section",
      "dy-non-surgical-treatments-grid",
      "dy-surgical-treatments-grid",
      "dy-scar-improvements-grid",
      "dy-why-choose-section",
      "dy-testimonials-reviews",
      "dy-appointment-contact-section",
      "dy-footer"
    ]
  }
];

export function getFullPageHtml(selectedBlocks: Block[]) {
  return selectedBlocks
    .map((block) => `<!-- ${block.name} -->\n${block.html.trim()}`)
    .join("\n\n");
}

export function getFullPageCss(selectedBlocks: Block[], settings: DesignSettings) {
  const chunks = selectedBlocks.flatMap((block) =>
    block.css
      .split(/\n\s*\n/)
      .map((chunk) => chunk.trim())
      .filter(Boolean)
      .map((chunk) => ({ block, chunk }))
  );
  const seen = new Set<string>();
  const deduped = chunks.filter(({ chunk }) => {
    if (seen.has(chunk)) {
      return false;
    }
    seen.add(chunk);
    return true;
  });

  const css = deduped
    .map(({ block, chunk }) => `/* ${block.name} */\n${chunk}`)
    .join("\n\n");

  return `${createCssVariables(settings)}\n\n${css}`;
}

export function getCombinedFullPageCode(selectedBlocks: Block[], settings: DesignSettings) {
  return `${getFullPageHtml(selectedBlocks)}

<style>
${getFullPageCss(selectedBlocks, settings)}
</style>`;
}

export function readAssemblyIds() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(ASSEMBLY_STORAGE_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function saveAssemblyIds(ids: string[]) {
  window.localStorage.setItem(ASSEMBLY_STORAGE_KEY, JSON.stringify(ids));
}
