"use client";

import { ChevronDown, CopyPlus, Palette, Pencil, SlidersHorizontal, Trash2 } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { BlockContentEditor } from "@/components/BlockContentEditor";
import { ElementorQaPanel } from "@/components/ElementorQaPanel";
import type { Block, BlockQaChecklist, DesignSettings, ElementorQaStatus, UserBlock } from "@/types/block";
import { CodeTabs } from "./CodeTabs";
import { DesignControls } from "./DesignControls";

type BlockDetailProps = {
  block: Block;
  settings: DesignSettings;
  onSettingsChange: (settings: DesignSettings) => void;
  isUserBlock?: boolean;
  onEdit?: (block: Block) => void;
  onDelete?: (block: Block) => void;
  onSaveCode: (block: Block, html: string, css: string) => void;
  onEditMetadata: (block: Block) => void;
  onDuplicate: (block: Block) => void;
  onDuplicateEdited: (block: Block, html: string, css: string) => void;
  userBlock?: UserBlock;
  onQaChange: (block: Block, qa: BlockQaChecklist, status: ElementorQaStatus) => void;
};

export function BlockDetail({
  block,
  settings,
  onSettingsChange,
  isUserBlock = false,
  onEdit,
  onDelete,
  onSaveCode,
  onEditMetadata,
  onDuplicate,
  onDuplicateEdited,
  userBlock,
  onQaChange
}: BlockDetailProps) {
  const [contentHtml, setContentHtml] = useState(block.html);
  const [contentCss, setContentCss] = useState(block.css);
  const contentBlock = useMemo(() => ({ ...block, html: contentHtml, css: contentCss }), [block, contentCss, contentHtml]);

  useEffect(() => {
    setContentHtml(block.html);
    setContentCss(block.css);
  }, [block.css, block.html, block.id]);

  return (
    <div className="space-y-4">
      <section className="rounded-lg border border-[#e4ded4] bg-[#fffdfa] p-5">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[#f1e8dc] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#8b6b3d]">
              {block.category}
            </span>
            <span className="rounded-full bg-[#eef1ef] px-2.5 py-1 text-xs font-semibold text-[#3f554a]">
              {block.client}
            </span>
            <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[#635e57] ring-1 ring-[#e4ded4]">
              {block.style}
            </span>
            {isUserBlock ? (
              <span className="rounded-full bg-[#1f2326] px-2.5 py-1 text-xs font-semibold text-white">
                Local
              </span>
            ) : null}
            {block.sourceProject ? (
              <span className="rounded-full bg-[#f5f1ea] px-2.5 py-1 text-xs font-semibold text-[#6b5532]">
                {block.sourceProject}
              </span>
            ) : null}
            {block.status ? (
              <span className="rounded-full bg-[#1f2326] px-2.5 py-1 text-xs font-semibold text-white">
                {block.status}
              </span>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onEditMetadata(block)}
              className="inline-flex min-h-9 items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-xs font-semibold text-ink hover:border-bronze"
              aria-label={`Edit metadata for ${block.name}`}
            >
              <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
              Metadata
            </button>
            <button
              type="button"
              onClick={() => onDuplicate(block)}
              className="inline-flex min-h-9 items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-xs font-semibold text-ink hover:border-bronze"
            >
              <CopyPlus className="h-3.5 w-3.5" aria-hidden="true" />
              Duplicate Block
            </button>
            {isUserBlock ? (
              <>
              <button
                type="button"
                onClick={() => onEdit?.(block)}
                className="inline-flex min-h-9 items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-xs font-semibold text-ink hover:border-bronze"
              >
                <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                Edit Block
              </button>
              <button
                type="button"
                onClick={() => onDelete?.(block)}
                className="inline-flex min-h-9 items-center gap-2 rounded-md border border-[#e0b5a8] bg-[#fff8f5] px-3 text-xs font-semibold text-[#8a3f2c] hover:border-[#c47b62]"
              >
                <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                Delete
              </button>
              </>
            ) : null}
          </div>
        </div>
        <h2 className="text-2xl font-semibold tracking-[-0.01em] text-ink">{block.name}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-[#69645e]">{block.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {block.tags.map((tag) => (
            <span key={tag} className="rounded border border-[#e5ded4] bg-white px-2 py-1 text-xs text-[#6c665f]">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <CodeTabs block={contentBlock} settings={settings} isUserBlock={isUserBlock} onSaveCode={onSaveCode} />
      <AccordionPanel title="Edit Content" description="Text, links and images" icon={<Pencil className="h-4 w-4" aria-hidden="true" />}>
        <BlockContentEditor
          block={block}
          html={contentHtml}
          css={contentCss}
          onHtmlChange={setContentHtml}
          onCssChange={setContentCss}
          onReset={() => {
            setContentHtml(block.html);
            setContentCss(block.css);
          }}
          onSaveAsCustom={() => onSaveCode(block, contentHtml, contentCss)}
          onDuplicateAndEdit={() => onDuplicateEdited(block, contentHtml, contentCss)}
        />
      </AccordionPanel>
      <AccordionPanel title="Design Controls" description="Palette, fonts and spacing" icon={<Palette className="h-4 w-4" aria-hidden="true" />}>
        <DesignControls settings={settings} onChange={onSettingsChange} />
      </AccordionPanel>
      <AccordionPanel title="Elementor QA" description="Paste safety checks and checklist" icon={<SlidersHorizontal className="h-4 w-4" aria-hidden="true" />}>
        <ElementorQaPanel
          block={contentBlock}
          qa={userBlock?.qa}
          qaStatus={userBlock?.elementorQaStatus}
          onChange={(qa, status) => onQaChange(contentBlock, qa, status)}
        />
      </AccordionPanel>
    </div>
  );
}

function AccordionPanel({ title, description, icon, children }: { title: string; description: string; icon: ReactNode; children: ReactNode }) {
  return (
    <details className="group rounded-lg border border-[#e4ded4] bg-[#fffdfa]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3">
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#ded6ca] bg-white text-ink">
            {icon}
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-bold uppercase tracking-[0.16em] text-[#5c5750]">{title}</span>
            <span className="block truncate text-xs text-[#746d65]">{description}</span>
          </span>
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 text-[#746d65] transition group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="border-t border-[#e4ded4] p-4">{children}</div>
    </details>
  );
}
