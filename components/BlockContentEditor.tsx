"use client";

import { CopyPlus, RotateCcw, Save } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import type { Block } from "@/types/block";

type TextField = {
  id: string;
  label: string;
  selector: string;
  index: number;
  value: string;
  multiline?: boolean;
};

type LinkField = {
  id: string;
  label: string;
  index: number;
  text: string;
  href: string;
  ariaLabel: string;
  hasAriaLabel: boolean;
};

type ImageField = {
  id: string;
  label: string;
  index: number;
  src: string;
  alt: string;
  objectPosition: string;
};

type CssImageField = {
  id: string;
  label: string;
  index: number;
  url: string;
};

type CssObjectPositionField = {
  id: string;
  label: string;
  index: number;
  value: string;
};

type ParsedContent = {
  textFields: TextField[];
  linkFields: LinkField[];
  imageFields: ImageField[];
  cssImageFields: CssImageField[];
  cssObjectPositionFields: CssObjectPositionField[];
};

type BlockContentEditorProps = {
  block: Block;
  html: string;
  css: string;
  onHtmlChange: (html: string) => void;
  onCssChange: (css: string) => void;
  onReset: () => void;
  onSaveAsCustom: () => void;
  onDuplicateAndEdit: () => void;
};

const editableTextSelector = "[data-editable], h1, h2, h3, h4, p, li";

export function BlockContentEditor({
  block,
  html,
  css,
  onHtmlChange,
  onCssChange,
  onReset,
  onSaveAsCustom,
  onDuplicateAndEdit
}: BlockContentEditorProps) {
  const parsed = useMemo(() => parseEditableContent(html, css), [css, html]);
  const [saveMessage, setSaveMessage] = useState("");
  const hasFields =
    parsed.textFields.length ||
    parsed.linkFields.length ||
    parsed.imageFields.length ||
    parsed.cssImageFields.length ||
    parsed.cssObjectPositionFields.length;

  function flash(message: string) {
    setSaveMessage(message);
    window.setTimeout(() => setSaveMessage(""), 2200);
  }

  function saveAsCustom() {
    onSaveAsCustom();
    flash("Saved as a local custom block.");
  }

  function duplicateAndEdit() {
    onDuplicateAndEdit();
    flash("Duplicated as a local editable block.");
  }

  return (
    <section className="rounded-lg border border-[#e4ded4] bg-[#fffdfa] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-bronze">Edit Content</p>
          <h3 className="mt-1 text-lg font-semibold text-ink">{block.name}</h3>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-[#6d675f]">
            Update text, links and image references here. Preview and copy/export output use these draft values immediately.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex min-h-9 items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-xs font-semibold text-ink hover:border-bronze"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Reset content
          </button>
          <button
            type="button"
            onClick={duplicateAndEdit}
            className="inline-flex min-h-9 items-center gap-2 rounded-md border border-[#ded6ca] bg-white px-3 text-xs font-semibold text-ink hover:border-bronze"
          >
            <CopyPlus className="h-3.5 w-3.5" aria-hidden="true" />
            Duplicate and Edit
          </button>
          <button
            type="button"
            onClick={saveAsCustom}
            className="inline-flex min-h-9 items-center gap-2 rounded-md border border-ink bg-ink px-3 text-xs font-semibold text-white hover:bg-[#35312c]"
          >
            <Save className="h-3.5 w-3.5" aria-hidden="true" />
            Save as Custom Block
          </button>
        </div>
      </div>

      {saveMessage ? <p className="mt-3 text-sm font-semibold text-[#6b5532]">{saveMessage}</p> : null}

      {hasFields ? (
        <div className="mt-4 grid gap-4">
          {parsed.textFields.length ? (
            <EditorGroup title="Text">
              <div className="grid gap-3 lg:grid-cols-2">
                {parsed.textFields.map((field) => (
                  <label key={field.id} className="grid gap-1 text-sm font-semibold text-[#5f5952]">
                    {field.label}
                    {field.multiline ? (
                      <textarea
                        value={field.value}
                        onChange={(event) => onHtmlChange(updateTextField(html, field, event.target.value))}
                        rows={3}
                        className="min-h-24 resize-y rounded-md border border-[#ded6ca] bg-white px-3 py-2 text-sm font-normal leading-6 text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
                      />
                    ) : (
                      <input
                        value={field.value}
                        onChange={(event) => onHtmlChange(updateTextField(html, field, event.target.value))}
                        className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-normal text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
                      />
                    )}
                  </label>
                ))}
              </div>
            </EditorGroup>
          ) : null}

          {parsed.linkFields.length ? (
            <EditorGroup title="Links and Buttons">
              <div className="grid gap-3">
                {parsed.linkFields.map((field) => (
                  <div key={field.id} className="grid gap-2 rounded-md border border-[#ebe4da] bg-white p-3">
                    <p className="text-sm font-bold text-ink">{field.label}</p>
                    <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.8fr)_minmax(220px,0.8fr)]">
                      <TextInput label="Text" value={field.text} onChange={(value) => onHtmlChange(updateLinkField(html, field.index, "text", value))} />
                      <TextInput label="Href" value={field.href} onChange={(value) => onHtmlChange(updateLinkField(html, field.index, "href", value))} />
                      <TextInput label="Aria label" value={field.ariaLabel} onChange={(value) => onHtmlChange(updateLinkField(html, field.index, "ariaLabel", value))} />
                    </div>
                    {field.href.trim() === "#" ? <p className="text-xs font-semibold text-[#9a4c2f]">This href is only "#". Replace it before publishing.</p> : null}
                  </div>
                ))}
              </div>
            </EditorGroup>
          ) : null}

          {(parsed.imageFields.length || parsed.cssImageFields.length || parsed.cssObjectPositionFields.length) ? (
            <EditorGroup title="Images">
              <div className="space-y-3">
                <p className="text-sm leading-6 text-[#6d675f]">
                  Use the final WordPress media URL before publishing. Avoid using staging URLs on live client sites.
                </p>
                {parsed.imageFields.map((field) => (
                  <div key={field.id} className="grid gap-2 rounded-md border border-[#ebe4da] bg-white p-3">
                    <p className="text-sm font-bold text-ink">{field.label}</p>
                    <div className="grid gap-2 lg:grid-cols-[minmax(0,1.2fr)_minmax(220px,0.8fr)_minmax(180px,0.5fr)]">
                      <TextInput label="Image URL" value={field.src} onChange={(value) => onHtmlChange(updateImageField(html, field.index, "src", value))} />
                      <TextInput label="Alt text" value={field.alt} onChange={(value) => onHtmlChange(updateImageField(html, field.index, "alt", value))} />
                      <TextInput label="Object position" value={field.objectPosition} onChange={(value) => onHtmlChange(updateImageField(html, field.index, "objectPosition", value))} />
                    </div>
                  </div>
                ))}
                {parsed.cssImageFields.map((field) => (
                  <div key={field.id} className="grid gap-2 rounded-md border border-[#ebe4da] bg-white p-3">
                    <TextInput label={field.label} value={field.url} onChange={(value) => onCssChange(updateCssUrl(css, field.index, value))} />
                  </div>
                ))}
                {parsed.cssObjectPositionFields.map((field) => (
                  <div key={field.id} className="grid gap-2 rounded-md border border-[#ebe4da] bg-white p-3">
                    <TextInput label={field.label} value={field.value} onChange={(value) => onCssChange(updateCssObjectPosition(css, field.index, value))} />
                  </div>
                ))}
              </div>
            </EditorGroup>
          ) : null}
        </div>
      ) : (
        <p className="mt-4 rounded-md border border-dashed border-[#d8cfc2] bg-white p-4 text-sm leading-6 text-[#68625b]">
          No editable content was detected for this block. Use the raw HTML/CSS editor for advanced changes.
        </p>
      )}
    </section>
  );
}

function EditorGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-md border border-[#eee6dc] bg-[#fbf8f2] p-3">
      <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#5c5750]">{title}</h4>
      {children}
    </section>
  );
}

function TextInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-1 text-xs font-bold uppercase tracking-[0.12em] text-[#6d675f]">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-md border border-[#ded6ca] bg-white px-3 text-sm font-normal normal-case tracking-normal text-ink outline-none focus:border-bronze focus:ring-2 focus:ring-[#d8c6a8]"
      />
    </label>
  );
}

function parseEditableContent(html: string, css: string): ParsedContent {
  if (typeof window === "undefined") {
    return { textFields: [], linkFields: [], imageFields: [], cssImageFields: [], cssObjectPositionFields: [] };
  }

  const doc = parseHtml(html);
  const textCounters: Record<string, number> = {};
  const textFields = Array.from(doc.body.querySelectorAll(editableTextSelector))
    .map((element, index) => ({ element, index }))
    .filter(({ element }) => !["A", "IMG"].includes(element.tagName) && Boolean(element.textContent?.trim()))
    .map(({ element, index }) => {
      const fallbackBase = getTextFallbackBase(element);
      textCounters[fallbackBase] = (textCounters[fallbackBase] ?? 0) + 1;
      return {
        id: `text-${index}`,
        label: getMarkedLabel(element, "data-editable") ?? `${fallbackBase} ${textCounters[fallbackBase]}`,
        selector: editableTextSelector,
        index,
        value: element.textContent ?? "",
        multiline: element.tagName === "P" || element.tagName === "LI"
      };
    });

  const linkFields = Array.from(doc.body.querySelectorAll("a")).map((element, index) => ({
    id: `link-${index}`,
    label: getMarkedLabel(element, "data-editable-link") ?? `Link ${index + 1}`,
    index,
    text: element.textContent ?? "",
    href: element.getAttribute("href") ?? "",
    ariaLabel: element.getAttribute("aria-label") ?? "",
    hasAriaLabel: element.hasAttribute("aria-label")
  }));

  const imageFields = Array.from(doc.body.querySelectorAll("img")).map((element, index) => {
    const htmlElement = element as HTMLElement;
    return {
      id: `image-${index}`,
      label: getMarkedLabel(element, "data-editable-image") ?? `Image ${index + 1}`,
      index,
      src: element.getAttribute("src") ?? "",
      alt: element.getAttribute("alt") ?? "",
      objectPosition: htmlElement.style.objectPosition
    };
  });

  return {
    textFields,
    linkFields,
    imageFields,
    cssImageFields: findCssUrls(css, doc),
    cssObjectPositionFields: findCssObjectPositions(css)
  };
}

