"use client";

import type { Block, BlockQaChecklist, ElementorQaStatus } from "@/types/block";
import { analyzeElementorQa, type ElementorQaIssue } from "@/lib/elementor-qa";
import { defaultQaChecklist } from "@/lib/local-blocks";

type ElementorQaPanelProps = {
  block: Block;
  qa?: BlockQaChecklist;
  qaStatus?: ElementorQaStatus;
  onChange?: (qa: BlockQaChecklist, status: ElementorQaStatus) => void;
};

const checklistItems: Array<[keyof BlockQaChecklist, string]> = [
  ["pastedIntoElementor", "Pasted into Elementor"],
  ["desktopChecked", "Desktop checked"],
  ["tabletChecked", "Tablet checked"],
  ["mobileChecked", "Mobile checked"],
  ["ctaLinksChecked", "CTA links checked"],
  ["imagesReplaced", "Images replaced"],
  ["formBehaviourChecked", "Form behaviour checked"],
  ["cssConflictChecked", "CSS conflict checked"],
  ["approved", "Approved"]
];

const qaStatuses: ElementorQaStatus[] = ["Needs Review", "Warnings", "Pass"];

export function ElementorQaPanel({ block, qa, qaStatus, onChange }: ElementorQaPanelProps) {
  const analysis = analyzeElementorQa({ html: block.html, css: block.css, category: block.category });
  const checklist = { ...defaultQaChecklist, ...qa };
  const currentStatus = qaStatus ?? block.elementorQaStatus ?? analysis.status;

  function updateChecklist(key: keyof BlockQaChecklist, checked: boolean) {
    onChange?.({ ...checklist, [key]: checked }, currentStatus);
  }

  function updateStatus(status: ElementorQaStatus) {
    onChange?.(checklist, status);
  }

  return (
    <section className="rounded-lg border border-[#e4ded4] bg-[#fffdfa] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#5c5750]">Elementor QA</h3>
          <p className="mt-1 text-sm leading-6 text-[#6d675f]">Checks whether this block is safe to paste into an Elementor HTML widget.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <QaBadge status={analysis.status} label={`Auto: ${analysis.status}`} />
          <label className="grid gap-1 text-xs font-semibold text-[#615b54]">
            QA status
            <select
              value={currentStatus}
              onChange={(event) => updateStatus(event.target.value as ElementorQaStatus)}
              className="h-9 rounded-md border border-[#ded6ca] bg-white px-3 text-sm text-ink"
            >
              {qaStatuses.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(280px,0.55fr)]">
        <section className="rounded-md border border-[#eee6dc] bg-[#fbf8f2] p-3">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#5c5750]">Automatic Checks</h4>
          {analysis.issues.length ? (
            <div className="grid gap-2">
              {analysis.issues.map((issue, index) => (
                <QaIssueCard key={`${issue.title}-${index}`} issue={issue} />
              ))}
            </div>
          ) : (
            <p className="rounded-md border border-[#d7e2d8] bg-[#f6fbf6] px-3 py-2 text-sm font-semibold text-[#34563d]">No automatic Elementor risks detected.</p>
          )}
        </section>

        <section className="rounded-md border border-[#eee6dc] bg-[#fbf8f2] p-3">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#5c5750]">Manual Checklist</h4>
          <div className="grid gap-2">
            {checklistItems.map(([key, label]) => (
              <label key={key} className="flex min-h-10 items-center gap-2 rounded-md border border-[#ebe4da] bg-white px-3 text-sm font-semibold text-[#615b54]">
                <input type="checkbox" checked={Boolean(checklist[key])} onChange={(event) => updateChecklist(key, event.target.checked)} />
                {label}
              </label>
            ))}
          </div>
          {!onChange ? <p className="mt-3 text-xs leading-5 text-[#746d65]">Save this block as a custom block to persist manual QA changes.</p> : null}
        </section>
      </div>
    </section>
  );
}

export function QaBadge({ status, label = status }: { status: ElementorQaStatus; label?: string }) {
  const className =
    status === "Pass"
      ? "bg-[#e8f3e9] text-[#2f5b38]"
      : status === "Warnings"
        ? "bg-[#fff3d9] text-[#7a5420]"
        : "bg-[#fff0eb] text-[#8a3f2c]";

  return <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${className}`}>{label}</span>;
}

function QaIssueCard({ issue }: { issue: ElementorQaIssue }) {
  return (
    <article className="rounded-md border border-[#e4ded4] bg-white p-3">
      <div className="flex items-center justify-between gap-3">
        <h5 className="text-sm font-bold text-ink">{issue.title}</h5>
        <span className={["rounded px-2 py-0.5 text-[11px] font-bold uppercase", issue.severity === "review" ? "bg-[#fff0eb] text-[#8a3f2c]" : "bg-[#fff3d9] text-[#7a5420]"].join(" ")}>
          {issue.severity === "review" ? "Review" : "Warning"}
        </span>
      </div>
      <p className="mt-1 text-sm leading-6 text-[#6d675f]">{issue.detail}</p>
    </article>
  );
}
