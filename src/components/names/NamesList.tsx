import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import NameRow from "@/components/names/NameRow";
import {
  COMPILATIONS,
  DEFAULT_COMPILATION,
  NAMES,
  type Compilation,
} from "@/data/names";

const NamesList = () => {
  const [compilation, setCompilation] = useState<Compilation>(DEFAULT_COMPILATION);
  const [query, setQuery] = useState("");

  const names = NAMES[compilation];

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return names;
    return names.filter(
      (name) =>
        name.transliteration.toLowerCase().includes(term) ||
        name.meaning.toLowerCase().includes(term)
    );
  }, [names, query]);

  const activeLabel =
    COMPILATIONS.find((c) => c.value === compilation)?.label ?? "";

  return (
    <div className="max-w-4xl mx-auto">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <div className="relative flex-1">
          <label htmlFor="names-search" className="sr-only">
            Search the Names of Allah
          </label>
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
            aria-hidden="true"
          />
          <Input
            id="names-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or meaning"
            className="pl-9"
          />
        </div>

        <ToggleGroup
          type="single"
          value={compilation}
          // A single-type ToggleGroup clears its value when the active item is
          // clicked again. Ignoring the empty value keeps a list on screen.
          onValueChange={(value) => value && setCompilation(value as Compilation)}
          aria-label="Choose a compilation"
          className="justify-start bg-muted/60 rounded-full p-1 gap-1 shrink-0"
        >
          {COMPILATIONS.map((option) => (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              className="rounded-full px-4 h-8 text-sm font-medium text-muted-foreground hover:text-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm"
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Result count */}
      <p className="text-sm text-muted-foreground mb-3" aria-live="polite">
        {filtered.length === names.length
          ? `${names.length} Names, compiled by ${activeLabel}`
          : `${filtered.length} of ${names.length} Names`}
      </p>

      {/* List */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        {filtered.length > 0 ? (
          filtered.map((name, index) => (
            <div
              key={`${compilation}-${name.slug}`}
              className="border-b border-border/50 last:border-b-0"
            >
              <NameRow name={name} position={index + 1} />
            </div>
          ))
        ) : (
          <div className="px-6 py-16 text-center">
            <p className="text-foreground font-medium mb-1">No Names found</p>
            <p className="text-muted-foreground text-sm">
              Nothing matches "{query.trim()}". Try a different spelling, or search
              by meaning instead.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NamesList;
