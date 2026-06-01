"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyButtonProps = {
  label: string;
  textToCopy: string;
  variant?: "primary" | "secondary";
};

export function CopyButton({ label, textToCopy, variant = "secondary" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  async function handleCopy() {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API is not available.");
      }

      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setError("");
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
      setError("Copy failed. Please copy from the code panel.");
      window.setTimeout(() => setError(""), 3200);
    }
  }

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={handleCopy}
        className={[
          "inline-flex min-h-10 items-center justify-center gap-2 rounded-md border px-3 text-sm font-semibold transition",
          variant === "primary"
            ? "border-ink bg-ink text-white hover:bg-[#35312c]"
            : "border-[#ded6ca] bg-white text-ink hover:border-bronze"
        ].join(" ")}
      >
        {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
        {copied ? "Copied" : label}
      </button>
      {error ? (
        <span className="absolute right-0 top-full z-20 mt-2 w-56 rounded-md border border-[#e0b5a8] bg-[#fff8f5] px-3 py-2 text-xs font-semibold leading-5 text-[#8a3f2c] shadow-sm">
          {error}
        </span>
      ) : null}
    </span>
  );
}
