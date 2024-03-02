import {BrowserFilterSuggestions} from "@/components/BrowserFilter/BrowserFilterSuggestions.tsx";
import {BrowserFilterTags} from "@/components/BrowserFilter/BrowserFilterTags.tsx";
import {Input} from "@/components/ui";
import filterStore from "@/stores/filterStore.ts";
import {useStore} from "@nanostores/react";
import type {FormEventHandler} from "react";
import styles from './browserfilter.module.scss';

export const BrowserFilter = () => {
  const filters = useStore(filterStore.state);

  const onSearchInput: FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;
    filterStore.search.update(input.value);
  }

  return (
    <div className={styles.browserFilter}>
      <Input placeholder={'Поиск'} value={filters.search} onInput={onSearchInput}  />
      {filters.tags.length > 0 ? <BrowserFilterTags tags={filters.tags} /> : <BrowserFilterSuggestions />}
    </div>
  );
};
