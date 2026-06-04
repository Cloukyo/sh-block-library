import { foundationPresets, getBlockFoundationId, getFoundationCss, getLeanBlockCss } from "@/lib/foundation-presets";
import { ASSEMBLY_STORAGE_KEY } from "@/lib/local-blocks";
import type { Block, BlockStatus, DesignSettings, FoundationId, PageTemplate, PageTemplateChecklist } from "@/types/block";

export type PageExportMode = "standalone" | "lean" | "foundation" | "html" | "css";

export const PAGE_TEMPLATES_STORAGE_KEY = "sh-block-library:page-templates";
export const PAGE_FOUNDATION_STORAGE_KEY = "sh-block-library:page-foundation";

export const defaultPageTemplateChecklist: PageTemplateChecklist = {
  previewChecked: false,
  desktopChecked: false,
  tabletChecked: false,
  mobileChecked: false,
  elementorPasted: false,
  ctaLinksChecked: false,
  imagesReplaced: false,
  approved: false
};

const statuses: BlockStatus[] = ["Draft", "Needs Review", "Elementor Tested", "Approved"];

export const pageTemplates: PageTemplate[] = [
  createBuiltInTemplate({
    id: "nikita-home",
    name: "Nikita Home",
    description: "Homepage assembly for the Nikita Grover staging site.",
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
  }),
  createBuiltInTemplate({
    id: "nikita-about",
    name: "Nikita About",
    description: "About page assembly for Nikita Grover.",
    blockIds: [
      "nikita-desktop-header-navigation",
      "nikita-about-hero",
      "nikita-professional-background",
      "nikita-how-dr-grover-works",
      "nikita-nutrition-lifestyle-support",
      "nikita-about-next-step-cta",
      "nikita-footer"
    ]
  }),
  createBuiltInTemplate({
    id: "nikita-services",
    name: "Nikita Services",
    description: "Services page assembly for Nikita Grover.",
    blockIds: [
      "nikita-desktop-header-navigation",
      "nikita-services-hero",
      "nikita-service-areas-intro",
      "nikita-full-service-areas-grid",
      "nikita-diagnostics-and-support",
      "nikita-services-next-step-cta",
      "nikita-footer"
    ]
  }),
  createBuiltInTemplate({
    id: "nikita-approach",
    name: "Nikita Approach",
    description: "Approach page assembly for Nikita Grover.",
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
  }),
  createBuiltInTemplate({
    id: "nikita-faq",
    name: "Nikita FAQ",
    description: "FAQ page assembly for Nikita Grover.",
    blockIds: [
      "nikita-desktop-header-navigation",
      "nikita-faq-hero",
      "nikita-safety-enquiry-notice",
      "nikita-common-questions",
      "nikita-still-unsure-cta",
      "nikita-footer"
    ]
  }),
  createBuiltInTemplate({
    id: "nikita-contact",
    name: "Nikita Contact",
    description: "Contact page assembly for Nikita Grover.",
    blockIds: [
      "nikita-desktop-header-navigation",
      "nikita-contact-hero",
      "nikita-practice-enquiries-contact-panel",
      "nikita-enquiry-form-intro-instructions",
      "nikita-contact-form-block",
      "nikita-footer"
    ]
  }),
  {
    ...createBuiltInTemplate({
      id: "dy-home",
      name: "DY Skin Homepage",
      description: "Homepage assembly using the available DY Skin Clinic blocks.",
      sourceProject: "DY Skin Clinic",
      foundationId: "dy-foundation",
      tags: ["dy", "skin-clinic", "homepage"],
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
    })
  },
  {
    ...createBuiltInTemplate({
      id: "samim-home-draft",
      name: "Samim Home Draft",
      description: "First-pass homepage assembly for the Samim Surgeon Pack.",
      sourceProject: "Samim Surgeon Pack",
      foundationId: "sm-foundation",
      tags: ["samim", "surgeon", "homepage", "draft"],
      blockIds: [
        "samim-homepage-hero",
        "samim-credentials-authority-strip",
        "samim-procedures-grid",
        "samim-consultant-bio",
        "samim-consultation-journey",
        "samim-results-before-after-placeholder",
        "samim-reviews-testimonials",
        "samim-research-publications-section",
        "samim-contact-cta"
      ]
    })
  }
];

