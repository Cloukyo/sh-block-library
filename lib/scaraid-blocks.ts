import type { Block, BlockCategory } from "@/types/block";

const logoImage = "http://salmanh3.sg-host.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-6-2026-05_40_36-PM.png";
const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAPnyWazAjdJn-vgJpe_KVISlMQGZs6Nvr1Y0-60E1laUOBGS5uudD9ifByXmKdNZmQ_pL6SnvAqy1s4J-qwFFrTpsIVHKZtgP_zWvQp0qECdA0W_xRqLq7vvQqfcDXvq1UlS3OMmh-95BmEcKLbFlsvqhT0gEho78rWkj0HyUAUgm3hdMuMGs5dwBZ8YNOE1ENKaANj_19gxZW-4iieizlduDtKgv6VXyoj9V3f60K7RabygC3saKQWesoXe8p04NKzFNBRkZM3BYm";
const evidenceImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCO1ltOgUzDVJSCubuBHH6kOkqfkVjqVWqGKxBhwzFRFw7Gxqd18aXSESWMBly_UaB36cGpe8JOOBudM-LBuqSL2S4H_NNHmt-xi1xbKxTBT7jNDbh6xRN7gHy6aOVfADLd1rTvcNi6JQuWCr5uBAE2m5OfgbCgaSIVrpyMsf396C_q5ZCfJmbPpXSFDt5EATIPdUGzy0tMlGJZyxsMWahOCACN4d3T54vLN3GtU2FMX8tjJO9o7ISqT7lDQlgfxTWbyr0S2AfMJPKE";
const caseImageOne =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDBbsxYpEw4mplKE_ywHuLWYFBw9eXxXrwZFJEftPIrq3hz6nC5RXxRt3DKhbsH8SFBIqmsTLOMoChEkwL4I5Gfq5XCtJSi6apbYqVTBT3Fq-EtG47r7Qy17rQbD84glu32Qrvdre390f4xYUfTONXMX1QeHLn0lY2qGUcKq_Vd15SEfxM6kjuBk4Oy28IT1eOYPfxVm1Hdi89EhzjEA00at5Prs8VS4sX5ywpylT56ka-h-4Bzgs9cGhU1ra-1-qxZG2sHK7u2jQrp";
const caseImageTwo =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZPRKTpp0ra8VKHZTUGNDbcIgvgiRuV2AddJupo_hgvB4qFrprufi3PWcGnuGfcPudl4moORMgti7V1S5rf-YNAxegDBe5kA_WTo7LrjWtczJMpf_eIWDUX0ywkOw8pOsJ10WbljbUY-esVXSTd8AeFtLqKuGWAMofWaUUzrOXwGpF1mYNHqTGNS6Y2FwaFMLdZHwrI9s7a6EsbWXkxStnyvlRh7oI3L-On0_vofPPx1G-4SRDQv2TWP6E6kPLG66vmHyUc_6i74Ls";

const scaraidTags = ["scaraid", "scar-care", "clinical", "elementor"];

type ScarAidBlockInput = Omit<Block, "client" | "style" | "foundationId" | "sourceProject" | "version" | "status" | "elementorQaStatus">;

function scaraid(block: ScarAidBlockInput): Block {
  return {
    ...block,
    client: "ScarAid",
    style: "ScarAid Clinical",
    foundationId: "scaraid-foundation",
    sourceProject: "ScarAid Website Template",
    version: "v2",
    status: "Needs Review",
    elementorQaStatus: "Needs Review"
  };
}

function tags(...extra: string[]) {
  return [...scaraidTags, ...extra];
}

function icon(name: "flask" | "heart" | "chart" | "spark" | "skin" | "clock" | "doc") {
  const paths = {
    flask: `<path d="M10 3h12M15 3v8.5L8.5 23a5 5 0 0 0 4.4 7.4h13.2a5 5 0 0 0 4.4-7.4L24 11.5V3"/><path d="M12 21h17"/>`,
    heart: `<path d="M6 18h5l3-7 5 14 3-7h7"/><path d="M26 11c0-3.3-4.2-5.4-7-2.4-2.8-3-7-0.9-7 2.4"/>`,
    chart: `<path d="M7 27h23"/><path d="M10 23v-8"/><path d="M18 23V9"/><path d="M26 23V13"/>`,
    spark: `<path d="M18 4l2.7 8.3L29 15l-8.3 2.7L18 26l-2.7-8.3L7 15l8.3-2.7L18 4z"/>`,
    skin: `<path d="M8 18c5-8 15-8 20 0"/><path d="M8 18c5 8 15 8 20 0"/><path d="M14 18h12"/>`,
    clock: `<circle cx="18" cy="18" r="12"/><path d="M18 10v8l5 3"/>`,
    doc: `<path d="M11 5h11l6 6v20H11z"/><path d="M22 5v7h7"/><path d="M15 18h10M15 23h8"/>`
  };

  return `<svg class="scaraid-icon" viewBox="0 0 36 36" aria-hidden="true" focusable="false">${paths[name]}</svg>`;
}

function heroBlock(id: string, name: string, sourcePage: string, title: string, body: string, primaryLabel: string, primaryHref: string, secondaryLabel: string, secondaryHref: string): Block {
  return scaraid({
    id,
    name,
    category: "Heroes",
    description: `${sourcePage} two-column rounded hero for the ScarAid site template.`,
    tags: tags("hero", sourcePage.toLowerCase().replace(/\s+/g, "-")),
    sourcePage,
    sourceSection: "Hero",
    html: `<section class="scaraid-hero scaraid-page-hero" style="--scaraid-hero-image: url('${heroImage}')" aria-labelledby="${id}-title">
  <div class="scaraid-container">
    <div class="scaraid-hero__panel">
      <div class="scaraid-hero__copy scaraid-reveal scaraid-reveal--left">
        <h1 id="${id}-title" data-editable="hero.title">${title}</h1>
        <p data-editable="hero.body">${body}</p>
        <div class="scaraid-button-row">
          <a class="scaraid-button scaraid-button--dark" href="${primaryHref}" data-editable="hero.primary">${primaryLabel}</a>
          <a class="scaraid-button scaraid-button--outline" href="${secondaryHref}" data-editable="hero.secondary">${secondaryLabel}</a>
        </div>
      </div>
      <div class="scaraid-hero__visual scaraid-reveal scaraid-reveal--right">
        <div class="scaraid-hero__image" role="img" aria-label="Clinical scar science visual placeholder"></div>
      </div>
    </div>
  </div>
</section>`,
    css: "",
    notes: "Hero image is temporarily remote from the draft. Replace with a WordPress/media-library asset when approved."
  });
}

