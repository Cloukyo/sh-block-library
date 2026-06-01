"use client";

import { getBlockFoundationId, getFullCss } from "@/lib/foundation-presets";
import type { Block, DesignSettings } from "@/types/block";

export type PreviewViewport = {
  id: string;
  label: string;
  width: number | "100%";
  height: number;
};

type BlockPreviewProps = {
  block: Block;
  settings: DesignSettings;
  viewport: PreviewViewport;
};

export function BlockPreview({ block, settings, viewport }: BlockPreviewProps) {
  const foundationId = getBlockFoundationId(block);
  const srcDoc = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    ${getFullCss(block.css, settings, foundationId)}
    * { box-sizing: border-box; }
    body { margin: 0; background: ${settings.customColors.bg}; }
  </style>
</head>
<body>${block.html}</body>
</html>`;

  return (
    <div className="overflow-auto rounded-lg border border-[#ded6ca] bg-[#eee8de] p-3">
      <iframe
        title={`${block.name} live preview`}
        sandbox=""
        srcDoc={srcDoc}
        style={{
          width: viewport.width,
          height: viewport.height,
          maxWidth: viewport.width === "100%" ? "100%" : "none"
        }}
        className="mx-auto block rounded-md border border-[#d7cdbc] bg-white shadow-sm"
      />
    </div>
  );
}
