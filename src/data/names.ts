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