function simpleTextBlock(id: string, name: string, sourcePage: string, title: string, paragraphs: string[], category: BlockCategory = "Intro Sections"): Block {
  return scaraid({
    id,
    name,
    category,
    description: `${sourcePage} editorial text block for the ScarAid site template.`,
    tags: tags("editorial", sourcePage.toLowerCase().replace(/\s+/g, "-")),
    sourcePage,
    sourceSection: name.replace("ScarAid ", ""),
    html: `<section class="scaraid-section scaraid-editorial" aria-labelledby="${id}-title">
  <div class="scaraid-container scaraid-editorial__inner scaraid-reveal">
    <h2 id="${id}-title" data-editable="title">${title}</h2>
    <div class="scaraid-rich-text">
${paragraphs.map((paragraph) => `      <p data-editable="paragraph">${paragraph}</p>`).join("\n")}
    </div>
  </div>
</section>`,
    css: "",
    notes: "Copy is editable. Keep medical claims restrained during final content approval."
  });
}

function cardGridBlock(id: string, name: string, sourcePage: string, title: string, intro: string, cards: Array<{ title: string; body: string; icon?: "flask" | "heart" | "chart" | "spark" | "skin" | "clock" | "doc" }>, category: BlockCategory = "Process / Approach"): Block {
  return scaraid({
    id,
    name,
    category,
    description: `${sourcePage} reusable ScarAid card grid.`,
    tags: tags("cards", sourcePage.toLowerCase().replace(/\s+/g, "-")),
    sourcePage,
    sourceSection: name.replace("ScarAid ", ""),
    html: `<section class="scaraid-section scaraid-card-section" aria-labelledby="${id}-title">
  <div class="scaraid-container">
    <div class="scaraid-section-heading scaraid-reveal">
      <h2 id="${id}-title">${title}</h2>
      ${intro ? `<p>${intro}</p>` : ""}
    </div>
    <div class="scaraid-card-grid">
${cards
  .map(
    (card, index) => `      <article class="scaraid-info-card scaraid-reveal" style="--scaraid-reveal-delay: ${index * 70}ms">
        ${card.icon ? icon(card.icon) : ""}
        <h3>${card.title}</h3>
        <p>${card.body}</p>
      </article>`
  )
  .join("\n")}
    </div>
  </div>
</section>`,
    css: "",
    notes: "Repeated cards are generated from structured data for safer editing and reuse."
  });
}

const consultationFormHtml = `<section class="scaraid-section scaraid-contact-section" id="contact" aria-labelledby="scaraid-consultation-title">
  <div class="scaraid-container">
    <div class="scaraid-contact-panel scaraid-reveal">
      <div class="scaraid-contact-panel__copy">
        <h2 id="scaraid-consultation-title">Start planning your scar outcome earlier</h2>
        <p>Our surgeons are available for clinical consultations in London. Please provide your details and the team will contact you to discuss the next step.</p>
        <div class="scaraid-contact-meta">
          <span>Central London clinic location to be confirmed</span>
          <span>Contact email to be confirmed</span>
        </div>
      </div>
      <form class="scaraid-placeholder-form" aria-label="Placeholder consultation enquiry form">
        <label>Full Name<input type="text" name="full-name" placeholder="Full Name" /></label>
        <label>Email Address<input type="email" name="email" placeholder="Email Address" /></label>
        <label>Phone Number<input type="tel" name="phone" placeholder="Phone Number" /></label>
        <label>Patient or Clinician<select name="audience"><option>Patient</option><option>Clinician</option></select></label>
        <label>Procedure / Concern<input type="text" name="concern" placeholder="Procedure / Concern" /></label>
        <label>Surgery Date, if known<input type="text" name="surgery-date" placeholder="Surgery Date, if known" /></label>
        <label class="scaraid-form-wide">Additional Message<textarea name="message" rows="5" placeholder="Additional Message"></textarea></label>
        <button class="scaraid-button scaraid-button--dark" type="button">Submit Consultation Request</button>
        <p class="scaraid-form-note">Placeholder form for builder preview. Connect to Elementor Form or approved form handling before launch.</p>
      </form>
    </div>
  </div>
</section>`;

