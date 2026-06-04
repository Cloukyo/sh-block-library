import type { Block } from "@/types/block";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAPnyWazAjdJn-vgJpe_KVISlMQGZs6Nvr1Y0-60E1laUOBGS5uudD9ifByXmKdNZmQ_pL6SnvAqy1s4J-qwFFrTpsIVHKZtgP_zWvQp0qECdA0W_xRqLq7vvQqfcDXvq1UlS3OMmh-95BmEcKLbFlsvqhT0gEho78rWkj0HyUAUgm3hdMuMGs5dwBZ8YNOE1ENKaANj_19gxZW-4iieizlduDtKgv6VXyoj9V3f60K7RabygC3saKQWesoXe8p04NKzFNBRkZM3BYm";
const evidenceImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCO1ltOgUzDVJSCubuBHH6kOkqfkVjqVWqGKxBhwzFRFw7Gxqd18aXSESWMBly_UaB36cGpe8JOOBudM-LBuqSL2S4H_NNHmt-xi1xbKxTBT7jNDbh6xRN7gHy6aOVfADLd1rTvcNi6JQuWCr5uBAE2m5OfgbCgaSIVrpyMsf396C_q5ZCfJmbPpXSFDt5EATIPdUGzy0tMlGJZyxsMWahOCACN4d3T54vLN3GtU2FMX8tjJO9o7ISqT7lDQlgfxTWbyr0S2AfMJPKE";
const dominicImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXbdSNTx24aumMPkPowgEuoQktRSVDce3rsfOfZIXfFms1xje9tDw4hqV0HUp7_oavjI2nIEbe3l6CQ3W7rh6x9mafpcK5qNTJO1oPfCkXwyo7R02P1fmCKT7_fvTTMUH3I1U7kseIiz46Rjmf9_vPj3wF8PwxdwW6PfDK6C8gPqbhskDi2lQe9UbbLcob9B9ODC-J1SdM-Irne3OaJOwCM3dmWE6He-J7CH-JNMozMqYYBroa56i8Uh7Qqn-Y-lp2jVqRyHkSznjt";
const hazimImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0PWHgiIv5IYJZLy-pzZN8zK1rAXk8gm0cKcs6WzxCAWPYPGoJtCjUKZjRLCqcQwYY3LDIoOrr82xjO4W4Fc_O5rpnBKFWdmjBPfLLftoplmdgJ6RVfkQQG-vvmX1LqymRmzUJePazY0XM4LOjYULdeE_mSxbsggCQV4ZEW6NYyvVIQ0eX8LwvlVr6uoPwYLJloQprCWHm_9G9aKVSB96lugE184P7HW9yg0f6S3tzJBWC3E1VnRy84uSm-GHYtZ6oD3BAR1oCUWp1";
const caseImageOne =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDBbsxYpEw4mplKE_ywHuLWYFBw9eXxXrwZFJEftPIrq3hz6nC5RXxRt3DKhbsH8SFBIqmsTLOMoChEkwL4I5Gfq5XCtJSi6apbYqVTBT3Fq-EtG47r7Qy17rQbD84glu32Qrvdre390f4xYUfTONXMX1QeHLn0lY2qGUcKq_Vd15SEfxM6kjuBk4Oy28IT1eOYPfxVm1Hdi89EhzjEA00at5Prs8VS4sX5ywpylT56ka-h-4Bzgs9cGhU1ra-1-qxZG2sHK7u2jQrp";
const caseImageTwo =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAZPRKTpp0ra8VKHZTUGNDbcIgvgiRuV2AddJupo_hgvB4qFrprufi3PWcGnuGfcPudl4moORMgti7V1S5rf-YNAxegDBe5kA_WTo7LrjWtczJMpf_eIWDUX0ywkOw8pOsJ10WbljbUY-esVXSTd8AeFtLqKuGWAMofWaUUzrOXwGpF1mYNHqTGNS6Y2FwaFMLdZHwrI9s7a6EsbWXkxStnyvlRh7oI3L-On0_vofPPx1G-4SRDQv2TWP6E6kPLG66vmHyUc_6i74Ls";

const scaraidTags = ["scaraid", "scar-care", "clinical", "elementor"];

function scaraid(block: Omit<Block, "client" | "style" | "foundationId" | "sourceProject" | "version" | "status" | "elementorQaStatus">): Block {
  return {
    ...block,
    client: "ScarAid",
    style: "ScarAid Clinical",
    foundationId: "scaraid-foundation",
    sourceProject: "ScarAid Stitch Draft",
    version: "v1",
    status: "Needs Review",
    elementorQaStatus: "Needs Review"
  };
}

