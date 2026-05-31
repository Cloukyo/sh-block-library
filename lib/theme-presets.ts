import type { ButtonStyle, DesignSettings, SpacingOption, ThemePalette } from "@/types/block";

export const elementorGoogleFonts = [
  "ABeeZee",
  "Abril Fatface",
  "Alegreya",
  "Alegreya Sans",
  "Anton",
  "Archivo",
  "Archivo Narrow",
  "Arimo",
  "Assistant",
  "Barlow",
  "Bebas Neue",
  "Bitter",
  "Cabin",
  "Cardo",
  "Catamaran",
  "Cormorant Garamond",
  "Crimson Text",
  "DM Sans",
  "DM Serif Display",
  "Domine",
  "EB Garamond",
  "Exo 2",
  "Figtree",
  "Fira Sans",
  "Fraunces",
  "Great Vibes",
  "Heebo",
  "Hind",
  "IBM Plex Sans",
  "IBM Plex Serif",
  "Inter",
  "Josefin Sans",
  "Karla",
  "Lato",
  "Libre Baskerville",
  "Libre Franklin",
  "Lora",
  "Manrope",
  "Merriweather",
  "Montserrat",
  "Mulish",
  "Noto Sans",
  "Noto Serif",
  "Nunito",
  "Nunito Sans",
  "Open Sans",
  "Oswald",
  "Outfit",
  "Overpass",
  "Oxygen",
  "Poppins",
  "Playfair Display",
  "Plus Jakarta Sans",
  "Prata",
  "PT Sans",
  "PT Serif",
  "Public Sans",
  "Quicksand",
  "Raleway",
  "Roboto",
  "Roboto Condensed",
  "Roboto Slab",
  "Rufina",
  "Schibsted Grotesk",
  "Source Sans 3",
  "Source Serif 4",
  "Space Grotesk",
  "Spectral",
  "Titillium Web",
  "Ubuntu",
  "Vollkorn",
  "Work Sans"
];

export const headingFonts = elementorGoogleFonts;

export const bodyFonts = elementorGoogleFonts;

export const buttonStyles: ButtonStyle[] = [
  "Pill",
  "Soft rounded",
  "Sharp editorial",
  "Outline",
  "Minimal text link"
];

export const spacingOptions: SpacingOption[] = ["Compact", "Standard", "Spacious", "Editorial"];

export const palettes: ThemePalette[] = [
  {
    id: "nikita-bronze",
    name: "Nikita Bronze",
    description: "Cream, charcoal and bronze for restrained luxury medical branding.",
    colors: {
      bg: "#fffefa",
      surface: "#f7f1e8",
      text: "#5f5d57",
      heading: "#1f211d",
      muted: "#77736a",
      accent: "#9a7a3f",
      accentSoft: "#ded3bd",
      buttonBg: "#1f211d",
      buttonText: "#fffefa"
    }
  },
  {
    id: "clinical-blue",
    name: "Clinical Blue",
    description: "White, navy and cool blue for consultant and surgeon websites.",
    colors: {
      bg: "#f3f8fb",
      surface: "#ffffff",
      text: "#23303d",
      heading: "#10273f",
      muted: "#687585",
      accent: "#2f7dbd",
      accentSoft: "#dcecf7",
      buttonBg: "#123a5f",
      buttonText: "#ffffff"
    }
  },
  {
    id: "dark-luxury",
    name: "Dark Luxury",
    description: "Near-black, off-white and bronze for premium private clinic moments.",
    colors: {
      bg: "#11100e",
      surface: "#1b1916",
      text: "#f1eadf",
      heading: "#fff7ea",
      muted: "#b6aa99",
      accent: "#c9a56f",
      accentSoft: "#3a3124",
      buttonBg: "#c9a56f",
      buttonText: "#15120f"
    }
  },
  {
    id: "warm-minimal",
    name: "Warm Minimal",
    description: "Warm white, soft charcoal and taupe for calm editorial pages.",
    colors: {
      bg: "#fbfaf7",
      surface: "#ffffff",
      text: "#33312e",
      heading: "#252320",
      muted: "#74706a",
      accent: "#a3907b",
      accentSoft: "#ebe4dc",
      buttonBg: "#33312e",
      buttonText: "#ffffff"
    }
  },
  {
    id: "sage-wellness",
    name: "Sage Wellness",
    description: "Ivory, deep green and sage for functional medicine and wellness.",
    colors: {
      bg: "#f7f6ef",
      surface: "#ffffff",
      text: "#24302b",
      heading: "#17261f",
      muted: "#68746f",
      accent: "#81977f",
      accentSoft: "#dfe7dc",
      buttonBg: "#263c32",
      buttonText: "#ffffff"
    }
  },
  {
    id: "dermatology-rose",
    name: "Dermatology Rose",
    description: "Soft white, rose taupe and charcoal for aesthetic dermatology sites.",
    colors: {
      bg: "#fffafa",
      surface: "#f8eeeb",
      text: "#4d4744",
      heading: "#231f1d",
      muted: "#817873",
      accent: "#c99b8a",
      accentSoft: "#ead4cc",
      buttonBg: "#2b2522",
      buttonText: "#ffffff"
    }
  },
  {
    id: "executive-mono",
    name: "Executive Mono",
    description: "Crisp white, ink and platinum grey for consultant-led premium sites.",
    colors: {
      bg: "#ffffff",
      surface: "#f4f4f2",
      text: "#3d3f40",
      heading: "#111315",
      muted: "#70757a",
      accent: "#8f969b",
      accentSoft: "#e4e6e7",
      buttonBg: "#111315",
      buttonText: "#ffffff"
    }
  },
  {
    id: "coastal-clinic",
    name: "Coastal Clinic",
    description: "Cool white, deep teal and mist blue for clean medical practices.",
    colors: {
      bg: "#f7fbfb",
      surface: "#ffffff",
      text: "#344447",
      heading: "#123236",
      muted: "#6e7f82",
      accent: "#3f8d92",
      accentSoft: "#dbecee",
      buttonBg: "#123236",
      buttonText: "#ffffff"
    }
  },
  {
    id: "champagne-aesthetic",
    name: "Champagne Aesthetic",
    description: "Warm champagne, soft black and muted gold for premium aesthetics.",
    colors: {
      bg: "#fbf7f0",
      surface: "#ffffff",
      text: "#4a443d",
      heading: "#211f1b",
      muted: "#81766a",
      accent: "#b99a63",
      accentSoft: "#eadfc9",
      buttonBg: "#211f1b",
      buttonText: "#fffaf0"
    }
  },
  {
    id: "private-practice-green",
    name: "Private Practice Green",
    description: "Off-white, deep green and brass for established private practices.",
    colors: {
      bg: "#fafaf5",
      surface: "#ffffff",
      text: "#3a453f",
      heading: "#17251f",
      muted: "#707a73",
      accent: "#a78b52",
      accentSoft: "#e6deca",
      buttonBg: "#17251f",
      buttonText: "#ffffff"
    }
  },
  {
    id: "warm-editorial",
    name: "Warm Editorial",
    description: "Editorial ivory, black-brown and clay for personal-brand doctors.",
    colors: {
      bg: "#fffdf8",
      surface: "#f3ece2",
      text: "#4b4640",
      heading: "#1e1b18",
      muted: "#7b7268",
      accent: "#a8694f",
      accentSoft: "#ead6ca",
      buttonBg: "#1e1b18",
      buttonText: "#fffdf8"
    }
  },
  {
    id: "clean-surgery",
    name: "Clean Surgery",
    description: "Bright clinical white, navy and steel blue for surgical specialists.",
    colors: {
      bg: "#ffffff",
      surface: "#f2f6f8",
      text: "#32404d",
      heading: "#0f2438",
      muted: "#71808d",
      accent: "#477ea5",
      accentSoft: "#dbe8f0",
      buttonBg: "#0f2438",
      buttonText: "#ffffff"
    }
  },
  {
    id: "dy-skin-clinic",
    name: "DY Skin Clinic",
    description: "White, soft rose taupe and charcoal matching the DY Skin Clinic site.",
    colors: {
      bg: "#ffffff",
      surface: "#f4ece8",
      text: "#7f7c76",
      heading: "#3d3d3d",
      muted: "#7f7c76",
      accent: "#d1a48e",
      accentSoft: "#ead8cf",
      buttonBg: "#d1a48e",
      buttonText: "#ffffff"
    }
  }
];