type CreateTemplateInput = {
  id: string;
  name: string;
  description: string;
  blockIds: string[];
  sourceProject?: string;
  foundationId?: FoundationId;
  tags?: string[];
};

function createBuiltInTemplate(input: CreateTemplateInput): PageTemplate {
  const now = "2026-06-01T00:00:00.000Z";
  return {
    id: input.id,
    name: input.name,
    description: input.description,
    sourceProject: input.sourceProject ?? "Nikita Grover Staging Site",
    foundationId: input.foundationId ?? "nikita-foundation",
    blockIds: input.blockIds,
    tags: input.tags ?? ["nikita", "page-template"],
    status: "Needs Review",
    checklist: defaultPageTemplateChecklist,
    createdAt: now,
    updatedAt: now,
    builtIn: true
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function normalizeFoundationId(value: unknown): FoundationId {
  return typeof value === "string" && value in foundationPresets ? (value as FoundationId) : "sh-foundation";
}

export function normalizePageTemplate(template: unknown): PageTemplate | null {
  if (!isRecord(template) || typeof template.id !== "string" || typeof template.name !== "string" || !Array.isArray(template.blockIds)) {
    return null;
  }

  return {
    id: template.id,
    name: template.name,
    description: typeof template.description === "string" ? template.description : "",
    sourceProject: typeof template.sourceProject === "string" ? template.sourceProject : "",
    foundationId: normalizeFoundationId(template.foundationId),
    blockIds: template.blockIds.filter((id): id is string => typeof id === "string"),
    tags: Array.isArray(template.tags) ? template.tags.filter((tag): tag is string => typeof tag === "string") : [],
    status: statuses.includes(template.status as BlockStatus) ? (template.status as BlockStatus) : "Draft",
    checklist: {
      ...defaultPageTemplateChecklist,
      ...(isRecord(template.checklist) ? template.checklist : {})
    },
    createdAt: typeof template.createdAt === "string" ? template.createdAt : new Date().toISOString(),
    updatedAt: typeof template.updatedAt === "string" ? template.updatedAt : new Date().toISOString(),
    builtIn: template.builtIn === true
  };
}

export function createPageTemplate(input: Omit<PageTemplate, "id" | "createdAt" | "updatedAt" | "checklist" | "builtIn"> & { checklist?: PageTemplateChecklist }): PageTemplate {
  const now = new Date().toISOString();
  return {
    ...input,
    id: `page-${crypto.randomUUID()}`,
    checklist: input.checklist ?? defaultPageTemplateChecklist,
    createdAt: now,
    updatedAt: now
  };
}

export function loadSavedPageTemplates(): PageTemplate[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(PAGE_TEMPLATES_STORAGE_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed.map(normalizePageTemplate).filter((template): template is PageTemplate => Boolean(template)) : [];
  } catch {
    return [];
  }
}

export function saveSavedPageTemplates(templates: PageTemplate[]) {
  window.localStorage.setItem(PAGE_TEMPLATES_STORAGE_KEY, JSON.stringify(templates.map((template) => ({ ...template, builtIn: false })), null, 2));
}

export function parseImportedPageTemplates(json: string): PageTemplate[] {
  const parsed: unknown = JSON.parse(json);
  const templates = Array.isArray(parsed)
    ? parsed
    : isRecord(parsed) && Array.isArray(parsed.pageTemplates)
      ? parsed.pageTemplates
      : [];
  const validTemplates = templates.map(normalizePageTemplate).filter((template): template is PageTemplate => Boolean(template));

  if (validTemplates.length === 0) {
    throw new Error("No valid page templates were found in the imported JSON.");
  }

  return validTemplates.map((template) => ({ ...template, builtIn: false }));
}

export function resolveImportedPageTemplateConflicts(importedTemplates: PageTemplate[], existingIds: Set<string>) {
  return importedTemplates.map((template) => {
    if (!existingIds.has(template.id)) {
      existingIds.add(template.id);
      return template;
    }

    const nextTemplate = {
      ...template,
      id: `page-${crypto.randomUUID()}`,
      name: `${template.name} (Imported Copy)`,
      updatedAt: new Date().toISOString()
    };
    existingIds.add(nextTemplate.id);
    return nextTemplate;
  });
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

export function readPageFoundationId(): FoundationId | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(PAGE_FOUNDATION_STORAGE_KEY);
  return value && value in foundationPresets ? (value as FoundationId) : null;
}

export function savePageFoundationId(foundationId: FoundationId) {
  window.localStorage.setItem(PAGE_FOUNDATION_STORAGE_KEY, foundationId);
}

export function getFullPageHtml(selectedBlocks: Block[]) {
  return selectedBlocks
    .map((block) => `<!-- ${block.name} -->\n${block.html.trim()}`)
    .join("\n\n");
}

export function getDetectedFoundationIds(selectedBlocks: Block[]) {
  return Array.from(new Set(selectedBlocks.map(getBlockFoundationId)));
}

export function getPageFoundationIds(selectedBlocks: Block[], pageFoundationId: FoundationId, includeDetectedFoundations: boolean) {
  const foundationIds = [pageFoundationId];
  if (includeDetectedFoundations) {
    getDetectedFoundationIds(selectedBlocks).forEach((foundationId) => {
      if (!foundationIds.includes(foundationId)) {
        foundationIds.push(foundationId);
      }
    });
  }
  return foundationIds;
}

export function getFoundationOnlyCss(foundationId: FoundationId, settings: DesignSettings) {
  return getFoundationCss(foundationId, settings);
}

export function getPageBlockCss(selectedBlocks: Block[], lean = false) {
  const seen = new Set<string>();
  const chunks = selectedBlocks.flatMap((block) =>
    (lean ? getLeanBlockCss(block.css, getBlockFoundationId(block)) : block.css)
      .split(/\n\s*\n/)
      .map((chunk) => chunk.trim())
      .filter(Boolean)
      .map((chunk) => ({ block, chunk }))
  );

  return chunks
    .filter(({ chunk }) => {
      if (seen.has(chunk)) {
        return false;
      }
      seen.add(chunk);
      return true;
    })
    .map(({ block, chunk }) => `/* ${block.name} */\n${chunk}`)
    .join("\n\n");
}

export function getFullPageCss(selectedBlocks: Block[], settings: DesignSettings, pageFoundationId: FoundationId, includeDetectedFoundations = true) {
  const foundationCss = getPageFoundationIds(selectedBlocks, pageFoundationId, includeDetectedFoundations)
    .map((foundationId, index) => (index === 0 ? getFoundationCss(foundationId, settings) : foundationPresets[foundationId]?.css.trim()))
    .filter(Boolean)
    .join("\n\n");
  const blockCss = getPageBlockCss(selectedBlocks, true);
  return [foundationCss, blockCss].filter(Boolean).join("\n\n");
}

export function getLeanPageCss(selectedBlocks: Block[]) {
  return getPageBlockCss(selectedBlocks, true);
}

export function wrapStyle(css: string) {
  return `<style>\n${css.trim()}\n</style>`;
}

export function getPageExportCode(selectedBlocks: Block[], settings: DesignSettings, pageFoundationId: FoundationId, mode: PageExportMode, includeDetectedFoundations = true) {
  const html = getFullPageHtml(selectedBlocks);
  const standaloneCss = getFullPageCss(selectedBlocks, settings, pageFoundationId, includeDetectedFoundations);
  const leanCss = getLeanPageCss(selectedBlocks);
  const foundationCss = getFoundationOnlyCss(pageFoundationId, settings);

  if (mode === "html") {
    return html;
  }

  if (mode === "css") {
    return standaloneCss;
  }

  if (mode === "foundation") {
    return wrapStyle(foundationCss);
  }

  if (mode === "lean") {
    return `${html}\n\n${wrapStyle(leanCss)}`;
  }

  return `${html}\n\n${wrapStyle(standaloneCss)}`;
}

export function getCombinedFullPageCode(selectedBlocks: Block[], settings: DesignSettings, pageFoundationId: FoundationId, includeDetectedFoundations = true) {
  return getPageExportCode(selectedBlocks, settings, pageFoundationId, "standalone", includeDetectedFoundations);
}
