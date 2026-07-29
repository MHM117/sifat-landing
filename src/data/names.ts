export type NameEntry = {
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

/**
 * Folds the many spellings people actually type into one comparable form, so
 * "rahman", "Ar-Rahmaan" and "ar rahmaan" all match the same Name. Applied to
 * both the query and the entry, so the two always meet in the middle.
 *
 * Arabic is folded too: harakat, tatweel and the alef variants are stripped,
 * letting someone type a Name without diacritics and still find it.
 *
 * Unicode escapes rather than literal Arabic, so the character classes stay
 * readable in editors that reorder bidirectional text.
 */
export function normalizeForSearch(value: string): string {
  return (
    value
      .toLowerCase()
      // Harakat (U+064B-U+065F), superscript alef (U+0670), tatweel (U+0640).
      .replace(/[ً-ٰٟـ]/g, "")
      // Alef variants collapse to bare alef.
      .replace(/[آأإٱ]/g, "ا")
      // Alef maksura to ya.
      .replace(/ى/g, "ي")
      // Drop hyphens, spaces, apostrophes and any other separator.
      .replace(/[^a-z0-9؀-ۿ]/g, "")
      // "rahmaan" and "rahman" collapse to the same stem.
      .replace(/(.)\1+/g, "$1")
      // Long-vowel spellings: "raheem"/"rahim", "noor"/"nur".
      .replace(/e/g, "i")
      .replace(/o/g, "u")
  );
}

export type Compilation = "tirmidhi" | "uthaymeen";

export const COMPILATIONS: { value: Compilation; label: string }[] = [
  { value: "tirmidhi", label: "Tirmidhi" },
  { value: "uthaymeen", label: "Ibn al-Uthaymeen" },
];

export const DEFAULT_COMPILATION: Compilation = "tirmidhi";

/**
 * PLACEHOLDER CONTENT.
 * Three names per compilation so the layout can be reviewed. The full
 * 99-name lists replace these arrays without any component changes.
 */
export const NAMES: Record<Compilation, NameEntry[]> = {
  tirmidhi: [
    {
      id: 1,
      slug: "ar-rahmaan",
      arabic: "ٱلرَّحْمَٰن",
      transliteration: "AR-RAHMAAN",
      meaning: "The Most Gracious",
    },
    {
      id: 2,
      slug: "ar-raheem",
      arabic: "ٱلرَّحِيم",
      transliteration: "AR-RAHEEM",
      meaning: "The Most Merciful",
    },
    {
      id: 3,
      slug: "al-malik",
      arabic: "ٱلْمَلِك",
      transliteration: "AL-MALIK",
      meaning: "The King",
    },
    // Temporary stress-test row: the longest Name in the list, kept until the
    // real content lands so the wrapping behaviour stays visible. Its id is 85
    // on purpose, showing the number tracks the compilation, not row position.
    {
      id: 85,
      slug: "dhul-jalaali-wal-ikraam",
      arabic: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَام",
      transliteration: "DHUL-JALAALI WAL-IKRAAM",
      meaning: "The Lord of Majesty and Generosity",
    },
  ],
  uthaymeen: [
    {
      id: 1,
      slug: "ar-rabb",
      arabic: "ٱلرَّبّ",
      transliteration: "AR-RABB",
      meaning: "The Lord and Sustainer",
    },
    {
      id: 2,
      slug: "al-jameel",
      arabic: "ٱلْجَمِيل",
      transliteration: "AL-JAMEEL",
      meaning: "The Beautiful",
    },
    {
      id: 3,
      slug: "as-sayyid",
      arabic: "ٱلسَّيِّد",
      transliteration: "AS-SAYYID",
      meaning: "The Master",
    },
  ],
};
