"use client";

import type { Block } from "@/types/block";

type BlockCardProps = {
  block: Block;
  selected: boolean;
  onSelect: (block: Block) => void;
};

export function BlockCard({ block, selected, onSelect }: BlockCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(block)}
      className={[
        "w-full rounded-lg border bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-bronze hover:shadow-soft",
        selected ? "border-bronze ring-2 ring-[#d8c6a8]" : "border-[#e4ded4]"
      ].join(" ")}
    >
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="rounded-full bg-[#f1e8dc] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#8b6b3d]">
          {block.category}
        </span>
        {block.client !== "Reusable" ? (
          <span className="rounded-full bg-[#eef1ef] px-2.5 py-1 text-[11px] font-semibold text-[#3f554a]">
            {block.client}
          </span>
        ) : null}
        {block.sourceProject ? (
          <span className="rounded-full bg-[#f5f1ea] px-2.5 py-1 text-[11px] font-semibold text-[#6b5532]">
            {block.sourceProject}
          </span>
        ) : null}
        {block.status ? (
          <span className="rounded-full bg-[#1f2326] px-2.5 py-1 text-[11px] font-semibold text-white">
            {block.status}
          </span>
        ) : null}
      </div>
      <h2 className="text-base font-semibold text-ink">{block.name}</h2>
      <p className="mt-2 min-h-12 text-sm leading-6 text-[#69645e]">{block.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {block.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="rounded border border-[#e5ded4] px-2 py-1 text-xs text-[#6c665f]">
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}
