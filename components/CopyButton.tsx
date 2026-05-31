"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyButtonProps = {
  label: string;
  value: string;
  variant?: "primary" | "secondary";
};

export function CopyButton({ label, value, variant = "secondary" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
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
  );
}
