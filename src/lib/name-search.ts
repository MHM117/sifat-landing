import type { NameEntry } from "@/data/names";

/**
 * Mirrors the search in the iOS app (lib/Screens/list_screen.dart), which is
 * deliberately unstrict: a plain substring test on the transliteration or the
 * meaning, with apostrophes stripped so "alaa" and "al-a'laa" both find
 * AL-A'LAA. Matching mid-word is the point, so "yy" finds AL-QAWIYY.
 *
 * One addition the app does not have. If that pass finds nothing at all, a
 * looser pass runs: separators dropped, doubled letters collapsed, long-vowel
 * spellings folded and Arabic diacritics stripped. That catches "rahman" for
 * AR-RAHMAAN, "rahim" for AR-RAHEEM, "ar rahmaan" with a space, and Arabic
 * typed without harakat.
 *
 * Because it only runs when the app-style pass comes up empty, anything the app
 * would find behaves identically here. The fallback only ever helps.
 */

const APOSTROPHES = /['’‘ʿʾ]/g;
/** Harakat, superscript alef, tatweel. */
const ARABIC_MARKS = /[ً-ٰٟـ]/g;
const ALEF_VARIANTS = /[آأإٱ]/g;
const ALEF_MAKSURA = /ى/g;
const NON_LETTER = /[^a-z0-9؀-ۿ]/g;

/** What the app does: lowercase, apostrophes gone. Hyphens and spaces kept. */
function appForm(value: string): string {
  return value.toLowerCase().replace(APOSTROPHES, "");
}

/** The fallback: spelling variants folded together. */
function looseForm(value: string): string {
  return (
    value
      .toLowerCase()
      .replace(ARABIC_MARKS, "")
      .replace(ALEF_VARIANTS, "ا")
      .replace(ALEF_MAKSURA, "ي")
      // Separators go, so "ar rahmaan" and "ar-rahmaan" agree.
      .replace(NON_LETTER, "")
      // "rahmaan" and "rahman" meet.
      .replace(/(.)\1+/g, "$1")
      // "raheem"/"rahim", "noor"/"nur".
      .replace(/e/g, "i")
      .replace(/o/g, "u")
  );
}

export type NameIndex = {
  /** Transliteration and meaning, app style. */
  app: string[];
  /** Transliteration, meaning and Arabic, folded. */
  loose: string[];
};

export function indexName(entry: NameEntry): NameIndex {
  return {
    app: [appForm(entry.transliteration), appForm(entry.meaning)],
    loose: [
      looseForm(entry.transliteration),
      looseForm(entry.meaning),
      // Substring matching means the Arabic article needs no special case:
      // "صبور" is already inside "الصبور".
      looseForm(entry.arabic),
    ],
  };
}

/**
 * Filters, never reorders. The compilation's own order is the order, so rows
 * stay where the numbering says they are.
 */
export function searchNames(
  entries: NameEntry[],
  indexes: NameIndex[],
  query: string
): NameEntry[] {
  const trimmed = query.trim();
  if (!trimmed) return entries;

  const app = appForm(trimmed);
  const direct = entries.filter((_, i) =>
    indexes[i].app.some((haystack) => haystack.includes(app))
  );
  if (direct.length) return direct;

  // Collapsing doubles can shrink a query to almost nothing: "zzzz" becomes
  // "z", which would then match any Name containing a z. Below three letters
  // the folded form is too blunt to be worth guessing with.
  const loose = looseForm(trimmed);
  if (loose.length < 3) return [];
  return entries.filter((_, i) =>
    indexes[i].loose.some((haystack) => haystack.includes(loose))
  );
}
