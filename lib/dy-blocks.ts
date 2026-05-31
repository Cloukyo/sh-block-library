import type { Block } from "@/types/block";

const logoImage = "https://www.dyskinclinic.com/wp-content/uploads/2023/10/DYSkin-logo.png";
const heroImage = "https://www.dyskinclinic.com/wp-content/uploads/2023/10/Front-photo-200x300.png";
const footerLogo = "https://dyskinclinic.com/wp-content/uploads/2023/06/DY-Logo-Transparent-300x300.png";

const dyBaseCss = `.dy-section {
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

function dy(block: Omit<Block, "client" | "style" | "sourceProject" | "version" | "status">): Block {
  return {
    ...block,
    client: "Dominic",
    style: "DY Skin Clinic",
    sourceProject: "DY Skin Clinic",
    sourceUrl: "https://www.dyskinclinic.com/",
    version: "v1",
    status: "Needs Review"
  };
}

function treatment(title: string, body: string, href = "#") {
  return `<article class="dy-treatment-card">
  <span class="dy-plus">+</span>
  <div>
    <h3><a href="${href}">${title}</a></h3>
    <p>${body}</p>
  </div>
</article>`;
}

export const dyBlocks: Block[] = [
  dy({
    id: "dy-header-navigation",
    name: "DY Header / Navigation",
    category: "Headers",
    description: "DY Skin Clinic desktop-style navigation with treatment dropdown group links and contact CTA.",
    tags: ["dy", "header", "navigation", "clinic", "domin ic".replace(" ", "")],
    sourcePage: "Home",
    sourceSection: "Header",
    html: `<header class="dy-site-header" aria-label="DY Skin Clinic navigation">
  <nav class="dy-header-nav">
    <a class="dy-nav-active" href="/">Home</a>
    <a href="/price-list/">Price List</a>
    <a href="/#treatment">Treatment List⌄</a>
    <a href="/#surgical">Surgical⌄</a>
    <a href="/#scar-improvements">Scar Improvements⌄</a>
    <a href="/#appointment">Book Now</a>
    <a href="/about/">About</a>
  </nav>
  <div class="dy-header-actions">
    <a aria-label="Instagram" href="https://www.instagram.com/dr.domyue/">Instagram</a>
    <a aria-label="WhatsApp" href="https://api.whatsapp.com/send?phone=+447504522501">WhatsApp</a>
    <a aria-label="Phone" href="tel:+447504522501">Phone</a>
    <a class="dy-contact-button" href="/#appointment">Contact Us</a>
  </div>
</header>`,
    css: `.dy-site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  background: #ffffff;
  color: #3d3d3d;
  font-family: Inter, Arial, sans-serif;
  padding: 38px 60px 22px;
}
.dy-header-nav,
.dy-header-actions {
  display: flex;
  align-items: center;
  gap: 34px;
}
.dy-header-nav a,
.dy-header-actions a {
  color: #3d3d3d;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-transform: uppercase;
}
.dy-header-nav .dy-nav-active {
  color: #d1a48e;
}
.dy-contact-button {
  background: #d1a48e;
  color: #ffffff !important;
  padding: 18px 34px;
}
@media (max-width: 900px) {
  .dy-site-header {
    padding: 14px 28px;
    justify-content: space-between;
  }
  .dy-header-nav {
    display: none;
  }
  .dy-header-actions {
    gap: 22px;
  }
  .dy-contact-button {
    display: none;
  }
}`,
    notes: "The live site uses icon glyphs for Instagram, WhatsApp and phone. Replace text labels with icons in Elementor if desired."
  }),
  dy({
    id: "dy-hero-section",
    name: "DY Homepage Hero",
    category: "Heroes",
    description: "Marble hero with DY logo image, model image and book consultation CTA.",
    tags: ["dy", "hero", "homepage", "clinic"],
    sourcePage: "Home",
    sourceSection: "Hero",
    html: `<section class="dy-hero" aria-labelledby="dy-hero-title">
  <div class="dy-hero-inner">
    <div class="dy-hero-copy">
      <img class="dy-hero-logo" src="${logoImage}" alt="DY Skin Clinic" />
      <a class="dy-button" href="#appointment">Book a consultation⌄</a>
    </div>
    <img class="dy-hero-model" src="${heroImage}" alt="DY Skin Clinic model" />
  </div>
