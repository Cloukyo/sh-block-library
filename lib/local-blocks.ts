import type { Block, BlockQaChecklist, BlockStatus, UserBlock } from "@/types/block";
import { getBlockFoundationId } from "@/lib/foundation-presets";

const STORAGE_KEY = "sh-block-library:user-blocks";
const ASSEMBLY_STORAGE_KEY = "sh-block-library:page-assembly";

export type LocalLibraryBackup = {
  type: "sh-block-library-local-state";
  exportedAt: string;
  version: 1;
  userBlocks: UserBlock[];
  pageAssemblyIds: string[];
};

const statuses: BlockStatus[] = ["Draft", "Needs Review", "Elementor Tested", "Approved"];

export const defaultQaChecklist: BlockQaChecklist = {
  pastedIntoElementor: false,
  desktopChecked: false,
  tabletChecked: false,
  mobileChecked: false,
  ctaLinksChecked: false,
  imagesReplaced: false,
  formBehaviourChecked: false,
  cssConflictChecked: false,
  approved: false
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isUserBlock(value: unknown): value is UserBlock {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    typeof value.name === "string" &&
    typeof value.category === "string" &&
    typeof value.description === "string" &&
    Array.isArray(value.tags) &&
    value.tags.every((tag) => typeof tag === "string") &&
    typeof value.client === "string" &&
    typeof value.style === "string" &&
    typeof value.html === "string" &&
    typeof value.css === "string" &&
    typeof value.notes === "string" &&
    typeof value.createdAt === "string" &&
    typeof value.updatedAt === "string"
  );
}

function normalizeUserBlock(block: UserBlock): UserBlock {
  const existingQa: Record<string, unknown> = isRecord(block.qa) ? block.qa : {};
  return {
    ...block,
    foundationId: getBlockFoundationId(block),
    status: statuses.includes(block.status as BlockStatus) ? block.status : "Draft",
    elementorQaStatus: normalizeQaStatus(block.elementorQaStatus),
    qa: {
      ...defaultQaChecklist,
      ...(typeof existingQa.elementorPasteTested === "boolean" ? { pastedIntoElementor: existingQa.elementorPasteTested } : {}),
      ...(typeof existingQa.ctaLinksReviewed === "boolean" ? { ctaLinksChecked: existingQa.ctaLinksReviewed } : {}),
      ...(typeof existingQa.imagePlaceholdersReviewed === "boolean" ? { imagesReplaced: existingQa.imagePlaceholdersReviewed } : {}),
      ...(typeof existingQa.scopedClassesChecked === "boolean" ? { cssConflictChecked: existingQa.scopedClassesChecked } : {}),
      ...existingQa
    }
  };
}

function normalizeQaStatus(status: unknown) {
  return status === "Pass" || status === "Warnings" || status === "Needs Review" ? status : "Needs Review";
}

export function createUserBlock(block: Omit<Block, "id">): UserBlock {
  const now = new Date().toISOString();
  return {
    ...block,
    id: `local-${crypto.randomUUID()}`,
    foundationId: getBlockFoundationId(block),
    status: block.status ?? "Draft",
    elementorQaStatus: block.elementorQaStatus ?? "Needs Review",
    qa: defaultQaChecklist,
    createdAt: now,
    updatedAt: now
  };
}

export function updateUserBlock(existing: UserBlock, block: Omit<Block, "id">, qa?: BlockQaChecklist): UserBlock {
  return {
    ...existing,
    ...block,
    foundationId: block.foundationId ?? getBlockFoundationId(block),
    status: block.status ?? existing.status ?? "Draft",
    elementorQaStatus: block.elementorQaStatus ?? existing.elementorQaStatus ?? "Needs Review",
    qa: qa ?? existing.qa ?? defaultQaChecklist,
    updatedAt: new Date().toISOString()
  };
}

export function loadUserBlocks(): UserBlock[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(isUserBlock).map(normalizeUserBlock);
  } catch {
    return [];
  }
}

export function saveUserBlocks(blocks: UserBlock[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(blocks, null, 2));
}

export function parseImportedBlocks(json: string): UserBlock[] {
  const parsed: unknown = JSON.parse(json);
  if (!Array.isArray(parsed)) {
    throw new Error("Imported JSON must be an array of blocks.");
  }

  const validBlocks = parsed.filter(isUserBlock).map(normalizeUserBlock);
  if (validBlocks.length === 0) {
    throw new Error("No valid user-created blocks were found in the JSON file.");
  }

  return validBlocks;
}

export function createLocalLibraryBackup(userBlocks: UserBlock[], pageAssemblyIds: string[]): LocalLibraryBackup {
  return {
    type: "sh-block-library-local-state",
    exportedAt: new Date().toISOString(),
    version: 1,
    userBlocks,
    pageAssemblyIds
  };
}

export function parseImportedLocalState(json: string): LocalLibraryBackup {
  const parsed: unknown = JSON.parse(json);

  if (Array.isArray(parsed)) {
    return createLocalLibraryBackup(parsed.filter(isUserBlock).map(normalizeUserBlock), []);
  }

  if (!isRecord(parsed)) {
    throw new Error("Imported JSON must be a block array or SH Block Library backup.");
  }

  const rawBlocks = parsed.userBlocks;
  const rawAssembly = parsed.pageAssemblyIds;
  const userBlocks = Array.isArray(rawBlocks) ? rawBlocks.filter(isUserBlock).map(normalizeUserBlock) : [];
  const pageAssemblyIds = Array.isArray(rawAssembly) ? rawAssembly.filter((id): id is string => typeof id === "string") : [];

  if (userBlocks.length === 0 && pageAssemblyIds.length === 0) {
    throw new Error("No valid local blocks or page assembly data were found.");
  }

  return {
    type: "sh-block-library-local-state",
    exportedAt: typeof parsed.exportedAt === "string" ? parsed.exportedAt : new Date().toISOString(),
    version: 1,
    userBlocks,
    pageAssemblyIds
  };
}

export function cloneUserBlock(block: Block, namePrefix = "Copy of "): UserBlock {
  const now = new Date().toISOString();
  return {
    ...block,
    id: `local-${crypto.randomUUID()}`,
    name: `${namePrefix}${block.name}`,
    status: "Draft",
    elementorQaStatus: block.elementorQaStatus ?? "Needs Review",
    qa: defaultQaChecklist,
    createdAt: now,
    updatedAt: now
  };
}

export function resolveImportedBlockConflicts(importedBlocks: UserBlock[], existingIds: Set<string>) {
  return importedBlocks.map((block) => {
    if (!existingIds.has(block.id)) {
      existingIds.add(block.id);
      return block;
    }

    const nextBlock = {
      ...block,
      id: `local-${crypto.randomUUID()}`,
      name: `${block.name} (Imported Copy)`,
      updatedAt: new Date().toISOString()
    };
    existingIds.add(nextBlock.id);
    return nextBlock;
  });
}

export { ASSEMBLY_STORAGE_KEY };
