import type { Block } from "@/types/block";
import { dyBlocks } from "./dy-blocks";
import { nikitaBlocks } from "./nikita-blocks";
import { samimBlocks } from "./samim-blocks";
import { scaraidBlocks } from "./scaraid-blocks";

const genericBlocks: Block[] = [
  {
    id: "global-foundation-css",
    name: "Global Foundation CSS",
    category: "Global Foundation",
    description: "Reusable CSS variables and base helper classes for SH Elementor blocks.",
    tags: ["foundation", "css variables", "elementor", "starter"],
    client: "SH Digital Marketing",
    style: "Universal",
    foundationId: "sh-foundation",
    useCase: "Paste once above a group of blocks or include in each combined export.",
    html: `<div class="sh-foundation-note" aria-label="SH Block Library foundation notice">
  <p>SH Foundation CSS is designed to support modular Elementor HTML sections. Paste the CSS into a page-level HTML widget or keep using the Combined tab for self-contained blocks.</p>
</div>`,
    css: `.sh-foundation-note {
  background: var(--sh-bg);
  color: var(--sh-text);
  font-family: var(--sh-font-body);
  padding: 24px;
  border: 1px solid var(--sh-accent-soft);
  border-radius: 18px;
  max-width: var(--sh-container);
  margin: 0 auto;
}

.sh-foundation-note p {
  margin: 0;
  color: var(--sh-muted);
  line-height: 1.7;
}`,
    notes:
      "Use this as a reference foundation. The Combined tab on every block already includes the selected variables, so you do not need to paste this separately for a single Elementor HTML widget."
  },
  {
    id: "nikita-foundation-css",
    name: "Nikita Foundation CSS",
    category: "Global Foundation",
    description: "Dedicated Nikita Grover foundation for shared ng- typography, buttons, sections, grids, cards and responsive defaults.",
    tags: ["foundation", "nikita", "bronze", "ng", "elementor"],
    client: "Nikita Grover",
    style: "Nikita Bronze",
    foundationId: "nikita-foundation",
    sourceProject: "Nikita Grover Staging Site",
    sourceUrl: "https://salmanh1.sg-host.com/",
    status: "Needs Review",
    useCase: "Paste the Full CSS output once into Elementor before using Lean Nikita block exports.",
    html: `<section class="ng-section" aria-labelledby="nikita-foundation-css-title">
  <div class="ng-shell">
    <p class="ng-eyebrow">Foundation CSS</p>
    <h2 id="nikita-foundation-css-title" class="ng-section-title">Nikita Foundation CSS</h2>
    <p class="ng-lead">Use the Full CSS output for shared Nikita typography, buttons, containers, cards, image frames and responsive defaults.</p>
  </div>
</section>`,
    css: "",
    notes: "The Full CSS tab outputs the complete Nikita foundation. Lean Nikita block exports assume this foundation has already been added to the Elementor page."
  },
  {
    id: "premium-clinic-hero",
    name: "Premium Clinic Hero",
    category: "Heroes",
    description: "A reusable private clinic hero kept separate from the real Nikita staging blocks.",
    tags: ["hero", "clinic", "cta", "premium", "generic"],
    client: "Reusable",
    style: "Premium Medical",
    foundationId: "sh-foundation",
    useCase: "Homepage or service page opening section for future non-Nikita clients.",
    html: `<section class="sh-clinic-hero" aria-labelledby="sh-clinic-hero-title">
  <div class="sh-clinic-hero__inner">
    <div class="sh-clinic-hero__content">
      <p class="sh-clinic-hero__label">Private medical care, thoughtfully delivered</p>
      <h1 id="sh-clinic-hero-title">A refined clinical experience built around the individual patient.</h1>
      <p class="sh-clinic-hero__lead">Introduce a premium doctor, clinic or specialist service with clear positioning, calm authority and a consultation-focused next step.</p>
      <div class="sh-clinic-hero__actions" aria-label="Clinic hero actions">
        <a class="sh-clinic-hero__button" href="#contact">Book a consultation</a>
        <a class="sh-clinic-hero__link" href="#services">Explore services</a>
      </div>
    </div>
    <figure class="sh-clinic-hero__media">
      <img src="https://placehold.co/900x1100/f1e8dc/2f2a24?text=Doctor+or+Clinic+Image" alt="Doctor or clinic portrait placeholder" />
      <figcaption>Replace with a portrait, clinic interior or treatment image.</figcaption>
    </figure>
  </div>
</section>`,
    css: `.sh-clinic-hero {
  background: var(--sh-bg);
  color: var(--sh-text);
  font-family: var(--sh-font-body);
  padding: var(--sh-section-padding);
}

.sh-clinic-hero__inner {
  max-width: var(--sh-container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(340px, 0.78fr);
  gap: clamp(36px, 6vw, 84px);
  align-items: center;
}

.sh-clinic-hero__label {
  margin: 0 0 18px;
  color: var(--sh-accent);
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.sh-clinic-hero h1 {
  margin: 0;
  color: var(--sh-heading);
  font-family: var(--sh-font-heading);
  font-size: clamp(46px, 6vw, 82px);
  line-height: 0.96;
  font-weight: 500;
}

.sh-clinic-hero__lead {
  max-width: 620px;
  margin: 26px 0 0;
  color: var(--sh-muted);
  font-size: 18px;
  line-height: 1.75;
}

.sh-clinic-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  margin-top: 34px;
}

.sh-clinic-hero__button,
.sh-clinic-hero__link {
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  text-decoration: none;
  font-weight: 700;
}

.sh-clinic-hero__button {
  background: var(--sh-button-bg);
  color: var(--sh-button-text);
  border: 1px solid var(--sh-button-border);
  border-radius: var(--sh-radius);
  padding: 14px 22px;
}

.sh-clinic-hero__link {
  color: var(--sh-heading);
  border-bottom: 1px solid var(--sh-accent);
}

.sh-clinic-hero__media {
  margin: 0;
}

.sh-clinic-hero__media img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 28px;
  box-shadow: var(--sh-shadow);
}

.sh-clinic-hero__media figcaption {
  margin-top: 12px;
  color: var(--sh-muted);
  font-size: 13px;
}

@media (max-width: 820px) {
  .sh-clinic-hero__inner {
    grid-template-columns: 1fr;
  }
}`,
    notes:
      "Generic sample block retained for future clients. The real Nikita blocks now live under client 'Nikita Grover' and style 'Nikita Bronze'."
  }
];

export const blocks: Block[] = [...genericBlocks, ...nikitaBlocks, ...dyBlocks, ...samimBlocks, ...scaraidBlocks];