</section>`,
    css: `${dyBaseCss}
.dy-hero {
  background:
    linear-gradient(180deg, rgba(255,255,255,0.58), rgba(255,255,255,0.76)),
    radial-gradient(circle at 50% 30%, rgba(209,164,142,0.10), transparent 28%),
    #f7f7f7;
  color: var(--dy-text);
  font-family: Inter, Arial, sans-serif;
  overflow: hidden;
  padding: 20px 60px 0;
}
.dy-hero-inner {
  max-width: 1120px;
  min-height: 360px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(360px, 0.62fr) minmax(220px, 0.38fr);
  gap: 70px;
  align-items: end;
}
.dy-hero-copy {
  align-self: center;
  display: grid;
  gap: 38px;
  justify-items: start;
}
.dy-hero-logo {
  width: min(420px, 100%);
  height: auto;
}
.dy-hero-model {
  width: 260px;
  justify-self: center;
  align-self: end;
}
@media (max-width: 820px) {
  .dy-hero {
    padding: 34px 20px 0;
  }
  .dy-hero-inner {
    min-height: 410px;
    grid-template-columns: 1fr;
    gap: 24px;
    justify-items: center;
    text-align: center;
  }
  .dy-hero-copy {
    justify-items: center;
  }
  .dy-hero-logo {
    width: 250px;
  }
  .dy-hero-model {
    width: 200px;
  }
}`,
    notes: `Uses live image assets: ${logoImage} and ${heroImage}. The live mobile screenshot showed the logo image can fail if mixed domains/caching interfere; review final asset URL before publishing.`
  }),
  dy({
    id: "dy-non-surgical-treatments-grid",
    name: "DY Non-Surgical Treatments Grid",
    category: "Service Grids",
    description: "Six-card non-surgical treatment list from the homepage.",
    tags: ["dy", "treatments", "services", "non-surgical", "grid"],
    sourcePage: "Home",
    sourceSection: "Non-Surgical Treatments",
    html: `<section id="treatment" class="dy-section" aria-labelledby="dy-non-surgical-title">
  <div class="dy-shell">
    <h2 id="dy-non-surgical-title" class="dy-heading">Non-Surgical Treatments</h2>
    <div class="dy-treatment-grid">
      ${treatment("Botulinum Toxin", "Changing muscle activity to smooth wrinkles. Facial expressions are kept.", "/botox/")}
      ${treatment("Dermal Fillers", "Replace lost volume or reshape contours with a guaranteed natural result.", "/dermal-fillers/")}
      ${treatment("Skin Boosters", "Improve skin quality with collagen stimulators, peptides & regenerative injections.", "/skin-boosters/")}
      ${treatment("Fat Dissolving injections", "Jowls and under-chin areas with excess fat are typical locations treated.", "/fat-dissolving-injections/")}
      ${treatment("Over-sweating Treatment", "Hyperhidrosis can be reliably treated with Botulinum Toxin.", "/over-sweating-treatment/")}
      ${treatment("V-Line Facial Slimming", "Combining masseter treatment, fat dissolving and chin injections.", "/v-line-facial-slimming/")}
    </div>
  </div>
</section>`,
    css: dyBaseCss,
    notes: "Treatment titles and links are from the homepage. Review descriptions against final approved copy."
  }),
  dy({
    id: "dy-surgical-treatments-grid",
    name: "DY Surgical Treatments Grid",
    category: "Treatment / Service Detail",
    description: "Surgical treatments section with soft taupe background and italic subheading.",
    tags: ["dy", "surgical", "treatments", "service-detail"],
    sourcePage: "Home",
    sourceSection: "Surgical Treatments",
    html: `<section id="surgical" class="dy-section dy-section-soft" aria-labelledby="dy-surgical-title">
  <div class="dy-shell">
    <h2 id="dy-surgical-title" class="dy-heading">Surgical Treatments</h2>
    <p class="dy-subheading">All done under a gentle local anaesthetic</p>
    <div class="dy-treatment-grid">
      ${treatment("Mole Removal", "Assessment and removal of suitable benign skin lesions under local anaesthetic.", "/mole-removal/")}
      ${treatment("Cyst Removal", "Removal of cysts with careful closure and aftercare guidance.", "/cyst-removal/")}
      ${treatment("Lipoma Removal", "Treatment for suitable lipomas in a clinic setting.", "/lipoma-removal/")}
      ${treatment("Skin Cancer Surgery", "Surgical management where appropriate, with review and guidance.", "/skin-cancer-surgery/")}
      ${treatment("Earlobe Surgery", "Repair and reshaping for stretched, split or damaged earlobes.", "/earlobe-surgery/")}
      ${treatment("Dupuytrens", "Assessment and treatment options for Dupuytren’s contracture.", "/dupuytrens/")}
    </div>
  </div>
