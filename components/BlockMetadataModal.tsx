"use client";

import { FormEvent, useState } from "react";
import { X } from "lucide-react";
import { categories } from "@/lib/categories";
import type { Block, BlockCategory, BlockStatus } from "@/types/block";

export type BlockMetadataValues = {
  name: string;
  category: BlockCategory;
  description: string;
  tags: string[];
  client: string;
  style: string;
  sourceProject?: string;
  sourceUrl?: string;
  sourcePage?: string;
  sourceSection?: string;
  version?: string;
  status?: BlockStatus;
};

type BlockMetadataModalProps = {
  block: Block;
  isUserBlock: boolean;
  onClose: () => void;
  onSave: (block: Block, values: BlockMetadataValues) => void;
};

export function BlockMetadataModal({ block, isUserBlock, onClose, onSave }: BlockMetadataModalProps) {
  const [name, setName] = useState(block.name);
  const [category, setCategory] = useState<BlockCategory>(block.category);
  const [description, setDescription] = useState(block.description);
  const [tagText, setTagText] = useState(block.tags.join(", "));
  const [client, setClient] = useState(block.client);
  const [style, setStyle] = useState(block.style);
  const [sourceProject, setSourceProject] = useState(block.sourceProject ?? "");
  const [sourceUrl, setSourceUrl] = useState(block.sourceUrl ?? "");
  const [sourcePage, setSourcePage] = useState(block.sourcePage ?? "");
  const [sourceSection, setSourceSection] = useState(block.sourceSection ?? "");
  const [version, setVersion] = useState(block.version ?? "");
  const [status, setStatus] = useState<BlockStatus>(block.status ?? "Draft");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextName = name.trim();
    const nextDescription = description.trim();
    const tags = tagText
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (!nextName || !nextDescription) {
      setError("Name and description are required.");
      return;
    }

    onSave(block, {
      name: nextName,
      category,
      description: nextDescription,
      tags,
      client: client.trim() || "Reusable",
      style: style.trim() || "Custom",
      sourceProject: sourceProject.trim() || undefined,
      sourceUrl: sourceUrl.trim() || undefined,
      sourcePage: sourcePage.trim() || undefined,
      sourceSection: sourceSection.trim() || undefined,
      version: version.trim() || undefined,
      status
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-[#1f2326]/35 p-5 backdrop-blur-sm">
      <section className="my-10 w-full max-w-2xl rounded-lg border border-[#d8cfc2] bg-[#fffdfa] shadow-soft" aria-labelledby="metadata-title">
        <div className="flex items-center justify-between gap-4 border-b border-[#e4ded4] px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-bronze">Block metadata</p>
            <h2 id="metadata-title" className="mt-1 text-xl font-semibold text-ink">
              Edit block labels and metadata
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#ded6ca] bg-white text-ink hover:border-bronze"
            aria-label="Close metadata editor"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 p-5">
          {!isUserBlock ? (
            <p className="rounded-md border border-[#e4ded4] bg-white px-4 py-3 text-sm leading-6 text-[#625d56]">
              This is a built-in library block. Saving metadata will create a new local editable copy.
            </p>
          ) : null}
          {error ? <p className="rounded-md border border-[#e0b5a8] bg-[#fff5f1] px-4 py-3 text-sm font-semibold text-[#8a3f2c]">{error}</p> : null}

          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1 text-sm font-semibold text-[#5f5952]">
              Block name
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="h-11 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
              />
            </label>

            <label className="grid gap-1 text-sm font-semibold text-[#5f5952]">
              Block type / category
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value as BlockCategory)}
                className="h-11 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-1 text-sm font-semibold text-[#5f5952]">
              Client
              <input
                value={client}
                onChange={(event) => setClient(event.target.value)}
                className="h-11 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
              />
            </label>

            <label className="grid gap-1 text-sm font-semibold text-[#5f5952]">
              Style
              <input
                value={style}
                onChange={(event) => setStyle(event.target.value)}
                className="h-11 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
              />
            </label>
          </div>

          <label className="grid gap-1 text-sm font-semibold text-[#5f5952]">
            Description
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={4}
              className="resize-y rounded-md border border-[#ded6ca] bg-white px-3 py-2 text-sm leading-6 text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
            />
          </label>

          <label className="grid gap-1 text-sm font-semibold text-[#5f5952]">
            Tags, comma-separated
            <input
              value={tagText}
              onChange={(event) => setTagText(event.target.value)}
              className="h-11 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
            />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <TextInput label="Source project" value={sourceProject} onChange={setSourceProject} placeholder="Nikita Grover, DY Skin Clinic, Samim" />
            <TextInput label="Source URL" value={sourceUrl} onChange={setSourceUrl} placeholder="https://..." />
            <TextInput label="Source page" value={sourcePage} onChange={setSourcePage} placeholder="Home, About, Services..." />
            <TextInput label="Source section" value={sourceSection} onChange={setSourceSection} placeholder="Hero, CTA, FAQ..." />
            <TextInput label="Version" value={version} onChange={setVersion} placeholder="v1, v2..." />
            <label className="grid gap-1 text-sm font-semibold text-[#5f5952]">
              Status
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value as BlockStatus)}
                className="h-11 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
              >
                <option>Draft</option>
                <option>Needs Review</option>
                <option>Elementor Tested</option>
                <option>Approved</option>
              </select>
            </label>
          </div>

          <div className="flex justify-end gap-3 border-t border-[#e4ded4] pt-4">
            <button type="button" onClick={onClose} className="min-h-11 rounded-md border border-[#ded6ca] bg-white px-4 text-sm font-semibold text-ink hover:border-bronze">
              Cancel
            </button>
            <button type="submit" className="min-h-11 rounded-md border border-ink bg-ink px-5 text-sm font-semibold text-white hover:bg-[#35312c]">
              Save Metadata
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
  placeholder
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1 text-sm font-semibold text-[#5f5952]">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-11 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
      />
    </label>
  );
}
