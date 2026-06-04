export type BlockCategory =
  | "Global Foundation"
  | "Headers"
  | "Heroes"
  | "Intro Sections"
  | "Service Grids"
  | "Doctor Bios"
  | "Credentials"
  | "Trust / Authority"
  | "Process / Approach"
  | "FAQs"
  | "Testimonials"
  | "Treatment / Service Detail"
  | "Before & After / Gallery"
  | "Pricing / Fees"
  | "Location / Clinic Info"
  | "Forms / Enquiry"
  | "Reviews / Social Proof"
  | "Media / Video"
  | "Comparison / Why Choose"
  | "Content / Article Blocks"
  | "Contact CTAs"
  | "Footer CTAs"
  | "Utility Blocks";

export type Block = {
  id: string;
  name: string;
  category: BlockCategory;
  description: string;
  tags: string[];
  client: string;
  style: string;
  useCase?: string;
  foundationId?: FoundationId;
  foundationPreset?: FoundationId;
  exportNotes?: string;
  blockCss?: string;
  foundationCss?: string;
  html: string;
  css: string;
  notes: string;
  sourceProject?: string;
  sourceUrl?: string;
  sourcePage?: string;
  sourceSection?: string;
  version?: string;
  status?: BlockStatus;
  elementorQaStatus?: ElementorQaStatus;
};

export type FoundationId = "sh-foundation" | "nikita-foundation" | "dy-foundation" | "sm-foundation" | "scaraid-foundation";

export type UserBlock = Block & {
  createdAt: string;
  updatedAt: string;
  qa?: BlockQaChecklist;
};

export type BlockStatus = "Draft" | "Needs Review" | "Elementor Tested" | "Approved";
export type ElementorQaStatus = "Pass" | "Warnings" | "Needs Review";

export type BlockQaChecklist = {
  pastedIntoElementor: boolean;
  desktopChecked: boolean;
  tabletChecked: boolean;
  mobileChecked: boolean;
  ctaLinksChecked: boolean;
  imagesReplaced: boolean;
  formBehaviourChecked: boolean;
  cssConflictChecked: boolean;
  approved: boolean;
};

export type PageTemplateChecklist = {
  previewChecked: boolean;
  desktopChecked: boolean;
  tabletChecked: boolean;
  mobileChecked: boolean;
  elementorPasted: boolean;
  ctaLinksChecked: boolean;
  imagesReplaced: boolean;
  approved: boolean;
};

export type PageTemplate = {
  id: string;
  name: string;
  description: string;
  sourceProject: string;
  foundationId: FoundationId;
  blockIds: string[];
  tags: string[];
  status: BlockStatus;
  checklist: PageTemplateChecklist;
  createdAt: string;
  updatedAt: string;
  builtIn?: boolean;
};

export type ButtonStyle = "Pill" | "Soft rounded" | "Sharp editorial" | "Outline" | "Minimal text link";

export type SpacingOption = "Compact" | "Standard" | "Spacious" | "Editorial";

export type DesignSettings = {
  paletteId: string;
  headingFont: string;
  bodyFont: string;
  buttonStyle: ButtonStyle;
  spacing: SpacingOption;
  customColors: {
    bg: string;
    surface: string;
    text: string;
    heading: string;
    muted: string;
    accent: string;
    accentSoft: string;
    buttonBg: string;
    buttonText: string;
  };
};

export type ThemePalette = {
  id: string;
  name: string;
  description: string;
  colors: DesignSettings["customColors"];
};
