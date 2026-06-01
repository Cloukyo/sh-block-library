import type { DesignSettings, FoundationId } from "@/types/block";
import { createCssVariables } from "@/lib/theme-presets";

export type FoundationPreset = {
  id: FoundationId;
  name: string;
  css: string;
  removeFromBlockCss: string[];
};

export const shFoundationCss = ``;

const nikitaBaseFoundationCss = `.ng-eyebrow {
  margin: 0 0 22px;
  color: var(--sh-accent);
  font-family: var(--sh-font-body);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  line-height: 1.3;
  text-transform: uppercase;
}

.ng-display,
.ng-section-title {
  margin: 0;
  color: var(--sh-heading);
  font-family: var(--sh-font-heading);
  font-weight: 600;
  letter-spacing: 0;
}

.ng-display {
  font-size: clamp(48px, 7vw, 92px);
  line-height: 0.95;
}

.ng-section-title {
  font-size: clamp(38px, 5vw, 72px);
  line-height: 1.02;
}

.ng-accent-italic {
  color: var(--sh-accent);
  font-style: italic;
}

.ng-lead,
.ng-copy {
  color: var(--sh-text);
  font-family: var(--sh-font-body);
  line-height: 1.75;
}

.ng-lead {
  max-width: 760px;
  margin: 28px 0 0;
  font-size: clamp(18px, 2vw, 23px);
}

.ng-copy {
  font-size: 16px;
}

.ng-shell {
  max-width: var(--sh-container);
  margin: 0 auto;
}

.ng-section {
  background: var(--sh-bg);
  color: var(--sh-text);
  font-family: var(--sh-font-body);
  padding: var(--sh-section-padding);
}

.ng-section--surface {
  background: var(--sh-surface);
}

.ng-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.ng-button-primary,
.ng-button-outline,
.ng-button-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 15px 28px;
  border-radius: var(--sh-radius);
  font-family: var(--sh-font-body);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
}

.ng-button-primary {
  background: var(--sh-button-bg);
  border: 1px solid var(--sh-button-border, var(--sh-button-bg));
  color: var(--sh-button-text);
}

.ng-button-outline {
  background: transparent;
  border: 1px solid var(--sh-accent);
  color: var(--sh-accent);
}

.ng-button-link {
  min-height: 0;
  padding: 0;
  border-bottom: 1px solid var(--sh-accent);
  border-radius: 0;
  color: var(--sh-accent);
}

.ng-two-col {
  display: grid;
  grid-template-columns: minmax(260px, 0.45fr) minmax(0, 1fr);
  gap: clamp(38px, 7vw, 96px);
  align-items: start;
}

.ng-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.ng-card-grid--two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.ng-card,
.ng-panel {
  background: var(--sh-bg);
  background: color-mix(in srgb, var(--sh-bg) 78%, white);
  border: 1px solid var(--sh-accent-soft);
}

.ng-card {
  padding: clamp(24px, 3vw, 34px);
}

.ng-panel {
  padding: clamp(30px, 4vw, 52px);
}

.ng-number {
  display: block;
  margin-bottom: 24px;
  color: var(--sh-accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.18em;
}

.ng-card h3 {
  margin: 0;
  color: var(--sh-heading);
  font-family: var(--sh-font-heading);
  font-size: clamp(24px, 2.4vw, 34px);
  font-weight: 600;
  line-height: 1.1;
}

.ng-card p,
.ng-panel p,
.ng-rich-text p {
  margin: 16px 0 0;
  color: var(--sh-text);
  font-size: 16px;
  line-height: 1.75;
}

.ng-image-frame {
  margin: 0;
  border: 1px solid var(--sh-accent-soft);
  background: var(--sh-bg);
}

.ng-image-frame img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.ng-feature-list {
  display: grid;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.ng-feature-list li {
  border-top: 1px solid var(--sh-accent);
  padding-top: 14px;
  color: var(--sh-heading);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

@media (max-width: 820px) {
  .ng-section {
    padding: 64px 20px;
  }

  .ng-display {
    font-size: clamp(40px, 12vw, 58px);
  }

  .ng-section-title {
    font-size: clamp(34px, 10vw, 48px);
  }

  .ng-two-col,
  .ng-card-grid,
  .ng-card-grid--two {
    grid-template-columns: 1fr;
  }

  .ng-actions {
    display: grid;
  }

  .ng-button-primary,
  .ng-button-outline {
    width: 100%;
  }
}`;

const nikitaPageHeroFoundationCss = `.ng-page-hero {
  position: relative;
  min-height: 760px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--sh-bg);
  color: var(--sh-text);
  font-family: var(--sh-font-body);
  padding: 120px 32px 90px;
}

.ng-page-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(90deg, rgba(255,254,250,0.96) 0%, rgba(255,254,250,0.82) 42%, rgba(255,254,250,0.34) 76%), var(--ng-hero-image);
  background-size: cover;
  background-position: center;
}

.ng-page-hero__content {
  position: relative;
  z-index: 1;
  max-width: var(--sh-container);
  width: 100%;
  margin: 0 auto;
}

.ng-page-hero__copy {
  max-width: 820px;
}

@media (max-width: 820px) {
  .ng-page-hero {
    min-height: auto;
    padding: 88px 20px 56px;
  }

  .ng-page-hero::before {
    background-image: linear-gradient(180deg, rgba(255,254,250,0.98), rgba(255,254,250,0.95));
  }
}`;

export const nikitaFoundationCss = [nikitaBaseFoundationCss, nikitaPageHeroFoundationCss].join("\n\n");

