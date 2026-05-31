"use client";

import { Layers3 } from "lucide-react";
import type { BlockCategory } from "@/types/block";

type SidebarProps = {
  categories: BlockCategory[];
  selectedCategory: BlockCategory | "All";
  counts: Record<string, number>;
  onSelect: (category: BlockCategory | "All") => void;
};

export function Sidebar({ categories, selectedCategory, counts, onSelect }: SidebarProps) {
  return (
    <aside className="flex h-full min-h-screen w-72 shrink-0 flex-col border-r border-[#e4ded4] bg-[#fffdfa] px-5 py-6">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-white">
          <Layers3 className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-bronze">SH Digital</p>
          <h1 className="text-xl font-semibold text-ink">Block Library</h1>
        </div>
      </div>

      <nav aria-label="Block categories" className="space-y-1">
        <button
          type="button"
          onClick={() => onSelect("All")}
          className={[
            "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition",
            selectedCategory === "All" ? "bg-[#eee6da] font-semibold text-ink" : "text-[#67635d] hover:bg-[#f5efe6]"
          ].join(" ")}
        >
          <span>All Blocks</span>
          <span className="text-xs">{counts.All ?? 0}</span>
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={[
              "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition",
              selectedCategory === category ? "bg-[#eee6da] font-semibold text-ink" : "text-[#67635d] hover:bg-[#f5efe6]"
            ].join(" ")}
          >
            <span>{category}</span>
            <span className="text-xs">{counts[category] ?? 0}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto border-t border-[#e4ded4] pt-5 text-xs leading-5 text-[#77716a]">
        Local-first MVP. No database, no authentication, deployment-ready for Vercel later.
      </div>
    </aside>
  );
}