function parseHtml(html: string) {
  return new DOMParser().parseFromString(html, "text/html");
}

function serializeBody(doc: Document) {
  return doc.body.innerHTML.trim();
}

function updateTextField(html: string, field: TextField, value: string) {
  const doc = parseHtml(html);
  const element = doc.body.querySelectorAll(field.selector)[field.index];
  if (element) {
    element.textContent = value;
  }
  return serializeBody(doc);
}

function updateLinkField(html: string, index: number, key: "text" | "href" | "ariaLabel", value: string) {
  const doc = parseHtml(html);
  const element = doc.body.querySelectorAll("a")[index];
  if (element) {
    if (key === "text") {
      element.textContent = value;
    } else if (key === "href") {
      element.setAttribute("href", value);
    } else if (value.trim()) {
      element.setAttribute("aria-label", value);
    } else {
      element.removeAttribute("aria-label");
    }
  }
  return serializeBody(doc);
}

function updateImageField(html: string, index: number, key: "src" | "alt" | "objectPosition", value: string) {
  const doc = parseHtml(html);
  const element = doc.body.querySelectorAll("img")[index] as HTMLElement | undefined;
  if (element) {
    if (key === "objectPosition") {
      element.style.objectPosition = value;
    } else {
      element.setAttribute(key, value);
    }
  }
  return serializeBody(doc);
}

function findCssUrls(css: string, doc: Document): CssImageField[] {
  const backgroundLabels = Array.from(doc.body.querySelectorAll("[data-editable-bg]")).map((element) => element.getAttribute("data-editable-bg")?.trim()).filter(Boolean);
  return Array.from(css.matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/g))
    .filter((match) => match[2] && !match[2].startsWith("data:"))
    .map((match, index) => ({
      id: `css-image-${index}`,
      label: backgroundLabels[index] ?? `CSS background image ${index + 1}`,
      index,
      url: match[2]
    }));
}

function findCssObjectPositions(css: string): CssObjectPositionField[] {
  return Array.from(css.matchAll(/object-position\s*:\s*([^;]+);/g)).map((match, index) => ({
    id: `css-object-position-${index}`,
    label: `CSS object-position ${index + 1}`,
    index,
    value: match[1].trim()
  }));
}

function updateCssUrl(css: string, targetIndex: number, value: string) {
  let currentIndex = 0;
  return css.replace(/url\(\s*(['"]?)(.*?)\1\s*\)/g, (match, _quote, url) => {
    if (url.startsWith("data:")) {
      return match;
    }
    const shouldReplace = currentIndex === targetIndex;
    currentIndex += 1;
    return shouldReplace ? `url("${value}")` : match;
  });
}

function updateCssObjectPosition(css: string, targetIndex: number, value: string) {
  let currentIndex = 0;
  return css.replace(/object-position\s*:\s*([^;]+);/g, (match) => {
    const shouldReplace = currentIndex === targetIndex;
    currentIndex += 1;
    return shouldReplace ? `object-position: ${value};` : match;
  });
}

function getMarkedLabel(element: Element, attribute: string) {
  const label = element.getAttribute(attribute)?.trim();
  return label || null;
}

function getTextFallbackBase(element: Element) {
  if (/^H[1-4]$/.test(element.tagName)) {
    return "Heading";
  }

  if (element.tagName === "LI") {
    return "List item";
  }

  return "Paragraph";
}
