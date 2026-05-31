"use client";

import { RotateCcw } from "lucide-react";
import {
  bodyFonts,
  buttonStyles,
  defaultDesignSettings,
  getPalette,
  headingFonts,
  palettes,
  spacingOptions
} from "@/lib/theme-presets";
import type { DesignSettings } from "@/types/block";

type DesignControlsProps = {
  settings: DesignSettings;
  onChange: (settings: DesignSettings) => void;
};

const colorFields: Array<[keyof DesignSettings["customColors"], string]> = [
  ["bg", "Background"],
  ["surface", "Surface"],
  ["text", "Text"],
  ["heading", "Heading"],
  ["muted", "Muted"],
  ["accent", "Accent"],
  ["buttonBg", "Button bg"],
  ["buttonText", "Button text"]
];

export function DesignControls({ settings, onChange }: DesignControlsProps) {
  function update<K extends keyof DesignSettings>(key: K, value: DesignSettings[K]) {
    onChange({ ...settings, [key]: value });
  }

  function updatePalette(id: string) {
    const palette = getPalette(id);
    onChange({ ...settings, paletteId: id, customColors: palette.colors });
  }

  function updateColor(key: keyof DesignSettings["customColors"], value: string) {
    onChange({
      ...settings,
      customColors: {
        ...settings.customColors,
        [key]: value
      }
    });
  }

  return (
    <section className="rounded-lg border border-[#e4ded4] bg-[#fffdfa] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#5c5750]">Design Controls</h3>
        <button
          type="button"
          onClick={() => onChange(defaultDesignSettings)}
          className="inline-flex min-h-9 items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-xs font-semibold text-ink hover:border-bronze"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          Reset
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
          Colour palette
          <select
            value={settings.paletteId}
            onChange={(event) => updatePalette(event.target.value)}
            className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink"
          >
            {palettes.map((palette) => (
              <option key={palette.id} value={palette.id}>
                {palette.name}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
          Heading font
          <select
            value={settings.headingFont}
            onChange={(event) => update("headingFont", event.target.value)}
            className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink"
          >
            {headingFonts.map((font) => (
              <option key={font}>{font}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
          Body font
          <select
            value={settings.bodyFont}
            onChange={(event) => update("bodyFont", event.target.value)}
            className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink"
          >
            {bodyFonts.map((font) => (
              <option key={font}>{font}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
          Button style
          <select
            value={settings.buttonStyle}
            onChange={(event) => update("buttonStyle", event.target.value as DesignSettings["buttonStyle"])}
            className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink"
          >
            {buttonStyles.map((style) => (
              <option key={style}>{style}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
          Section spacing
          <select
            value={settings.spacing}
            onChange={(event) => update("spacing", event.target.value as DesignSettings["spacing"])}
            className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink"
          >
            {spacingOptions.map((spacing) => (
              <option key={spacing}>{spacing}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {colorFields.map(([key, label]) => (
          <label key={key} className="flex min-h-10 items-center justify-between gap-3 rounded-md border border-[#ebe4da] bg-white px-3 text-xs font-semibold text-[#615b54]">
            {label}
            <input
              type="color"
              value={settings.customColors[key]}
              onChange={(event) => updateColor(key, event.target.value)}
              className="h-7 w-9 cursor-pointer rounded border-0 bg-transparent p-0"
              aria-label={label}
            />
          </label>
        ))}
      </div>
    </section>
  );
}
