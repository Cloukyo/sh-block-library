"use client";

import { ArrowDown, ArrowUp, ChevronDown, CopyPlus, Download, Monitor, Palette, Plus, Smartphone, Tablet, Trash2, Upload } from "lucide-react";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { DesignControls } from "@/components/DesignControls";
import { ElementorQaPanel } from "@/components/ElementorQaPanel";
import { foundationPresets, getBlockFoundationId } from "@/lib/foundation-presets";
import {
  createPageTemplate,
  defaultPageTemplateChecklist,
  getDetectedFoundationIds,
  getFoundationOnlyCss,
  getFullPageCss,
  getFullPageHtml,
  getLeanPageCss,
  getPageExportCode,
  loadSavedPageTemplates,
  pageTemplates,
  parseImportedPageTemplates,
  readPageFoundationId,
  resolveImportedPageTemplateConflicts,
  savePageFoundationId,
  saveSavedPageTemplates,
  wrapStyle
} from "@/lib/page-assembly";
import type { Block, BlockStatus, DesignSettings, FoundationId, PageTemplate, PageTemplateChecklist } from "@/types/block";

type PageAssemblyProps = {
  allBlocks: Block[];
  assemblyIds: string[];
  settings: DesignSettings;
  onAssemblyChange: (ids: string[]) => void;
  onSettingsChange: (settings: DesignSettings) => void;
};

type AssemblyTab = "Preview" | "Full Page Standalone" | "Lean Page" | "Foundation Only" | "HTML Only" | "CSS Only";
type AssemblyViewport = "desktop" | "tablet" | "mobile";

const tabs: AssemblyTab[] = ["Preview", "Full Page Standalone", "Lean Page", "Foundation Only", "HTML Only", "CSS Only"];

const viewportConfig: Record<AssemblyViewport, { label: string; width: number; height: number }> = {
  desktop: { label: "Desktop", width: 1200, height: 780 },
  tablet: { label: "Tablet", width: 768, height: 780 },
  mobile: { label: "Mobile", width: 390, height: 740 }
};

const statuses: BlockStatus[] = ["Draft", "Needs Review", "Elementor Tested", "Approved"];