function tags(...extra: string[]) {
  return [...scaraidTags, ...extra];
}

export const scaraidBlocks: Block[] = [
  scaraid({
    id: "scaraid-foundation-css",
    name: "ScarAid Foundation CSS",
    category: "Global Foundation",
    description: "Shared ScarAid foundation for the Stitch-derived Elementor sections, including typography, layout, comparison table and responsive rules.",
    tags: tags("foundation", "css", "global"),
    sourcePage: "Landing Page",
    sourceSection: "Foundation",
    useCase: "Paste the Full CSS output once before using Lean ScarAid block exports.",
    html: `<section class="scaraid-section" aria-labelledby="scaraid-foundation-title">
  <div class="scaraid-container">
    <h2 id="scaraid-foundation-title" class="scaraid-centered-heading">ScarAid Foundation CSS</h2>
    <p class="scaraid-lead">Shared styling for the ScarAid Elementor blocks, including the Mitopure-style comparison table replacement.</p>
  </div>
</section>`,
    css: "",
    notes: "Use the Full CSS tab as the page-level CSS foundation. Lean ScarAid sections assume this foundation has already been loaded."
  }),
  scaraid({
    id: "scaraid-header-navigation",
    name: "ScarAid Header / Navigation",
    category: "Headers",
    description: "Clean ScarAid header with brand mark, anchor navigation and consultation CTA.",
    tags: tags("header", "navigation", "cta"),
    sourcePage: "Landing Page",
    sourceSection: "Header",
    html: `<header class="scaraid-header">
  <div class="scaraid-container scaraid-header__inner">
    <a class="scaraid-logo" href="#" aria-label="ScarAid home"><span class="scaraid-logo__mark">S</span><span>ScarAid</span></a>
    <nav class="scaraid-nav" aria-label="Primary navigation">
      <a href="#process">Process</a>
      <a href="#evidence">Evidence</a>
      <a href="#cases">Case Studies</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="scaraid-button scaraid-button--dark" href="#contact">Book a Consultation</a>
  </div>
</header>`,
    css: "",
    notes: "Replace the temporary CSS logo mark with the final ScarAid logo asset once available."
  }),
  scaraid({
    id: "scaraid-hero",
    name: "ScarAid Hero",
    category: "Heroes",
    description: "Primary ScarAid landing hero with proactive scar-care headline, two CTAs and clinical abstract imagery.",
    tags: tags("hero", "homepage", "cta"),
    sourcePage: "Landing Page",
    sourceSection: "Hero",
    html: `<section class="scaraid-hero" style="--scaraid-hero-image: url('${heroImage}')" aria-labelledby="scaraid-hero-title">
  <div class="scaraid-container">
    <div class="scaraid-hero__panel">
      <div class="scaraid-hero__copy">
        <h1 id="scaraid-hero-title">Scar care should begin before the scar forms</h1>
        <p>Consultant plastic surgeon-led scar optimisation designed to prepare the skin before planned surgery, support early wound healing, and guide scar maturation after surgery.</p>
        <div class="scaraid-button-row">
          <a class="scaraid-button scaraid-button--dark" href="#contact">Book a Consultation</a>
          <a class="scaraid-button scaraid-button--outline" href="#evidence">View the Evidence</a>
        </div>
      </div>
      <div class="scaraid-hero__image" aria-label="Abstract clinical scar science visual"></div>
    </div>
  </div>
</section>`,
    css: "",
    notes: "Uses the Stitch draft external image URL. Upload the image to WordPress media for production."
  }),
  scaraid({
    id: "scaraid-editorial-intro-process",
    name: "ScarAid Editorial Intro / Process",
    category: "Intro Sections",
    description: "Two-column intro explaining ScarAid's proactive before, during and after surgery approach.",
    tags: tags("intro", "process", "homepage"),
    sourcePage: "Landing Page",
    sourceSection: "Editorial Intro",
    html: `<section class="scaraid-section" id="process" aria-labelledby="scaraid-process-title">
  <div class="scaraid-container scaraid-intro">
    <div><h2 id="scaraid-process-title">Scar optimisation before, during and after surgery</h2></div>
    <div><p class="scaraid-lead">Traditional scar care often begins once the scar has already formed. <strong>ScarAid takes a proactive, evidence-informed approach</strong> by preparing the skin before planned surgery, supporting early wound healing, and continuing care through the key stages of scar maturation.</p></div>
    <div class="scaraid-feature-row">
      <article><h3>Pre-surgery optimisation</h3><p>Pre-habilitation protocols to enhance skin elasticity, optimise local microcirculation, and stabilise the dermal matrix for improved surgical outcomes.</p></article>
      <article><h3>Peri-operative wound support</h3><p>Acute wound management focusing on tension reduction, moisture balance, and inflammatory modulation during the critical first 14 days.</p></article>
      <article><h3>Scar maturation care</h3><p>Structured maturation guidance using multi-modal therapies to minimise redness, elevation, and collagen overproduction for long-term optimisation.</p></article>
    </div>
  </div>
</section>`,
    css: "",
    notes: "Review clinical claims and terminology with the client before publishing."
  }),
  scaraid({
    id: "scaraid-surgeon-authority",
    name: "ScarAid Surgeon Authority Cards",
    category: "Doctor Bios",
    description: "Two consultant plastic surgeon cards with portraits, roles, registration placeholders and short bios.",
    tags: tags("doctors", "surgeons", "authority"),
    sourcePage: "Landing Page",
    sourceSection: "Surgeon Authority",
    html: `<section class="scaraid-section" id="about" aria-labelledby="scaraid-surgeons-title">
  <div class="scaraid-container">
    <h2 id="scaraid-surgeons-title" class="scaraid-centered-heading">Developed and led by consultant plastic surgeons</h2>
    <div class="scaraid-doctor-grid">
      <article class="scaraid-doctor-card">
        <div class="scaraid-doctor-card__photo" style="background-image: url('${dominicImage}')"></div>
        <div><h3>Dominic Yu</h3><p class="scaraid-doctor-card__role">Consultant Plastic Surgeon</p><p class="scaraid-small">GMC Registration: 1234567<br>Harley Street, London</p><p>Specialist in reconstructive surgery and surgical wound biology.</p></div>
      </article>
      <article class="scaraid-doctor-card">
        <div class="scaraid-doctor-card__photo" style="background-image: url('${hazimImage}')"></div>
        <div><h3>Hazim Sadideen</h3><p class="scaraid-doctor-card__role">Consultant Plastic Surgeon</p><p class="scaraid-small">GMC Registration: 7654321<br>Chelsea, London</p><p>Expert in aesthetic optimisation and high-precision scar revision.</p></div>
      </article>
    </div>
  </div>
</section>`,
    css: "",
    notes: "GMC numbers and location details are placeholders from the draft and must be verified."
  }),
  scaraid({
    id: "scaraid-mitopure-style-comparison-table",
    name: "ScarAid Mitopure-Style Comparison Table",
    category: "Comparison / Why Choose",
    description: "Mitopure-inspired comparison table adapted for ScarAid, replacing the original Stitch comparison block.",
    tags: tags("comparison", "mitopure", "table", "why-choose"),
    sourcePage: "Landing Page",
    sourceSection: "Comparison Table",
    html: `<section class="scaraid-section scaraid-table-section" id="comparison" aria-labelledby="scaraid-table-title">
  <div class="scaraid-container">
    <h2 id="scaraid-table-title" class="scaraid-table-title">Unmatched safety, quality and efficacy</h2>
    <div class="scaraid-comparison-table" role="table" aria-label="ScarAid comparison table">
      <div class="scaraid-table-row scaraid-table-row--header" role="row"><div role="columnheader"></div><div class="scaraid-table-brand" role="columnheader"><span>ScarAid</span></div><div role="columnheader">Standard scar care</div><div role="columnheader">Why it matters</div></div>
      <div class="scaraid-table-row" role="row"><div role="cell">Clinician-led and evidence-informed</div><div role="cell" class="scaraid-check"><span aria-label="Yes">&check;</span></div><div role="cell" class="scaraid-no"><span aria-label="No">&osol;</span></div><div role="cell">Specialist oversight helps match scar care to the surgery, wound type, skin type, and healing risk.</div></div>
      <div class="scaraid-table-row" role="row"><div role="cell">Starts before the scar forms</div><div role="cell" class="scaraid-check"><span aria-label="Yes">&check;</span></div><div role="cell" class="scaraid-no"><span aria-label="No">&osol;</span></div><div role="cell">Preparing tissue before planned surgery supports the biological environment for early wound healing.</div></div>
      <div class="scaraid-table-row" role="row"><div role="cell">Patient-specific protocol</div><div role="cell" class="scaraid-check"><span aria-label="Yes">&check;</span></div><div role="cell" class="scaraid-no"><span aria-label="No">&osol;</span></div><div role="cell">Care can be adjusted for tension, pigmentation risk, scar history, procedure type, and recovery timeline.</div></div>
      <div class="scaraid-table-row" role="row"><div role="cell">Structured monitoring over time</div><div role="cell" class="scaraid-check"><span aria-label="Yes">&check;</span></div><div role="cell">Often unknown</div><div role="cell">Scars change for months. Review points help guide treatment through inflammation, remodelling, and maturation.</div></div>
    </div>
    <button class="scaraid-show-more" type="button">Show More</button>
  </div>
</section>`,
    css: "",
    notes: "This is the requested Mitopure-style replacement table. The button is visual only unless you add Elementor/JS behaviour."
  }),
  scaraid({
    id: "scaraid-scars-that-matter-chips",
    name: "ScarAid Scars That Matter Chips",
    category: "Treatment / Service Detail",
    description: "Centered chip list for scar types and patient scenarios supported by ScarAid.",
    tags: tags("conditions", "chips", "services"),
    sourcePage: "Landing Page",
    sourceSection: "Scars That Matter",
    html: `<section class="scaraid-section" aria-labelledby="scaraid-scars-title">
  <div class="scaraid-container">
    <h2 id="scaraid-scars-title" class="scaraid-centered-heading">For planned surgery, injury and scars that need specialist care</h2>
    <div class="scaraid-chip-row">
      <span>Planned surgery</span><span>C-section scars</span><span>Skin cancer excision</span><span>Aesthetic procedures</span><span>Trauma recovery</span><span>Mature scars</span><span>Pigmentation-prone skin</span><span>Keloid-prone</span>
    </div>
  </div>
</section>`,
    css: "",
    notes: "Good reusable service/condition strip for ScarAid internal pages as well as the landing page."
  }),
  scaraid({
    id: "scaraid-evidence-led-by-clinicians",
    name: "ScarAid Evidence / Led By Clinicians",
    category: "Trust / Authority",
    description: "Evidence section with clinical abstract image and three numbered research/monitoring points.",
    tags: tags("evidence", "clinicians", "trust"),
    sourcePage: "Landing Page",
    sourceSection: "Evidence",
    html: `<section class="scaraid-section" id="evidence" style="--scaraid-evidence-image: url('${evidenceImage}')" aria-labelledby="scaraid-evidence-title">
  <div class="scaraid-container scaraid-evidence">
    <div class="scaraid-evidence__image"></div>
    <div>
      <h2 id="scaraid-evidence-title">Built around evidence, led by clinicians</h2>
      <div class="scaraid-steps">
        <article><span>01</span><div><h3>Research-backed treatment categories</h3><p>Protocols are synthesised from leading research into dermal architecture and healing physiology.</p></div></article>
        <article><span>02</span><div><h3>Consultant-led assessment</h3><p>Your journey is monitored by a specialist plastic surgeon, not an automated system or generic advisor.</p></div></article>
        <article><span>03</span><div><h3>Structured monitoring over time</h3><p>Healing is a journey. ScarAid tracks progress through sequential stages so each phase can be optimised.</p></div></article>
      </div>
    </div>
  </div>
</section>`,
    css: "",
    notes: "Review evidence language against final approved references."
  }),
  scaraid({
    id: "scaraid-real-patient-journeys",
    name: "ScarAid Real Patient Journeys",
    category: "Testimonials",
    description: "Two case-study style patient journey cards with scar imagery and testimonial copy.",
    tags: tags("case-studies", "testimonials", "journeys"),
    sourcePage: "Landing Page",
    sourceSection: "Case Studies",
    html: `<section class="scaraid-section" id="cases" aria-labelledby="scaraid-cases-title">
  <div class="scaraid-container">
    <h2 id="scaraid-cases-title" class="scaraid-centered-heading">Real patient journeys</h2>
    <div class="scaraid-case-grid">
      <article class="scaraid-case-card"><div class="scaraid-case-card__image" style="background-image: url('${caseImageOne}')"></div><div class="scaraid-case-card__body"><p>"Following my C-section, I was worried about the scar. The pre-op prep and immediate post-op care from ScarAid made a massive difference. Six months later, it is barely visible."</p><div><span>Sarah J., Patient</span><a href="#">View case study</a></div></div></article>
      <article class="scaraid-case-card"><div class="scaraid-case-card__image" style="background-image: url('${caseImageTwo}')"></div><div class="scaraid-case-card__body"><p>"As an athlete, mobility around my surgical scar was vital. The ScarAid team did not just look at the surface; they guided the internal healing."</p><div><span>Michael T., Patient</span><a href="#">View case study</a></div></div></article>
    </div>
  </div>
</section>`,
    css: "",
    notes: "Patient quotes and names are draft placeholders. Replace only with consented, verified patient stories."
  }),
  scaraid({
    id: "scaraid-faqs",
    name: "ScarAid FAQs",
    category: "FAQs",
    description: "Five-question FAQ accordion using native details/summary for no-JavaScript Elementor compatibility.",
    tags: tags("faq", "accordion", "details"),
    sourcePage: "Landing Page",
    sourceSection: "FAQ",
    html: `<section class="scaraid-section" aria-labelledby="scaraid-faq-title">
  <div class="scaraid-container scaraid-faq">
    <h2 id="scaraid-faq-title">Frequently Asked Questions</h2>
    <details><summary>When should I start scar care?</summary><p>Ideally, 2-4 weeks before scheduled surgery. This allows time to prepare the skin and plan early wound support.</p></details>
    <details><summary>Can you help with old scars?</summary><p>Yes. Mature scars can still be assessed and treated with structured clinical options depending on scar type and goals.</p></details>
    <details><summary>What makes ScarAid different from shop-bought gels?</summary><p>ScarAid is a consultant-led, multi-modal clinical pathway rather than a single passive product.</p></details>
    <details><summary>How many appointments will I need?</summary><p>A typical journey involves pre-op assessment, an early wound check, and maturation reviews across the first year.</p></details>
    <details><summary>Is this suitable for all skin types?</summary><p>Protocols can be adjusted for Fitzpatrick skin type and for patients at higher risk of pigmentation or keloid formation.</p></details>
  </div>
</section>`,
    css: "",
    notes: "Uses semantic details/summary so Elementor can paste it without custom JavaScript."
  }),
  scaraid({
    id: "scaraid-final-consultation-cta",
    name: "ScarAid Final Consultation CTA",
    category: "Contact CTAs",
    description: "Closing consultation CTA for planned surgery, injury recovery and scars needing specialist care.",
    tags: tags("cta", "contact", "consultation"),
    sourcePage: "Landing Page",
    sourceSection: "Final CTA",
    html: `<section class="scaraid-section" id="contact" aria-labelledby="scaraid-cta-title">
  <div class="scaraid-container">
    <div class="scaraid-cta">
      <h2 id="scaraid-cta-title">Begin scar care before the scar forms</h2>
      <p>For planned surgery, injury recovery, and scars that need specialist clinical care.</p>
      <a class="scaraid-button scaraid-button--dark" href="mailto:hello@scaraid.co.uk">Book a Consultation</a>
    </div>
  </div>
</section>`,
    css: "",
    notes: "Replace the placeholder email address before publishing."
  }),
  scaraid({
    id: "scaraid-footer",
    name: "ScarAid Footer",
    category: "Footer CTAs",
    description: "ScarAid footer with brand summary, service links, company links and medical disclaimer.",
    tags: tags("footer", "disclaimer", "links"),
    sourcePage: "Landing Page",
    sourceSection: "Footer",
    html: `<footer class="scaraid-footer">
  <div class="scaraid-container scaraid-footer__grid">
    <div><a class="scaraid-logo" href="#" aria-label="ScarAid home"><span class="scaraid-logo__mark">S</span><span>ScarAid</span></a><p>Professional, surgeon-led scar management and optimisation. Dedicated to the science of healing for scars that matter.</p></div>
    <div><h3>Service</h3><a href="#">Pre-op Prep</a><a href="#">Early Healing</a><a href="#">Scar Revision</a><a href="#">C-Sections</a></div>
    <div><h3>Company</h3><a href="#process">Process</a><a href="#evidence">Evidence</a><a href="#about">About Us</a><a href="#contact">Contact</a></div>
    <div><h3>Disclaimer</h3><p>The information provided on this website is for educational purposes only and does not constitute medical advice. Consult with a qualified medical professional before beginning any clinical scar treatment protocol.</p></div>
  </div>
  <div class="scaraid-container scaraid-footer__bottom"><span>&copy; 2026 ScarAid. All Rights Reserved.</span><span><a href="#">Privacy Policy</a> <a href="#">Terms of Service</a></span></div>
</footer>`,
    css: "",
    notes: "Disclaimer is draft copy. Have final medical/legal wording approved before launch."
  })
];
