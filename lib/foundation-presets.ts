import type { DesignSettings, FoundationId } from "@/types/block";
import { createCssVariables } from "@/lib/theme-presets";

export type FoundationPreset = {
  id: FoundationId;
  name: string;
  css: string;
  removeFromBlockCss: string[];
};

export const shFoundationCss = `.sh-section {
  background: var(--sh-bg);
  color: var(--sh-text);
  font-family: var(--sh-font-body);
  padding: var(--sh-section-padding);
}

.sh-shell {
  max-width: var(--sh-container);
  margin: 0 auto;
}

.sh-eyebrow {
  margin: 0 0 14px;
  color: var(--sh-accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  line-height: 1.35;
  text-transform: uppercase;
}

.sh-title {
  margin: 0;
  color: var(--sh-heading);
  font-family: var(--sh-font-heading);
  font-size: clamp(34px, 5vw, 64px);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.04;
}

.sh-copy {
  margin: 18px 0 0;
  color: var(--sh-text);
  font-size: 16px;
  line-height: 1.75;
}

.sh-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.sh-button,
.sh-button-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  border-radius: var(--sh-radius);
  font-family: var(--sh-font-body);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
}

.sh-button {
  border: 1px solid var(--sh-button-border);
  background: var(--sh-button-bg);
  color: var(--sh-button-text);
  padding: 14px 24px;
}

.sh-button-outline {
  border: 1px solid var(--sh-accent);
  background: transparent;
  color: var(--sh-accent);
  padding: 14px 24px;
}

.sh-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.sh-card,
.sh-panel {
  border: 1px solid var(--sh-accent-soft);
  background: var(--sh-surface);
}

.sh-card {
  padding: clamp(22px, 3vw, 34px);
}

.sh-panel {
  padding: clamp(28px, 4vw, 52px);
}

@media (max-width: 820px) {
  .sh-section {
    padding: 64px 20px;
  }

  .sh-grid {
    grid-template-columns: 1fr;
  }

  .sh-actions {
    display: grid;
  }
}`;

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
    background-image: linear-gradient(180deg, rgba(255,254,250,0.98) 0%, rgba(255,254,250,0.92) 56%, rgba(255,254,250,0.82) 100%), var(--ng-hero-image);
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

export const samimFoundationCss = `.sm-section {
  --sm-bg: var(--sh-bg);
  --sm-surface: var(--sh-surface);
  --sm-ink: var(--sh-heading);
  --sm-text: var(--sh-text);
  --sm-muted: var(--sh-muted);
  --sm-line: var(--sh-accent-soft);
  --sm-accent: var(--sh-accent);
  --sm-accent-soft: var(--sh-accent-soft);
  --sm-warm: var(--sh-accent);
  --sm-container: min(1180px, calc(100% - 48px));
  --sm-radius: 8px;
  background: var(--sm-bg);
  color: var(--sm-text);
  font-family: var(--sh-font-body);
  padding: var(--sh-section-padding);
}

.sm-section--surface {
  background: var(--sm-surface);
}

.sm-shell {
  width: var(--sm-container);
  margin: 0 auto;
}

.sm-kicker {
  margin: 0 0 14px;
  color: var(--sm-accent);
  font-family: var(--sh-font-body);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  line-height: 1.35;
  text-transform: uppercase;
}

.sm-title,
.sm-display {
  margin: 0;
  color: var(--sm-ink);
  font-family: var(--sh-font-heading);
  font-weight: 650;
  letter-spacing: 0;
}

.sm-display {
  max-width: 920px;
  font-size: clamp(44px, 6.4vw, 82px);
  line-height: 0.98;
}

.sm-title {
  max-width: 820px;
  font-size: clamp(34px, 4.8vw, 58px);
  line-height: 1.05;
}

.sm-lead {
  max-width: 760px;
  margin: 24px 0 0;
  color: var(--sm-text);
  font-size: clamp(17px, 1.7vw, 21px);
  line-height: 1.75;
}

.sm-copy {
  margin: 16px 0 0;
  color: var(--sm-text);
  font-size: 16px;
  line-height: 1.75;
}

.sm-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.sm-button,
.sm-button-outline,
.sm-text-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  font-family: var(--sh-font-body);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
}

.sm-button {
  border: 1px solid var(--sm-accent);
  border-radius: var(--sm-radius);
  background: var(--sm-accent);
  color: #ffffff;
  padding: 14px 24px;
}

.sm-button-outline {
  border: 1px solid var(--sm-line);
  border-radius: var(--sm-radius);
  background: transparent;
  color: var(--sm-ink);
  padding: 14px 24px;
}

.sm-text-link {
  min-height: 0;
  border-bottom: 1px solid var(--sm-warm);
  color: var(--sm-ink);
  padding: 0 0 4px;
}

.sm-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.sm-grid--two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.sm-card {
  border: 1px solid var(--sm-line);
  border-radius: var(--sm-radius);
  background: var(--sm-surface);
  padding: clamp(22px, 3vw, 34px);
}

.sm-card h3 {
  margin: 0;
  color: var(--sm-ink);
  font-family: var(--sh-font-heading);
  font-size: clamp(22px, 2.2vw, 30px);
  font-weight: 650;
  letter-spacing: 0;
  line-height: 1.12;
}

.sm-card p {
  margin: 14px 0 0;
  color: var(--sm-text);
  font-size: 15px;
  line-height: 1.72;
}

.sm-meta-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sm-meta-list li {
  border-top: 1px solid var(--sm-line);
  padding-top: 12px;
  color: var(--sm-ink);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.sm-image-frame {
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--sm-line);
  border-radius: var(--sm-radius);
  background: var(--sm-surface);
}

.sm-image-frame img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

@media (max-width: 860px) {
  .sm-section {
    padding: 64px 0;
  }

  .sm-shell {
    width: min(100% - 32px, 1180px);
  }

  .sm-grid,
  .sm-grid--two {
    grid-template-columns: 1fr;
  }

  .sm-actions {
    display: grid;
  }

  .sm-button,
  .sm-button-outline {
    width: 100%;
  }
}`;

