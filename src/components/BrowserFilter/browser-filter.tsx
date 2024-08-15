import { BrowserFilterSuggestions } from "@/components/BrowserFilter/browser-filter-suggestions.tsx";
import { BrowserFilterTags } from "@/components/BrowserFilter/browser-filter-tags.tsx";
import { Input } from "@/components/ui";
import filterStore from "@/stores/filterStore.ts";
import { useStore } from "@nanostores/react";
import type { FormEventHandler } from "react";

export const BrowserFilter = () => {
  const filters = useStore(filterStore.state);

  const onSearchInput: FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;
    filterStore.search.update(input.value);
  };

  return (
    <div className="flex flex-col">
      <Input
        placeholder={"Поиск"}
        value={filters.search}
        onInput={onSearchInput}
      />
      {filters.tags.length > 0 ? (
        <BrowserFilterTags tags={filters.tags} />
      ) : (
        <BrowserFilterSuggestions />
      )}
    </div>
  );
};
