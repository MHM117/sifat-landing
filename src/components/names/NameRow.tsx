import { ChevronRight } from "lucide-react";
import type { NameEntry } from "@/data/names";

/**
 * Shared by the header row and every body row so the columns stay in lockstep.
 * Mobile is two columns (number, then the three fields stacked); from `sm` it
 * opens into the full four-column table.
 */
export const NAMES_GRID =
  "grid grid-cols-[2.25rem_minmax(0,1fr)] sm:grid-cols-[2.75rem_minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1.5fr)]";

/** Vertical rule between columns. Only from `sm`, where the columns exist. */
const DIVIDER = "sm:border-r sm:border-border/60";

type NameRowProps = {
  name: NameEntry;
};

const NameRow = ({ name }: NameRowProps) => {
  // Flipped per name via `hasDetail` in src/data/names.ts, once that Name has
  // a detail page. When it does, this wrapper becomes:
  //   <Link to={`/names/${name.slug}`} className={...}>
  const hasDetail = Boolean(name.hasDetail);

  return (
    <div
      className={`${NAMES_GRID} group items-stretch ${
        hasDetail ? "hover:bg-muted/40 transition-colors duration-200" : ""
      }`}
    >
      {/* The Name's fixed position in its compilation, never the filtered
          index. Search must not renumber a Name people know as the 47th. */}
      <div
        className={`row-span-3 sm:row-span-1 flex items-center justify-center py-3 text-sm tabular-nums text-foreground ${DIVIDER}`}
      >
        {String(name.id).padStart(2, "0")}
      </div>

      {/* min-w-0 on every cell and break-words on every string: a long Name
          wraps and grows the row taller, it never widens the table. */}
      <div
        className={`flex min-w-0 items-center px-3 sm:px-4 pt-3 pb-1 sm:py-3 ${DIVIDER}`}
      >
        <span
          dir="rtl"
          lang="ar"
          className="min-w-0 text-xl leading-relaxed text-foreground break-words"
        >
          {name.arabic}
        </span>
      </div>

      <div
        className={`flex min-w-0 items-center px-3 sm:px-4 pb-1 sm:py-3 ${DIVIDER}`}
      >
        <span className="min-w-0 text-sm font-semibold text-foreground tracking-wide break-words">
          {name.transliteration}
        </span>
      </div>

      <div className="flex min-w-0 items-center justify-between gap-2 px-3 sm:px-4 pb-3 sm:py-3">
        <span className="min-w-0 text-sm text-foreground break-words">
          {name.meaning}
        </span>
        {hasDetail && (
          <ChevronRight
            className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary-deep group-hover:translate-x-0.5 transition-all duration-200"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};

export default NameRow;