export const dyFoundationCss = `.dy-section {
  --dy-bg: #ffffff;
  --dy-soft: #f4ece8;
  --dy-text: #7f7c76;
  --dy-heading: #d1a48e;
  --dy-dark: #3d3d3d;
  --dy-border: #d5a68f;
  background: var(--dy-bg);
  color: var(--dy-text);
  font-family: Inter, Arial, sans-serif;
  padding: var(--sh-section-padding);
}

.dy-section a {
  color: inherit;
}

.dy-treatment-card h3 a {
  color: var(--dy-heading);
  text-decoration: underline;
}

.dy-shell {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
}

.dy-heading {
  margin: 0;
  color: var(--dy-heading);
  font-family: Inter, Arial, sans-serif;
  font-size: clamp(36px, 4vw, 54px);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.12;
  text-align: center;
}

.dy-subheading {
  margin: 18px 0 0;
  color: var(--dy-heading);
  font-family: Georgia, serif;
  font-size: clamp(20px, 2vw, 28px);
  font-style: italic;
  text-align: center;
}

.dy-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border: 1px solid var(--dy-border);
  background: transparent;
  color: #111111;
  padding: 15px 34px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-decoration: none;
  text-transform: uppercase;
}

.dy-treatment-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 38px 84px;
  margin-top: 70px;
}

.dy-treatment-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
}

.dy-plus {
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: var(--dy-heading);
  color: #ffffff;
  font-size: 23px;
  font-weight: 800;
  line-height: 1;
}

.dy-treatment-card h3 {
  margin: -3px 0 14px;
  color: var(--dy-heading);
  font-family: Georgia, serif;
  font-size: 27px;
  font-weight: 700;
  line-height: 1.08;
  text-decoration: underline;
}

.dy-treatment-card p {
  margin: 0;
  color: var(--dy-text);
  font-size: 16px;
  line-height: 1.8;
}

@media (max-width: 820px) {
  .dy-section {
    padding: 58px 20px;
  }

  .dy-shell {
    width: 100%;
  }

  .dy-heading {
    font-size: 30px;
  }

  .dy-treatment-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin-top: 30px;
  }

  .dy-treatment-card {
    display: block;
    border: 1px solid var(--dy-border);
    border-radius: 12px;
    padding: 24px 18px;
    text-align: center;
  }

  .dy-plus {
    margin: 0 auto 12px;
  }

  .dy-treatment-card h3 {
    font-size: 23px;
  }

  .dy-treatment-card p {
    font-size: 16px;
  }
}`;

export const foundationPresets: Record<FoundationId, FoundationPreset> = {
  "sh-foundation": {
    id: "sh-foundation",
    name: "SH Foundation",
    css: shFoundationCss,
    removeFromBlockCss: [shFoundationCss]
  },
  "nikita-foundation": {
    id: "nikita-foundation",
    name: "Nikita Foundation",
    css: nikitaFoundationCss,
    removeFromBlockCss: [nikitaFoundationCss, nikitaBaseFoundationCss, nikitaPageHeroFoundationCss]
  },
  "dy-foundation": {
    id: "dy-foundation",
    name: "DY Foundation",
    css: dyFoundationCss,
    removeFromBlockCss: [dyFoundationCss]
  },
  "sm-foundation": {
    id: "sm-foundation",
    name: "Samim Foundation",
    css: "",
    removeFromBlockCss: []
  }
};

export function getBlockFoundationId(block: { foundationId?: FoundationId; client?: string; style?: string }): FoundationId {
  if (block.foundationId) {
    return block.foundationId;
  }

  if (block.client === "Nikita Grover" || block.style === "Nikita Bronze") {
    return "nikita-foundation";
  }

  if (block.client === "Dominic" || block.style === "DY Skin Clinic") {
    return "dy-foundation";
  }

  return "sh-foundation";
}

export function stripFoundationCss(css: string, foundationId: FoundationId) {
  const preset = foundationPresets[foundationId];
  return createLeanCss(preset.removeFromBlockCss.reduce((current, foundationCss) => removeCssChunk(current, foundationCss), css));
}

export function createLeanCss(css: string) {
  return css
    .replace(/^\s*@import\s+[^;]+;\s*$/gim, "")
    .replace(/:root\s*\{[^}]*\}/gim, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function getFoundationCss(foundationId: FoundationId, settings: DesignSettings) {
  const preset = foundationPresets[foundationId] ?? foundationPresets["sh-foundation"];
  return [createCssVariables(settings), preset.css.trim()].filter(Boolean).join("\n\n");
}

export function getFullCss(css: string, settings: DesignSettings, foundationId: FoundationId) {
  return [getFoundationCss(foundationId, settings), css.trim()].filter(Boolean).join("\n\n");
}

export function createStandaloneCombinedCode(html: string, css: string, settings: DesignSettings, foundationId: FoundationId) {
  return `${html.trim()}

<style>
${getFullCss(css, settings, foundationId)}
</style>`;
}

export function createLeanCombinedCode(html: string, css: string) {
  return `${html.trim()}

<style>
${createLeanCss(css)}
</style>`;
}

export function getFoundationsCssForBlocks(blocks: Array<{ foundationId?: FoundationId; client?: string; style?: string }>, settings: DesignSettings) {
  const foundationIds = Array.from(new Set(blocks.map(getBlockFoundationId)));
  const presetCss = foundationIds
    .map((foundationId) => foundationPresets[foundationId] ?? foundationPresets["sh-foundation"])
    .map((preset) => preset.css.trim())
    .filter(Boolean);

  return [createCssVariables(settings), ...presetCss].filter(Boolean).join("\n\n");
}

function removeCssChunk(css: string, chunk: string) {
  const normalizedChunk = chunk.trim();
  if (!normalizedChunk) {
    return css;
  }

  return css.split(normalizedChunk).join("").replace(/\n{3,}/g, "\n\n");
}
