"use client";

import { CopyPlus, Pencil, Trash2 } from "lucide-react";
import type { Block, BlockQaChecklist, DesignSettings, UserBlock } from "@/types/block";
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
  userBlock?: UserBlock;
  onQaChange: (block: UserBlock, qa: BlockQaChecklist) => void;
};

const qaItems: Array<[keyof BlockQaChecklist, string]> = [
  ["desktopChecked", "Desktop checked"],
  ["mobileChecked", "Mobile checked"],
  ["elementorPasteTested", "Elementor paste tested"],
  ["scopedClassesChecked", "Scoped classes checked"],
  ["cssVariablesChecked", "CSS variables checked"],
  ["imagePlaceholdersReviewed", "Image placeholders reviewed"],
  ["ctaLinksReviewed", "CTA links reviewed"]
];

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
  userBlock,
  onQaChange
}: BlockDetailProps) {
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

      <DesignControls settings={settings} onChange={onSettingsChange} />
      {userBlock ? (
        <section className="rounded-lg border border-[#e4ded4] bg-[#fffdfa] p-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#5c5750]">Block QA Checklist</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {qaItems.map(([key, label]) => (
              <label key={key} className="flex min-h-10 items-center gap-2 rounded-md border border-[#ebe4da] bg-white px-3 text-sm font-semibold text-[#615b54]">
                <input
                  type="checkbox"
                  checked={Boolean(userBlock.qa?.[key])}
                  onChange={(event) =>
                    onQaChange(userBlock, {
                      desktopChecked: false,
                      mobileChecked: false,
                      elementorPasteTested: false,
                      scopedClassesChecked: false,
                      cssVariablesChecked: false,
                      imagePlaceholdersReviewed: false,
                      ctaLinksReviewed: false,
                      ...userBlock.qa,
                      [key]: event.target.checked
                    })
                  }
                />
                {label}
              </label>
            ))}
          </div>
        </section>
      ) : null}
      <CodeTabs block={block} settings={settings} isUserBlock={isUserBlock} onSaveCode={onSaveCode} />
    </div>
  );
}
