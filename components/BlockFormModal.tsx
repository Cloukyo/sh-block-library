"use client";

import { X } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { categories } from "@/lib/categories";
import type { Block, BlockCategory } from "@/types/block";

type BlockFormValues = Omit<Block, "id">;

type BlockFormModalProps = {
  block?: Block;
  mode: "add" | "edit";
  onClose: () => void;
  onSave: (values: BlockFormValues) => void;
};

const emptyValues: BlockFormValues = {
  name: "",
  category: "Heroes",
  description: "",
  tags: [],
  client: "",
  style: "",
  html: "",
  css: "",
  notes: ""
};

export function BlockFormModal({ block, mode, onClose, onSave }: BlockFormModalProps) {
  const initialValues = useMemo<BlockFormValues>(() => {
    if (!block) {
      return emptyValues;
    }

    return {
      name: block.name,
      category: block.category,
      description: block.description,
      tags: block.tags,
      client: block.client,
      style: block.style,
      useCase: block.useCase,
      html: block.html,
      css: block.css,
      notes: block.notes
    };
  }, [block]);

  const [values, setValues] = useState(initialValues);
  const [tagText, setTagText] = useState(initialValues.tags.join(", "));
  const [error, setError] = useState("");

  function update<K extends keyof BlockFormValues>(key: K, value: BlockFormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const tags = tagText
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const trimmedValues: BlockFormValues = {
      ...values,
      name: values.name.trim(),
      description: values.description.trim(),
      client: values.client.trim() || "Reusable",
      style: values.style.trim() || "Custom",
      tags,
      html: values.html.trim(),
      css: values.css.trim(),
      notes: values.notes.trim()
    };

    if (!trimmedValues.name || !trimmedValues.description || !trimmedValues.html || !trimmedValues.css) {
      setError("Name, description, HTML and CSS are required.");
      return;
    }

    onSave(trimmedValues);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-auto bg-[#1f2326]/35 p-5 backdrop-blur-sm">
      <section className="my-6 w-full max-w-5xl rounded-lg border border-[#d8cfc2] bg-[#fffdfa] shadow-soft" aria-labelledby="block-form-title">
        <div className="flex items-center justify-between gap-4 border-b border-[#e4ded4] px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-bronze">{mode === "add" ? "Add block" : "Edit block"}</p>
            <h2 id="block-form-title" className="mt-1 text-xl font-semibold text-ink">
              {mode === "add" ? "Create a new local block" : "Update local block"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#ded6ca] bg-white text-ink hover:border-bronze"
            aria-label="Close form"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 p-5">
          {error ? <div className="rounded-md border border-[#e0b5a8] bg-[#fff5f1] px-4 py-3 text-sm font-semibold text-[#8a3f2c]">{error}</div> : null}

          <div className="grid gap-4 md:grid-cols-2">
            <TextField label="Block name" value={values.name} onChange={(value) => update("name", value)} required />
            <label className="grid gap-1 text-sm font-semibold text-[#5f5952]">
              Category
              <select
                value={values.category}
                onChange={(event) => update("category", event.target.value as BlockCategory)}
                className="h-11 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </label>
            <TextField label="Client" value={values.client} onChange={(value) => update("client", value)} placeholder="Reusable or client name" />
            <TextField label="Style" value={values.style} onChange={(value) => update("style", value)} placeholder="Nikita Bronze, Clinical Blue..." />
          </div>

          <TextArea label="Description" value={values.description} onChange={(value) => update("description", value)} rows={3} required />
          <TextField label="Tags, comma-separated" value={tagText} onChange={setTagText} placeholder="hero, nikita, longevity" />

          <div className="grid gap-4 lg:grid-cols-2">
            <TextArea label="HTML" value={values.html} onChange={(value) => update("html", value)} rows={13} required code />
            <TextArea label="CSS" value={values.css} onChange={(value) => update("css", value)} rows={13} required code />
          </div>
          <TextArea label="Notes" value={values.notes} onChange={(value) => update("notes", value)} rows={5} />

          <div className="flex justify-end gap-3 border-t border-[#e4ded4] pt-4">
            <button type="button" onClick={onClose} className="min-h-11 rounded-md border border-[#ded6ca] bg-white px-4 text-sm font-semibold text-ink hover:border-bronze">
              Cancel
            </button>
            <button type="submit" className="min-h-11 rounded-md border border-ink bg-ink px-5 text-sm font-semibold text-white hover:bg-[#35312c]">
              {mode === "add" ? "Save Block" : "Save Changes"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  required
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1 text-sm font-semibold text-[#5f5952]">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        className="h-11 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  rows,
  required,
  code
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows: number;
  required?: boolean;
  code?: boolean;
}) {
  return (
    <label className="grid gap-1 text-sm font-semibold text-[#5f5952]">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={rows}
        required={required}
        className={[
          "resize-y rounded-md border border-[#ded6ca] bg-white px-3 py-2 text-sm text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]",
          code ? "font-mono leading-6" : "leading-6"
        ].join(" ")}
      />
    </label>
  );
}