</section>`,
    css: `${dyBaseCss}
.dy-section-soft {
  background: var(--dy-soft);
}`,
    notes: "Some surgical descriptions are concise reconstruction from visible treatment titles and should be reviewed against service pages."
  }),
  dy({
    id: "dy-scar-improvements-grid",
    name: "DY Scar Improvements Grid",
    category: "Before & After / Gallery",
    description: "Scar improvements section for mature scars and pre-optimising surgical scars.",
    tags: ["dy", "scar", "before-after", "results"],
    sourcePage: "Home",
    sourceSection: "Scar Improvements",
    html: `<section id="scar-improvements" class="dy-section" aria-labelledby="dy-scars-title">
  <div class="dy-shell">
    <h2 id="dy-scars-title" class="dy-heading">Scar Improvements</h2>
    <div class="dy-treatment-grid dy-treatment-grid-two">
      ${treatment("Mature Scars", "Support for improving the look and feel of existing scars.", "/mature-scars/")}
      ${treatment("Pre-optimising Upcoming Surgical Scars", "Planning ahead to support scars before upcoming surgery.", "/pre-optimising-upcoming-surgical-scars/")}
    </div>
  </div>
</section>`,
    css: `${dyBaseCss}
.dy-treatment-grid-two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 760px;
  margin-inline: auto;
}
@media (max-width: 820px) {
  .dy-treatment-grid-two {
    grid-template-columns: 1fr;
  }
}`,
    notes: "The live page has scar-improvement navigation. Add before/after images later if approved and available."
  }),
  dy({
    id: "dy-why-choose-section",
    name: "DY Why Choose / Credibility Section",
    category: "Comparison / Why Choose",
    description: "Clinic credibility section inspired by the homepage value proposition.",
    tags: ["dy", "credibility", "why-choose", "authority"],
    sourcePage: "Home",
    sourceSection: "Why Choose DY Skin Clinic",
    html: `<section class="dy-section dy-why" aria-labelledby="dy-why-title">
  <div class="dy-shell dy-why-grid">
    <div>
      <h2 id="dy-why-title" class="dy-heading">Why Choose DY Skin Clinic?</h2>
      <p>DY Skin Clinic offers carefully considered aesthetic and minor surgical treatments with a focus on natural-looking results, safety and a calm patient experience.</p>
    </div>
    <div class="dy-why-list">
      <article><strong>Doctor-led care</strong><span>Consultations and treatments led with medical judgement.</span></article>
      <article><strong>Natural results</strong><span>Subtle enhancement and skin quality are prioritised.</span></article>
      <article><strong>Clinic setting</strong><span>Minor surgical procedures are performed under local anaesthetic where suitable.</span></article>
    </div>
  </div>
</section>`,
    css: `${dyBaseCss}
.dy-why-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(320px, 0.7fr);
  gap: 64px;
  align-items: center;
}
.dy-why .dy-heading {
  text-align: left;
}
.dy-why p {
  color: var(--dy-text);
  font-size: 17px;
  line-height: 1.8;
}
.dy-why-list {
  display: grid;
  gap: 16px;
}
.dy-why-list article {
  border: 1px solid var(--dy-border);
  padding: 22px;
}
.dy-why-list strong,
.dy-why-list span {
  display: block;
}
.dy-why-list strong {
  color: var(--dy-heading);
  font-family: Georgia, serif;
  font-size: 25px;
}
.dy-why-list span {
  margin-top: 8px;
  line-height: 1.7;
}
@media (max-width: 820px) {
  .dy-why-grid {
    grid-template-columns: 1fr;
  }
  .dy-why .dy-heading {
    text-align: center;
  }
}`,
    notes: "The exact detailed credibility copy needs review against the final live section. This block preserves the DY tone and visual style."
  }),
  dy({
    id: "dy-testimonials-reviews",
    name: "DY Testimonials / Reviews",
    category: "Reviews / Social Proof",
    description: "Simple review/social proof section matching the site's light DY visual style.",
    tags: ["dy", "reviews", "testimonials", "social-proof"],
    sourcePage: "Home",
    sourceSection: "Testimonials / Reviews",
    html: `<section class="dy-section dy-section-soft dy-reviews" aria-labelledby="dy-reviews-title">
  <div class="dy-shell">
    <h2 id="dy-reviews-title" class="dy-heading">What Our Clients Say</h2>
    <div class="dy-review-grid">
      <article><p>“Professional, reassuring and natural results.”</p><span>Patient review placeholder</span></article>
      <article><p>“Clear advice and a calm clinic experience.”</p><span>Patient review placeholder</span></article>
      <article><p>“A considered approach to treatment.”</p><span>Patient review placeholder</span></article>
    </div>
  </div>
