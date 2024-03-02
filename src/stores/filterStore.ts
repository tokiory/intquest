import type {QuestionTag} from "@/types/question.types.ts";
import {map} from "nanostores";

interface FilterStoreState {
  tags: QuestionTag[];
  search: string;
}

const $filterStore = map<FilterStoreState>({
  tags: [],
  search: '',
});

const filterStore = {
  state: $filterStore,
  tags: {
    clear() {
      $filterStore.setKey('tags', []);
    },
    toggle(tag: QuestionTag) {
      const store = $filterStore.get();

      if (store.tags.some(item => item.name === tag.name)) {
        this.remove(tag.name);
        return;
      }

      this.add(tag);
    },
    add(tag: QuestionTag) {
      const store = $filterStore.get();
      $filterStore.setKey('tags', [...store.tags, tag]);
    },
    remove(id: QuestionTag['name']) {
      const store = $filterStore.get();
      $filterStore.setKey('tags', store.tags.filter(tag => tag.name !== id));
    }
  },
  search: {
    update(value: string) {
      $filterStore.setKey('search', value);
    },
    clear() {
      $filterStore.setKey('search', '');
    }
  }
}

export default filterStore;
