"use client";

import { Expand, FileCode2, Monitor, Save, Smartphone, Tablet } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createCombinedCode, createCssVariables } from "@/lib/theme-presets";
import type { Block, DesignSettings } from "@/types/block";
import { BlockPreview, type PreviewViewport } from "./BlockPreview";
import { CopyButton } from "./CopyButton";

type Tab = "Preview" | "HTML" | "CSS" | "Combined" | "Edit" | "Notes";

type CodeTabsProps = {
  block: Block;
  settings: DesignSettings;
  isUserBlock?: boolean;
  onSaveCode: (block: Block, html: string, css: string) => void;
};

const tabs: Tab[] = ["Preview", "HTML", "CSS", "Combined", "Edit", "Notes"];

const previewViewports: PreviewViewport[] = [
  { id: "mobile", label: "Mobile", width: 390, height: 720 },
  { id: "tablet", label: "Tablet", width: 768, height: 760 },
  { id: "desktop", label: "Desktop", width: 1200, height: 760 },
  { id: "monitor", label: "Full monitor", width: 1600, height: 860 },
  { id: "fluid", label: "Fit panel", width: "100%", height: 620 }
];

export function CodeTabs({ block, settings, isUserBlock = false, onSaveCode }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Preview");
  const [viewportId, setViewportId] = useState("desktop");
  const [draftHtml, setDraftHtml] = useState(block.html);
  const [draftCss, setDraftCss] = useState(block.css);
  const [saveMessage, setSaveMessage] = useState("");
  const selectedViewport = previewViewports.find((viewport) => viewport.id === viewportId) ?? previewViewports[2];
  const cssWithVariables = useMemo(() => `${createCssVariables(settings)}\n\n${block.css.trim()}`, [block.css, settings]);
  const combined = useMemo(() => createCombinedCode(block.html, block.css, settings), [block.css, block.html, settings]);

  useEffect(() => {
    setDraftHtml(block.html);
    setDraftCss(block.css);
    setSaveMessage("");
  }, [block]);

  function saveCodeChanges() {
    onSaveCode(block, draftHtml, draftCss);
    setSaveMessage(isUserBlock ? "Saved to this local block." : "Saved as a new editable local copy.");
    window.setTimeout(() => setSaveMessage(""), 2200);
  }

  return (
    <section className="rounded-lg border border-[#e4ded4] bg-[#fffdfa]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e4ded4] p-3">
        <div className="flex flex-wrap gap-1" role="tablist" aria-label="Block code tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={[
                "min-h-9 rounded-md px-3 text-sm font-semibold transition",
                activeTab === tab ? "bg-ink text-white" : "text-[#615b54] hover:bg-[#f5efe6]"
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <CopyButton label="Copy HTML" value={block.html} />
          <CopyButton label="Copy CSS" value={cssWithVariables} />
          <CopyButton label="Copy Combined" value={combined} variant="primary" />
        </div>
      </div>

      <div className="p-4">
        {activeTab === "Preview" ? (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1" aria-label="Preview size controls">
                {previewViewports.map((viewport) => {
                  const Icon = viewport.id === "mobile" ? Smartphone : viewport.id === "tablet" ? Tablet : viewport.id === "monitor" ? Expand : Monitor;
                  return (
                    <button
                      key={viewport.id}
                      type="button"
                      onClick={() => setViewportId(viewport.id)}
                      className={[
                        "inline-flex min-h-9 items-center gap-2 rounded-md px-3 text-xs font-semibold transition",
                        viewportId === viewport.id ? "bg-ink text-white" : "border border-[#ded6ca] bg-white text-ink hover:border-bronze"
                      ].join(" ")}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {viewport.label}
                    </button>
                  );
                })}
              </div>
              <span className="text-xs font-semibold text-[#746d65]">
                {selectedViewport.width === "100%" ? "Responsive panel width" : `${selectedViewport.width}px preview`}
              </span>
            </div>
            <BlockPreview block={block} settings={settings} viewport={selectedViewport} />
          </div>
        ) : null}
        {activeTab === "HTML" ? <CodeBlock value={block.html} /> : null}
        {activeTab === "CSS" ? <CodeBlock value={cssWithVariables} /> : null}
        {activeTab === "Combined" ? <CodeBlock value={combined} /> : null}
        {activeTab === "Edit" ? (
          <div className="space-y-4">
            <div className="rounded-lg border border-[#e4ded4] bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#5c5750]">Edit HTML / CSS</h3>
                  <p className="mt-1 text-sm text-[#6d675f]">
                    {isUserBlock
                      ? "Saving updates this localStorage block."
                      : "Seed blocks are read-only; saving creates an editable local copy."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={saveCodeChanges}
                  className="inline-flex min-h-10 items-center gap-2 rounded-md border border-ink bg-ink px-4 text-sm font-semibold text-white hover:bg-[#35312c]"
                >
                  <Save className="h-4 w-4" aria-hidden="true" />
                  Save Code
                </button>
              </div>
              {saveMessage ? <p className="mt-3 text-sm font-semibold text-[#6b5532]">{saveMessage}</p> : null}
            </div>
            <label className="grid gap-2 text-sm font-semibold text-[#5f5952]">
              HTML
              <textarea
                value={draftHtml}
                onChange={(event) => setDraftHtml(event.target.value)}
                rows={16}
                className="min-h-80 resize-y rounded-lg border border-[#ded6ca] bg-[#151412] p-4 font-mono text-xs leading-6 text-[#f7efe3] outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[#5f5952]">
              CSS
              <textarea
                value={draftCss}
                onChange={(event) => setDraftCss(event.target.value)}
                rows={16}
                className="min-h-80 resize-y rounded-lg border border-[#ded6ca] bg-[#151412] p-4 font-mono text-xs leading-6 text-[#f7efe3] outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
              />
            </label>
          </div>
        ) : null}
        {activeTab === "Notes" ? (
          <div className="rounded-lg border border-[#e4ded4] bg-white p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-bronze">
              <FileCode2 className="h-4 w-4" aria-hidden="true" />
              Implementation notes
            </div>
            <p className="max-w-3xl text-sm leading-7 text-[#625d56]">{block.notes}</p>
            {block.useCase ? <p className="mt-4 text-sm leading-7 text-[#625d56]"><strong className="text-ink">Use case:</strong> {block.useCase}</p> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function CodeBlock({ value }: { value: string }) {
  return (
    <pre className="max-h-[520px] overflow-auto rounded-lg border border-[#ded6ca] bg-[#151412] p-4 text-[12px] leading-6 text-[#f7efe3]">
      <code>{value}</code>
    </pre>
  );
}
