"use client";

import { Download, Layers3, Plus, Search, SlidersHorizontal, Upload } from "lucide-react";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { BlockCard } from "@/components/BlockCard";
import { BlockDetail } from "@/components/BlockDetail";
import { BlockFormModal } from "@/components/BlockFormModal";
import { BlockMetadataModal, type BlockMetadataValues } from "@/components/BlockMetadataModal";
import { PageAssembly } from "@/components/PageAssembly";
import { Sidebar } from "@/components/Sidebar";
import { analyzeElementorQa } from "@/lib/elementor-qa";
import { blocks } from "@/lib/blocks";
import { categories } from "@/lib/categories";
import {
  cloneUserBlock,
  createLocalLibraryBackup,
  createUserBlock,
  loadUserBlocks,
  parseImportedLocalState,
  resolveImportedBlockConflicts,
  saveUserBlocks,
  updateUserBlock
} from "@/lib/local-blocks";
import { readAssemblyIds, saveAssemblyIds } from "@/lib/page-assembly";
import { defaultDesignSettings } from "@/lib/theme-presets";
import type { Block, BlockCategory, BlockQaChecklist, BlockStatus, DesignSettings, ElementorQaStatus, UserBlock } from "@/types/block";

export function AppShell() {
  const [selectedCategory, setSelectedCategory] = useState<BlockCategory | "All">("All");
  const [activeArea, setActiveArea] = useState<"library" | "assembly">("library");
  const [selectedBlockId, setSelectedBlockId] = useState(blocks[2]?.id ?? blocks[0].id);
  const [query, setQuery] = useState("");
  const [styleFilter, setStyleFilter] = useState("All");
  const [clientFilter, setClientFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState<BlockCategory | "All">("All");
  const [sourceProjectFilter, setSourceProjectFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState<BlockStatus | "All">("All");
  const [elementorQaFilter, setElementorQaFilter] = useState<ElementorQaStatus | "All">("All");
  const [settings, setSettings] = useState<DesignSettings>(defaultDesignSettings);
  const [userBlocks, setUserBlocks] = useState<UserBlock[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [formMode, setFormMode] = useState<"add" | "edit" | null>(null);
  const [editingBlock, setEditingBlock] = useState<UserBlock | null>(null);
  const [metadataBlock, setMetadataBlock] = useState<Block | null>(null);
  const [importMessage, setImportMessage] = useState("");
  const [assemblyIds, setAssemblyIds] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setUserBlocks(loadUserBlocks());
    setAssemblyIds(readAssemblyIds());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      saveUserBlocks(userBlocks);
    }
  }, [isHydrated, userBlocks]);

  useEffect(() => {
    if (isHydrated) {
      saveAssemblyIds(assemblyIds);
    }
  }, [assemblyIds, isHydrated]);

  const allBlocks = useMemo<Block[]>(() => [...blocks, ...userBlocks], [userBlocks]);

  const counts = useMemo(() => {
    const categoryCounts: Record<string, number> = { All: allBlocks.length };
    categories.forEach((category) => {
      categoryCounts[category] = allBlocks.filter((block) => block.category === category).length;
    });
    return categoryCounts;
  }, [allBlocks]);

  const styles = useMemo(() => ["All", ...Array.from(new Set(allBlocks.map((block) => block.style))).sort()], [allBlocks]);
  const clients = useMemo(() => ["All", ...Array.from(new Set(allBlocks.map((block) => block.client))).sort()], [allBlocks]);
  const sourceProjects = useMemo(
    () => ["All", ...Array.from(new Set(allBlocks.map((block) => block.sourceProject).filter((project): project is string => Boolean(project)))).sort()],
    [allBlocks]
  );
  const statuses: Array<BlockStatus | "All"> = ["All", "Draft", "Needs Review", "Elementor Tested", "Approved"];
  const elementorQaStatuses: Array<ElementorQaStatus | "All"> = ["All", "Pass", "Warnings", "Needs Review"];

  const filteredBlocks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return allBlocks.filter((block) => {
      const matchesCategory = selectedCategory === "All" || block.category === selectedCategory;
      const matchesType = typeFilter === "All" || block.category === typeFilter;
      const matchesClient = clientFilter === "All" || block.client === clientFilter;
      const matchesStyle = styleFilter === "All" || block.style === styleFilter;
      const matchesSourceProject = sourceProjectFilter === "All" || block.sourceProject === sourceProjectFilter;
      const matchesStatus = statusFilter === "All" || (block.status ?? "Draft") === statusFilter;
      const qaStatus = block.elementorQaStatus ?? analyzeElementorQa({ html: block.html, css: block.css, category: block.category }).status;
      const matchesElementorQa = elementorQaFilter === "All" || qaStatus === elementorQaFilter;
      const haystack = [block.name, block.description, block.category, block.client, block.style, block.sourceProject, block.sourcePage, block.sourceSection, block.status, block.elementorQaStatus, block.useCase, ...block.tags]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return matchesCategory && matchesType && matchesClient && matchesStyle && matchesSourceProject && matchesStatus && matchesElementorQa && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [allBlocks, clientFilter, elementorQaFilter, query, selectedCategory, sourceProjectFilter, statusFilter, styleFilter, typeFilter]);

  const selectedBlock = allBlocks.find((block) => block.id === selectedBlockId) ?? filteredBlocks[0] ?? allBlocks[0];
  const selectedUserBlock = userBlocks.find((block) => block.id === selectedBlock?.id);

  function selectBlock(block: Block) {
    setSelectedBlockId(block.id);
  }

  function handleAddBlock(values: Omit<Block, "id">) {
    const newBlock = createUserBlock(values);
    setUserBlocks((current) => [...current, newBlock]);
    setSelectedBlockId(newBlock.id);
    setQuery("");
    setStyleFilter("All");
    setClientFilter("All");
    setTypeFilter("All");
    setSourceProjectFilter("All");
    setStatusFilter("All");
    setElementorQaFilter("All");
    setSelectedCategory("All");
    setFormMode(null);
  }

  function handleEditBlock(values: Omit<Block, "id">) {
    if (!editingBlock) {
      return;
    }

    const updatedBlock = updateUserBlock(editingBlock, values);
    setUserBlocks((current) => current.map((block) => (block.id === updatedBlock.id ? updatedBlock : block)));
    setSelectedBlockId(updatedBlock.id);
    setFormMode(null);
    setEditingBlock(null);
  }

  function openEditBlock(block: Block) {
    const localBlock = userBlocks.find((userBlock) => userBlock.id === block.id);
    if (localBlock) {
      setEditingBlock(localBlock);
      setFormMode("edit");
    }
  }

  function deleteBlock(block: Block) {
    const confirmed = window.confirm(`Delete "${block.name}" from local blocks?`);
    if (!confirmed) {
      return;
    }

    setUserBlocks((current) => current.filter((userBlock) => userBlock.id !== block.id));
    setSelectedBlockId(blocks[2]?.id ?? blocks[0].id);
  }

  function saveBlockCode(block: Block, html: string, css: string) {
    const localBlock = userBlocks.find((userBlock) => userBlock.id === block.id);

    if (localBlock) {
      const updatedBlock = updateUserBlock(localBlock, {
        name: localBlock.name,
        category: localBlock.category,
        description: localBlock.description,
        tags: localBlock.tags,
        client: localBlock.client,
        style: localBlock.style,
        foundationId: localBlock.foundationId,
        useCase: localBlock.useCase,
        html,
        css,
        notes: localBlock.notes,
        sourceProject: localBlock.sourceProject,
        sourceUrl: localBlock.sourceUrl,
        sourcePage: localBlock.sourcePage,
        sourceSection: localBlock.sourceSection,
        version: localBlock.version,
        status: localBlock.status,
        elementorQaStatus: localBlock.elementorQaStatus
      });
      setUserBlocks((current) => current.map((userBlock) => (userBlock.id === updatedBlock.id ? updatedBlock : userBlock)));
      setSelectedBlockId(updatedBlock.id);
      return;
    }

    const editableCopy = createUserBlock({
      name: `${block.name} (Edited Copy)`,
      category: block.category,
      description: `${block.description} Editable local copy.`,
      tags: Array.from(new Set([...block.tags, "edited", "local"])),
      client: block.client,
      style: block.style,
      foundationId: block.foundationId,
      useCase: block.useCase,
      html,
      css,
      notes: `${block.notes}\n\nEditable local copy created from the original library block.`,
      sourceProject: block.sourceProject,
      sourceUrl: block.sourceUrl,
      sourcePage: block.sourcePage,
      sourceSection: block.sourceSection,
      version: block.version,
      status: "Draft",
      elementorQaStatus: block.elementorQaStatus
    });

    setUserBlocks((current) => [...current, editableCopy]);
    setSelectedBlockId(editableCopy.id);
    setQuery("");
    setStyleFilter("All");
    setClientFilter("All");
    setTypeFilter("All");
    setSourceProjectFilter("All");
    setStatusFilter("All");
    setElementorQaFilter("All");
    setSelectedCategory("All");
  }

  function saveBlockMetadata(block: Block, values: BlockMetadataValues) {
    const localBlock = userBlocks.find((userBlock) => userBlock.id === block.id);

    if (localBlock) {
      const updatedBlock = updateUserBlock(localBlock, {
        name: values.name,
        category: values.category,
        description: values.description,
        tags: values.tags,
        client: values.client,
        style: values.style,
        foundationId: localBlock.foundationId,
        useCase: localBlock.useCase,
        html: localBlock.html,
        css: localBlock.css,
        notes: localBlock.notes,
        sourceProject: values.sourceProject,
        sourceUrl: values.sourceUrl,
        sourcePage: values.sourcePage,
        sourceSection: values.sourceSection,
        version: values.version,
        status: values.status,
        elementorQaStatus: localBlock.elementorQaStatus
      });
      setUserBlocks((current) => current.map((userBlock) => (userBlock.id === updatedBlock.id ? updatedBlock : userBlock)));
      setSelectedBlockId(updatedBlock.id);
    } else {
      const metadataCopy = createUserBlock({
        name: values.name,
        category: values.category,
        description: values.description,
        tags: Array.from(new Set([...values.tags, "metadata-edited", "local"])),
        client: values.client,
        style: values.style,
        foundationId: block.foundationId,
        useCase: block.useCase,
        html: block.html,
        css: block.css,
        notes: `${block.notes}\n\nEditable local copy created after metadata changes.`,
        sourceProject: values.sourceProject,
        sourceUrl: values.sourceUrl,
        sourcePage: values.sourcePage,
        sourceSection: values.sourceSection,
        version: values.version,
        status: values.status,
        elementorQaStatus: block.elementorQaStatus
      });
      setUserBlocks((current) => [...current, metadataCopy]);
      setSelectedBlockId(metadataCopy.id);
      setQuery("");
      setStyleFilter("All");
      setClientFilter("All");
      setTypeFilter("All");
      setSourceProjectFilter("All");
      setStatusFilter("All");
      setElementorQaFilter("All");
      setSelectedCategory("All");
    }

    setMetadataBlock(null);
  }

  function duplicateBlock(block: Block) {
    const duplicate = cloneUserBlock(block);
    setUserBlocks((current) => [...current, duplicate]);
    setSelectedBlockId(duplicate.id);
    setQuery("");
    setStyleFilter("All");
    setClientFilter("All");
    setTypeFilter("All");
    setSourceProjectFilter("All");
    setStatusFilter("All");
    setElementorQaFilter("All");
    setSelectedCategory("All");
  }

  function duplicateEditedBlock(block: Block, html: string, css: string) {
    const duplicate = createUserBlock({
      name: `Copy of ${block.name}`,
      category: block.category,
      description: `${block.description} Editable content copy.`,
      tags: Array.from(new Set([...block.tags, "content-edited", "local"])),
      client: block.client,
      style: block.style,
      foundationId: block.foundationId,
      useCase: block.useCase,
      html,
      css,
      notes: `${block.notes}\n\nEditable local copy created from content editor changes.`,
      sourceProject: block.sourceProject,
      sourceUrl: block.sourceUrl,
      sourcePage: block.sourcePage,
      sourceSection: block.sourceSection,
      version: block.version,
      status: "Draft",
      elementorQaStatus: block.elementorQaStatus
    });
    setUserBlocks((current) => [...current, duplicate]);
    setSelectedBlockId(duplicate.id);
    setQuery("");
    setStyleFilter("All");
    setClientFilter("All");
    setTypeFilter("All");
    setSourceProjectFilter("All");
    setStatusFilter("All");
    setElementorQaFilter("All");
    setSelectedCategory("All");
  }

  function updateBlockQa(block: Block, qa: BlockQaChecklist, elementorQaStatus: ElementorQaStatus) {
    const localBlock = userBlocks.find((userBlock) => userBlock.id === block.id);
    if (localBlock) {
      setUserBlocks((current) =>
        current.map((userBlock) =>
          userBlock.id === block.id
            ? {
                ...userBlock,
                qa,
                elementorQaStatus,
                updatedAt: new Date().toISOString()
              }
            : userBlock
        )
      );
      return;
    }

    const qaCopy = createUserBlock({
      name: `${block.name} (QA Copy)`,
      category: block.category,
      description: `${block.description} Local copy for Elementor QA.`,
      tags: Array.from(new Set([...block.tags, "elementor-qa", "local"])),
      client: block.client,
      style: block.style,
      foundationId: block.foundationId,
      useCase: block.useCase,
      html: block.html,
      css: block.css,
      notes: `${block.notes}\n\nEditable local copy created to store Elementor QA checklist.`,
      sourceProject: block.sourceProject,
      sourceUrl: block.sourceUrl,
      sourcePage: block.sourcePage,
      sourceSection: block.sourceSection,
      version: block.version,
      status: "Draft",
      elementorQaStatus
    });
    setUserBlocks((current) => [...current, { ...qaCopy, qa }]);
    setSelectedBlockId(qaCopy.id);
  }

  function exportBlocks() {
    const blob = new Blob([JSON.stringify(userBlocks, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `sh-block-library-custom-blocks-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  function exportLocalState() {
    const backup = createLocalLibraryBackup(userBlocks, assemblyIds);
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `sh-block-library-local-state-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  async function importBlocks(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      const importedState = parseImportedLocalState(text);
      setUserBlocks((current) => {
        const safeBlocks = resolveImportedBlockConflicts(importedState.userBlocks, new Set([...blocks, ...current].map((block) => block.id)));
        const merged = new Map(current.map((block) => [block.id, block]));
        safeBlocks.forEach((block) => merged.set(block.id, block));
        return Array.from(merged.values());
      });
      if (importedState.pageAssemblyIds.length) {
        setAssemblyIds(importedState.pageAssemblyIds);
      }
      setImportMessage(
        `Imported ${importedState.userBlocks.length} local block${importedState.userBlocks.length === 1 ? "" : "s"}${
          importedState.pageAssemblyIds.length ? " and page assembly" : ""
        }. Conflicting IDs are imported as copies.`
      );
      if (importedState.userBlocks[0]) {
        setSelectedBlockId(importedState.userBlocks[0].id);
      }
      window.setTimeout(() => setImportMessage(""), 2400);
    } catch (error) {
      setImportMessage(error instanceof Error ? error.message : "Import failed.");
    } finally {
      event.target.value = "";
    }
  }

  return (
    <main className="flex min-h-screen">
      <Sidebar categories={categories} selectedCategory={selectedCategory} counts={counts} onSelect={setSelectedCategory} />

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-10 border-b border-[#e4ded4] bg-[rgba(246,243,238,0.92)] px-5 py-2 backdrop-blur">
          <div className="flex items-center gap-2 overflow-visible">
            <div className="mr-3 shrink-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-bronze">Private internal tool</p>
              <h1 className="text-lg font-semibold tracking-[-0.01em] text-ink">Reusable Elementor sections</h1>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <div className="flex rounded-md border border-[#ded6ca] bg-white p-1">
                <button
                  type="button"
                  onClick={() => setActiveArea("library")}
                  className={[
                    "inline-flex h-9 items-center gap-2 rounded px-3 text-sm font-semibold transition",
                    activeArea === "library" ? "bg-ink text-white" : "text-ink hover:bg-[#f5efe6]"
                  ].join(" ")}
                >
                  <Layers3 className="h-4 w-4" aria-hidden="true" />
                  Block Library
                </button>
                <button
                  type="button"
                  onClick={() => setActiveArea("assembly")}
                  className={[
                    "inline-flex h-9 items-center gap-2 rounded px-3 text-sm font-semibold transition",
                    activeArea === "assembly" ? "bg-ink text-white" : "text-ink hover:bg-[#f5efe6]"
                  ].join(" ")}
                >
                  Page Assembly
                </button>
              </div>
              <label className="relative w-72 shrink-0">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#898178]" aria-hidden="true" />
                <span className="sr-only">Search blocks</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search blocks, tags, clients..."
                  className="h-11 w-full rounded-md border border-[#ded6ca] bg-white pl-10 pr-3 text-sm outline-none transition focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
                />
              </label>
              <details className="group relative shrink-0">
                <summary className="inline-flex h-10 cursor-pointer list-none items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-semibold text-ink hover:border-bronze">
                  <SlidersHorizontal className="h-4 w-4 text-[#898178]" aria-hidden="true" />
                  Filters
                  <span className="rounded bg-[#f1e8dc] px-1.5 py-0.5 text-[11px] text-[#6b5532]">
                    {[styleFilter, clientFilter, typeFilter, sourceProjectFilter, statusFilter, elementorQaFilter].filter((item) => item !== "All").length}
                  </span>
                </summary>
                <div className="absolute right-0 top-[calc(100%+8px)] z-20 grid w-[340px] gap-3 rounded-lg border border-[#ded6ca] bg-[#fffdfa] p-3 shadow-soft">
                  <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
                    Style
                    <select
                      value={styleFilter}
                      onChange={(event) => setStyleFilter(event.target.value)}
                      className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
                    >
                      {styles.map((style) => (
                        <option key={style}>{style}</option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
                    Client
                    <select
                      value={clientFilter}
                      onChange={(event) => setClientFilter(event.target.value)}
                      className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
                    >
                      {clients.map((client) => (
                        <option key={client} value={client}>
                          {client === "All" ? "All clients" : client}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
                    Block type
                    <select
                      value={typeFilter}
                      onChange={(event) => setTypeFilter(event.target.value as BlockCategory | "All")}
                      className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
                    >
                      <option value="All">All block types</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
                    Source project
                    <select
                      value={sourceProjectFilter}
                      onChange={(event) => setSourceProjectFilter(event.target.value)}
                      className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
                    >
                      {sourceProjects.map((project) => (
                        <option key={project} value={project}>
                          {project === "All" ? "All source projects" : project}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
                    Status
                    <select
                      value={statusFilter}
                      onChange={(event) => setStatusFilter(event.target.value as BlockStatus | "All")}
                      className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status === "All" ? "All statuses" : status}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
                    Elementor QA
                    <select
                      value={elementorQaFilter}
                      onChange={(event) => setElementorQaFilter(event.target.value as ElementorQaStatus | "All")}
                      className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
                    >
                      {elementorQaStatuses.map((status) => (
                        <option key={status} value={status}>
                          {status === "All" ? "All Elementor QA" : status}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </details>
              <button
                type="button"
                onClick={() => {
                  setEditingBlock(null);
                  setFormMode("add");
                }}
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-md border border-ink bg-ink px-3 text-sm font-semibold text-white hover:bg-[#35312c]"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
                Add Block
              </button>
              <button
                type="button"
                onClick={exportBlocks}
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-semibold text-ink hover:border-bronze"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Export
              </button>
              <button
                type="button"
                onClick={exportLocalState}
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-semibold text-ink hover:border-bronze"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Backup
              </button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-semibold text-ink hover:border-bronze"
              >
                <Upload className="h-4 w-4" aria-hidden="true" />
                Import
              </button>
              <input ref={fileInputRef} type="file" accept="application/json,.json" onChange={importBlocks} className="hidden" />
            </div>
          </div>
          {importMessage ? <p className="mt-3 text-sm font-semibold text-[#6b5532]">{importMessage}</p> : null}
        </header>

        {activeArea === "assembly" ? (
          <PageAssembly
            allBlocks={allBlocks}
            assemblyIds={assemblyIds}
            settings={settings}
            onAssemblyChange={setAssemblyIds}
            onSettingsChange={setSettings}
          />
        ) : (
        <div className="grid min-h-[calc(100vh-97px)] grid-cols-[minmax(320px,430px)_minmax(0,1fr)] gap-5 p-5">
          <section aria-label="Block gallery" className="min-w-0">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#5c5750]">Block Gallery</h2>
              <span className="text-sm text-[#746d65]">{filteredBlocks.length} shown</span>
            </div>
            <div className="grid max-h-[calc(100vh-152px)] gap-3 overflow-auto pr-1">
              {filteredBlocks.length > 0 ? (
                filteredBlocks.map((block) => (
                  <BlockCard key={block.id} block={block} selected={block.id === selectedBlock.id} onSelect={selectBlock} />
                ))
              ) : (
                <div className="rounded-lg border border-dashed border-[#d8cfc2] bg-white p-6 text-sm leading-6 text-[#68625b]">
                  No blocks match the current search and filters.
                </div>
              )}
            </div>
          </section>

          <section aria-label="Selected block detail" className="min-w-0">
            <BlockDetail
              block={selectedBlock}
              settings={settings}
              onSettingsChange={setSettings}
              isUserBlock={Boolean(selectedUserBlock)}
              onEdit={openEditBlock}
              onDelete={deleteBlock}
              onSaveCode={saveBlockCode}
              onEditMetadata={setMetadataBlock}
              onDuplicate={duplicateBlock}
              onDuplicateEdited={duplicateEditedBlock}
              userBlock={selectedUserBlock}
              onQaChange={updateBlockQa}
            />
          </section>
        </div>
        )}
      </div>
      {formMode ? (
        <BlockFormModal
          mode={formMode}
          block={formMode === "edit" ? editingBlock ?? undefined : undefined}
          onClose={() => {
            setFormMode(null);
            setEditingBlock(null);
          }}
          onSave={formMode === "add" ? handleAddBlock : handleEditBlock}
        />
      ) : null}
      {metadataBlock ? (
        <BlockMetadataModal
          block={metadataBlock}
          isUserBlock={Boolean(userBlocks.find((block) => block.id === metadataBlock.id))}
          onClose={() => setMetadataBlock(null)}
          onSave={saveBlockMetadata}
        />
      ) : null}
    </main>
  );
}
