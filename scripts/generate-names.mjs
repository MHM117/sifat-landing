/**
 * Regenerates src/data/names.ts from the markdown tables at the repo root.
 *
 *   node scripts/generate-names.mjs
 *
 * The markdown files are the source of truth. Edit those, rerun this, never
 * hand-edit the generated arrays in names.ts.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const SOURCES = [
  { key: "tirmidhi", file: "names_tirmidhi.md" },
  { key: "uthaymeen", file: "names_ibn_uthaymeen.md" },
];

/** "AL-MU'MIN" -> "al-mumin"; "MAALIK-UL-MULK" -> "maalik-ul-mulk" */
const toSlug = (translit) =>
  translit
    .toLowerCase()
    .replace(/['’ʿʾ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function parse(file) {
  const rows = [];
  for (const line of readFileSync(join(root, file), "utf8").split("\n")) {
    const t = line.trim();
    if (!t.startsWith("|")) continue;
    const cells = t.slice(1, -1).split("|").map((c) => c.trim());
    if (cells.length !== 4) continue;
    const [num, arabic, transliteration, meaning] = cells;
    if (!/^\d+$/.test(num)) continue; // header and separator rows
    rows.push({ id: Number(num), arabic, transliteration, meaning });
  }
  return rows;
}

const data = {};
let problems = 0;

for (const { key, file } of SOURCES) {
  const rows = parse(file).map((r) => ({ ...r, slug: toSlug(r.transliteration) }));

  // Ids must be a clean 1..n run, or the numbering column lies.
  const expected = rows.map((_, i) => i + 1);
  const gaps = rows.filter((r, i) => r.id !== expected[i]);
  if (gaps.length) {
    console.error(`${file}: ids are not sequential, first offender #${gaps[0].id}`);
    problems++;
  }

  // Slugs become detail-page URLs, so collisions inside a list are fatal.
  const seen = new Map();
  for (const r of rows) {
    if (seen.has(r.slug)) {
      console.error(`${file}: duplicate slug "${r.slug}" (#${seen.get(r.slug)} and #${r.id})`);
      problems++;
    }
    seen.set(r.slug, r.id);
  }

  for (const r of rows) {
    if (!r.arabic || !r.transliteration || !r.meaning) {
      console.error(`${file}: #${r.id} has an empty cell`);
      problems++;
    }
  }

  data[key] = rows;
  console.log(`${file}: ${rows.length} names`);
}

if (problems) {
  console.error(`\n${problems} problem(s). Nothing written.`);
  process.exit(1);
}

const entry = (r) =>
  `    {
      id: ${r.id},
      slug: ${JSON.stringify(r.slug)},
      arabic: ${JSON.stringify(r.arabic)},
      transliteration: ${JSON.stringify(r.transliteration)},
      meaning: ${JSON.stringify(r.meaning)},
    },`;

const out = `export type NameEntry = {
  id: number;
  /** Used for the future detail page route: /names/{slug} */
  slug: string;
  arabic: string;
  transliteration: string;
  meaning: string;
  /**
   * Set to true once /names/{slug} exists. Until then the row shows no chevron
   * and no hover state, so it never suggests a link that goes nowhere.
   * Flip these on one at a time as the detail pages are written.
   */
  hasDetail?: boolean;
};

export type Compilation = "tirmidhi" | "uthaymeen";

export const COMPILATIONS: { value: Compilation; label: string }[] = [
  { value: "tirmidhi", label: "Tirmidhi" },
  { value: "uthaymeen", label: "Ibn al-Uthaymeen" },
];

export const DEFAULT_COMPILATION: Compilation = "tirmidhi";

/**
 * GENERATED FILE. Do not edit the arrays by hand.
 * Source: names_tirmidhi.md, names_ibn_uthaymeen.md at the repo root.
 * Regenerate with: node scripts/generate-names.mjs
 */
export const NAMES: Record<Compilation, NameEntry[]> = {
  tirmidhi: [
${data.tirmidhi.map(entry).join("\n")}
  ],
  uthaymeen: [
${data.uthaymeen.map(entry).join("\n")}
  ],
};
`;

writeFileSync(join(root, "src/data/names.ts"), out);
console.log("\nWrote src/data/names.ts");
