"use client";

import { ArrowDown, ArrowUp, Monitor, Plus, Smartphone, Tablet, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { DesignControls } from "@/components/DesignControls";
import { CopyButton } from "@/components/CopyButton";
import { getCombinedFullPageCode, getFullPageCss, getFullPageHtml, pageTemplates } from "@/lib/page-assembly";
import type { Block, DesignSettings } from "@/types/block";

type PageAssemblyProps = {
  allBlocks: Block[];
  assemblyIds: string[];
  settings: DesignSettings;
  onAssemblyChange: (ids: string[]) => void;
  onSettingsChange: (settings: DesignSettings) => void;
};

type AssemblyTab = "Full Page Preview" | "Full Page HTML" | "Full Page CSS" | "Combined Full Page Code";
type AssemblyViewport = "desktop" | "tablet" | "mobile";

const tabs: AssemblyTab[] = ["Full Page Preview", "Full Page HTML", "Full Page CSS", "Combined Full Page Code"];

const viewportConfig: Record<AssemblyViewport, { label: string; width: number; height: number }> = {
  desktop: { label: "Desktop", width: 1200, height: 780 },
  tablet: { label: "Tablet", width: 768, height: 780 },
  mobile: { label: "Mobile", width: 390, height: 740 }
};

export function PageAssembly({ allBlocks, assemblyIds, settings, onAssemblyChange, onSettingsChange }: PageAssemblyProps) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<AssemblyTab>("Full Page Preview");
  const [viewport, setViewport] = useState<AssemblyViewport>("desktop");

  const blocksById = useMemo(() => new Map(allBlocks.map((block) => [block.id, block])), [allBlocks]);
  const selectedBlocks = assemblyIds.map((id) => blocksById.get(id)).filter((block): block is Block => Boolean(block));
  const missingIds = assemblyIds.filter((id) => !blocksById.has(id));

  const filteredBlocks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return allBlocks;
    }

    return allBlocks.filter((block) =>
      [block.name, block.category, block.client, block.style, block.description, ...block.tags]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [allBlocks, query]);

  const fullPageHtml = useMemo(() => getFullPageHtml(selectedBlocks), [selectedBlocks]);
  const fullPageCss = useMemo(() => getFullPageCss(selectedBlocks, settings), [selectedBlocks, settings]);
  const combined = useMemo(() => getCombinedFullPageCode(selectedBlocks, settings), [selectedBlocks, settings]);

  function addBlock(id: string) {
    onAssemblyChange([...assemblyIds, id]);
  }

  function removeBlock(index: number) {
    onAssemblyChange(assemblyIds.filter((_, currentIndex) => currentIndex !== index));
  }

  function moveBlock(index: number, direction: -1 | 1) {
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= assemblyIds.length) {
      return;
    }

    const nextIds = [...assemblyIds];
    [nextIds[index], nextIds[nextIndex]] = [nextIds[nextIndex], nextIds[index]];
    onAssemblyChange(nextIds);
  }

  function loadTemplate(id: string) {
    const template = pageTemplates.find((item) => item.id === id);
    if (template) {
      onAssemblyChange(template.blockIds);
    }
  }

  return (
    <div className="grid min-h-[calc(100vh-97px)] grid-cols-[minmax(320px,430px)_minmax(0,1fr)] gap-5 p-5">
      <section className="min-w-0" aria-label="Page assembly blocks">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#5c5750]">Available Blocks</h2>
          <span className="text-sm text-[#746d65]">{filteredBlocks.length} shown</span>
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search blocks to add..."
          className="mb-3 h-11 w-full rounded-md border border-[#ded6ca] bg-white px-3 text-sm outline-none transition focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
        />
        <div className="grid max-h-[calc(100vh-205px)] gap-2 overflow-auto pr-1">
          {filteredBlocks.map((block) => (
            <article key={block.id} className="rounded-lg border border-[#e4ded4] bg-white p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-ink">{block.name}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#706a63]">{block.category} · {block.client}</p>
                </div>
                <button
                  type="button"
                  onClick={() => addBlock(block.id)}
                  className="inline-flex min-h-9 items-center gap-1 rounded-md border border-[#ded6ca] bg-white px-2.5 text-xs font-semibold text-ink hover:border-bronze"
                >
                  <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                  Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="min-w-0 space-y-4" aria-label="Page assembly workspace">
        <section className="rounded-lg border border-[#e4ded4] bg-[#fffdfa] p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-bronze">Page Assembly</p>
              <h2 className="mt-1 text-2xl font-semibold text-ink">Build a full Elementor-ready page</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <label className="sr-only" htmlFor="page-template">Load Page Template</label>
              <select
                id="page-template"
                defaultValue=""
                onChange={(event) => {
                  loadTemplate(event.target.value);
                  event.target.value = "";
                }}
                className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink"
              >
                <option value="" disabled>Load Page Template</option>
                {pageTemplates.map((template) => (
                  <option key={template.id} value={template.id}>{template.name}</option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => onAssemblyChange([])}
                className="inline-flex min-h-10 items-center rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-semibold text-ink hover:border-bronze"
              >
                Clear Page
              </button>
              <CopyButton label="Copy Full Page Code" value={combined} variant="primary" />
            </div>
          </div>

          {missingIds.length ? (
            <p className="mt-3 rounded-md border border-[#e0b5a8] bg-[#fff5f1] px-4 py-3 text-sm font-semibold text-[#8a3f2c]">
              {missingIds.length} saved block ID{missingIds.length === 1 ? "" : "s"} could not be found. Remove or replace missing blocks before exporting.
            </p>
          ) : null}
        </section>

        <DesignControls settings={settings} onChange={onSettingsChange} />

        <section className="rounded-lg border border-[#e4ded4] bg-[#fffdfa] p-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#5c5750]">Selected Page Blocks</h3>
            <span className="text-sm text-[#746d65]">{selectedBlocks.length} blocks</span>
          </div>
          <div className="grid gap-2">
            {assemblyIds.length ? assemblyIds.map((id, index) => {
              const block = blocksById.get(id);
              return (
                <article key={`${id}-${index}`} className="flex items-center justify-between gap-3 rounded-md border border-[#e4ded4] bg-white p-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">{index + 1}. {block?.name ?? "Missing block"}</p>
                    <p className="text-xs text-[#746d65]">{block ? `${block.category} · ${block.client}` : id}</p>
                  </div>
                  <div className="flex gap-1">
                    <button type="button" onClick={() => moveBlock(index, -1)} disabled={index === 0} className="flex h-9 w-9 items-center justify-center rounded-md border border-[#ded6ca] bg-white text-ink disabled:opacity-35">
                      <ArrowUp className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button type="button" onClick={() => moveBlock(index, 1)} disabled={index === assemblyIds.length - 1} className="flex h-9 w-9 items-center justify-center rounded-md border border-[#ded6ca] bg-white text-ink disabled:opacity-35">
                      <ArrowDown className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button type="button" onClick={() => removeBlock(index)} className="flex h-9 w-9 items-center justify-center rounded-md border border-[#e0b5a8] bg-[#fff8f5] text-[#8a3f2c]">
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            }) : (
              <div className="rounded-lg border border-dashed border-[#d8cfc2] bg-white p-6 text-sm leading-6 text-[#68625b]">
                Add blocks from the list or load a Nikita page template to start assembling a page.
              </div>
            )}
          </div>
        </section>

        <section className="rounded-lg border border-[#e4ded4] bg-[#fffdfa]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e4ded4] p-3">
            <div className="flex flex-wrap gap-1" role="tablist" aria-label="Page assembly tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={["min-h-9 rounded-md px-3 text-sm font-semibold transition", activeTab === tab ? "bg-ink text-white" : "text-[#615b54] hover:bg-[#f5efe6]"].join(" ")}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="p-4">
            {activeTab === "Full Page Preview" ? (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {(["desktop", "tablet", "mobile"] as AssemblyViewport[]).map((item) => {
                    const Icon = item === "mobile" ? Smartphone : item === "tablet" ? Tablet : Monitor;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setViewport(item)}
                        className={["inline-flex min-h-9 items-center gap-2 rounded-md px-3 text-xs font-semibold transition", viewport === item ? "bg-ink text-white" : "border border-[#ded6ca] bg-white text-ink hover:border-bronze"].join(" ")}
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {viewportConfig[item].label}
                      </button>
                    );
                  })}
                </div>
                <FullPagePreview html={fullPageHtml} css={fullPageCss} settings={settings} viewport={viewport} />
              </div>
            ) : null}
            {activeTab === "Full Page HTML" ? <CodeBlock value={fullPageHtml} /> : null}
            {activeTab === "Full Page CSS" ? <CodeBlock value={fullPageCss} /> : null}
            {activeTab === "Combined Full Page Code" ? <CodeBlock value={combined} /> : null}
          </div>
        </section>
      </section>
    </div>
  );
}

function FullPagePreview({ html, css, settings, viewport }: { html: string; css: string; settings: DesignSettings; viewport: AssemblyViewport }) {
  const selectedViewport = viewportConfig[viewport];
  const srcDoc = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    ${css}
    * { box-sizing: border-box; }
    body { margin: 0; background: ${settings.customColors.bg}; }
  </style>
</head>
<body>${html || "<main style='padding:40px;font-family:Arial,sans-serif;color:#555'>Add blocks to preview a full page.</main>"}</body>
</html>`;

  return (
    <div className="overflow-auto rounded-lg border border-[#ded6ca] bg-[#eee8de] p-3">
      <iframe
        title="Full page assembly preview"
        sandbox=""
        srcDoc={srcDoc}
        style={{ width: selectedViewport.width, height: selectedViewport.height }}
        className="mx-auto block rounded-md border border-[#d7cdbc] bg-white shadow-sm"
      />
    </div>
  );
}

function CodeBlock({ value }: { value: string }) {
  return (
    <pre className="max-h-[620px] overflow-auto rounded-lg border border-[#ded6ca] bg-[#151412] p-4 text-[12px] leading-6 text-[#f7efe3]">
      <code>{value}</code>
    </pre>
  );
}
