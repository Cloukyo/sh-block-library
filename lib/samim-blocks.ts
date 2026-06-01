import type { Block } from "@/types/block";

const portraitImage = "https://placehold.co/900x1100/e5eeee/102426?text=Consultant+Surgeon+Portrait";
const theatreImage = "https://placehold.co/1200x900/dcebec/102426?text=Private+Surgical+Care";
const resultsImage = "https://placehold.co/1200x760/f7f9f8/405456?text=Discreet+Results+Placeholder";

const samimTags = ["samim", "surgeon", "consultant", "private-practice", "sm"];

function samim(block: Omit<Block, "client" | "style" | "foundationId" | "sourceProject" | "version" | "status">): Block {
  return {
    ...block,
    client: "Samim",
    style: "Samim Surgeon",
    foundationId: "sm-foundation",
    sourceProject: "Samim Surgeon Pack",
    version: "v1",
    status: "Needs Review"
  };
}

function tags(...extra: string[]) {
  return [...samimTags, ...extra];
}

export const samimBlocks: Block[] = [
  samim({
    id: "samim-surgeon-foundation",
    name: "Samim Surgeon Foundation",
    category: "Global Foundation",
    description: "Shared Samim sm- foundation for typography, buttons, cards, grids, image frames and clinical spacing.",
    tags: tags("foundation", "css", "global"),
    sourcePage: "Home",
    sourceSection: "Foundation",
    useCase: "Paste the Full CSS output once before using Lean Samim block exports.",
    html: `<section class="sm-section sm-section--surface" aria-labelledby="sm-foundation-title">
  <div class="sm-shell">
    <p class="sm-kicker" data-editable="foundation.kicker">Foundation CSS</p>
    <h2 id="sm-foundation-title" class="sm-title" data-editable="foundation.title">Samim Surgeon Foundation</h2>
    <p class="sm-lead" data-editable="foundation.lead">Shared Samim styling for clean consultant-led sections, reusable clinical cards, responsive grids and calm conversion-focused calls to action.</p>
  </div>
</section>`,
    css: "",
    notes: "Full CSS exports the Samim foundation. Lean Samim blocks assume this foundation is already loaded."
  }),
  samim({
    id: "samim-homepage-hero",
    name: "Samim Homepage Hero",
    category: "Heroes",
    description: "Clean surgeon-led homepage hero with consultant positioning, portrait media and consultation CTA.",
    tags: tags("hero", "homepage", "consultation"),
    sourcePage: "Home",
    sourceSection: "Hero",
    html: `<section class="sm-section sm-hero" aria-labelledby="sm-hero-title">
  <div class="sm-shell sm-hero__grid">
    <div class="sm-hero__content">
      <p class="sm-kicker" data-editable="hero.kicker">Consultant surgeon-led care</p>
      <h1 id="sm-hero-title" class="sm-display" data-editable="hero.title">Specialist surgical consultations with clarity, discretion and clinical judgement.</h1>
      <p class="sm-lead" data-editable="hero.lead">A calm private practice introduction for patients considering expert assessment, treatment options and a carefully planned surgical pathway.</p>
      <div class="sm-actions" aria-label="Hero actions">
        <a class="sm-button" href="#sm-contact" data-editable="hero.primaryLink">Book a consultation</a>
        <a class="sm-button-outline" href="#sm-procedures" data-editable="hero.secondaryLink">View procedures</a>
      </div>
    </div>
    <figure class="sm-image-frame sm-hero__media">
      <img src="${portraitImage}" alt="Consultant surgeon portrait placeholder" data-editable="hero.image" />
    </figure>
  </div>
</section>`,
    css: `.sm-hero {
  padding-top: clamp(82px, 10vw, 132px);
}

.sm-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.72fr);
  gap: clamp(36px, 7vw, 94px);
  align-items: center;
}

.sm-hero__content {
  max-width: 920px;
}

.sm-hero__media img {
  aspect-ratio: 4 / 5;
}

@media (max-width: 860px) {
  .sm-hero__grid {
    grid-template-columns: 1fr;
  }
}`,
    notes: "Hero copy should be checked against the final consultant name, specialty and regulatory wording."
  }),
  samim({
    id: "samim-credentials-authority-strip",
    name: "Samim Credentials / Authority Strip",
    category: "Credentials",
    description: "Compact authority strip for surgical qualifications, memberships, practice setting and patient pathway reassurance.",
    tags: tags("credentials", "authority", "trust"),
    sourcePage: "Home",
    sourceSection: "Authority Strip",
    html: `<section class="sm-section sm-authority" aria-labelledby="sm-authority-title">
  <div class="sm-shell">
    <h2 id="sm-authority-title" class="sm-authority__title" data-editable="authority.title">Consultant-level expertise, delivered through a private patient pathway.</h2>
    <dl class="sm-authority__items">
      <div>
        <dt data-editable="authority.item1.label">Registration</dt>
        <dd data-editable="authority.item1.value">GMC registered surgeon</dd>
      </div>
      <div>
        <dt data-editable="authority.item2.label">Practice</dt>
        <dd data-editable="authority.item2.value">Private consultation and surgery</dd>
      </div>
      <div>
        <dt data-editable="authority.item3.label">Approach</dt>
        <dd data-editable="authority.item3.value">Clear options, careful consent</dd>
      </div>
      <div>
        <dt data-editable="authority.item4.label">Aftercare</dt>
        <dd data-editable="authority.item4.value">Structured follow-up support</dd>
      </div>
    </dl>
  </div>
</section>`,
    css: `.sm-authority {
  background: var(--sm-ink);
  color: #ffffff;
  padding: 34px 0;
}

.sm-authority__title {
  margin: 0 0 24px;
  color: #ffffff;
  font-family: var(--sh-font-heading);
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 650;
  letter-spacing: 0;
  line-height: 1.12;
}

.sm-authority__items {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  margin: 0;
}

.sm-authority__items div {
  border-top: 1px solid rgba(255, 255, 255, 0.24);
  padding-top: 16px;
}

.sm-authority dt {
  color: var(--sm-warm);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.sm-authority dd {
  margin: 8px 0 0;
  color: #ffffff;
  font-size: 15px;
  line-height: 1.5;
}

@media (max-width: 860px) {
  .sm-authority__items {
    grid-template-columns: 1fr 1fr;
    gap: 22px;
  }
}`,
    notes: "Replace placeholder credentials with verified registrations, memberships and hospital affiliations."
  }),
  samim({
    id: "samim-procedures-grid",
    name: "Samim Procedures Grid",
    category: "Service Grids",
    description: "Reusable clinical grid for key surgical procedures with short patient-focused summaries.",
    tags: tags("procedures", "services", "grid"),
    sourcePage: "Home",
    sourceSection: "Procedures",
    html: `<section id="sm-procedures" class="sm-section sm-section--surface sm-procedures" aria-labelledby="sm-procedures-title">
  <div class="sm-shell">
    <div class="sm-procedures__intro">
      <p class="sm-kicker" data-editable="procedures.kicker">Procedures</p>
      <h2 id="sm-procedures-title" class="sm-title" data-editable="procedures.title">Focused surgical care, explained in plain language.</h2>
      <p class="sm-lead" data-editable="procedures.lead">Use this section to introduce the core procedure groups without turning the homepage into a full treatment directory.</p>
    </div>
    <div class="sm-grid sm-procedures__grid">
      <article class="sm-card">
        <h3 data-editable="procedures.card1.title">Procedure category one</h3>
        <p data-editable="procedures.card1.body">A concise explanation of the condition, consultation route and likely next step.</p>
        <a class="sm-text-link" href="#" data-editable="procedures.card1.link">Learn more</a>
      </article>
      <article class="sm-card">
        <h3 data-editable="procedures.card2.title">Procedure category two</h3>
        <p data-editable="procedures.card2.body">Short clinical summary for patients comparing whether this pathway may be appropriate.</p>
        <a class="sm-text-link" href="#" data-editable="procedures.card2.link">Learn more</a>
      </article>
      <article class="sm-card">
        <h3 data-editable="procedures.card3.title">Procedure category three</h3>
        <p data-editable="procedures.card3.body">A reassuring outline of assessment, treatment planning and recovery considerations.</p>
        <a class="sm-text-link" href="#" data-editable="procedures.card3.link">Learn more</a>
      </article>
    </div>
  </div>
</section>`,
    css: `.sm-procedures__intro {
  display: grid;
  grid-template-columns: minmax(280px, 0.42fr) minmax(0, 1fr);
  gap: clamp(26px, 5vw, 70px);
  align-items: end;
}

.sm-procedures__grid {
  margin-top: 42px;
}

.sm-procedures .sm-text-link {
  margin-top: 22px;
}

@media (max-width: 860px) {
  .sm-procedures__intro {
    grid-template-columns: 1fr;
  }
}`,
    notes: "Procedure labels are intentionally generic until final specialty and treatment list are verified."
  }),
  samim({
    id: "samim-consultant-bio",
    name: "Samim Consultant Bio",
    category: "Doctor Bios",
    description: "Consultant bio section with portrait, clinical positioning and concise supporting credentials.",
    tags: tags("bio", "doctor", "consultant"),
    sourcePage: "Home",
    sourceSection: "Bio",
    html: `<section class="sm-section sm-bio" aria-labelledby="sm-bio-title">
  <div class="sm-shell sm-bio__grid">
    <figure class="sm-image-frame">
      <img src="${portraitImage}" alt="Consultant surgeon portrait placeholder" data-editable="bio.image" />
    </figure>
    <div class="sm-bio__content">
      <p class="sm-kicker" data-editable="bio.kicker">Meet the consultant</p>
      <h2 id="sm-bio-title" class="sm-title" data-editable="bio.title">A surgeon-led practice built around careful assessment and considered recommendations.</h2>
      <p class="sm-lead" data-editable="bio.lead">Introduce Mr Samim's clinical background, areas of special interest and the consultation style patients can expect.</p>
      <ul class="sm-meta-list" aria-label="Consultant highlights">
        <li data-editable="bio.point1">Consultant surgeon profile</li>
        <li data-editable="bio.point2">Private and referred patient care</li>
        <li data-editable="bio.point3">Transparent discussion of treatment options</li>
      </ul>
    </div>
  </div>
</section>`,
    css: `.sm-bio__grid {
  display: grid;
  grid-template-columns: minmax(260px, 0.42fr) minmax(0, 1fr);
  gap: clamp(34px, 7vw, 92px);
  align-items: center;
}

.sm-bio__content .sm-meta-list {
  margin-top: 30px;
}

@media (max-width: 860px) {
  .sm-bio__grid {
    grid-template-columns: 1fr;
  }
}`,
    notes: "Bio details require final verification against the consultant CV and approved claims."
  }),
  samim({
    id: "samim-consultation-journey",
    name: "Samim Consultation Journey",
    category: "Process / Approach",
    description: "Three-step patient journey covering consultation, treatment planning and aftercare.",
    tags: tags("journey", "process", "consultation"),
    sourcePage: "Home",
    sourceSection: "Consultation Journey",
    html: `<section class="sm-section sm-section--surface sm-journey" aria-labelledby="sm-journey-title">
  <div class="sm-shell">
    <p class="sm-kicker" data-editable="journey.kicker">Consultation journey</p>
    <h2 id="sm-journey-title" class="sm-title" data-editable="journey.title">From first conversation to follow-up, every step is structured.</h2>
    <div class="sm-grid sm-journey__steps">
      <article class="sm-card">
        <span class="sm-journey__number" data-editable="journey.step1.number">01</span>
        <h3 data-editable="journey.step1.title">Initial consultation</h3>
        <p data-editable="journey.step1.body">A focused assessment of symptoms, goals, medical history and whether surgery should be considered.</p>
      </article>
      <article class="sm-card">
        <span class="sm-journey__number" data-editable="journey.step2.number">02</span>
        <h3 data-editable="journey.step2.title">Clear treatment plan</h3>
        <p data-editable="journey.step2.body">Options are explained with benefits, limitations, recovery expectations and time to ask questions.</p>
      </article>
      <article class="sm-card">
        <span class="sm-journey__number" data-editable="journey.step3.number">03</span>
        <h3 data-editable="journey.step3.title">Procedure and aftercare</h3>
        <p data-editable="journey.step3.body">Careful surgical planning is paired with follow-up support and practical recovery guidance.</p>
      </article>
    </div>
  </div>
</section>`,
    css: `.sm-journey__steps {
  margin-top: 42px;
}

.sm-journey__number {
  display: block;
  margin-bottom: 24px;
  color: var(--sm-warm);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.18em;
}`,
    notes: "Designed as a reusable process block rather than a full page explanation."
  }),
  samim({
    id: "samim-results-before-after-placeholder",
    name: "Samim Results / Before-and-After Placeholder",
    category: "Before & After / Gallery",
    description: "Discreet results placeholder section for compliant before-and-after guidance or gallery replacement.",
    tags: tags("results", "gallery", "before-after"),
    sourcePage: "Home",
    sourceSection: "Results",
    html: `<section class="sm-section sm-results" aria-labelledby="sm-results-title">
  <div class="sm-shell sm-results__grid">
    <div>
      <p class="sm-kicker" data-editable="results.kicker">Results</p>
      <h2 id="sm-results-title" class="sm-title" data-editable="results.title">Discreet results guidance, reviewed before publication.</h2>
      <p class="sm-lead" data-editable="results.lead">Use this placeholder for carefully selected case examples, consented imagery or a note explaining why results are discussed during consultation.</p>
      <a class="sm-text-link" href="#sm-contact" data-editable="results.link">Discuss expected outcomes</a>
    </div>
    <figure class="sm-image-frame sm-results__media">
      <img src="${resultsImage}" alt="Discreet before and after results placeholder" data-editable="results.image" />
    </figure>
  </div>
</section>`,
    css: `.sm-results__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1fr);
  gap: clamp(32px, 6vw, 76px);
  align-items: center;
}

.sm-results__media img {
  aspect-ratio: 16 / 10;
}

.sm-results .sm-text-link {
  margin-top: 28px;
}

@media (max-width: 860px) {
  .sm-results__grid {
    grid-template-columns: 1fr;
  }
}`,
    notes: "Intended as a compliant placeholder until approved clinical images and consent wording are available."
  }),
  samim({
    id: "samim-reviews-testimonials",
    name: "Samim Reviews / Testimonials",
    category: "Testimonials",
    description: "Measured patient testimonial section with review cards and restrained social proof.",
    tags: tags("reviews", "testimonials", "social-proof"),
    sourcePage: "Home",
    sourceSection: "Reviews",
    html: `<section class="sm-section sm-section--surface sm-reviews" aria-labelledby="sm-reviews-title">
  <div class="sm-shell">
    <p class="sm-kicker" data-editable="reviews.kicker">Patient feedback</p>
    <h2 id="sm-reviews-title" class="sm-title" data-editable="reviews.title">Patients value clear explanations, calm care and thoughtful follow-up.</h2>
    <div class="sm-grid sm-reviews__grid">
      <figure class="sm-card">
        <blockquote data-editable="reviews.quote1">The consultation was clear and reassuring, with time to understand the options before deciding what felt right.</blockquote>
        <figcaption data-editable="reviews.source1">Private patient review</figcaption>
      </figure>
      <figure class="sm-card">
        <blockquote data-editable="reviews.quote2">Every step was explained carefully, from the first appointment through to recovery and follow-up.</blockquote>
        <figcaption data-editable="reviews.source2">Verified feedback placeholder</figcaption>
      </figure>
      <figure class="sm-card">
        <blockquote data-editable="reviews.quote3">A professional, considered experience with practical advice and a very calm approach.</blockquote>
        <figcaption data-editable="reviews.source3">Patient testimonial placeholder</figcaption>
      </figure>
    </div>
  </div>
</section>`,
    css: `.sm-reviews__grid {
  margin-top: 42px;
}

.sm-reviews blockquote {
  margin: 0;
  color: var(--sm-ink);
  font-family: var(--sh-font-heading);
  font-size: clamp(20px, 2vw, 28px);
  line-height: 1.3;
}

.sm-reviews figcaption {
  margin-top: 22px;
  color: var(--sm-accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}`,
    notes: "Replace placeholder testimonials only with approved, consented and source-checked review copy."
  }),
  samim({
    id: "samim-research-publications-section",
    name: "Samim Research / Publications Section",
    category: "Content / Article Blocks",
    description: "Authority-building research and publications section with article-style entries.",
    tags: tags("research", "publications", "authority"),
    sourcePage: "Home",
    sourceSection: "Research",
    html: `<section class="sm-section sm-research" aria-labelledby="sm-research-title">
  <div class="sm-shell sm-research__grid">
    <div>
      <p class="sm-kicker" data-editable="research.kicker">Research and publications</p>
      <h2 id="sm-research-title" class="sm-title" data-editable="research.title">Clinical work informed by current evidence and ongoing professional practice.</h2>
      <p class="sm-lead" data-editable="research.lead">Use this section for selected papers, presentations, audits or areas of specialist academic interest.</p>
    </div>
    <div class="sm-research__list" aria-label="Selected publications">
      <article class="sm-research__item">
        <p data-editable="research.item1.meta">Selected publication</p>
        <h3 data-editable="research.item1.title">Publication title or research theme placeholder</h3>
      </article>
      <article class="sm-research__item">
        <p data-editable="research.item2.meta">Presentation or audit</p>
        <h3 data-editable="research.item2.title">Clinical audit, presentation or conference contribution</h3>
      </article>
      <article class="sm-research__item">
        <p data-editable="research.item3.meta">Professional interest</p>
        <h3 data-editable="research.item3.title">Specialist interest area to verify with final consultant profile</h3>
      </article>
    </div>
  </div>
</section>`,
    css: `.sm-research__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(320px, 1fr);
  gap: clamp(34px, 7vw, 92px);
  align-items: start;
}

.sm-research__list {
  display: grid;
  gap: 0;
  border-top: 1px solid var(--sm-line);
}

.sm-research__item {
  border-bottom: 1px solid var(--sm-line);
  padding: 24px 0;
}

.sm-research__item p {
  margin: 0 0 8px;
  color: var(--sm-accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.sm-research__item h3 {
  margin: 0;
  color: var(--sm-ink);
  font-family: var(--sh-font-heading);
  font-size: clamp(21px, 2.2vw, 30px);
  font-weight: 650;
  line-height: 1.18;
}

@media (max-width: 860px) {
  .sm-research__grid {
    grid-template-columns: 1fr;
  }
}`,
    notes: "Publication entries are placeholders and need verification before use."
  }),
  samim({
    id: "samim-contact-cta",
    name: "Samim Contact CTA",
    category: "Contact CTAs",
    description: "Homepage closing CTA for consultation enquiries with direct contact links.",
    tags: tags("contact", "cta", "enquiry"),
    sourcePage: "Home",
    sourceSection: "Contact CTA",
    html: `<section id="sm-contact" class="sm-section sm-contact" aria-labelledby="sm-contact-title">
  <div class="sm-shell sm-contact__panel">
    <div>
      <p class="sm-kicker" data-editable="contact.kicker">Next step</p>
      <h2 id="sm-contact-title" class="sm-title" data-editable="contact.title">Arrange a private consultation to discuss your options.</h2>
      <p class="sm-lead" data-editable="contact.lead">Enquire about appointment availability, referral information and the most appropriate route for your situation.</p>
    </div>
    <div class="sm-contact__actions">
      <a class="sm-button" href="mailto:hello@example.com" data-editable="contact.email">Email the practice</a>
      <a class="sm-button-outline" href="tel:+440000000000" data-editable="contact.phone">Call the clinic</a>
    </div>
  </div>
</section>`,
    css: `.sm-contact {
  background: var(--sm-ink);
}

.sm-contact__panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: clamp(28px, 6vw, 76px);
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: var(--sm-radius);
  padding: clamp(30px, 5vw, 58px);
}

.sm-contact .sm-kicker {
  color: var(--sm-warm);
}

.sm-contact .sm-title,
.sm-contact .sm-lead {
  color: #ffffff;
}

.sm-contact__actions {
  display: grid;
  gap: 12px;
  min-width: 220px;
}

.sm-contact .sm-button-outline {
  border-color: rgba(255, 255, 255, 0.32);
  color: #ffffff;
}

@media (max-width: 860px) {
  .sm-contact__panel {
    grid-template-columns: 1fr;
  }
}`,
    notes: "Replace placeholder email and phone links before Elementor testing."
  })
];
