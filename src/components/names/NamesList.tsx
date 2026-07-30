import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import NameRow, { NAMES_GRID } from "@/components/names/NameRow";
import {
  COMPILATIONS,
  DEFAULT_COMPILATION,
  NAMES,
  type Compilation,
} from "@/data/names";
import { indexName, searchNames } from "@/lib/name-search";

const NamesList = () => {
  const [compilation, setCompilation] = useState<Compilation>(DEFAULT_COMPILATION);
  const [query, setQuery] = useState("");

  const names = NAMES[compilation];

  // Built once per compilation, so typing never re-folds 99 rows.
  const indexes = useMemo(() => names.map(indexName), [names]);

  const filtered = useMemo(
    () => searchNames(names, indexes, query),
    [names, indexes, query]
  );

  const handleCompilationChange = (value: string) => {
    // A single-type ToggleGroup clears its value when the active item is
    // clicked again. Ignoring the empty value keeps a list on screen.
    if (!value) return;
    setCompilation(value as Compilation);
    // Without this you can switch compilation and land on an empty list,
    // with the cause sitting in a search box you have already forgotten about.
    setQuery("");
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Controls. Sticky below the h-16 fixed header, so search stays reachable
          once you are hundreds of rows into the list. */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md py-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="relative flex-1">
            <label htmlFor="names-search" className="sr-only">
              Search the Names of Allah
            </label>
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
              aria-hidden="true"
            />
            <Input
              id="names-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or meaning"
              className="h-12 pl-10 rounded-xl"
            />
          </div>

          <ToggleGroup
            type="single"
            value={compilation}
            onValueChange={handleCompilationChange}
            aria-label="Choose a compilation"
            className="justify-start bg-muted rounded-xl p-1 gap-1 shrink-0"
          >
            {COMPILATIONS.map((option) => (
              <ToggleGroupItem
                key={option.value}
                value={option.value}
                className="rounded-lg px-4 h-10 text-sm font-medium text-muted-foreground hover:text-foreground data-[state=on]:bg-card data-[state=on]:text-primary-deep data-[state=on]:shadow-sm"
              >
                {option.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>

      {/* Count appears only while filtering. With no search term the table
          speaks for itself and a standing subtitle is just noise. */}
      {filtered.length !== names.length && (
        <p className="text-sm text-muted-foreground mb-3">
          {filtered.length} of {names.length} Names
        </p>
      )}

      {/* List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        {/* Column labels. Hidden on mobile, where rows stack and the labels
            would outweigh the data they describe. */}
        <div
          className={`${NAMES_GRID} hidden sm:grid bg-muted/60 border-b border-border text-xs font-medium uppercase tracking-wider text-muted-foreground`}
        >
          <div className="py-2.5 border-r border-border/60" aria-hidden="true" />
          <div className="flex items-center justify-end px-4 py-2.5 border-r border-border/60">
            Name
          </div>
          <div className="flex items-center px-4 py-2.5 border-r border-border/60">
            Transliteration
          </div>
          <div className="flex items-center px-4 py-2.5">Meaning</div>
        </div>

        {filtered.length > 0 ? (
          filtered.map((name) => (
            <div
              key={`${compilation}-${name.slug}`}
              className="border-b border-border/50 last:border-b-0"
            >
              <NameRow name={name} />
            </div>
          ))
        ) : (
          <div className="px-6 py-16 text-center">
            <p className="text-foreground font-medium">No Names found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NamesList;
