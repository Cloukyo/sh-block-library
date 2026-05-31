import type { Block, BlockCategory } from "@/types/block";

const clinicImage = "http://salmanh1.sg-host.com/wp-content/uploads/2026/05/clinic-hero-1600px-q72.webp";
const portraitImage = "http://salmanh1.sg-host.com/wp-content/uploads/2026/05/nikita-grover-portrait.png";

const nikitaTags = ["nikita", "longevity", "functional-medicine", "clinic", "premium", "bronze"];

const nikitaBaseCss = `.ng-eyebrow {
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

const pageHeroCss = `${nikitaBaseCss}

.ng-page-hero {
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

function b(block: Omit<Block, "client" | "style">): Block {
  return {
    ...block,
    client: "Nikita Grover",
    style: "Nikita Bronze",
    sourceProject: block.sourceProject ?? "Nikita Grover Staging Site",
    sourceUrl: block.sourceUrl ?? "https://salmanh1.sg-host.com/",
    version: block.version ?? "v1",
    status: block.status ?? "Needs Review"
  };
}

function tags(...extra: string[]) {
  return [...nikitaTags, ...extra];
}

function card(number: string, title: string, body: string, label?: string) {
  return `<article class="ng-card">
  <span class="ng-number">${number}</span>
  ${label ? `<p class="ng-card-label">${label}</p>` : ""}
  <h3>${title}</h3>
  <p>${body}</p>
</article>`;
}

function noteBlock(id: string, name: string, order: string[]) {
  return b({
    id,
    name,
    category: "Utility Blocks",
    description: "Page assembly reference showing the recommended section order.",
    tags: tags("assembly", "reference"),
    html: `<section class="ng-assembly-note" aria-labelledby="${id}-title">
  <div class="ng-shell">
    <p class="ng-eyebrow">Page assembly</p>
    <h2 id="${id}-title" class="ng-section-title">${name.replace(" Assembly Notes", "")}</h2>
    <ol>
${order.map((item) => `      <li>${item}</li>`).join("\n")}
    </ol>
  </div>
</section>`,
    css: `${nikitaBaseCss}
.ng-assembly-note {
  background: var(--sh-bg);
  color: var(--sh-text);
  font-family: var(--sh-font-body);
  padding: var(--sh-section-padding);
}
.ng-assembly-note ol {
  display: grid;
  gap: 12px;
  margin: 28px 0 0;
  padding-left: 22px;
  color: var(--sh-heading);
  line-height: 1.7;
}`,
    notes: "Reference-only block for planning page rebuilds. It is not usually pasted into Elementor."
  });
}

const nextStepCopy = "For private and referred patients seeking a more complete view of their health, please contact the practice to enquire about availability.";

function ctaBlock(id: string, name: string, copy = nextStepCopy): Block {
  return b({
    id,
    name,
    category: "Contact CTAs",
    description: "Final consultation CTA matching the staging site.",
    tags: tags("cta", "contact"),
    html: `<section class="ng-final-cta-section" aria-labelledby="${id}-title">
  <div class="ng-final-cta-panel">
    <div class="ng-final-cta-copy">
      <p class="ng-eyebrow">Next step</p>
      <h2 id="${id}-title">Begin with a considered conversation.</h2>
      <p>${copy}</p>
    </div>
    <div class="ng-final-cta-actions">
      <a class="ng-button-primary" href="/contact/">Request consultation</a>
      <a class="ng-button-link" href="mailto:info@drnikitagrover.com">Email the practice</a>
    </div>
  </div>
</section>`,
    css: `${nikitaBaseCss}
.ng-final-cta-section {
  background: var(--sh-bg);
  color: var(--sh-text);
  font-family: var(--sh-font-body);
  padding: var(--sh-section-padding);
}
.ng-final-cta-panel {
  max-width: var(--sh-container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 36px;
  align-items: end;
  border: 1px solid var(--sh-accent-soft);
  background: color-mix(in srgb, var(--sh-surface) 54%, white);
  padding: clamp(32px, 5vw, 64px);
}
.ng-final-cta-panel h2 {
  max-width: 760px;
  margin: 0;
  color: var(--sh-heading);
  font-family: var(--sh-font-heading);
  font-size: clamp(38px, 5vw, 68px);
  line-height: 1.02;
}
.ng-final-cta-panel p:not(.ng-eyebrow) {
  max-width: 700px;
  margin: 22px 0 0;
  line-height: 1.75;
}
.ng-final-cta-actions {
  display: grid;
  gap: 16px;
  justify-items: start;
}
@media (max-width: 820px) {
  .ng-final-cta-panel {
    grid-template-columns: 1fr;
  }
}`,
    notes: "Edit CTA links, email address and copy per page. The staging site uses this as the closing enquiry prompt."
  });
}

export const nikitaBlocks: Block[] = [
  b({
    id: "nikita-desktop-header-navigation",
    name: "Nikita Header / Desktop Navigation",
    category: "Headers",
    description: "Desktop header with brand, navigation links and consultation CTA.",
    tags: tags("header", "navigation"),
    html: `<header class="ng-site-header" aria-label="Dr Nikita Grover desktop navigation">
  <div class="ng-header-inner">
    <a class="ng-brand" href="/">Dr Nikita Grover</a>
    <nav class="ng-nav" aria-label="Main navigation">
      <a href="/about/">About</a>
      <a href="/services/">Services</a>
      <a href="/approach/">Approach</a>
      <a href="/faq/">FAQ</a>
      <a href="/contact/">Contact</a>
    </nav>
    <a class="ng-header-cta" href="/contact/">Request Consultation</a>
  </div>
</header>`,
    css: `${nikitaBaseCss}
.ng-site-header {
  background: color-mix(in srgb, var(--sh-bg) 92%, transparent);
  border-bottom: 1px solid var(--sh-accent-soft);
  color: var(--sh-heading);
  font-family: var(--sh-font-body);
  padding: 18px 32px;
}
.ng-header-inner {
  max-width: var(--sh-container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 40px;
  align-items: center;
}
.ng-brand {
  color: var(--sh-heading);
  font-family: var(--sh-font-heading);
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
}
.ng-nav {
  display: flex;
  justify-content: center;
  gap: 34px;
}
.ng-nav a,
.ng-header-cta {
  color: var(--sh-text);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-decoration: none;
  text-transform: uppercase;
}
.ng-header-cta {
  background: var(--sh-button-bg);
  color: var(--sh-button-text);
  padding: 18px 26px;
}
@media (max-width: 900px) {
  .ng-site-header { display: none; }
}`,
    notes: "Use this for desktop templates. Edit URLs if the WordPress permalink structure changes."
  }),
  b({
    id: "nikita-mobile-header-navigation",
    name: "Nikita Mobile Header / Navigation",
    category: "Headers",
    description: "Mobile header with brand and simple details-based menu.",
    tags: tags("header", "navigation", "mobile"),
    html: `<header class="ng-mobile-site-header" aria-label="Dr Nikita Grover mobile navigation">
  <div class="ng-mobile-header-row">
    <a class="ng-mobile-brand" href="/">Dr Nikita Grover</a>
    <details class="ng-mobile-menu">
      <summary aria-label="Open menu"><span></span><span></span><span></span></summary>
      <nav aria-label="Mobile navigation">
        <a href="/about/">About</a>
        <a href="/services/">Services</a>
        <a href="/approach/">Approach</a>
        <a href="/faq/">FAQ</a>
        <a href="/contact/">Contact</a>
        <a href="/contact/">Request Consultation</a>
      </nav>
    </details>
  </div>
</header>`,
    css: `${nikitaBaseCss}
.ng-mobile-site-header {
  display: none;
  background: var(--sh-bg);
  border-bottom: 1px solid var(--sh-accent-soft);
  padding: 14px 20px;
}
.ng-mobile-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ng-mobile-brand {
  color: var(--sh-heading);
  font-family: var(--sh-font-heading);
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
}
.ng-mobile-menu {
  position: relative;
}
.ng-mobile-menu summary {
  display: grid;
  place-items: center;
  gap: 4px;
  width: 44px;
  height: 44px;
  background: var(--sh-button-bg);
  cursor: pointer;
  list-style: none;
}
.ng-mobile-menu summary::-webkit-details-marker {
  display: none;
}
.ng-mobile-menu summary span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--sh-button-text);
}
.ng-mobile-menu nav {
  position: absolute;
  right: 0;
  top: calc(100% + 12px);
  z-index: 5;
  min-width: 240px;
  display: grid;
  background: var(--sh-bg);
  border: 1px solid var(--sh-accent-soft);
  box-shadow: var(--sh-shadow);
}
.ng-mobile-menu nav a {
  border-bottom: 1px solid var(--sh-accent-soft);
  color: var(--sh-heading);
  padding: 15px 18px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-decoration: none;
  text-transform: uppercase;
}
@media (max-width: 900px) {
  .ng-mobile-site-header { display: block; }
}`,
    notes: "This is a portable no-JavaScript mobile menu. Elementor may use its own menu widget later; keep this as the visual reference."
  }),
  b({
    id: "nikita-footer",
    name: "Nikita Footer",
    category: "Footer CTAs",
    description: "Four-column footer with page links, contact details and practice focus.",
    tags: tags("footer", "contact"),
    html: `<footer class="ng-site-footer">
  <div class="ng-footer-inner">
    <div class="ng-footer-grid">
      <div>
        <div class="ng-footer-title">Dr Nikita Grover</div>
        <p>Medical longevity, functional medicine and preventive health for private and referred patients.</p>
      </div>
      <div>
        <div class="ng-footer-heading">Pages</div>
        <div class="ng-footer-links">
          <a href="/about/">About</a>
          <a href="/services/">Services</a>
          <a href="/approach/">Approach</a>
          <a href="/faq/">FAQ</a>
          <a href="/contact/">Contact</a>
        </div>
      </div>
      <div>
        <div class="ng-footer-heading">Contact</div>
        <div class="ng-footer-links">
          <a href="mailto:info@drnikitagrover.com">info@drnikitagrover.com</a>
          <a href="tel:+447831031220">07831 031220</a>
          <a href="https://www.linkedin.com/in/drnikitagrover/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div>
        <div class="ng-footer-heading">Practice Focus</div>
        <div class="ng-footer-links">
          <span>Functional medicine</span>
          <span>Longevity medicine</span>
          <span>Preventive health</span>
        </div>
      </div>
    </div>
    <div class="ng-footer-bottom">
      <span>© 2026 Dr Nikita Grover. All rights reserved.</span>
      <span>Medical longevity and functional medicine</span>
    </div>
  </div>
</footer>`,
    css: `${nikitaBaseCss}
.ng-site-footer {
  background: var(--sh-heading);
  color: var(--sh-button-text);
  font-family: var(--sh-font-body);
  padding: 72px 32px 32px;
}
.ng-footer-inner {
  max-width: var(--sh-container);
  margin: 0 auto;
}
.ng-footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr 1fr 0.9fr;
  gap: 48px;
}
.ng-footer-title {
  font-family: var(--sh-font-heading);
  font-size: 30px;
  font-weight: 700;
}
.ng-footer-heading {
  margin-bottom: 16px;
  color: var(--sh-accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.ng-site-footer p,
.ng-footer-links a,
.ng-footer-links span,
.ng-footer-bottom {
  color: color-mix(in srgb, var(--sh-button-text) 78%, transparent);
  line-height: 1.7;
}
.ng-footer-links {
  display: grid;
  gap: 10px;
}
.ng-footer-links a {
  text-decoration: none;
}
.ng-footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 56px;
  border-top: 1px solid color-mix(in srgb, var(--sh-button-text) 18%, transparent);
  padding-top: 24px;
  font-size: 13px;
}
@media (max-width: 820px) {
  .ng-site-footer { padding: 56px 20px 28px; }
  .ng-footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .ng-footer-bottom { display: grid; }
}`,
    notes: "Replace LinkedIn URL, email or phone number if practice details change."
  }),
  b({
    id: "nikita-homepage-hero",
    name: "Nikita Homepage Hero",
    category: "Heroes",
    description: "Staging homepage hero with clinic background, strapline, CTAs, trust points and portrait.",
    tags: tags("homepage", "hero", "cta"),
    html: `<section class="ng-home-hero" aria-labelledby="ng-home-hero-title">
  <div class="ng-home-hero__bg" aria-hidden="true"></div>
  <div class="ng-home-hero__content">
    <div class="ng-home-hero__copy">
      <p class="ng-eyebrow">Medical Longevity &amp; Functional Medicine</p>
      <h1 id="ng-home-hero-title" class="ng-display">Your Story<br />Our Journey<br /><span class="ng-accent-italic">Destination Health</span></h1>
      <p class="ng-lead">A more considered approach to functional medicine, longevity and preventive health, with time to understand the full picture.</p>
      <div class="ng-actions">
        <a class="ng-button-primary" href="/contact/">Request Consultation</a>
        <a class="ng-button-outline" href="/services/">Explore Services</a>
      </div>
    </div>
  </div>
  <div class="ng-home-trust">
    <ul>
      <li>London-based private practice</li>
      <li>Functional medicine &amp; longevity</li>
      <li>Advanced diagnostics where appropriate</li>
      <li>Working with Functional Nutritionist Nita Lobo</li>
    </ul>
  </div>
  <figure class="ng-home-portrait">
    <img src="${portraitImage}" alt="Dr Nikita Grover" />
  </figure>
</section>`,
    css: `${pageHeroCss}
.ng-home-hero {
  position: relative;
  overflow: hidden;
  background: var(--sh-bg);
  color: var(--sh-text);
  font-family: var(--sh-font-body);
}
.ng-home-hero__bg {
  position: absolute;
  inset: 0 0 auto;
  min-height: 780px;
  background-image: linear-gradient(90deg, rgba(255,254,250,0.96) 0%, rgba(255,254,250,0.82) 42%, rgba(255,254,250,0.28) 76%), url("${clinicImage}");
  background-size: cover;
  background-position: center;
}
.ng-home-hero__content {
  position: relative;
  z-index: 1;
  min-height: 780px;
  display: flex;
  align-items: center;
  max-width: var(--sh-container);
  margin: 0 auto;
  padding: 120px 32px 90px;
}
.ng-home-hero__copy {
  max-width: 760px;
}
.ng-home-trust {
  position: relative;
  z-index: 1;
  border-top: 1px solid var(--sh-accent-soft);
  border-bottom: 1px solid var(--sh-accent-soft);
  background: color-mix(in srgb, var(--sh-bg) 92%, white);
}
.ng-home-trust ul {
  max-width: var(--sh-container);
  margin: 0 auto;
  padding: 34px 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  list-style: none;
}
.ng-home-trust li {
  border-top: 1px solid var(--sh-accent);
  padding-top: 14px;
  color: var(--sh-heading);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1.5;
  text-transform: uppercase;
}
.ng-home-portrait {
  display: none;
  margin: 80px 20px 0;
  border: 1px solid var(--sh-accent-soft);
}
.ng-home-portrait img {
  display: block;
  width: 100%;
}
@media (max-width: 820px) {
  .ng-home-hero__bg {
    display: none;
  }
  .ng-home-hero__content {
    min-height: auto;
    padding: 28px 20px 44px;
  }
  .ng-home-trust ul {
    grid-template-columns: 1fr;
    padding: 30px 20px;
  }
  .ng-home-portrait {
    display: block;
  }
}`,
    notes: `Uses staging images: ${clinicImage} and ${portraitImage}. Replace if the final production assets change.`
  }),
  b({
    id: "nikita-meet-doctor-intro",
    name: "Nikita Meet Doctor Intro",
    category: "Intro Sections",
    description: "Homepage doctor-led intro section from the staging homepage.",
    tags: tags("homepage", "intro", "doctor"),
    html: `<section class="ng-section ng-meet-doctor" aria-labelledby="ng-meet-title">
  <div class="ng-shell ng-two-col">
    <figure class="ng-image-frame">
      <img src="${portraitImage}" alt="Dr Nikita Grover" />
    </figure>
    <div class="ng-rich-text">
      <p class="ng-eyebrow">Meet Dr Nikita Grover</p>
      <h2 id="ng-meet-title" class="ng-section-title">A doctor-led practice centred on time, context and prevention.</h2>
      <p>Dr Nikita Grover works across functional medicine, medical longevity and preventive health, helping private and referred patients take a more considered view of their health.</p>
      <p>Her approach brings together symptoms, medical history, lifestyle, nutrition and relevant investigations, with recommendations shaped around the wider clinical picture.</p>
      <div class="ng-actions"><a class="ng-button-link" href="/about/">Learn more about Dr Grover</a></div>
    </div>
  </div>
</section>`,
    css: nikitaBaseCss,
    notes: "Replace the portrait URL if the live headshot changes. CTA points to the About page."
  }),
  b({
    id: "nikita-time-attention-consultation-process",
    name: "Nikita Time And Attention / Consultation Process",
    category: "Process / Approach",
    description: "Homepage process section with three numbered cards and quote.",
    tags: tags("homepage", "process", "consultation"),
    html: `<section class="ng-section ng-section--surface" aria-labelledby="ng-attention-title">
  <div class="ng-shell">
    <div class="ng-two-col">
      <div>
        <p class="ng-eyebrow">Unparalleled Time &amp; Attention</p>
        <h2 id="ng-attention-title" class="ng-section-title">A consultation designed to understand the whole picture.</h2>
      </div>
      <p class="ng-lead">Dr Grover’s work begins with time: time to listen, review your history, understand your lifestyle, interpret previous results and decide which investigations are genuinely useful.</p>
    </div>
    <div class="ng-card-grid">${[
      card("01", "Detailed history", "A careful review of symptoms, background, lifestyle, previous investigations and what you are hoping to understand."),
      card("02", "Careful interpretation", "Health history, results and priorities are considered together, rather than treated as disconnected details."),
      card("03", "Appropriate diagnostics", "Further testing is discussed only where it is likely to add useful clinical insight to your care plan.")
    ].join("")}</div>
    <blockquote class="ng-quote">“The aim is not to rush towards a protocol, but to understand the person, the context and the clinical picture.”<span>Doctor-led, considered care</span></blockquote>
  </div>
</section>`,
    css: `${nikitaBaseCss}
.ng-attention-section .ng-card-grid,
.ng-section .ng-card-grid {
  margin-top: 44px;
}
.ng-quote {
  margin: 44px 0 0;
  border-left: 1px solid var(--sh-accent);
  padding: 10px 0 10px 28px;
  color: var(--sh-heading);
  font-family: var(--sh-font-heading);
  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.2;
}
.ng-quote span {
  display: block;
  margin-top: 18px;
  color: var(--sh-accent);
  font-family: var(--sh-font-body);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}`,
    notes: "Edit the three cards and quote if consultation messaging changes."
  }),
  b({
    id: "nikita-services-preview",
    name: "Nikita Services Preview",
    category: "Service Grids",
    description: "Homepage four-card services preview from the staging homepage.",
    tags: tags("homepage", "services", "grid"),
    html: `<section class="ng-section" aria-labelledby="ng-services-preview-title">
  <div class="ng-shell">
    <div class="ng-two-col">
      <div>
        <p class="ng-eyebrow">What Dr Grover helps with</p>
        <h2 id="ng-services-preview-title" class="ng-section-title">A more complete view of your health.</h2>
      </div>
      <p class="ng-lead">Dr Grover’s work may draw on functional medicine, longevity medicine, preventive health and selected diagnostics, depending on what is clinically appropriate.</p>
    </div>
    <div class="ng-card-grid ng-card-grid--two">${[
      card("01", "Functional Medicine", "A whole-person approach that considers symptoms, history, lifestyle, nutrition and relevant investigations together."),
      card("02", "Longevity &amp; Preventive Health", "Support for patients who want a deeper understanding of long-term health, risk factors and healthspan."),
      card("03", "Gut, Hormones &amp; Metabolic Health", "A considered review of common interconnected areas such as digestive health, hormonal balance and metabolic markers."),
      card("04", "Nutrition, Lifestyle &amp; Diagnostics", "Practical recommendations and selected testing where useful, including nutrition support with Functional Nutritionist Nita Lobo.")
    ].join("")}</div>
    <div class="ng-actions"><a class="ng-button-outline" href="/services/">Explore services</a></div>
  </div>
</section>`,
    css: nikitaBaseCss,
    notes: "Use this on the homepage as a short services preview. The full 12-service grid lives in the Services page block."
  }),
  b({
    id: "nikita-reviews-placeholder",
    name: "Nikita Reviews Placeholder",
    category: "Reviews / Social Proof",
    description: "Verified patient feedback placeholder matching the staging homepage.",
    tags: tags("homepage", "reviews", "testimonials"),
    html: `<section class="ng-section ng-section--surface ng-reviews" aria-labelledby="ng-reviews-title">
  <div class="ng-shell ng-two-col">
    <div>
      <p class="ng-eyebrow">Verified patient feedback</p>
      <h2 id="ng-reviews-title" class="ng-section-title">Patient feedback will appear here once Dr Grover’s verified review profile is connected.</h2>
      <p class="ng-lead">Verified reviews help new patients understand the experience of working with Dr Grover before making an enquiry.</p>
    </div>
    <div class="ng-review-stack">
      <div class="ng-panel ng-rating-card">
        <strong>4.9 / 5</strong>
        <span>★★★★★</span>
        <p>Based on verified patient reviews</p>
      </div>
      <div class="ng-panel">
        <p class="ng-eyebrow">Verified patient feedback</p>
        <p>“</p>
        <p>Dr Grover’s verified patient reviews will appear here once the review profile has been connected.</p>
        <div class="ng-actions"><a class="ng-button-link" href="#">View review profile</a><span class="ng-badge">Verified feedback</span></div>
      </div>
    </div>
  </div>
</section>`,
    css: `${nikitaBaseCss}
.ng-review-stack {
  display: grid;
  gap: 18px;
}
.ng-rating-card strong {
  display: block;
  color: var(--sh-heading);
  font-family: var(--sh-font-heading);
  font-size: 54px;
}
.ng-rating-card span {
  display: block;
  margin-top: 10px;
  color: var(--sh-accent);
  letter-spacing: 0.12em;
}
.ng-badge {
  color: var(--sh-accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}`,
    notes: "Replace placeholder review text and profile URL once the verified review profile is connected."
  }),
  ctaBlock("nikita-request-consultation-cta", "Nikita Request Consultation CTA", "For private and referred patients seeking a deeper, doctor-led view of their health, please contact the practice to enquire about availability."),
  b({
    id: "nikita-about-hero",
    name: "Nikita About Hero",
    category: "Heroes",
    description: "About page hero with portrait image and staging intro copy.",
    tags: tags("about", "hero"),
    html: `<section class="ng-section ng-about-hero-inline" aria-labelledby="ng-about-hero-title">
  <div class="ng-shell ng-two-col">
    <figure class="ng-image-frame"><img src="${portraitImage}" alt="Dr Nikita Grover" /></figure>
    <div class="ng-rich-text">
      <p class="ng-eyebrow">About Dr Grover</p>
      <h1 id="ng-about-hero-title" class="ng-section-title">A doctor-led practice centred on time, context and prevention.</h1>
      <p>Dr Nikita Grover is a London-based medical doctor working across functional medicine, medical longevity and preventive health.</p>
      <p>Her approach is shaped by detailed consultation, careful interpretation and a more complete clinical view, helping patients understand their health with greater clarity.</p>
    </div>
  </div>
</section>`,
    css: nikitaBaseCss,
    notes: "Uses the staging portrait image. Replace image URL if a higher-resolution final image is supplied."
  }),
  b({
    id: "nikita-professional-background",
    name: "Nikita Professional Background",
    category: "Credentials",
    description: "Three-card credentials section from the About page.",
    tags: tags("about", "credentials"),
    html: `<section class="ng-section ng-section--surface" aria-labelledby="ng-credentials-title">
  <div class="ng-shell">
    <p class="ng-eyebrow">Professional background</p>
    <h2 id="ng-credentials-title" class="ng-section-title">Grounded in clinical medicine, functional medicine and preventive health.</h2>
    <div class="ng-card-grid">${[
      card("01", "UCL-trained doctor", "Dr Grover qualified in Medicine from University College London and brings more than 30 years of clinical experience to her work."),
      card("02", "IFM Certified Practitioner", "Her functional medicine training supports a more systems-based view of health, symptoms, lifestyle and long-term prevention."),
      card("03", "Royal College memberships", "Public profiles list Dr Grover as a member of the Royal College of Physicians and the Royal College of General Practitioners.")
    ].join("")}</div>
  </div>
</section>`,
    css: nikitaBaseCss,
    notes: "Verify credentials wording against final approved compliance copy before publishing."
  }),
  b({
    id: "nikita-how-dr-grover-works",
    name: "Nikita How Dr Grover Works",
    category: "Process / Approach",
    description: "About page approach copy with compact feature labels.",
    tags: tags("about", "approach"),
    html: `<section class="ng-section" aria-labelledby="ng-how-works-title">
  <div class="ng-shell ng-two-col">
    <div>
      <p class="ng-eyebrow">How Dr Grover works</p>
      <h2 id="ng-how-works-title" class="ng-section-title">A considered clinical view, not a rushed protocol.</h2>
    </div>
    <div class="ng-rich-text">
      <p>Dr Grover’s approach is shaped by time, clinical experience and careful interpretation. Rather than looking at symptoms, test results or lifestyle in isolation, she brings the wider story together.</p>
      <p>This means listening carefully, reviewing relevant history, considering previous investigations and deciding what may genuinely add value. Where appropriate, the consultation may lead to further diagnostics, nutrition and lifestyle support, medical treatment or onward referral.</p>
      <ul class="ng-feature-list">
        <li>Time to listen</li><li>Clinical context</li><li>Careful interpretation</li><li>Practical next steps</li>
      </ul>
    </div>
  </div>
</section>`,
    css: `${nikitaBaseCss}.ng-rich-text .ng-feature-list{margin-top:28px;grid-template-columns:repeat(2,1fr)}@media(max-width:820px){.ng-rich-text .ng-feature-list{grid-template-columns:1fr}}`,
    notes: "Keep labels short; they are intended as compact trust markers."
  }),
  b({
    id: "nikita-nutrition-lifestyle-support",
    name: "Nikita Nutrition And Lifestyle Support",
    category: "Intro Sections",
    description: "About page Nita Lobo collaboration section.",
    tags: tags("about", "nutrition"),
    html: `<section class="ng-section ng-section--surface" aria-labelledby="ng-nita-title">
  <div class="ng-shell ng-two-col">
    <div>
      <p class="ng-eyebrow">Nutrition and lifestyle support</p>
      <h2 id="ng-nita-title" class="ng-section-title">Working with Functional Nutritionist Nita Lobo.</h2>
    </div>
    <div class="ng-rich-text">
      <p>Where appropriate, Dr Grover works in partnership with Functional Nutritionist, Nita Lobo, so nutrition and lifestyle recommendations can sit within the wider clinical plan.</p>
      <p>This means support around food, routine and lifestyle is not treated as generic wellness advice, but considered alongside medical history, symptoms, investigations and long-term health priorities.</p>
      <div class="ng-panel"><p class="ng-eyebrow">Collaborative care</p><p>Doctor-led interpretation, with nutrition and lifestyle support added where it is clinically useful.</p></div>
    </div>
  </div>
</section>`,
    css: `${nikitaBaseCss}.ng-rich-text .ng-panel{margin-top:28px}`,
    notes: "Edit Nita Lobo wording if the collaboration or title changes."
  }),
  ctaBlock("nikita-about-next-step-cta", "Nikita About Next Step CTA"),
  b({
    id: "nikita-services-hero",
    name: "Nikita Services Hero",
    category: "Heroes",
    description: "Services page hero with staging consultation-room image.",
    tags: tags("services", "hero"),
    html: `<section class="ng-page-hero ng-services-hero-page" aria-labelledby="ng-services-hero-title" style="--ng-hero-image: url('${clinicImage}')">
  <div class="ng-page-hero__content">
    <div class="ng-page-hero__copy">
      <p class="ng-eyebrow">Services</p>
      <h1 id="ng-services-hero-title" class="ng-display">Functional medicine, longevity medicine and <span class="ng-accent-italic">preventive health.</span></h1>
      <p class="ng-lead">Dr Nikita Grover works with private and referred patients seeking a deeper, doctor-led understanding of their health, symptoms and long-term wellbeing.</p>
      <p class="ng-copy">Her work spans functional medicine, healthspan optimisation, gut health, hormone health, metabolic health, nutrition, lifestyle medicine and selected diagnostics where clinically appropriate.</p>
      <div class="ng-actions"><a class="ng-button-primary" href="/contact/">Request consultation</a><a class="ng-button-outline" href="#service-areas">Explore services</a></div>
    </div>
  </div>
</section>`,
    css: pageHeroCss,
    notes: "Uses the staging clinic image. Replace only if the service page hero asset changes."
  }),
  b({
    id: "nikita-service-areas-intro",
    name: "Nikita Service Areas Intro",
    category: "Intro Sections",
    description: "Services page intro explaining the personalised, non-package-led approach.",
    tags: tags("services", "intro"),
    html: `<section id="service-areas" class="ng-section" aria-labelledby="ng-service-areas-title">
  <div class="ng-shell ng-two-col">
    <p class="ng-eyebrow">Service areas</p>
    <div>
      <h2 id="ng-service-areas-title" class="ng-section-title">Clinical areas that may be explored.</h2>
      <p class="ng-lead">Dr Grover’s work is personalised rather than protocol-led. These areas are not fixed packages, but common clinical themes that may be considered depending on symptoms, medical history, goals and findings.</p>
    </div>
  </div>
</section>`,
    css: nikitaBaseCss,
    notes: "Use before the 12-item service grid."
  }),
  b({
    id: "nikita-full-service-areas-grid",
    name: "Nikita Full Service Areas Grid",
    category: "Service Grids",
    description: "Full 12-service grid/list using staging page descriptions.",
    tags: tags("services", "grid"),
    html: `<section class="ng-section ng-section--surface" aria-labelledby="ng-full-services-title">
  <div class="ng-shell">
    <p class="ng-eyebrow">Service areas</p>
    <h2 id="ng-full-services-title" class="ng-section-title">Clinical areas that may be explored.</h2>
    <div class="ng-card-grid ng-services-grid">${[
      card("01", "Functional Medicine", "Functional medicine takes a systems-based view of health. Instead of looking at symptoms in isolation, it considers the relationship between medical history, lifestyle, nutrition, digestion, sleep, stress, hormones, immune patterns and relevant test findings. This may be helpful for patients who feel their health concerns have been considered separately, or who want a more joined-up view of what may be driving their symptoms."),
      card("02", "Longevity Medicine &amp; Healthspan", "Longevity medicine focuses on supporting long-term health, resilience and quality of life, rather than waiting for problems to become established. This may include reviewing cardiovascular, metabolic, hormonal, nutritional and lifestyle factors, with selected investigations considered where they are likely to add useful clinical insight."),
      card("03", "Preventive Health &amp; Medical Check-ups", "Preventive health is for patients who want a clearer understanding of their current health position and future risk factors. Dr Grover may review health history, family history, lifestyle, previous investigations and relevant markers to help patients identify what needs attention now, what can be monitored and what may be worth investigating further."),
      card("04", "Gut Health &amp; Microbiome", "Gut health can affect digestion, energy, inflammation, nutrition, immune function and wider wellbeing. A functional medicine approach may consider symptoms alongside diet, stress, sleep, microbiome factors and previous test results. Where appropriate, this may include reviewing digestive symptoms, dietary patterns, stool testing or microbiome-related findings as part of a wider clinical picture."),
      card("05", "Hormone Optimisation &amp; Menopause Support", "Hormonal changes can influence energy, mood, sleep, weight, cognition, libido, skin, cycle patterns and overall quality of life. Dr Grover may review symptoms, medical history and relevant blood results, with treatment options, menopause support, HRT or bioidentical hormone-related care considered where clinically appropriate."),
      card("06", "Metabolic Health, Energy &amp; Weight", "Metabolic health sits at the centre of energy, weight regulation, cardiovascular risk, blood sugar control and long-term prevention. This may include reviewing glucose regulation, lipid markers, body composition, nutrition, movement, sleep, stress physiology and other factors that affect energy and weight."),
      card("07", "Nutrition &amp; Lifestyle Medicine", "Food, routine, sleep, movement and recovery often shape how patients feel day to day. Nutrition and lifestyle medicine looks at these foundations through a clinical lens. Where appropriate, Dr Grover works in partnership with Functional Nutritionist Nita Lobo, so nutrition and lifestyle support can sit within the wider medical plan rather than being treated as generic wellness advice."),
      card("08", "Stress Physiology &amp; HPA Axis Support", "Chronic stress, poor sleep, overwork and prolonged physical or emotional strain can affect hormones, metabolism, digestion, immunity and energy. Dr Grover may consider stress physiology and HPA axis patterns as part of a wider assessment, especially where symptoms are persistent, complex or difficult to explain through standard testing alone."),
      card("09", "Mitochondrial Health &amp; Bioenergetics", "Mitochondria are involved in cellular energy production, recovery and resilience. In functional medicine, bioenergetics may be considered when patients experience fatigue, poor recovery or reduced stamina. This area may involve looking at nutrition, sleep, stress, movement, metabolic markers and relevant investigations where they are likely to add useful insight."),
      card("10", "Genetics &amp; Nutrigenomics", "Genetic and nutrigenomic insight may help explain how a patient responds to certain nutrients, lifestyle factors or risk patterns. This is not used as a standalone answer, but may be considered alongside symptoms, history, biomarkers and lifestyle context where clinically appropriate."),
      card("11", "Immune Health &amp; Inflammation", "Immune patterns and inflammation can be relevant in patients with recurrent symptoms, autoimmune tendencies, gut-related concerns or unexplained health changes. Dr Grover may consider immune health as part of the broader clinical assessment, including medical history, symptoms, gut health, nutrition, stress, sleep and relevant test markers."),
      card("12", "Complex or Unexplained Symptoms", "Some patients have ongoing symptoms despite being told that standard results are normal. Others may have seen multiple clinicians but still feel they do not have a coherent explanation. Dr Grover’s role is to take time with the full story, review what has already been investigated and consider whether there are patterns or next steps that have not yet been explored.")
    ].join("")}</div>
  </div>
</section>`,
    css: `${nikitaBaseCss}.ng-services-grid{margin-top:44px}.ng-services-grid .ng-card{min-height:360px}`,
    notes: "Descriptions were extracted from the staging Services page."
  }),
  b({
    id: "nikita-diagnostics-and-support",
    name: "Nikita Diagnostics And Support",
    category: "Process / Approach",
    description: "Services page diagnostics and lifestyle support section.",
    tags: tags("services", "diagnostics"),
    html: `<section class="ng-section" aria-labelledby="ng-diagnostics-title">
  <div class="ng-shell">
    <div class="ng-two-col">
      <div><p class="ng-eyebrow">Diagnostics and support</p><h2 id="ng-diagnostics-title" class="ng-section-title">Testing and lifestyle support, where clinically useful.</h2></div>
      <div class="ng-rich-text"><p>Dr Grover may recommend further investigations where they are likely to add meaningful clinical insight. Testing is not used as a standalone answer, but interpreted alongside symptoms, history, lifestyle and goals.</p><p>Where appropriate, nutrition and lifestyle support can also be brought into the wider plan, including collaboration with Functional Nutritionist Nita Lobo.</p></div>
    </div>
    <div class="ng-card-grid">${[
      card("01", "Selected diagnostics", "Blood tests, hormone markers, metabolic markers, gut health testing, nutritional markers or other investigations may be considered depending on the clinical picture."),
      card("02", "Interpretation in context", "Results are reviewed alongside symptoms, medical history, previous investigations and lifestyle factors, rather than treated as isolated numbers."),
      card("03", "Nutrition and lifestyle", "Practical support around food, routine, sleep, movement and recovery may be included where it is relevant to the patient’s wider health plan.")
    ].join("")}</div>
  </div>
</section>`,
    css: `${nikitaBaseCss}.ng-card-grid{margin-top:44px}`,
    notes: "Testing copy should remain careful and non-package-led."
  }),
  ctaBlock("nikita-services-next-step-cta", "Nikita Services Next Step CTA"),
  b({
    id: "nikita-approach-hero",
    name: "Nikita Approach Hero",
    category: "Heroes",
    description: "Approach page hero using staging heading and copy.",
    tags: tags("approach", "hero"),
    html: `<section class="ng-page-hero ng-approach-hero-page" aria-labelledby="ng-approach-hero-title" style="--ng-hero-image: url('${clinicImage}')">
  <div class="ng-page-hero__content"><div class="ng-page-hero__copy">
    <p class="ng-eyebrow">Approach</p>
    <h1 id="ng-approach-hero-title" class="ng-display">A calm, structured route from enquiry to <span class="ng-accent-italic">plan.</span></h1>
    <p class="ng-lead">The patient journey is designed to give enough time for the story to be heard, the relevant information to be reviewed and the next steps to be considered carefully.</p>
    <p class="ng-copy">Dr Grover’s approach begins with careful listening, followed by selective diagnostics where clinically appropriate and a personalised plan shaped around the wider clinical picture.</p>
    <div class="ng-actions"><a class="ng-button-primary" href="/contact/">Request consultation</a><a class="ng-button-outline" href="#patient-journey">View patient journey</a></div>
  </div></div>
</section>`,
    css: pageHeroCss,
    notes: "The prompt mentioned an alternate approach heading; this block uses the inspected staging heading for accuracy."
  }),
  b({
    id: "nikita-patient-journey-summary-strip",
    name: "Nikita Patient Journey Summary Strip",
    category: "Process / Approach",
    description: "Compact journey summary strip requested for page assembly.",
    tags: tags("approach", "journey"),
    html: `<section class="ng-journey-strip" aria-label="Patient journey summary">
  <div class="ng-shell">
    <p class="ng-eyebrow">Patient journey</p>
    <h2>Listen carefully. Test selectively. Plan proportionately.</h2>
    <ul class="ng-feature-list">
      <li>Detailed consultation</li>
      <li>Clinical interpretation</li>
      <li>Diagnostics where useful</li>
      <li>Personalised plan</li>
    </ul>
  </div>
</section>`,
    css: `${nikitaBaseCss}.ng-journey-strip{background:var(--sh-surface);border-block:1px solid var(--sh-accent-soft);padding:44px 32px}.ng-journey-strip h2{margin:0 0 28px;color:var(--sh-heading);font-family:var(--sh-font-heading);font-size:clamp(32px,4vw,56px);line-height:1.05}.ng-journey-strip .ng-feature-list{grid-template-columns:repeat(4,1fr)}@media(max-width:820px){.ng-journey-strip{padding:34px 20px}.ng-journey-strip .ng-feature-list{grid-template-columns:1fr}}`,
    notes: "This strip was requested as a page assembly block; the exact standalone strip was not exposed in the text extraction."
  }),
  b({
    id: "nikita-patient-journey-process",
    name: "Nikita Patient Journey Process",
    category: "Process / Approach",
    description: "Four-step patient journey process from the Approach page.",
    tags: tags("approach", "journey", "process"),
    html: `<section id="patient-journey" class="ng-section" aria-labelledby="ng-journey-title">
  <div class="ng-shell">
    <p class="ng-eyebrow">Patient journey</p>
    <h2 id="ng-journey-title" class="ng-section-title">How the process works.</h2>
    <p class="ng-lead">A clear, structured route from first enquiry to personalised recommendations, with diagnostics considered only where they add useful clinical insight.</p>
    <div class="ng-card-grid ng-card-grid--two">${[
      card("01", "Initial enquiry", "You contact the practice with a brief outline of your concerns, goals or referral background.", "First step"),
      card("02", "Deep-dive review", "Dr Grover takes time to explore your story, symptoms, medical history, lifestyle, nutrition and previous results.", "Consultation"),
      card("03", "Selective diagnostics", "Testing may be recommended where clinically useful, helping build a more complete picture.", "Insight"),
      card("04", "Personalised next steps", "Findings are brought together into a proportionate plan, with review and refinement where appropriate.", "Plan")
    ].join("")}</div>
  </div>
</section>`,
    css: `${nikitaBaseCss}.ng-card-grid{margin-top:44px}.ng-card-label{margin:0 0 10px;color:var(--sh-accent);font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}`,
    notes: "Cards use the staging labels First step, Consultation, Insight and Plan."
  }),
  b({
    id: "nikita-clinical-philosophy",
    name: "Nikita Clinical Philosophy",
    category: "Process / Approach",
    description: "Clinical philosophy section from the Approach page.",
    tags: tags("approach", "philosophy"),
    html: `<section class="ng-section ng-section--surface" aria-labelledby="ng-philosophy-title">
  <div class="ng-shell">
    <div class="ng-two-col">
      <div><p class="ng-eyebrow">Clinical philosophy</p><h2 id="ng-philosophy-title" class="ng-section-title">Medicine that begins with context.</h2></div>
      <div class="ng-rich-text"><p>Dr Grover’s approach is centred on understanding the patient as a whole person, not reducing health concerns to isolated symptoms or disconnected test results.</p><p>The aim is to bring together medical history, symptoms, lifestyle, nutrition, sleep, stress, previous investigations and future health priorities, then decide what is clinically relevant.</p></div>
    </div>
    <div class="ng-card-grid">${[
      card("01", "Unhurried understanding", "Time is given to the full story, including patterns, priorities and concerns that may not fit neatly into a standard appointment."),
      card("02", "Selective investigation", "Testing is considered where it is likely to add useful clinical insight, rather than used as a generic package for every patient."),
      card("03", "Personalised recommendations", "Recommendations are shaped around the individual, with attention to what is realistic, relevant and proportionate.")
    ].join("")}</div>
  </div>
</section>`,
    css: `${nikitaBaseCss}.ng-card-grid{margin-top:44px}`,
    notes: "Extracted from the staging Approach page."
  }),
  b({
    id: "nikita-insight-to-action",
    name: "Nikita Insight To Action",
    category: "Process / Approach",
    description: "Approach page support section from insight to action.",
    tags: tags("approach", "diagnostics"),
    html: `<section class="ng-section" aria-labelledby="ng-insight-title">
  <div class="ng-shell">
    <div class="ng-two-col">
      <div><p class="ng-eyebrow">From insight to action</p><h2 id="ng-insight-title" class="ng-section-title">Diagnostics and support are used to serve the plan, not overwhelm it.</h2></div>
      <p class="ng-lead">Where useful, further investigations may help clarify patterns, risks or underlying contributors. These are interpreted alongside the patient’s story, symptoms, medical history and goals.</p>
    </div>
    <div class="ng-card-grid">${[
      card("Diagnostics", "Testing where clinically useful", "Blood markers, hormone markers, metabolic health indicators, gut health testing, nutritional markers or other investigations may be considered depending on the clinical picture."),
      card("Nutrition", "Support with food and lifestyle", "Where appropriate, Dr Grover works in partnership with Functional Nutritionist Nita Lobo, so nutrition and lifestyle support can sit within the wider medical plan."),
      card("Review", "Follow-up and refinement", "Health plans may need review over time. Follow-up allows recommendations to be adjusted in response to symptoms, results, priorities and progress.")
    ].join("")}</div>
  </div>
</section>`,
    css: `${nikitaBaseCss}.ng-card-grid{margin-top:44px}`,
    notes: "The staging section uses word labels rather than numeric labels for these three cards."
  }),
  ctaBlock("nikita-approach-next-step-cta", "Nikita Approach Next Step CTA", "For private and referred patients seeking a deeper, doctor-led understanding of their health, please contact the practice to enquire about availability and next steps."),
  b({
    id: "nikita-faq-hero",
    name: "Nikita FAQ Hero",
    category: "Heroes",
    description: "FAQ page hero using staging copy.",
    tags: tags("faq", "hero"),
    html: `<section class="ng-page-hero ng-faq-hero-page" aria-labelledby="ng-faq-hero-title" style="--ng-hero-image: url('${clinicImage}')">
  <div class="ng-page-hero__content"><div class="ng-page-hero__copy">
    <p class="ng-eyebrow">FAQ</p>
    <h1 id="ng-faq-hero-title" class="ng-display">Questions about consultations, diagnostics and <span class="ng-accent-italic">next steps.</span></h1>
    <p class="ng-lead">Find answers to common questions about Dr Nikita Grover’s approach, what to expect from a consultation and how the patient journey is structured.</p>
    <p class="ng-copy">The information below is intended as a general guide. Individual recommendations are made after proper clinical review and depend on each patient’s circumstances.</p>
    <div class="ng-actions"><a class="ng-button-primary" href="/contact/">Request consultation</a><a class="ng-button-outline" href="#common-questions">Read FAQs</a></div>
  </div></div>
</section>`,
    css: pageHeroCss,
    notes: "Uses staging FAQ heading and copy. The prompt had a slightly different heading; staging content was preserved."
  }),
  b({
    id: "nikita-safety-enquiry-notice",
    name: "Nikita Safety Enquiry Notice",
    category: "Utility Blocks",
    description: "Private enquiry and urgent-care safety notice.",
    tags: tags("faq", "notice", "contact"),
    html: `<aside class="ng-safety-notice" aria-label="Before enquiring notice">
  <div class="ng-shell">
    <p class="ng-eyebrow">Before enquiring</p>
    <p>This website is for private and referred patient enquiries only. It should not be used for urgent medical advice or emergency care.</p>
  </div>
</aside>`,
    css: `${nikitaBaseCss}.ng-safety-notice{background:var(--sh-surface);border-block:1px solid var(--sh-accent-soft);padding:34px 32px;font-family:var(--sh-font-body)}.ng-safety-notice p:not(.ng-eyebrow){max-width:900px;margin:0;color:var(--sh-heading);font-size:18px;line-height:1.7}@media(max-width:820px){.ng-safety-notice{padding:28px 20px}}`,
    notes: "This explicit notice was requested; urgent-care wording also appears in FAQ answers and contact instructions."
  }),
  b({
    id: "nikita-common-questions",
    name: "Nikita Common Questions",
    category: "FAQs",
    description: "FAQ page common questions and answers extracted from staging.",
    tags: tags("faq", "questions"),
    html: `<section id="common-questions" class="ng-section" aria-labelledby="ng-common-questions-title">
  <div class="ng-shell ng-two-col">
    <div><p class="ng-eyebrow">Common questions</p><h2 id="ng-common-questions-title" class="ng-section-title">Useful information before making an enquiry.</h2><p class="ng-copy">These answers cover common questions about Dr Grover’s practice, including consultations, diagnostics, nutrition and next steps.</p></div>
    <div class="ng-faq-list">
${[
  ["Who is Dr Nikita Grover’s practice suitable for?", "The practice is intended for private and referred patients seeking a more complete, doctor-led view of their health. This may include patients interested in functional medicine, longevity medicine, gut health, hormone health, preventive health, nutrition and lifestyle support."],
  ["Do I need a referral?", "You can enquire directly. If you have been referred by another clinician or practitioner, please mention this in your enquiry and include any relevant background."],
  ["What should I include in my enquiry?", "Please include a brief outline of your concern, what you would like help with, whether you are self-referring or have been referred, and any relevant context such as previous investigations or current symptoms."],
  ["Are tests included?", "Testing is considered where it is clinically useful. Dr Grover may recommend blood tests, hormone markers, metabolic markers, gut health testing, nutritional markers or other investigations depending on the clinical picture."],
  ["Do you offer hormone or menopause support?", "Hormone-related concerns and menopause support may be explored where appropriate. This may include reviewing symptoms, medical history, relevant results and possible treatment options."],
  ["Do you work with nutrition and lifestyle?", "Yes, nutrition and lifestyle may form part of the wider plan. Where appropriate, Dr Grover works in partnership with Functional Nutritionist Nita Lobo so this support can sit within the wider clinical picture."],
  ["Is this suitable for urgent medical concerns?", "No. The enquiry form and website are not intended for urgent medical advice or emergency care. If you have urgent symptoms or need emergency help, please use appropriate urgent care or emergency services."],
  ["How do I request a consultation?", "Please use the contact form or email the practice with a short outline of your enquiry. The practice will then advise on availability and appropriate next steps."]
].map(([q, a]) => `<article class="ng-faq-item"><h3>${q}</h3><p>${a}</p></article>`).join("\n")}
    </div>
  </div>
</section>`,
    css: `${nikitaBaseCss}.ng-faq-list{display:grid;gap:14px}.ng-faq-item{border-top:1px solid var(--sh-accent-soft);padding-top:22px}.ng-faq-item h3{margin:0;color:var(--sh-heading);font-family:var(--sh-font-heading);font-size:clamp(24px,2.4vw,32px);line-height:1.15}.ng-faq-item p{margin:12px 0 0;color:var(--sh-text);line-height:1.75}`,
    notes: "FAQ answers were extracted from the staging FAQ page."
  }),
  b({
    id: "nikita-still-unsure-cta",
    name: "Nikita Still Unsure CTA",
    category: "Contact CTAs",
    description: "FAQ page lower CTA for uncertain visitors.",
    tags: tags("faq", "cta"),
    html: `<section class="ng-final-cta-section" aria-labelledby="ng-still-unsure-title">
  <div class="ng-final-cta-panel">
    <div class="ng-final-cta-copy">
      <p class="ng-eyebrow">Still unsure?</p>
      <h2 id="ng-still-unsure-title">Contact the practice with a brief enquiry.</h2>
      <p>If you are not sure whether Dr Grover’s practice is appropriate for your needs, please send a short message and the practice can advise on next steps.</p>
    </div>
    <div class="ng-final-cta-actions"><a class="ng-button-primary" href="/contact/">Contact the practice</a><a class="ng-button-link" href="mailto:info@drnikitagrover.com">Email directly</a></div>
  </div>
</section>`,
    css: ctaBlock("tmp", "tmp").css,
    notes: "Edit email and contact URL if details change."
  }),
  b({
    id: "nikita-contact-hero",
    name: "Nikita Contact Hero",
    category: "Heroes",
    description: "Contact page hero with enquiry copy and urgent-care disclaimer.",
    tags: tags("contact", "hero"),
    html: `<section class="ng-page-hero ng-contact-hero-page" aria-labelledby="ng-contact-hero-title" style="--ng-hero-image: url('${clinicImage}')">
  <div class="ng-page-hero__content"><div class="ng-page-hero__copy">
    <p class="ng-eyebrow">Contact</p>
    <h1 id="ng-contact-hero-title" class="ng-display">Begin with a considered <span class="ng-accent-italic">conversation.</span></h1>
    <p class="ng-lead">For enquiries, please contact the practice to request further information or arrange an initial consultation.</p>
    <p class="ng-copy">Dr Grover works with private and referred patients seeking a deeper, doctor-led view of their health, symptoms and long-term wellbeing.</p>
    <p class="ng-contact-disclaimer">This website is not for urgent medical advice or emergency care. Please use appropriate urgent care or emergency services if needed.</p>
    <div class="ng-actions"><a class="ng-button-primary" href="#contact-form">Request consultation</a><a class="ng-button-outline" href="mailto:info@drnikitagrover.com">Email the practice</a></div>
  </div></div>
</section>`,
    css: `${pageHeroCss}.ng-contact-disclaimer{margin-top:22px;border-left:1px solid var(--sh-accent);padding-left:18px;color:var(--sh-heading);line-height:1.7}`,
    notes: "Staging heading is 'Begin with a considered conversation.' The explicit urgent-care disclaimer was added per request."
  }),
  b({
    id: "nikita-practice-enquiries-contact-panel",
    name: "Nikita Practice Enquiries Contact Panel",
    category: "Contact CTAs",
    description: "Contact details panel for practice enquiries.",
    tags: tags("contact", "panel"),
    html: `<section class="ng-section ng-section--surface" aria-labelledby="ng-practice-enquiries-title">
  <div class="ng-shell ng-contact-panel">
    <div>
      <p class="ng-eyebrow">Practice enquiries</p>
      <h2 id="ng-practice-enquiries-title" class="ng-section-title">Contact</h2>
    </div>
    <div class="ng-panel ng-contact-details">
      <p><strong>Email</strong> <a href="mailto:info@drnikitagrover.com">info@drnikitagrover.com</a></p>
      <p><strong>Phone</strong> <a href="tel:+447831031220">07831 031220</a></p>
      <p><strong>Social</strong> <a href="https://www.linkedin.com/in/drnikitagrover/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      <p>Please include a brief outline of your enquiry so the practice can respond appropriately.</p>
    </div>
  </div>
</section>`,
    css: `${nikitaBaseCss}.ng-contact-panel{display:grid;grid-template-columns:minmax(240px,.4fr) minmax(0,1fr);gap:48px}.ng-contact-details a{color:var(--sh-accent);text-decoration:none}.ng-contact-details strong{display:inline-block;min-width:72px;color:var(--sh-heading)}@media(max-width:820px){.ng-contact-panel{grid-template-columns:1fr}}`,
    notes: "Replace email, phone and LinkedIn URL if practice details change."
  }),
  b({
    id: "nikita-enquiry-form-intro-instructions",
    name: "Nikita Enquiry Form Intro Instructions",
    category: "Intro Sections",
    description: "Contact page enquiry form instructions.",
    tags: tags("contact", "form"),
    html: `<section class="ng-section" aria-labelledby="ng-enquiry-form-title">
  <div class="ng-shell">
    <div class="ng-two-col">
      <div><p class="ng-eyebrow">Enquiry form</p><h2 id="ng-enquiry-form-title" class="ng-section-title">Tell us a little about your enquiry.</h2></div>
      <p class="ng-lead">Please include a short outline of what you would like support with, whether you are self-referring or have been referred, and any relevant context that may help the practice respond appropriately.</p>
    </div>
    <div class="ng-card-grid">${[
      card("01", "Briefly describe the reason for your enquiry.", ""),
      card("02", "Include whether you are interested in functional medicine, longevity, gut health, hormones or preventive health.", ""),
      card("03", "Do not include urgent medical concerns. Please contact emergency services where appropriate.", "")
    ].join("")}</div>
  </div>
</section>`,
    css: `${nikitaBaseCss}.ng-card-grid{margin-top:44px}.ng-card h3{font-size:clamp(22px,2vw,28px)}.ng-card h3 + p:empty{display:none}`,
    notes: "Use immediately above the contact form or Elementor Form widget."
  }),
  b({
    id: "nikita-contact-form-block",
    name: "Nikita Contact Form Block",
    category: "Utility Blocks",
    description: "Static styled contact form block based on the staging form area.",
    tags: tags("contact", "form"),
    html: `<section id="contact-form" class="ng-section ng-section--surface" aria-labelledby="ng-contact-form-title">
  <div class="ng-shell">
    <form class="ng-contact-form" aria-describedby="ng-contact-form-note">
      <h2 id="ng-contact-form-title" class="ng-section-title">Contact Form Demo</h2>
      <div class="ng-form-grid">
        <label>First name<input type="text" name="first-name" /></label>
        <label>Last name<input type="text" name="last-name" /></label>
      </div>
      <label>Email<input type="email" name="email" /></label>
      <label>Reason for Enquiry<textarea name="message" rows="6"></textarea></label>
      <label class="ng-consent"><input type="checkbox" name="consent" /> I understand this form is for appointment enquiries only and should not be used for urgent medical advice.</label>
      <button class="ng-button-primary" type="submit">Send enquiry</button>
      <p class="ng-form-success">Great! We’ve received your information.</p>
      <p class="ng-form-error">We couldn’t process your submission. Please retry</p>
      <p id="ng-contact-form-note">When used in Elementor, replace this static form with the Elementor Form widget if submissions need to be processed.</p>
    </form>
  </div>
</section>`,
    css: `${nikitaBaseCss}.ng-contact-form{max-width:860px;margin:0 auto;border:1px solid var(--sh-accent-soft);background:var(--sh-bg);padding:clamp(28px,5vw,56px);font-family:var(--sh-font-body)}.ng-contact-form label{display:grid;gap:8px;margin-top:18px;color:var(--sh-heading);font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.ng-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.ng-contact-form input:not([type=checkbox]),.ng-contact-form textarea{width:100%;border:1px solid var(--sh-accent-soft);background:white;color:var(--sh-heading);padding:14px;font:inherit;letter-spacing:0;text-transform:none}.ng-consent{grid-template-columns:auto 1fr;align-items:start;text-transform:none;letter-spacing:0;font-weight:600;line-height:1.5}.ng-contact-form button{margin-top:24px}.ng-form-success,.ng-form-error{display:none}.ng-contact-form p{color:var(--sh-muted);line-height:1.7}@media(max-width:820px){.ng-form-grid{grid-template-columns:1fr}}`,
    notes: "Static form for reusable styling only. In Elementor, use the Elementor Form widget for real submissions and use this block as the wrapper/style reference."
  }),
  noteBlock("nikita-home-page-assembly-notes", "Home Page Assembly Notes", ["Header", "Homepage Hero", "Meet Doctor Intro", "Time And Attention / Consultation Process", "Services Preview", "Reviews Placeholder", "Request Consultation CTA", "Footer"]),
  noteBlock("nikita-about-page-assembly-notes", "About Page Assembly Notes", ["Header", "About Hero", "Professional Background", "How Dr Grover Works", "Nutrition And Lifestyle Support", "About Next Step CTA", "Footer"]),
  noteBlock("nikita-services-page-assembly-notes", "Services Page Assembly Notes", ["Header", "Services Hero", "Service Areas Intro", "Full Service Areas Grid", "Diagnostics And Support", "Services Next Step CTA", "Footer"]),
  noteBlock("nikita-approach-page-assembly-notes", "Approach Page Assembly Notes", ["Header", "Approach Hero", "Patient Journey Summary Strip", "Patient Journey Process", "Clinical Philosophy", "Insight To Action", "Approach Next Step CTA", "Footer"]),
  noteBlock("nikita-faq-page-assembly-notes", "FAQ Page Assembly Notes", ["Header", "FAQ Hero", "Safety Enquiry Notice", "Common Questions", "Still Unsure CTA", "Footer"]),
  noteBlock("nikita-contact-page-assembly-notes", "Contact Page Assembly Notes", ["Header", "Contact Hero", "Practice Enquiries Contact Panel", "Enquiry Form Intro Instructions", "Contact Form Block", "Footer"])
];