export function PageAssembly({ allBlocks, assemblyIds, settings, onAssemblyChange, onSettingsChange }: PageAssemblyProps) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<AssemblyTab>("Preview");
  const [viewport, setViewport] = useState<AssemblyViewport>("desktop");
  const [savedTemplates, setSavedTemplates] = useState<PageTemplate[]>([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState("");
  const [pageFoundationId, setPageFoundationId] = useState<FoundationId>("sh-foundation");
  const [includeDetectedFoundations, setIncludeDetectedFoundations] = useState(true);
  const [templateName, setTemplateName] = useState("");
  const [templateDescription, setTemplateDescription] = useState("");
  const [templateSourceProject, setTemplateSourceProject] = useState("");
  const [templateTags, setTemplateTags] = useState("");
  const [templateStatus, setTemplateStatus] = useState<BlockStatus>("Draft");
  const [templateChecklist, setTemplateChecklist] = useState<PageTemplateChecklist>(defaultPageTemplateChecklist);
  const [message, setMessage] = useState("");
  const [storageHydrated, setStorageHydrated] = useState(false);
  const [hasStoredFoundation, setHasStoredFoundation] = useState(false);
  const importInputRef = useRef<HTMLInputElement>(null);

  const blocksById = useMemo(() => new Map(allBlocks.map((block) => [block.id, block])), [allBlocks]);
  const selectedBlocks = assemblyIds.map((id) => blocksById.get(id)).filter((block): block is Block => Boolean(block));
  const missingIds = assemblyIds.filter((id) => !blocksById.has(id));
  const allTemplates = useMemo(() => [...pageTemplates, ...savedTemplates], [savedTemplates]);
  const selectedTemplate = allTemplates.find((template) => template.id === selectedTemplateId);
  const detectedFoundationIds = useMemo(() => getDetectedFoundationIds(selectedBlocks), [selectedBlocks]);
  const detectedFoundationLabels = detectedFoundationIds.map((id) => foundationPresets[id]?.name ?? id);
  const mixedFoundations = detectedFoundationIds.length > 1;
  const hasFoundationMismatch = detectedFoundationIds.some((id) => id !== pageFoundationId);
  const blocksWithoutFoundation = selectedBlocks.filter((block) => !block.foundationId);
  const foundationExists = Boolean(foundationPresets[pageFoundationId]);

  const filteredBlocks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return allBlocks;
    }

    return allBlocks.filter((block) =>
      [block.name, block.category, block.client, block.style, block.description, block.sourceProject, ...block.tags]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [allBlocks, query]);

  const fullPageHtml = useMemo(() => getFullPageHtml(selectedBlocks), [selectedBlocks]);
  const standaloneCss = useMemo(() => getFullPageCss(selectedBlocks, settings, pageFoundationId, includeDetectedFoundations), [includeDetectedFoundations, pageFoundationId, selectedBlocks, settings]);
  const leanCss = useMemo(() => getLeanPageCss(selectedBlocks), [selectedBlocks]);
  const foundationOnlyCode = useMemo(() => wrapStyle(getFoundationOnlyCss(pageFoundationId, settings)), [pageFoundationId, settings]);
  const standaloneCode = useMemo(() => getPageExportCode(selectedBlocks, settings, pageFoundationId, "standalone", includeDetectedFoundations), [includeDetectedFoundations, pageFoundationId, selectedBlocks, settings]);
  const leanCode = useMemo(() => getPageExportCode(selectedBlocks, settings, pageFoundationId, "lean", includeDetectedFoundations), [includeDetectedFoundations, pageFoundationId, selectedBlocks, settings]);
  const cssOnlyCode = standaloneCss;
  const activeCode = activeTab === "Lean Page" ? leanCode : activeTab === "Foundation Only" ? foundationOnlyCode : activeTab === "HTML Only" ? fullPageHtml : activeTab === "CSS Only" ? cssOnlyCode : standaloneCode;

  const pageQaBlock = useMemo<Block>(() => ({
    id: "page-assembly-qa",
    name: templateName || "Current Page Assembly",
    category: "Utility Blocks",
    description: "Elementor QA for the currently assembled page.",
    tags: ["page-assembly", "elementor-qa"],
    client: "Mixed",
    style: "Assembly",
    foundationId: pageFoundationId,
    html: fullPageHtml,
    css: standaloneCss,
    notes: ""
  }), [fullPageHtml, pageFoundationId, standaloneCss, templateName]);

  useEffect(() => {
    const saved = loadSavedPageTemplates();
    setSavedTemplates(saved);
    const storedFoundation = readPageFoundationId();
    if (storedFoundation) {
      setPageFoundationId(storedFoundation);
      setHasStoredFoundation(true);
    }
    setStorageHydrated(true);
  }, []);

  useEffect(() => {
    if (storageHydrated && !hasStoredFoundation && detectedFoundationIds.length === 1) {
      setPageFoundationId(detectedFoundationIds[0]);
    }
  }, [detectedFoundationIds, hasStoredFoundation, storageHydrated]);

  useEffect(() => {
    if (storageHydrated) {
      saveSavedPageTemplates(savedTemplates);
    }
  }, [savedTemplates, storageHydrated]);

  useEffect(() => {
    if (storageHydrated) {
      savePageFoundationId(pageFoundationId);
    }
  }, [pageFoundationId, storageHydrated]);

  function applyTemplateFields(template: PageTemplate) {
    setTemplateName(template.name);
    setTemplateDescription(template.description);
    setTemplateSourceProject(template.sourceProject);
    setTemplateTags(template.tags.join(", "));
    setTemplateStatus(template.status);
    setTemplateChecklist(template.checklist);
    setPageFoundationId(template.foundationId);
  }

  function loadTemplate(id: string) {
    const template = allTemplates.find((item) => item.id === id);
    if (!template) {
      return;
    }
    setSelectedTemplateId(template.id);
    applyTemplateFields(template);
    onAssemblyChange(template.blockIds);
    flash(`Loaded ${template.name}.`);
  }

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

  function buildTemplateInput() {
    return {
      name: templateName.trim() || "Untitled Page Template",
      description: templateDescription.trim(),
      sourceProject: templateSourceProject.trim(),
      foundationId: pageFoundationId,
      blockIds: assemblyIds,
      tags: templateTags.split(",").map((tag) => tag.trim()).filter(Boolean),
      status: templateStatus,
      checklist: templateChecklist
    };
  }

  function saveTemplate() {
    const existing = savedTemplates.find((template) => template.id === selectedTemplateId);
    if (!existing) {
      saveAsNewTemplate();
      return;
    }

    const updated: PageTemplate = {
      ...existing,
      ...buildTemplateInput(),
      updatedAt: new Date().toISOString()
    };
    setSavedTemplates((current) => current.map((template) => (template.id === updated.id ? updated : template)));
    setSelectedTemplateId(updated.id);
    flash(`Saved ${updated.name}.`);
  }

  function saveAsNewTemplate() {
    const template = createPageTemplate(buildTemplateInput());
    setSavedTemplates((current) => [...current, template]);
    setSelectedTemplateId(template.id);
    applyTemplateFields(template);
    flash(`Saved ${template.name}.`);
  }

  function duplicateTemplate() {
    const source = selectedTemplate;
    if (!source) {
      saveAsNewTemplate();
      return;
    }

    const duplicate = createPageTemplate({
      ...source,
      name: `Copy of ${source.name}`,
      blockIds: source.blockIds,
      status: "Draft",
      checklist: source.checklist
    });
    setSavedTemplates((current) => [...current, duplicate]);
    setSelectedTemplateId(duplicate.id);
    applyTemplateFields(duplicate);
    onAssemblyChange(duplicate.blockIds);
    flash(`Duplicated ${source.name}.`);
  }

  function renameTemplate() {
    const name = window.prompt("Rename template", templateName || selectedTemplate?.name || "");
    if (!name) {
      return;
    }
    setTemplateName(name);
    if (savedTemplates.some((template) => template.id === selectedTemplateId)) {
      setSavedTemplates((current) =>
        current.map((template) => (template.id === selectedTemplateId ? { ...template, name, updatedAt: new Date().toISOString() } : template))
      );
    }
  }

  function deleteTemplate() {
    const existing = savedTemplates.find((template) => template.id === selectedTemplateId);
    if (!existing) {
      flash("Built-in templates cannot be deleted. Save a copy first if you want an editable version.");
      return;
    }

    if (!window.confirm(`Delete "${existing.name}"?`)) {
      return;
    }

    setSavedTemplates((current) => current.filter((template) => template.id !== existing.id));
    setSelectedTemplateId("");
    flash(`Deleted ${existing.name}.`);
  }

  function clearPage() {
    onAssemblyChange([]);
    setSelectedTemplateId("");
    setTemplateName("");
    setTemplateDescription("");
    setTemplateSourceProject("");
    setTemplateTags("");
    setTemplateStatus("Draft");
    setTemplateChecklist(defaultPageTemplateChecklist);
  }

  function exportTemplates() {
    const blob = new Blob([JSON.stringify({ type: "sh-block-library-page-templates", exportedAt: new Date().toISOString(), pageTemplates: savedTemplates }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `sh-block-library-page-templates-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  async function importTemplates(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      const imported = resolveImportedPageTemplateConflicts(parseImportedPageTemplates(text), new Set(allTemplates.map((template) => template.id)));
      setSavedTemplates((current) => [...current, ...imported]);
      flash(`Imported ${imported.length} page template${imported.length === 1 ? "" : "s"}.`);
    } catch (error) {
      flash(error instanceof Error ? error.message : "Template import failed.");
    } finally {
      event.target.value = "";
    }
  }

  function updateChecklist(key: keyof PageTemplateChecklist, value: boolean) {
    setTemplateChecklist((current) => ({ ...current, [key]: value }));
  }

  function flash(text: string) {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2400);
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
                  <p className="mt-1 text-xs leading-5 text-[#706a63]">{block.category} - {block.client}</p>
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
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-bronze">Page Assembly</p>
              <h2 className="mt-1 text-2xl font-semibold text-ink">Build a reusable Elementor page template</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#6d675f]">
                Use Full Page Standalone when testing a complete page in Elementor. Use Foundation Only when you want to paste shared styling once.
                Use Lean Page when the foundation CSS is already loaded. For the cleanest Elementor workflow, paste Foundation Only once, then paste individual Lean Combined blocks section by section.
              </p>
            </div>
            <StatusBadge status={templateStatus} />
          </div>
          {message ? <p className="mt-3 text-sm font-semibold text-[#6b5532]">{message}</p> : null}
          {missingIds.length ? (
            <p className="mt-3 rounded-md border border-[#e0b5a8] bg-[#fff5f1] px-4 py-3 text-sm font-semibold text-[#8a3f2c]">
              {missingIds.length} saved block ID{missingIds.length === 1 ? "" : "s"} could not be found. Remove or replace missing blocks before exporting.
            </p>
          ) : null}
        </section>

        <section className="rounded-lg border border-[#e4ded4] bg-[#fffdfa] p-4">
          <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_minmax(260px,0.5fr)]">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
                Template
                <select
                  value={selectedTemplateId}
                  onChange={(event) => loadTemplate(event.target.value)}
                  className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink"
                >
                  <option value="">Current unsaved assembly</option>
                  <optgroup label="Built-in templates">
                    {pageTemplates.map((template) => (
                      <option key={template.id} value={template.id}>{template.name}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Saved templates">
                    {savedTemplates.map((template) => (
                      <option key={template.id} value={template.id}>{template.name}</option>
                    ))}
                  </optgroup>
                </select>
              </label>
              <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
                Page Foundation
                <select
                  value={pageFoundationId}
                  onChange={(event) => {
                    setPageFoundationId(event.target.value as FoundationId);
                    setHasStoredFoundation(true);
                  }}
                  className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink"
                >
                  {Object.values(foundationPresets).map((preset) => (
                    <option key={preset.id} value={preset.id}>{preset.name}</option>
                  ))}
                </select>
              </label>
              <TextInput label="Name" value={templateName} onChange={setTemplateName} placeholder="Nikita Home" />
              <TextInput label="Source Project" value={templateSourceProject} onChange={setTemplateSourceProject} placeholder="Nikita Grover Staging Site" />
              <TextInput label="Tags" value={templateTags} onChange={setTemplateTags} placeholder="nikita, homepage" />
              <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
                Status
                <select
                  value={templateStatus}
                  onChange={(event) => setTemplateStatus(event.target.value as BlockStatus)}
                  className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1 text-xs font-semibold text-[#615b54] sm:col-span-2">
                Description
                <textarea
                  value={templateDescription}
                  onChange={(event) => setTemplateDescription(event.target.value)}
                  rows={2}
                  className="rounded-md border border-[#ded6ca] bg-white px-3 py-2 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
                />
              </label>
            </div>
            <div className="flex flex-wrap content-start gap-2">
              <button type="button" onClick={saveTemplate} className="inline-flex min-h-10 items-center rounded-md border border-ink bg-ink px-3 text-sm font-semibold text-white hover:bg-[#35312c]">Save Template</button>
              <button type="button" onClick={saveAsNewTemplate} className="inline-flex min-h-10 items-center rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-semibold text-ink hover:border-bronze">Save As New</button>
              <button type="button" onClick={duplicateTemplate} className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-semibold text-ink hover:border-bronze"><CopyPlus className="h-4 w-4" aria-hidden="true" /> Duplicate</button>
              <button type="button" onClick={renameTemplate} className="inline-flex min-h-10 items-center rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-semibold text-ink hover:border-bronze">Rename</button>
              <button type="button" onClick={deleteTemplate} className="inline-flex min-h-10 items-center rounded-md border border-[#e0b5a8] bg-[#fff8f5] px-3 text-sm font-semibold text-[#8a3f2c]">Delete</button>
              <button type="button" onClick={clearPage} className="inline-flex min-h-10 items-center rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-semibold text-ink hover:border-bronze">Clear Page</button>
              <button type="button" onClick={exportTemplates} className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-semibold text-ink hover:border-bronze"><Download className="h-4 w-4" aria-hidden="true" /> Export Templates</button>
              <button type="button" onClick={() => importInputRef.current?.click()} className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-semibold text-ink hover:border-bronze"><Upload className="h-4 w-4" aria-hidden="true" /> Import Templates</button>
              <input ref={importInputRef} type="file" accept="application/json,.json" onChange={importTemplates} className="hidden" />
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-[#e4ded4] bg-white p-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#5c5750]">Foundation Matching</h3>
              <p className="mt-2 text-sm leading-6 text-[#6d675f]">Selected page foundation: <strong className="text-ink">{foundationPresets[pageFoundationId]?.name ?? pageFoundationId}</strong></p>
              <p className="text-sm leading-6 text-[#6d675f]">Required foundations detected: {detectedFoundationLabels.length ? detectedFoundationLabels.join(", ") : "None yet"}</p>
              <label className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink">
                <input type="checkbox" checked={includeDetectedFoundations} onChange={(event) => setIncludeDetectedFoundations(event.target.checked)} />
                Include detected foundations in preview and standalone export
              </label>
            </div>
            <div className="grid gap-2">
              {!foundationExists ? <Warning text="Selected foundation does not exist. Preview/export may not match the intended design." /> : null}
              {mixedFoundations ? <Warning text="This page uses blocks from multiple foundations. Preview may not match each source design." /> : null}
              {hasFoundationMismatch ? <Warning text={`Warning: this page uses ${detectedFoundationLabels.join(", ")} blocks with a ${foundationPresets[pageFoundationId]?.name ?? pageFoundationId}. Preview may not match source design.`} /> : null}
              {blocksWithoutFoundation.length ? <Warning text={`${blocksWithoutFoundation.length} block${blocksWithoutFoundation.length === 1 ? "" : "s"} have no foundationId and may not preview/export correctly.`} /> : null}
            </div>
          </div>
        </section>

        <details className="group rounded-lg border border-[#e4ded4] bg-[#fffdfa]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3">
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#ded6ca] bg-white text-ink">
                <Palette className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase tracking-[0.16em] text-[#5c5750]">Design Controls</span>
                <span className="block text-xs text-[#746d65]">Palette, fonts and spacing</span>
              </span>
            </span>
            <ChevronDown className="h-4 w-4 text-[#746d65] transition group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="border-t border-[#e4ded4] p-4">
            <DesignControls settings={settings} onChange={onSettingsChange} />
          </div>
        </details>

        <details className="group rounded-lg border border-[#e4ded4] bg-[#fffdfa]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3">
            <span>
              <span className="block text-sm font-bold uppercase tracking-[0.16em] text-[#5c5750]">Template QA</span>
              <span className="block text-xs text-[#746d65]">Saved locally with this template</span>
            </span>
            <ChevronDown className="h-4 w-4 text-[#746d65] transition group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="grid gap-3 border-t border-[#e4ded4] p-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries({
              previewChecked: "Preview checked",
              desktopChecked: "Desktop checked",
              tabletChecked: "Tablet checked",
              mobileChecked: "Mobile checked",
              elementorPasted: "Elementor pasted",
              ctaLinksChecked: "CTA links checked",
              imagesReplaced: "Images replaced",
              approved: "Approved"
            } satisfies Record<keyof PageTemplateChecklist, string>).map(([key, label]) => (
              <label key={key} className="flex items-center gap-2 rounded-md border border-[#e4ded4] bg-white p-3 text-sm font-semibold text-ink">
                <input type="checkbox" checked={templateChecklist[key as keyof PageTemplateChecklist]} onChange={(event) => updateChecklist(key as keyof PageTemplateChecklist, event.target.checked)} />
                {label}
              </label>
            ))}
          </div>
        </details>

        <details className="group rounded-lg border border-[#e4ded4] bg-[#fffdfa]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3">
            <span>
              <span className="block text-sm font-bold uppercase tracking-[0.16em] text-[#5c5750]">Elementor QA</span>
              <span className="block text-xs text-[#746d65]">Paste safety checks for the assembled page</span>
            </span>
            <ChevronDown className="h-4 w-4 text-[#746d65] transition group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="border-t border-[#e4ded4] p-4">
            <ElementorQaPanel block={pageQaBlock} />
          </div>
        </details>

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
                    <p className="text-xs text-[#746d65]">{block ? `${block.category} - ${block.client} - ${foundationPresets[getBlockFoundationId(block)]?.name ?? getBlockFoundationId(block)}` : id}</p>
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
                Add blocks from the list or load a page template to start assembling a page.
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
            <div className="flex flex-wrap gap-2">
              <CopyButton label="Copy Full Page Standalone" textToCopy={standaloneCode} variant="primary" />
              <CopyButton label="Copy Lean Page" textToCopy={leanCode} />
              <CopyButton label="Copy Foundation Only" textToCopy={foundationOnlyCode} />
              <CopyButton label="Copy HTML Only" textToCopy={fullPageHtml} />
              <CopyButton label="Copy CSS Only" textToCopy={cssOnlyCode} />
            </div>
          </div>
          <div className="p-4">
            {activeTab === "Preview" ? (
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
                <FullPagePreview html={fullPageHtml} css={standaloneCss} settings={settings} viewport={viewport} />
              </div>
            ) : (
              <CodeBlock value={activeCode} />
            )}
          </div>
        </section>
      </section>
    </div>
  );
}

function TextInput({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string }) {
  return (
    <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
      />
    </label>
  );
}

function Warning({ text }: { text: string }) {
  return <p className="rounded-md border border-[#e0b5a8] bg-[#fff8f5] px-3 py-2 text-sm font-semibold leading-6 text-[#8a3f2c]">{text}</p>;
}

function StatusBadge({ status }: { status: BlockStatus }) {
  return <span className="rounded-md border border-[#ded6ca] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#6b5532]">{status}</span>;
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
