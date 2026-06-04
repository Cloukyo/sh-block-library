# ScarAid Elementor Export

This folder contains a static Elementor-ready build of the ScarAid draft.

## Files

- `index.html` - full one-page ScarAid layout with labelled component sections.
- `styles.css` - all page styles, scoped with `scaraid-` class names.
- `mitopure-style-table.html` - standalone comparison table section based on the Mitopure table reference.

## Component Map

1. Header
2. Hero
3. Editorial intro
4. Surgeon authority cards
5. Mitopure-style comparison table
6. Scars that matter chips
7. Evidence section
8. Case studies
9. FAQs
10. Final CTA
11. Footer

## Elementor Notes

- Add `styles.css` once via Elementor custom CSS, theme CSS, or a page-level HTML `<style>` block.
- Paste each labelled section from `index.html` into separate Elementor HTML widgets if you want modular editing.
- The table section is also isolated in `mitopure-style-table.html`.
- Replace the temporary logo mark, GMC numbers, CTA email, and any placeholder medical/legal copy before launch.
- The design uses external image URLs from the Stitch draft. Download and upload them to WordPress media for production reliability.
