import { ChevronRight } from "lucide-react";
import type { NameEntry } from "@/data/names";

type NameRowProps = {
  name: NameEntry;
  /** Display index, so the numbering stays 1..n while the list is filtered. */
  position: number;
};

const NameRow = ({ name, position }: NameRowProps) => {
  // Flipped per name via `hasDetail` in src/data/names.ts, once that Name has
  // a detail page. When it does, this wrapper becomes:
  //   <Link to={`/names/${name.slug}`} className={...}>
  const hasDetail = Boolean(name.hasDetail);

  return (
    <div
      className={`group flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 ${
        hasDetail ? "hover:bg-muted/50 transition-colors duration-200" : ""
      }`}
    >
      <span className="w-6 shrink-0 text-sm text-muted-foreground tabular-nums">
        {String(position).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1 grid gap-x-4 gap-y-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)] sm:items-center">
        <span
          dir="rtl"
          lang="ar"
          className="text-xl sm:text-2xl text-foreground leading-loose"
        >
          {name.arabic}
        </span>
        <span className="text-sm font-semibold text-foreground tracking-wide">
          {name.transliteration}
        </span>
        <span className="text-sm text-muted-foreground">{name.meaning}</span>
      </div>

      {hasDetail && (
        <ChevronRight
          className="w-4 h-4 shrink-0 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default NameRow;