</section>`,
    css: `${dyBaseCss}
.dy-reviews {
  background: var(--dy-soft);
}
.dy-review-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 44px;
}
.dy-review-grid article {
  background: #ffffff;
  border: 1px solid rgba(209,164,142,0.45);
  padding: 30px;
}
.dy-review-grid p {
  margin: 0;
  color: var(--dy-dark);
  font-family: Georgia, serif;
  font-size: 22px;
  line-height: 1.45;
}
.dy-review-grid span {
  display: block;
  margin-top: 18px;
  color: var(--dy-heading);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
@media (max-width: 820px) {
  .dy-review-grid {
    grid-template-columns: 1fr;
  }
}`,
    notes: "Review text is placeholder because exact review copy was not extracted from the inspected page. Replace with verified reviews only."
  }),
  dy({
    id: "dy-appointment-contact-section",
    name: "DY Appointment / Contact Section",
    category: "Forms / Enquiry",
    description: "Book-now contact section with enquiry form style and contact routes.",
    tags: ["dy", "contact", "form", "enquiry", "cta"],
    sourcePage: "Home",
    sourceSection: "Appointment / Contact",
    html: `<section id="appointment" class="dy-section dy-appointment" aria-labelledby="dy-appointment-title">
  <div class="dy-shell dy-appointment-grid">
    <div>
      <h2 id="dy-appointment-title" class="dy-heading">Book an Appointment</h2>
      <p>Contact DY Skin Clinic to discuss treatments, availability and next steps.</p>
      <div class="dy-contact-links">
        <a href="https://api.whatsapp.com/send?phone=+447504522501">WhatsApp: +44 7504 522501</a>
        <a href="tel:+447504522501">Call: +44 7504 522501</a>
        <a href="https://www.instagram.com/dr.domyue/">Instagram: @dr.domyue</a>
      </div>
    </div>
    <form class="dy-contact-form">
      <label>Name<input type="text" name="name" /></label>
      <label>Email<input type="email" name="email" /></label>
      <label>Message<textarea name="message" rows="5"></textarea></label>
      <button class="dy-button" type="submit">Contact Us</button>
    </form>
  </div>
</section>`,
    css: `${dyBaseCss}
.dy-appointment-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(320px, 0.8fr);
  gap: 64px;
  align-items: start;
}
.dy-appointment .dy-heading {
  text-align: left;
}
.dy-appointment p,
.dy-contact-links a {
  color: var(--dy-text);
  font-size: 17px;
  line-height: 1.8;
}
.dy-contact-links {
  display: grid;
  gap: 10px;
  margin-top: 24px;
}
.dy-contact-links a {
  color: var(--dy-heading);
}
.dy-contact-form {
  display: grid;
  gap: 16px;
  border: 1px solid var(--dy-border);
  padding: 28px;
}
.dy-contact-form label {
  display: grid;
  gap: 8px;
  color: var(--dy-dark);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.dy-contact-form input,
.dy-contact-form textarea {
  border: 1px solid rgba(209,164,142,0.55);
  padding: 14px;
  font: inherit;
}
@media (max-width: 820px) {
  .dy-appointment-grid {
    grid-template-columns: 1fr;
  }
  .dy-appointment .dy-heading {
    text-align: center;
  }
}`,
    notes: "The live site uses WPForms. In Elementor, replace this static form with Elementor Form/WPForms and keep the wrapper styling."
  }),
  dy({
    id: "dy-about-clinic-intro",
    name: "DY About / Clinic Intro",
    category: "Intro Sections",
    description: "About page intro block for DY Skin Clinic and Dr Dominic Yue.",
    tags: ["dy", "about", "intro", "doctor"],
    sourceUrl: "https://www.dyskinclinic.com/about/",
    sourcePage: "About",
    sourceSection: "About intro",
    html: `<section class="dy-section dy-about" aria-labelledby="dy-about-title">
  <div class="dy-shell dy-about-grid">
    <img src="${footerLogo}" alt="DY Skin Clinic" />
    <div>
      <h2 id="dy-about-title" class="dy-heading">About DY Skin Clinic</h2>
      <p>DY Skin Clinic is led by Dr Dominic Yue and offers aesthetic, skin and minor surgical treatments with a calm, medically informed approach.</p>
      <p>The site positions the clinic around natural results, safety and carefully selected treatments across non-surgical aesthetics, skin surgery and scar improvement.</p>
    </div>
  </div>
</section>`,
    css: `${dyBaseCss}
.dy-about-grid {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 56px;
  align-items: center;
}
.dy-about-grid img {
  width: 220px;
}
.dy-about .dy-heading {
  text-align: left;
}
.dy-about p {
  color: var(--dy-text);
  font-size: 17px;
  line-height: 1.8;
}
@media (max-width: 820px) {
  .dy-about-grid {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
  .dy-about .dy-heading {
    text-align: center;
  }
}`,
    notes: "About copy is a concise reconstruction from inspected site positioning. Review against final approved About page copy."
  }),
  dy({
    id: "dy-pricing-fees-preview",
    name: "DY Pricing / Fees Preview",
    category: "Pricing / Fees",
    description: "Price-list callout block linking to the live price list page.",
    tags: ["dy", "pricing", "fees", "price-list"],
    sourceUrl: "https://www.dyskinclinic.com/price-list/",
    sourcePage: "Price List",
    sourceSection: "Pricing overview",
    html: `<section class="dy-section dy-section-soft dy-pricing" aria-labelledby="dy-pricing-title">
  <div class="dy-shell">
    <h2 id="dy-pricing-title" class="dy-heading">Price List</h2>
    <p class="dy-subheading">Review treatment pricing before booking a consultation.</p>
    <div class="dy-actions"><a class="dy-button" href="/price-list/">View Price List</a></div>
  </div>
</section>`,
    css: `${dyBaseCss}
.dy-pricing {
  background: var(--dy-soft);
  text-align: center;
}
.dy-actions {
  margin-top: 32px;
}`,
    notes: "Detailed price rows were not rebuilt in this pass. Use this as a modular pricing CTA or extend with approved price table content."
  }),
  dy({
    id: "dy-footer",
    name: "DY Footer",
    category: "Footer CTAs",
    description: "DY Skin Clinic footer with logo, navigation and contact links.",
    tags: ["dy", "footer", "contact"],
    sourcePage: "Home",
    sourceSection: "Footer",
    html: `<footer class="dy-footer">
  <div class="dy-footer-inner">
    <img src="${footerLogo}" alt="DY Skin Clinic" />
    <nav>
      <a href="/">Home</a>
      <a href="/price-list/">Price List</a>
      <a href="/#treatment">Treatment List</a>
      <a href="/#appointment">Book Now</a>
      <a href="/about/">About</a>
    </nav>
    <div class="dy-footer-contact">
      <a href="https://www.instagram.com/dr.domyue/">Instagram</a>
      <a href="https://api.whatsapp.com/send?phone=+447504522501">WhatsApp</a>
      <a href="tel:+447504522501">+44 7504 522501</a>
    </div>
  </div>
</footer>`,
    css: `.dy-footer {
  background: #ffffff;
  border-top: 1px solid rgba(209,164,142,0.35);
  color: #7f7c76;
  font-family: Inter, Arial, sans-serif;
  padding: 58px 24px;
}
.dy-footer-inner {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  gap: 28px;
  justify-items: center;
  text-align: center;
}
.dy-footer img {
  width: 110px;
}
.dy-footer nav,
.dy-footer-contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px 28px;
}
.dy-footer a {
  color: #3d3d3d;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
}`,
    notes: "Footer logo uses the transparent DY logo from the live site. Replace or compress asset if needed."
  })
];