export const scaraidBlocks: Block[] = [
  scaraid({
    id: "scaraid-global-foundation",
    name: "ScarAid Global Foundation",
    category: "Global Foundation",
    description: "Shared ScarAid tokens, typography, buttons, responsive containers, animation classes and reusable component styles.",
    tags: tags("foundation", "global", "css"),
    sourcePage: "Shared",
    sourceSection: "Foundation",
    useCase: "Use Foundation Only once for a ScarAid page, then paste lean ScarAid blocks.",
    html: `<section class="scaraid-section" aria-labelledby="scaraid-foundation-title">
  <div class="scaraid-container">
    <h2 id="scaraid-foundation-title" class="scaraid-centered-heading">ScarAid Global Foundation</h2>
    <p class="scaraid-lead">Shared styling for the six-page ScarAid website template.</p>
  </div>
</section>`,
    css: "",
    notes: "The actual CSS is registered as the scaraid-foundation in lib/foundation-presets.ts."
  }),
  scaraid({
    id: "scaraid-animation-script",
    name: "ScarAid Animation Script",
    category: "Utility Blocks",
    description: "One shared native JavaScript block for header behaviour, reveal animations, comparison expansion and case-study filtering.",
    tags: tags("javascript", "animation", "header", "filtering"),
    sourcePage: "Shared",
    sourceSection: "Site Script",
    html: `<script>
(function () {
  var root = document.documentElement;
  root.classList.add("scaraid-animations-ready");
  document.querySelectorAll("[data-scaraid-year]").forEach(function (item) {
    item.textContent = String(new Date().getFullYear());
  });

  var header = document.querySelector("[data-scaraid-header]");
  var menuButton = document.querySelector("[data-scaraid-menu-button]");
  var mobileMenu = document.querySelector("[data-scaraid-mobile-menu]");

  function closeMenu() {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
    header && header.classList.remove("scaraid-header--menu-open");
  }

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      var expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.hidden = expanded;
      header && header.classList.toggle("scaraid-header--menu-open", !expanded);
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape") closeMenu(); });
    window.addEventListener("resize", function () { if (window.innerWidth > 980) closeMenu(); });
  }

  function updateHeaderShadow() {
    if (header) header.classList.toggle("scaraid-header--scrolled", window.scrollY > 12);
  }
  updateHeaderShadow();
  window.addEventListener("scroll", updateHeaderShadow, { passive: true });

  var revealItems = Array.prototype.slice.call(document.querySelectorAll(".scaraid-reveal"));
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("scaraid-is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("scaraid-is-visible"); });
  }

  document.querySelectorAll("[data-scaraid-table-toggle]").forEach(function (button) {
    var table = document.getElementById(button.getAttribute("aria-controls") || "");
    if (!table) return;
    button.addEventListener("click", function () {
      var expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      button.textContent = expanded ? "Show More" : "Show Less";
      table.querySelectorAll("[data-scaraid-extra-row]").forEach(function (row) { row.hidden = expanded; });
    });
  });

  document.querySelectorAll("[data-scaraid-case-filters]").forEach(function (filterGroup) {
    var targetId = filterGroup.getAttribute("data-scaraid-case-filters");
    var grid = document.getElementById(targetId || "");
    if (!grid) return;
    filterGroup.querySelectorAll("button").forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-filter") || "all";
        filterGroup.querySelectorAll("button").forEach(function (item) {
          item.classList.toggle("scaraid-filter-pill--active", item === button);
          item.setAttribute("aria-pressed", String(item === button));
        });
        grid.querySelectorAll("[data-case-categories]").forEach(function (card) {
          var categories = card.getAttribute("data-case-categories") || "";
          card.hidden = filter !== "all" && categories.indexOf(filter) === -1;
        });
      });
    });
  });
})();
</script>`,
    css: "",
    notes: "Preview iframes in the builder are sandboxed, so JavaScript interactions are validated in exported pages or browser tests rather than the sandbox preview."
  }),
  scaraid({
    id: "scaraid-header",
    name: "ScarAid Header",
    category: "Headers",
    description: "Reusable sticky ScarAid header with editable logo asset, desktop navigation and accessible mobile menu.",
    tags: tags("header", "navigation", "global"),
    sourcePage: "Shared",
    sourceSection: "Header",
    html: `<header class="scaraid-header" data-scaraid-header>
  <div class="scaraid-container scaraid-header__inner">
    <a class="scaraid-logo" href="/" aria-label="ScarAid home">
      <img src="${logoImage}" alt="ScarAid" data-editable="header.logo" />
    </a>
    <nav class="scaraid-nav" aria-label="Primary navigation">
      <a href="/process/">Process</a>
      <a href="/evidence/">Evidence</a>
      <a href="/case-studies/">Case Studies</a>
      <a href="/about/">About</a>
      <a href="/contact/">Contact</a>
    </nav>
    <a class="scaraid-button scaraid-button--dark scaraid-header__cta" href="/contact/#enquiry-form">Book a Consultation</a>
    <button class="scaraid-menu-button" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="scaraid-mobile-menu" data-scaraid-menu-button><span></span><span></span><span></span></button>
  </div>
  <nav id="scaraid-mobile-menu" class="scaraid-mobile-menu" aria-label="Mobile navigation" hidden data-scaraid-mobile-menu>
    <a href="/process/">Process</a>
    <a href="/evidence/">Evidence</a>
    <a href="/case-studies/">Case Studies</a>
    <a href="/about/">About</a>
    <a href="/contact/">Contact</a>
  </nav>
</header>`,
    css: "",
    notes: "The logo URL is the approved default and remains editable. Mobile menu behaviour is handled by ScarAid Animation Script."
  }),
  scaraid({
    id: "scaraid-footer",
    name: "ScarAid Footer",
    category: "Footer CTAs",
    description: "Reusable four-column ScarAid footer with service links, company links, disclaimer and current-year script-free fallback.",
    tags: tags("footer", "global", "disclaimer"),
    sourcePage: "Shared",
    sourceSection: "Footer",
    html: `<footer class="scaraid-footer">
  <div class="scaraid-container scaraid-footer__grid">
    <div>
      <a class="scaraid-logo" href="/" aria-label="ScarAid home"><img src="${logoImage}" alt="ScarAid" /></a>
      <p>Professional, surgeon-led scar management and optimisation. Dedicated to evidence-informed care for scars that matter.</p>
    </div>
    <div><h3>Service</h3><a href="/process/">Pre-surgery optimisation</a><a href="/process/">Early wound support</a><a href="/process/">Scar maturation care</a><a href="/case-studies/">Case studies</a></div>
    <div><h3>Company</h3><a href="/process/">Process</a><a href="/evidence/">Evidence</a><a href="/about/">About</a><a href="/contact/">Contact</a></div>
    <div><h3>Medical disclaimer</h3><p>The information provided on this website is for educational purposes only and does not constitute medical advice. Suitability and outcomes vary. Consult a qualified medical professional before beginning any scar treatment protocol.</p></div>
  </div>
  <div class="scaraid-container scaraid-footer__bottom"><span>© <span data-scaraid-year>2026</span> ScarAid. All Rights Reserved.</span><span><a href="/privacy-policy/">Privacy Policy</a><a href="/terms-of-service/">Terms of Service</a></span></div>
</footer>`,
    css: "",
    notes: "No unverified clinic details are hardcoded."
  }),
  scaraid({
    id: "scaraid-consultation-form",
    name: "ScarAid Consultation Form",
    category: "Forms / Enquiry",
    description: "Shared placeholder consultation form for Home, Process, Evidence, Case Studies and About pages.",
    tags: tags("form", "consultation", "shared"),
    sourcePage: "Shared",
    sourceSection: "Consultation Form",
    html: consultationFormHtml,
    css: "",
    notes: "Placeholder only. Connect to Elementor Form or approved form handler before launch."
  }),
  heroBlock(
    "scaraid-home-hero",
    "ScarAid Home Hero",
    "Home",
    "Scar care should begin before the scar forms",
    "Consultant plastic surgeon-led scar optimisation designed to prepare the skin before planned surgery, support early wound healing, and guide scar maturation after surgery.",
    "Book a Consultation",
    "/contact/#enquiry-form",
    "View the Evidence",
    "/evidence/"
  ),
  scaraid({
    id: "scaraid-home-process-overview",
    name: "ScarAid Process Overview",
    category: "Intro Sections",
    description: "Homepage process overview with side-by-side intro and three text columns.",
    tags: tags("home", "process", "overview"),
    sourcePage: "Home",
    sourceSection: "Process Overview",
    html: `<section class="scaraid-section scaraid-process-overview" aria-labelledby="scaraid-home-process-title">
  <div class="scaraid-container">
    <div class="scaraid-process-overview__intro scaraid-reveal">
      <h2 id="scaraid-home-process-title">Scar optimisation before, during and after surgery</h2>
      <p>Traditional scar care often begins once the scar has already formed. <strong>ScarAid takes a proactive, evidence-informed approach</strong> by preparing the skin before planned surgery, supporting early wound healing, and continuing care through the key stages of scar maturation.</p>
    </div>
    <div class="scaraid-process-overview__features">
      <article class="scaraid-reveal"><h3>Pre-surgery optimisation</h3><p>Clinician-led preparation designed around the planned procedure, skin type, scar history and individual healing risk.</p></article>
      <article class="scaraid-reveal" style="--scaraid-reveal-delay: 70ms"><h3>Peri-operative wound support</h3><p>Structured support around the time of surgery, when inflammation, tissue repair and wound response are most active.</p></article>
      <article class="scaraid-reveal" style="--scaraid-reveal-delay: 140ms"><h3>Scar maturation care</h3><p>Ongoing monitoring and treatment as the scar settles, softens and matures through the key early stages of healing.</p></article>
    </div>
  </div>
</section>`,
    css: "",
    notes: "No icons by design, matching the approved homepage section."
  }),
  scaraid({
    id: "scaraid-home-comparison-table",
    name: "ScarAid Comparison Table",
    category: "Comparison / Why Choose",
    description: "Expandable Mitopure-style homepage comparison table with four visible rows and six hidden rows.",
    tags: tags("home", "comparison", "table", "show-more"),
    sourcePage: "Home",
    sourceSection: "Comparison Table",
    html: `<section class="scaraid-section scaraid-table-section" aria-labelledby="scaraid-home-table-title">
  <div class="scaraid-container">
    <h2 id="scaraid-home-table-title" class="scaraid-table-title scaraid-reveal">Unmatched safety, quality and efficacy</h2>
    <div id="scaraid-home-comparison" class="scaraid-comparison-table" role="table" aria-label="ScarAid comparison table">
      <div class="scaraid-table-row scaraid-table-row--header" role="row"><div role="columnheader">Feature</div><div class="scaraid-table-brand" role="columnheader"><span>ScarAid</span></div><div role="columnheader">Standard scar care</div><div role="columnheader">Why it matters</div></div>
${[
  ["Consultant plastic surgeon-led", "Yes", "Varies", "Specialist oversight supports appropriate assessment, planning and follow-up."],
  ["Starts before planned surgery", "Where appropriate", "Often reactive", "Earlier assessment allows scar planning to begin before the wound and scar have fully developed."],
  ["Personalised to the patient", "Yes", "Often limited", "Care can be adapted around skin type, scar history, procedure and healing risk."],
  ["Structured monitoring over time", "Yes", "Varies", "Review points support adjustment as colour, texture, elevation and symptoms change."],
  ["Covers the full healing pathway", "Yes", "Not usually", "The pathway considers preparation, early wound support and maturation.", true],
  ["Multi-modal treatment approach", "Where suitable", "Often limited", "Different categories may be considered according to the healing stage and objective.", true],
  ["Supports early wound healing", "Designed to support", "Varies", "Early healing can influence later scar behaviour and comfort.", true],
  ["Targets scar maturation", "Yes", "Often product-led", "Scar maturation continues over time and may need structured review.", true],
  ["Suitable at different stages", "Assessment-led", "Varies", "Suitability depends on timing, scar type and clinical context.", true],
  ["Includes final-stage refinement options", "May be considered", "Rarely integrated", "Later options can be discussed after assessment of the mature scar.", true]
]
  .map(
    ([feature, scaraidValue, standard, why, hidden]) =>
      `      <div class="scaraid-table-row" role="row"${hidden ? " hidden data-scaraid-extra-row" : ""}><div role="cell">${feature}</div><div role="cell" class="scaraid-check"><span>${scaraidValue}</span></div><div role="cell">${standard}</div><div role="cell">${why}</div></div>`
  )
  .join("\n")}
    </div>
    <button class="scaraid-show-more" type="button" aria-expanded="false" aria-controls="scaraid-home-comparison" data-scaraid-table-toggle>Show More</button>
  </div>
</section>`,
    css: "",
    notes: "Expandable behaviour is handled by the shared ScarAid Animation Script."
  }),
  scaraid({
    id: "scaraid-home-surgeon-cards",
    name: "ScarAid Surgeon Cards",
    category: "Doctor Bios",
    description: "Homepage surgeon cards with no invented profile details.",
    tags: tags("home", "surgeons", "doctor-bios"),
    sourcePage: "Home",
    sourceSection: "Surgeon Cards",
    html: `<section class="scaraid-section scaraid-surgeons" aria-labelledby="scaraid-surgeons-title">
  <div class="scaraid-container">
    <h2 id="scaraid-surgeons-title" class="scaraid-surgeons__title scaraid-centered-heading scaraid-reveal">Developed and led by consultant plastic surgeons</h2>
    <div class="scaraid-doctor-grid">
      <article class="scaraid-doctor-card scaraid-reveal"><div class="scaraid-doctor-card__photo" role="img" aria-label="Dominic Yu portrait placeholder"></div><div><h3>Dominic Yu</h3><p class="scaraid-doctor-card__role">Consultant Plastic Surgeon</p><p class="scaraid-small">Optional GMC number to be confirmed<br>Clinic location to be confirmed</p><p>Profile details to be confirmed.</p></div></article>
      <article class="scaraid-doctor-card scaraid-reveal" style="--scaraid-reveal-delay: 80ms"><div class="scaraid-doctor-card__photo" role="img" aria-label="Hazim Sadideen portrait placeholder"></div><div><h3>Hazim Sadideen</h3><p class="scaraid-doctor-card__role">Consultant Plastic Surgeon</p><p class="scaraid-small">Optional GMC number to be confirmed<br>Clinic location to be confirmed</p><p>Profile details to be confirmed.</p></div></article>
    </div>
  </div>
</section>`,
    css: "",
    notes: "No GMC numbers, locations, affiliations or summaries are asserted."
  }),
  scaraid({
    id: "scaraid-home-scar-type-pills",
    name: "ScarAid Scar Type Pills",
    category: "Treatment / Service Detail",
    description: "Centered homepage scar type pill row.",
    tags: tags("home", "pills", "scar-types"),
    sourcePage: "Home",
    sourceSection: "Scar Type Pills",
    html: `<section class="scaraid-section" aria-labelledby="scaraid-scar-types-title">
  <div class="scaraid-container">
    <h2 id="scaraid-scar-types-title" class="scaraid-centered-heading scaraid-reveal">For planned surgery, injury and scars that need specialist care</h2>
    <div class="scaraid-chip-row scaraid-reveal">
      <span>Planned surgery</span><span>C-section scars</span><span>Skin cancer surgery</span><span>Aesthetic procedures</span><span>Trauma and injury</span><span>Older scars</span><span>Pigmentation-prone skin</span><span>Raised scars</span>
    </div>
  </div>
</section>`,
    css: "",
    notes: "No extra paragraph, per homepage spec."
  }),
  scaraid({
    id: "scaraid-home-patient-journeys",
    name: "ScarAid Patient Journeys",
    category: "Testimonials",
    description: "Two placeholder patient journey cards with careful non-claim copy.",
    tags: tags("home", "case-studies", "journeys"),
    sourcePage: "Home",
    sourceSection: "Patient Journeys",
    html: `<section class="scaraid-section" aria-labelledby="scaraid-journeys-title">
  <div class="scaraid-container">
    <h2 id="scaraid-journeys-title" class="scaraid-centered-heading scaraid-reveal">Real patient journeys</h2>
    <div class="scaraid-case-grid">
      <article class="scaraid-case-card scaraid-reveal"><div class="scaraid-case-card__image" style="background-image: url('${caseImageOne}')" role="img" aria-label="Clinical placeholder image"></div><div class="scaraid-case-card__body"><p>Placeholder case study. Replace with approved patient documentation once consented content is available.</p><div><span>Facial scar case study</span><a href="/case-studies/">View case study</a></div></div></article>
      <article class="scaraid-case-card scaraid-reveal" style="--scaraid-reveal-delay: 80ms"><div class="scaraid-case-card__image" style="background-image: url('${caseImageTwo}')" role="img" aria-label="Clinical placeholder image"></div><div class="scaraid-case-card__body"><p>Placeholder case study. Outcomes vary and final patient content should be reviewed before publication.</p><div><span>Planned surgery case study</span><a href="/case-studies/">View case study</a></div></div></article>
    </div>
  </div>
</section>`,
    css: "",
    notes: "No actual patient claims or promises are included."
  }),
  scaraid({
    id: "scaraid-home-faq",
    name: "ScarAid FAQ",
    category: "FAQs",
    description: "Seven-question homepage FAQ using native details/summary.",
    tags: tags("home", "faq", "accordion"),
    sourcePage: "Home",
    sourceSection: "FAQ",
    html: `<section class="scaraid-section" aria-labelledby="scaraid-faq-title">
  <div class="scaraid-container scaraid-faq scaraid-reveal">
    <h2 id="scaraid-faq-title">Frequently Asked Questions</h2>
    <details><summary>When should I start scar care?</summary><p>Scar care may be considered before planned surgery where appropriate. Suitability and timing are assessed clinically.</p></details>
    <details><summary>Can you help with old scars?</summary><p>Established scars can be reviewed, although options and expectations vary depending on scar type, symptoms and history.</p></details>
    <details><summary>What makes ScarAid different from shop-bought gels?</summary><p>ScarAid is a clinician-led pathway rather than generic product advice. Product use may be one part of a wider plan where suitable.</p></details>
    <details><summary>How many appointments will I need?</summary><p>The number of appointments depends on the procedure, healing stage and clinical need. This is discussed after assessment.</p></details>
    <details><summary>Is this suitable for all skin types?</summary><p>Skin type, pigmentation risk and scar history are considered during assessment.</p></details>
    <details><summary>Do I need a referral from my primary surgeon?</summary><p>Direct enquiries and clinician referrals can both be considered. ScarAid should complement the operating clinician's plan.</p></details>
    <details><summary>What is the cost of a consultation?</summary><p>Consultation fees are to be confirmed and should be reviewed with the practice before booking.</p></details>
  </div>
</section>`,
    css: "",
    notes: "No appointment counts or prices are hardcoded."
  }),
  heroBlock("scaraid-process-hero", "ScarAid Process Hero", "Process", "The ScarAid Process", "A structured, consultant-led pathway designed to support scar outcomes before, around and after surgery.", "Book a Consultation", "/contact/#enquiry-form", "View the Evidence", "/evidence/"),
  simpleTextBlock("scaraid-process-intro", "ScarAid Process Intro", "Process", "Scar optimisation starts earlier than traditional scar care", [
    "Unlike standard post-operative management, the ScarAid methodology follows the biological timeline of healing. By preparing the skin before the first incision and supporting the healing environment during the early stages, ScarAid takes a more proactive approach to scar optimisation."
  ]),
  scaraid({
    id: "scaraid-process-timeline",
    name: "ScarAid Process Timeline",
    category: "Process / Approach",
    description: "Three-stage process timeline with connected stages and inline SVG icons.",
    tags: tags("process", "timeline", "stages"),
    sourcePage: "Process",
    sourceSection: "Three-stage Timeline",
    html: `<section class="scaraid-section scaraid-process-timeline" aria-labelledby="scaraid-process-timeline-title">
  <div class="scaraid-container">
    <div class="scaraid-section-heading scaraid-reveal"><h2 id="scaraid-process-timeline-title">A pathway aligned with the biology of healing</h2></div>
    <div class="scaraid-process-timeline__grid">
      <article class="scaraid-process-stage scaraid-reveal">${icon("flask")}<span>Stage 01</span><h3>Pre-surgery</h3><p>Preparing the skin and healing environment before a planned procedure. Care is tailored around the operation, skin type, scar history and individual risk profile.</p></article>
      <article class="scaraid-process-stage scaraid-reveal" style="--scaraid-reveal-delay: 90ms">${icon("heart")}<span>Stage 02</span><h3>Peri-operative</h3><p>Supporting the wound-healing environment around the time of surgery, when inflammation, tissue repair and early scar formation are most active.</p></article>
      <article class="scaraid-process-stage scaraid-reveal" style="--scaraid-reveal-delay: 180ms">${icon("chart")}<span>Stage 03</span><h3>Scar maturation</h3><p>Continuing structured monitoring and care as the scar settles, softens and matures over time, with treatment adjusted according to the individual healing response.</p></article>
    </div>
  </div>
</section>`,
    css: "",
    notes: "Timeline line switches from horizontal to vertical in the ScarAid foundation CSS."
  }),
  cardGridBlock("scaraid-process-tailored-variables", "ScarAid Tailored Variables", "Process", "Tailored around the patient", "Every scar tells a different story. Our approach adapts to four important variables.", [
    { title: "Procedure type", body: "The pathway is adapted around the operation, its location and the expected demands placed on the healing tissue.", icon: "doc" },
    { title: "Skin type", body: "Skin tone, pigmentation risk and individual tissue characteristics are considered when planning scar care.", icon: "skin" },
    { title: "Scar history", body: "Previous healing, pigmentation changes and raised or symptomatic scars help inform the individual risk profile.", icon: "spark" },
    { title: "Timing", body: "The plan depends on whether care begins before surgery, during early healing or later in the scar maturation process.", icon: "clock" }
  ]),
  heroBlock("scaraid-evidence-hero", "ScarAid Evidence Hero", "Evidence", "Evidence-informed scar optimisation", "ScarAid brings together established principles from plastic surgery, wound healing, skin science and regenerative medicine within a structured, clinician-led pathway.", "Book a Consultation", "/contact/#enquiry-form", "How the Process Works", "/process/"),
  simpleTextBlock("scaraid-evidence-biology-intro", "ScarAid Biology Intro", "Evidence", "Built around the biology of healing", [
    "Scar formation is a biological process involving inflammation, tissue repair, collagen production, vascular change and remodelling over time.",
    "ScarAid is designed around this timeline, supporting clinical assessment before planned surgery, during early healing and through the scar maturation phase."
  ], "Content / Article Blocks"),
  cardGridBlock("scaraid-evidence-categories", "ScarAid Evidence Categories", "Evidence", "Evidence-informed treatment categories", "ScarAid speaks in treatment categories rather than exposing proprietary protocols.", [
    { title: "Skin preparation", body: "Preparing tissue before planned surgery where clinically appropriate.", icon: "flask" },
    { title: "Early wound support", body: "Supporting the wound environment during the active early healing phase.", icon: "heart" },
    { title: "Scar monitoring", body: "Monitoring how the scar changes over time, including colour, elevation, texture, comfort and movement.", icon: "chart" },
    { title: "Monitoring over time", body: "Using structured review points to assess progress and adjust the pathway according to the patient's healing response.", icon: "clock" }
  ], "Trust / Authority"),
  scaraid({
    id: "scaraid-evidence-comparison",
    name: "ScarAid Evidence Comparison",
    category: "Comparison / Why Choose",
    description: "Evidence page comparison table with ScarAid middle column highlighted.",
    tags: tags("evidence", "comparison", "table"),
    sourcePage: "Evidence",
    sourceSection: "Clinical Advantage",
    html: `<section class="scaraid-section scaraid-evidence-comparison" aria-labelledby="scaraid-evidence-comparison-title">
  <div class="scaraid-container">
    <p class="scaraid-eyebrow scaraid-reveal">The clinical advantage</p>
    <h2 id="scaraid-evidence-comparison-title" class="scaraid-table-title scaraid-reveal">Beyond conventional aftercare</h2>
    <div class="scaraid-simple-table" role="table" aria-label="Beyond conventional aftercare comparison">
      <div class="scaraid-simple-table__row scaraid-simple-table__row--header" role="row"><div role="columnheader">Conventional</div><div role="columnheader">ScarAid</div><div role="columnheader">Why it matters</div></div>
${[
  ["Care commonly begins after surgery", "Begins before planned surgery where appropriate", "Earlier assessment allows scar planning to begin before the wound and scar have fully developed."],
  ["Often centred on a single product or method", "Multi-modal, evidence-informed pathway", "Different treatment categories can be considered according to the procedure, healing stage and clinical objective."],
  ["General aftercare advice", "Personalised clinician-led management", "The pathway can be adapted around skin type, scar history, pigmentation risk and individual healing response."],
  ["Follow-up varies", "Structured monitoring over time", "Review points allow the scar to be assessed as its colour, texture, elevation and symptoms change."],
  ["Primarily focused on the visible scar", "Considers wound healing and scar maturation", "ScarAid considers the wider healing process, not only the appearance of an established scar."]
].map(([a, b, c]) => `      <div class="scaraid-simple-table__row" role="row"><div role="cell">${a}</div><div role="cell">${b}</div><div role="cell">${c}</div></div>`).join("\n")}
    </div>
  </div>
</section>`,
    css: "",
    notes: "ScarAid column is highlighted through shared CSS."
  }),
  heroBlock("scaraid-cases-hero", "ScarAid Cases Hero", "Case Studies", "Real patient journeys", "Every scar has a story. ScarAid case studies show how structured scar optimisation can support patients through surgery, healing and recovery.", "Request a Consultation", "/contact/#enquiry-form", "Explore the Process", "/process/"),
  simpleTextBlock("scaraid-cases-intro", "ScarAid Cases Intro", "Case Studies", "Structured care through the healing journey", [
    "Our consultant plastic surgeons guide patients through a defined pathway. Whether care begins before surgery, during early wound healing or later in scar maturation, the approach is tailored around the individual procedure, skin and healing response."
  ]),
  scaraid({
    id: "scaraid-case-filters",
    name: "ScarAid Case Filters",
    category: "Utility Blocks",
    description: "Functional client-side filter controls for the case-study grid.",
    tags: tags("case-studies", "filters", "interactive"),
    sourcePage: "Case Studies",
    sourceSection: "Filter Pills",
    html: `<section class="scaraid-section scaraid-case-filter-section" aria-labelledby="scaraid-case-filter-title">
  <div class="scaraid-container">
    <h2 id="scaraid-case-filter-title" class="scaraid-centered-heading scaraid-reveal">Explore cases by scar type</h2>
    <div class="scaraid-filter-row scaraid-reveal" data-scaraid-case-filters="scaraid-case-grid">
      <button class="scaraid-filter-pill scaraid-filter-pill--active" type="button" data-filter="all" aria-pressed="true">All cases</button>
      <button class="scaraid-filter-pill" type="button" data-filter="facial" aria-pressed="false">Facial scars</button>
      <button class="scaraid-filter-pill" type="button" data-filter="skin-cancer" aria-pressed="false">Skin cancer surgery</button>
      <button class="scaraid-filter-pill" type="button" data-filter="c-section" aria-pressed="false">C-section scars</button>
      <button class="scaraid-filter-pill" type="button" data-filter="breast" aria-pressed="false">Breast and torso scars</button>
      <button class="scaraid-filter-pill" type="button" data-filter="aesthetic" aria-pressed="false">Aesthetic surgery scars</button>
      <button class="scaraid-filter-pill" type="button" data-filter="trauma" aria-pressed="false">Trauma and injury scars</button>
      <button class="scaraid-filter-pill" type="button" data-filter="older" aria-pressed="false">Older scars</button>
      <button class="scaraid-filter-pill" type="button" data-filter="pigmentation" aria-pressed="false">Pigmentation-prone skin</button>
    </div>
  </div>
</section>`,
    css: "",
    notes: "Filtering requires ScarAid Animation Script in the page assembly."
  }),
  scaraid({
    id: "scaraid-case-grid",
    name: "ScarAid Case Grid",
    category: "Before & After / Gallery",
    description: "Four placeholder case-study cards with editable category metadata.",
    tags: tags("case-studies", "grid", "placeholder"),
    sourcePage: "Case Studies",
    sourceSection: "Case Study Grid",
    html: `<section class="scaraid-section scaraid-case-list-section" aria-label="Case study grid">
  <div class="scaraid-container">
    <div id="scaraid-case-grid" class="scaraid-case-list">
${[
  ["facial skin-cancer", "Facial scar after skin cancer surgery", "Pre-surgery pathway", "Post-excision scar optimisation", "A structured pathway focused on the scar's location, surgical history, healing stage and individual aesthetic concerns.", caseImageOne],
  ["c-section", "C-section scars", "Early recovery", "Post-partum healing support", "Early review and structured follow-up designed around wound healing, comfort, mobility and the scar maturation process.", caseImageTwo],
  ["breast torso aesthetic", "Breast and torso scars", "Monitoring phase", "Symmetry and texture refinement", "Care focused on scar tension, comfort, skin quality and changes in texture during the recovery and maturation period.", heroImage],
  ["older pigmentation", "Older scars", "Assessment phase", "Late-stage scar review", "Assessment of an established scar, including texture, pigmentation, symptoms and realistic opportunities for further improvement.", evidenceImage]
].map(([filters, category, phase, title, summary, image], index) => `      <article class="scaraid-case-study-card scaraid-reveal" data-case-categories="${filters}" style="--scaraid-reveal-delay: ${index * 70}ms">
        <div class="scaraid-case-study-card__image" style="background-image: url('${image}')"><span>Patient documentation</span></div>
        <div class="scaraid-case-study-card__body"><p class="scaraid-case-study-card__category">${category}</p><p class="scaraid-case-study-card__phase">${phase}</p><h3>${title}</h3><p>${summary}</p><a class="scaraid-button scaraid-button--outline" href="#">View case study</a></div>
      </article>`).join("\n")}
    </div>
  </div>
</section>`,
    css: "",
    notes: "All cases are placeholders. Do not publish as patient claims until approved documentation is available."
  }),
  cardGridBlock("scaraid-case-includes", "ScarAid Case Includes", "Case Studies", "What each case study includes", "Each case is structured to show the patient concern, the clinical context, when ScarAid became involved and how the scar progressed over time.", [
    { title: "The patient concern", body: "The functional, physical or aesthetic issue that led the patient to seek specialist scar advice.", icon: "doc" },
    { title: "Why the scar was challenging", body: "The relevant surgical, biological or anatomical factors that may have influenced healing or scar behaviour.", icon: "flask" },
    { title: "When ScarAid became involved", body: "Whether assessment began before surgery, during early healing or later in the scar maturation process.", icon: "clock" },
    { title: "Outcome and follow-up", body: "How the scar changed over time, alongside clinical observations, photographs and the patient's reported experience.", icon: "chart" }
  ], "Content / Article Blocks"),
  simpleTextBlock("scaraid-case-disclaimer", "ScarAid Case Disclaimer", "Case Studies", "Every patient heals differently", [
    "Case studies are examples only. Treatment suitability and outcomes vary depending on the procedure, skin type, medical history, scar biology and individual healing response. A clinical assessment is required for personalised advice."
  ], "Utility Blocks"),
  heroBlock("scaraid-about-hero", "ScarAid About Hero", "About", "Consultant plastic surgeon-led scar care", "ScarAid was created by consultant plastic surgeons to bring a more proactive, structured and evidence-informed approach to scar optimisation.", "Request a Consultation", "/contact/#enquiry-form", "View the Evidence", "/evidence/"),
  simpleTextBlock("scaraid-about-origin", "ScarAid Origin", "About", "Why ScarAid was created", [
    "Through years of clinical practice, the founders identified a consistent gap in scar care. Surgical precision may be carefully planned, but the scar's development over the following weeks and months is often managed with only general aftercare advice.",
    "ScarAid was created to provide a more structured, specialist-led pathway before, around and after surgery. The aim is to bring together surgical expertise, evidence-informed care and ongoing review throughout the healing process."
  ], "Content / Article Blocks"),
  scaraid({
    id: "scaraid-about-surgeon-profiles",
    name: "ScarAid Surgeon Profiles",
    category: "Doctor Bios",
    description: "About page surgeon profile cards with provisional editable fields only.",
    tags: tags("about", "surgeons", "profiles"),
    sourcePage: "About",
    sourceSection: "Surgeon Profiles",
    html: `<section class="scaraid-section scaraid-surgeons" aria-labelledby="scaraid-about-surgeons-title">
  <div class="scaraid-container">
    <div class="scaraid-section-heading scaraid-reveal"><h2 id="scaraid-about-surgeons-title">Developed and led by consultant plastic surgeons</h2><p>Direct oversight from specialists in reconstructive, aesthetic and scar-related surgery.</p></div>
    <div class="scaraid-doctor-grid">
      <article class="scaraid-doctor-card scaraid-reveal"><div class="scaraid-doctor-card__photo" role="img" aria-label="Dominic Yu portrait placeholder"></div><div><h3>Dominic Yu</h3><p class="scaraid-doctor-card__role">Consultant Plastic Surgeon</p><p class="scaraid-small">Location: Profile details to be confirmed<br>Expertise: Profile details to be confirmed<br>Affiliations: Profile details to be confirmed<br>GMC number: Profile details to be confirmed</p><p>Profile details to be confirmed.</p></div></article>
      <article class="scaraid-doctor-card scaraid-reveal" style="--scaraid-reveal-delay: 80ms"><div class="scaraid-doctor-card__photo" role="img" aria-label="Hazim Sadideen portrait placeholder"></div><div><h3>Hazim Sadideen</h3><p class="scaraid-doctor-card__role">Consultant Plastic Surgeon</p><p class="scaraid-small">Location: Profile details to be confirmed<br>Expertise: Profile details to be confirmed<br>Affiliations: Profile details to be confirmed<br>GMC number: Profile details to be confirmed</p><p>Profile details to be confirmed.</p></div></article>
    </div>
  </div>
</section>`,
    css: "",
    notes: "All profile fields remain provisional until Dominic approves verified details."
  }),
  cardGridBlock("scaraid-about-approach-cards", "ScarAid Approach Cards", "About", "Our approach", "", [
    { title: "Proactive", body: "Scar care can begin before planned surgery and continue through the early stages of wound healing and scar maturation.", icon: "clock" },
    { title: "Personalised", body: "The pathway is adapted around the procedure, skin type, scar history, healing stage and the patient's individual concerns.", icon: "skin" },
    { title: "Evidence-informed", body: "Recommendations are guided by established principles from surgery, wound healing, skin science and relevant clinical evidence.", icon: "flask" },
    { title: "Clinician-led", body: "Assessment, planning and follow-up are overseen by consultant plastic surgeons rather than provided as generic product advice.", icon: "doc" }
  ]),
  scaraid({
    id: "scaraid-about-membership-strip",
    name: "ScarAid Membership Strip",
    category: "Credentials",
    description: "Provisional professional memberships and affiliations strip.",
    tags: tags("about", "memberships", "provisional"),
    sourcePage: "About",
    sourceSection: "Membership Strip",
    html: `<section class="scaraid-section scaraid-membership-section" aria-labelledby="scaraid-memberships-title">
  <div class="scaraid-container">
    <h2 id="scaraid-memberships-title" class="scaraid-centered-heading scaraid-reveal">Professional memberships and clinical affiliations</h2>
    <div class="scaraid-membership-strip scaraid-reveal" aria-label="Provisional membership labels awaiting confirmation">
      <span>GMC</span><span>BAPRAS</span><span>RSM</span><span>NHS Trust</span><span>ISAPS</span>
    </div>
    <p class="scaraid-provisional-note">Provisional labels awaiting confirmation.</p>
  </div>
</section>`,
    css: "",
    notes: "These are not represented as confirmed memberships. Replace only after verification."
  }),
  scaraid({
    id: "scaraid-about-innovation",
    name: "ScarAid Innovation",
    category: "Content / Article Blocks",
    description: "About page innovation section with text and rounded scientific image.",
    tags: tags("about", "innovation", "science"),
    sourcePage: "About",
    sourceSection: "Innovation",
    html: `<section class="scaraid-section scaraid-innovation" style="--scaraid-evidence-image: url('${evidenceImage}')" aria-labelledby="scaraid-innovation-title">
  <div class="scaraid-container scaraid-evidence">
    <div class="scaraid-reveal"><h2 id="scaraid-innovation-title">Medical innovation, carefully applied</h2><p>ScarAid considers modern scar and skin treatment categories through a clinical lens. New approaches are assessed alongside established principles of surgery, wound healing and patient safety.</p><p>There is no universal solution for every scar. The pathway is shaped around the procedure, healing stage, skin characteristics, clinical evidence and the patient's individual goals.</p></div>
    <div class="scaraid-evidence__image scaraid-reveal scaraid-reveal--right"></div>
  </div>
</section>`,
    css: "",
    notes: "Scientific image is temporary and should be replaced with a managed asset when available."
  }),
  scaraid({
    id: "scaraid-contact-hero",
    name: "ScarAid Contact Hero",
    category: "Heroes",
    description: "Contact page rounded hero with local enquiry CTA.",
    tags: tags("contact", "hero"),
    sourcePage: "Contact",
    sourceSection: "Hero",
    html: `<section class="scaraid-hero scaraid-page-hero" style="--scaraid-hero-image: url('${heroImage}')" aria-labelledby="scaraid-contact-hero-title">
  <div class="scaraid-container">
    <div class="scaraid-hero__panel">
      <div class="scaraid-hero__copy scaraid-reveal scaraid-reveal--left">
        <h1 id="scaraid-contact-hero-title">Request a consultation</h1>
        <p>Whether you are preparing for surgery, recovering from a recent procedure, or concerned about an existing scar, ScarAid can assess your options.</p>
        <div class="scaraid-button-row">
          <a class="scaraid-button scaraid-button--dark" href="#enquiry-form">Start Your Enquiry</a>
        </div>
      </div>
      <div class="scaraid-hero__visual scaraid-reveal scaraid-reveal--right">
        <div class="scaraid-hero__image" role="img" aria-label="Clinical scar science visual placeholder"></div>
      </div>
    </div>
  </div>
</section>`,
    css: "",
    notes: "Contact page CTA points to the local enquiry form anchor."
  }),
  scaraid({
    id: "scaraid-main-enquiry-panel",
    name: "ScarAid Main Enquiry Panel",
    category: "Forms / Enquiry",
    description: "Contact page split enquiry panel for patients and clinician referrals.",
    tags: tags("contact", "enquiry", "form"),
    sourcePage: "Contact",
    sourceSection: "Main Enquiry Panel",
    html: `<section class="scaraid-section scaraid-contact-section" id="enquiry-form" aria-labelledby="scaraid-enquiry-title">
  <div class="scaraid-container">
    <div class="scaraid-contact-panel scaraid-contact-panel--split scaraid-reveal">
      <div class="scaraid-contact-panel__copy">
        <h2 id="scaraid-enquiry-title">For patients and clinician referrals</h2>
        <p>ScarAid welcomes direct patient enquiries and clinician referrals. Please provide as much detail as possible about the procedure, scar concern or planned surgery date so the team can advise on the most appropriate next step.</p>
        <div class="scaraid-audience-cards"><article><h3>For patients</h3><p>Preparing for surgery, recovering from a procedure, or seeking specialist advice for an existing scar.</p></article><article><h3>For clinicians</h3><p>Refer a patient for consultant-led scar optimisation before, around or after surgery.</p></article></div>
        <div class="scaraid-contact-meta"><span>Clinic location to be confirmed</span><span>Email address to be confirmed</span><span>Consultations are by prior appointment following clinical review.</span></div>
      </div>
      <form class="scaraid-placeholder-form" aria-label="Placeholder consultation request form">
        <label>Full name<input type="text" name="full-name" placeholder="Full name" /></label>
        <label>Email address<input type="email" name="email" placeholder="Email address" /></label>
        <label>Phone number<input type="tel" name="phone" placeholder="Phone number" /></label>
        <label>Patient or Clinician<select name="audience"><option>Patient</option><option>Clinician</option></select></label>
        <label>Planned procedure or scar concern<input type="text" name="concern" placeholder="Planned procedure or scar concern" /></label>
        <label>Surgery date, if known<input type="text" name="surgery-date" placeholder="Surgery date, if known" /></label>
        <label>Existing surgeon, optional<input type="text" name="existing-surgeon" placeholder="Existing surgeon, optional" /></label>
        <label class="scaraid-form-wide">Additional details or message<textarea rows="5" name="message" placeholder="Additional details or message"></textarea></label>
        <label class="scaraid-form-wide">Supporting images, optional<span class="scaraid-upload-placeholder">Visual upload placeholder - connect safe file upload before launch</span></label>
        <button class="scaraid-button scaraid-button--dark" type="button">Submit Consultation Request</button>
        <p class="scaraid-form-note">Placeholder functionality for builder preview.</p>
      </form>
    </div>
  </div>
</section>`,
    css: "",
    notes: "Upload control is a visual placeholder only."
  }),
  cardGridBlock("scaraid-contact-clinical-focus", "ScarAid Clinical Focus Grid", "Contact", "Areas of clinical focus", "ScarAid supports patients across a range of planned surgical, post-operative and traumatic scar concerns.", [
    { title: "Planned surgery", body: "Assessment before a planned procedure where appropriate.", icon: "clock" },
    { title: "C-section scars", body: "Support around healing, comfort and scar maturation.", icon: "heart" },
    { title: "Skin cancer surgery", body: "Scar planning around excision and reconstruction pathways.", icon: "doc" },
    { title: "Aesthetic surgery", body: "Clinician-led scar support for planned aesthetic procedures.", icon: "spark" },
    { title: "Trauma or injury", body: "Assessment of traumatic scars and recovery considerations.", icon: "skin" },
    { title: "Older scars", body: "Review of established scars and realistic options.", icon: "chart" },
    { title: "Pigmentation", body: "Planning around pigmentation-prone skin and risk factors.", icon: "flask" },
    { title: "Symptomatic scars", body: "Assessment of scars affecting comfort, movement or confidence.", icon: "heart" }
  ], "Treatment / Service Detail"),
  cardGridBlock("scaraid-contact-context-cards", "ScarAid Contact Context Cards", "Contact", "Referral and patient information", "", [
    { title: "Clinician referrals", body: "ScarAid welcomes referrals from surgeons, dermatologists and other clinicians seeking structured scar support for their patients. Referral pathways should complement the operating clinician's surgical plan and existing aftercare.", icon: "doc" },
    { title: "Patient information", body: "Initial contact begins with a review of the information provided. Where appropriate, the team can then advise whether a consultation may be suitable and explain the next steps in the assessment process.", icon: "chart" }
  ], "Contact CTAs"),
  simpleTextBlock("scaraid-contact-medical-disclaimer", "ScarAid Medical Disclaimer", "Contact", "Medical Disclaimer", [
    "Scar management is a complex biological process. Clinical suitability varies by individual, and while ScarAid uses evidence-informed pathways, results cannot be guaranteed. The team will provide an honest assessment of expected options during consultation."
  ], "Utility Blocks")
];