export const scaraidFoundationCss = `@import url("https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap");

.scaraid-section,
.scaraid-hero,
.scaraid-header,
.scaraid-footer {
  --scaraid-bg: #ffffff;
  --scaraid-surface: #f3f4f5;
  --scaraid-text: #171717;
  --scaraid-muted: #72757c;
  --scaraid-border: #e3e5e8;
  --scaraid-blue: #0056b3;
  --scaraid-radius-lg: 48px;
  background: var(--scaraid-bg);
  color: var(--scaraid-text);
  font-family: Inter, Arial, sans-serif;
}

.scaraid-container {
  width: min(100% - 48px, 1320px);
  margin: 0 auto;
}

.scaraid-section {
  padding: 70px 0;
}

.scaraid-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: Geist, Arial, sans-serif;
  font-size: 20px;
  font-weight: 650;
  letter-spacing: 0;
  text-decoration: none;
}

.scaraid-logo__mark {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #ffffff;
  background: linear-gradient(135deg, #111111, #0056b3);
  font-size: 17px;
}

.scaraid-button {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0 24px;
  border: 1px solid transparent;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.scaraid-button--dark {
  background: var(--scaraid-text);
  color: #ffffff;
}

.scaraid-button--outline {
  border-color: rgba(23, 23, 23, 0.18);
  background: rgba(255, 255, 255, 0.7);
  color: var(--scaraid-text);
}

.scaraid-button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.scaraid-header {
  border-bottom: 1px solid rgba(227, 229, 232, 0.75);
}

.scaraid-header__inner {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.scaraid-nav {
  display: flex;
  gap: 34px;
  color: #303236;
  font-size: 13px;
  font-weight: 600;
}

.scaraid-nav a,
.scaraid-footer a {
  color: inherit;
  text-decoration: none;
}

.scaraid-hero {
  padding: 44px 0 70px;
}

.scaraid-hero__panel {
  min-height: 650px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  border-radius: var(--scaraid-radius-lg);
  background: var(--scaraid-surface);
}

.scaraid-hero__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px;
}

.scaraid-hero h1,
.scaraid-intro h2,
.scaraid-evidence h2,
.scaraid-centered-heading,
.scaraid-faq h2,
.scaraid-cta h2,
.scaraid-table-title {
  margin: 0;
  font-family: Geist, Arial, sans-serif;
  font-weight: 550;
  letter-spacing: 0;
  line-height: 1.05;
}

.scaraid-hero h1 {
  max-width: 650px;
  font-size: clamp(44px, 6vw, 82px);
}

.scaraid-hero p {
  max-width: 560px;
  margin: 28px 0 36px;
  color: var(--scaraid-muted);
  font-size: clamp(18px, 1.8vw, 22px);
  font-weight: 300;
}

.scaraid-hero__image,
.scaraid-evidence__image,
.scaraid-case-card__image,
.scaraid-doctor-card__photo {
  background-position: center;
  background-size: cover;
}

.scaraid-hero__image {
  min-height: 420px;
  background-image: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(0,86,179,0.08)), var(--scaraid-hero-image);
}

.scaraid-intro,
.scaraid-evidence {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 48px 90px;
  align-items: center;
}

.scaraid-evidence {
  grid-template-columns: 1fr 1fr;
  gap: 84px;
}

.scaraid-intro h2,
.scaraid-evidence h2,
.scaraid-centered-heading,
.scaraid-faq h2,
.scaraid-cta h2 {
  font-size: clamp(34px, 4vw, 52px);
}

.scaraid-lead {
  margin: 0;
  color: var(--scaraid-muted);
  font-size: clamp(20px, 2.2vw, 28px);
  font-weight: 300;
}

.scaraid-lead strong {
  color: var(--scaraid-text);
  font-weight: 500;
}

.scaraid-feature-row {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 44px;
  padding-top: 46px;
  border-top: 1px solid var(--scaraid-border);
}

.scaraid-feature-row h3,
.scaraid-footer h3 {
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.scaraid-feature-row p,
.scaraid-doctor-card p,
.scaraid-steps p,
.scaraid-footer p {
  margin: 0;
  color: var(--scaraid-muted);
  font-size: 14px;
}

.scaraid-centered-heading {
  margin: 0 auto 44px;
  max-width: 850px;
  text-align: center;
}

.scaraid-doctor-grid,
.scaraid-case-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.scaraid-doctor-card {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 30px;
  align-items: center;
  padding: 34px;
  border-radius: 36px;
  background: var(--scaraid-surface);
}

.scaraid-doctor-card__photo {
  width: 170px;
  aspect-ratio: 1;
  border-radius: 50%;
}

.scaraid-doctor-card h3 {
  margin: 0;
  font-family: Geist, Arial, sans-serif;
  font-size: 26px;
}

.scaraid-doctor-card__role {
  color: var(--scaraid-blue) !important;
  font-weight: 700;
  margin: 4px 0 12px !important;
}

.scaraid-small {
  margin-bottom: 18px !important;
  font-size: 12px !important;
}

.scaraid-table-title {
  margin-bottom: 60px;
  text-align: center;
  font-size: clamp(34px, 4.5vw, 56px);
}

.scaraid-comparison-table {
  position: relative;
  display: grid;
  border-bottom: 1px solid var(--scaraid-border);
}

.scaraid-comparison-table::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 37.5%;
  width: 14.5%;
  border-radius: 18px 18px 0 0;
  background: linear-gradient(180deg, #f5f5f5 0%, rgba(245,245,245,0.2) 100%);
}

.scaraid-table-row {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 37.5% 14.5% 16% 32%;
  min-height: 78px;
  align-items: center;
  border-top: 1px solid var(--scaraid-border);
}

.scaraid-table-row > div {
  padding: 20px 24px;
  color: #303236;
  font-size: 16px;
}

.scaraid-table-row > div:last-child {
  color: #7a7d84;
}

.scaraid-table-row--header {
  min-height: 88px;
  border-top: 0;
}

.scaraid-table-brand {
  text-align: center;
}

.scaraid-table-brand span {
  display: inline-flex;
  min-height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #111111;
  color: #ffffff;
  padding: 0 18px;
  font-size: 15px;
  font-weight: 750;
}

.scaraid-check,
.scaraid-no {
  text-align: center;
}

.scaraid-check span,
.scaraid-no span {
  display: inline-grid;
  width: 24px;
  height: 24px;
  place-items: center;
  border-radius: 50%;
}

.scaraid-check span {
  background: #626262;
  color: #ffffff;
  font-weight: 800;
}

.scaraid-no span {
  color: #a8aaae;
  font-size: 23px;
}

.scaraid-show-more {
  display: flex;
  margin: 34px auto 0;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  padding: 0 34px;
  background: #f0f0f0;
  color: #232323;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.scaraid-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  max-width: 980px;
  margin: 0 auto;
}

.scaraid-chip-row span {
  border: 1px solid rgba(227,229,232,0.8);
  border-radius: 999px;
  background: var(--scaraid-surface);
  padding: 13px 22px;
  font-size: 14px;
  font-weight: 650;
}

.scaraid-evidence__image {
  min-height: 340px;
  border-radius: 38px;
  background-image: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(0,86,179,0.04)), var(--scaraid-evidence-image);
}

.scaraid-steps {
  display: grid;
  gap: 30px;
  margin-top: 36px;
}

.scaraid-steps article {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 18px;
}

.scaraid-steps span {
  color: var(--scaraid-blue);
  font-family: Geist, Arial, sans-serif;
  font-size: 19px;
  font-weight: 750;
}

.scaraid-steps h3 {
  margin: 0 0 6px;
  font-size: 17px;
}

.scaraid-case-card {
  overflow: hidden;
  border-radius: 38px;
  background: var(--scaraid-surface);
}

.scaraid-case-card__image {
  min-height: 360px;
}

.scaraid-case-card__body {
  padding: 38px;
}

.scaraid-case-card p {
  margin: 0 0 28px;
  font-size: 19px;
  font-style: italic;
  font-weight: 300;
}

.scaraid-case-card__body div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.scaraid-case-card span,
.scaraid-case-card a {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.scaraid-faq {
  max-width: 820px;
}

.scaraid-faq h2 {
  margin-bottom: 44px;
  text-align: center;
}

.scaraid-faq details {
  border-bottom: 1px solid var(--scaraid-border);
}

.scaraid-faq summary {
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0;
  font-size: 18px;
  font-weight: 650;
}

.scaraid-faq summary::after {
  content: "+";
  color: var(--scaraid-muted);
}

.scaraid-faq details[open] summary::after {
  content: "-";
}

.scaraid-faq p {
  margin: 0;
  padding: 0 0 26px;
  color: var(--scaraid-muted);
}

.scaraid-cta {
  display: grid;
  justify-items: center;
  gap: 22px;
  padding: 72px 34px;
  border-radius: var(--scaraid-radius-lg);
  background: var(--scaraid-surface);
  text-align: center;
}

.scaraid-cta p {
  margin: 0;
  color: var(--scaraid-muted);
  font-size: 19px;
}

.scaraid-footer {
  border-top: 1px solid var(--scaraid-border);
  padding: 60px 0 34px;
}

.scaraid-footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 48px;
}

.scaraid-footer a:not(.scaraid-logo) {
  display: block;
  margin: 0 0 10px;
  color: var(--scaraid-muted);
  font-size: 14px;
}

.scaraid-footer__bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 52px;
  padding-top: 24px;
  border-top: 1px solid rgba(227,229,232,0.7);
  color: var(--scaraid-muted);
  font-size: 12px;
}

@media (max-width: 980px) {
  .scaraid-container {
    width: min(100% - 32px, 1320px);
  }

  .scaraid-nav {
    display: none;
  }

  .scaraid-hero__panel,
  .scaraid-intro,
  .scaraid-evidence,
  .scaraid-doctor-grid,
  .scaraid-case-grid,
  .scaraid-footer__grid,
  .scaraid-feature-row {
    grid-template-columns: 1fr;
  }

  .scaraid-hero__copy {
    padding: 46px 30px;
  }

  .scaraid-doctor-card {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  .scaraid-comparison-table {
    overflow-x: auto;
  }

  .scaraid-comparison-table::before {
    display: none;
  }

  .scaraid-table-row {
    min-width: 880px;
  }
}

@media (max-width: 640px) {
  .scaraid-header .scaraid-button {
    display: none;
  }

  .scaraid-section {
    padding: 48px 0;
  }

  .scaraid-case-card__body div,
  .scaraid-footer__bottom {
    align-items: flex-start;
    flex-direction: column;
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
    css: samimFoundationCss,
    removeFromBlockCss: [samimFoundationCss]
  },
  "scaraid-foundation": {
    id: "scaraid-foundation",
    name: "ScarAid Foundation",
    css: scaraidFoundationCss,
    removeFromBlockCss: [scaraidFoundationCss]
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

  if (block.client === "ScarAid" || block.style === "ScarAid Clinical") {
    return "scaraid-foundation";
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
  return [getFoundationCss(foundationId, settings), getLeanBlockCss(css, foundationId)].filter(Boolean).join("\n\n");
}

export function getLeanBlockCss(css: string, foundationId: FoundationId) {
  return stripFoundationCss(css, foundationId);
}

export function createStandaloneCombinedCode(html: string, css: string, settings: DesignSettings, foundationId: FoundationId) {
  return `${html.trim()}

<style>
${getFullCss(css, settings, foundationId)}
</style>`;
}

export function createLeanCombinedCode(html: string, css: string, foundationId?: FoundationId) {
  return `${html.trim()}

<style>
${foundationId ? getLeanBlockCss(css, foundationId) : createLeanCss(css)}
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