export const defaultDesignSettings: DesignSettings = {
  paletteId: "nikita-bronze",
  headingFont: "Playfair Display",
  bodyFont: "Libre Franklin",
  buttonStyle: "Pill",
  spacing: "Standard",
  customColors: palettes[0].colors
};

export function getPalette(id: string) {
  return palettes.find((palette) => palette.id === id) ?? palettes[0];
}

export function getRadius(buttonStyle: ButtonStyle) {
  const radii: Record<ButtonStyle, string> = {
    Pill: "999px",
    "Soft rounded": "14px",
    "Sharp editorial": "0px",
    Outline: "999px",
    "Minimal text link": "0px"
  };

  return radii[buttonStyle];
}

export function getSectionPadding(spacing: SpacingOption) {
  const padding: Record<SpacingOption, string> = {
    Compact: "56px 24px",
    Standard: "82px 28px",
    Spacious: "112px 32px",
    Editorial: "136px 36px"
  };

  return padding[spacing];
}

export function createCssVariables(settings: DesignSettings) {
  const colors = settings.customColors;
  const isOutline = settings.buttonStyle === "Outline";
  const isMinimal = settings.buttonStyle === "Minimal text link";
  const buttonBg = isOutline || isMinimal ? "transparent" : colors.buttonBg;
  const buttonText = isOutline || isMinimal ? colors.heading : colors.buttonText;
  const buttonBorder = isMinimal ? "transparent" : isOutline ? colors.accent : colors.buttonBg;
  return `${createFontImport(settings)}

:root {
  --sh-bg: ${colors.bg};
  --sh-surface: ${colors.surface};
  --sh-text: ${colors.text};
  --sh-heading: ${colors.heading};
  --sh-muted: ${colors.muted};
  --sh-accent: ${colors.accent};
  --sh-accent-soft: ${colors.accentSoft};
  --sh-button-bg: ${buttonBg};
  --sh-button-text: ${buttonText};
  --sh-button-border: ${buttonBorder};
  --sh-font-heading: "${settings.headingFont}", Georgia, serif;
  --sh-font-body: "${settings.bodyFont}", Arial, sans-serif;
  --sh-radius: ${getRadius(settings.buttonStyle)};
  --sh-section-padding: ${getSectionPadding(settings.spacing)};
  --sh-container: 1160px;
  --sh-shadow: 0 24px 70px rgba(22, 20, 18, 0.10);
}`;
}

export function createFontImport(settings: Pick<DesignSettings, "headingFont" | "bodyFont">) {
  const fonts = Array.from(new Set([settings.headingFont, settings.bodyFont].filter(Boolean)));
  const families = fonts
    .map((font) => `family=${font.trim().replace(/\s+/g, "+")}`)
    .join("&");

  return `@import url("https://fonts.googleapis.com/css2?${families}&display=swap");`;
}

export function createCombinedCode(html: string, css: string, settings: DesignSettings) {
  return `${html.trim()}

<style>
${createCssVariables(settings)}

${css.trim()}
</style>`;
}
