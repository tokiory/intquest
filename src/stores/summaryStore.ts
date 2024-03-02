import type {Question} from "@/types/question.types.ts";
import {map} from "nanostores";

interface SummaryStoreState {
  questions: Question[];
}

const $summaryStore = map<SummaryStoreState>({
  questions: [],
});

const summaryStore = {
  state: $summaryStore,
  questions: {
    clear() {
      $summaryStore.setKey('questions', []);
    },
    find(slug: Question["slug"]) {
      return $summaryStore.get().questions.find(question => question.slug === slug);
    },
    toggle(question: Question) {
      // eslint-disable-next-line unicorn/prefer-array-some
      if (this.find(question.slug)) {
        this.remove(question.slug)
        return;
      }

      this.add(question);
    },
    add(question: Question) {
      const store = $summaryStore.get();
      $summaryStore.setKey('questions', [...store.questions, question]);
    },
    remove(slug: Question['slug']) {
      const store = $summaryStore.get();
      $summaryStore.setKey('questions', store.questions.filter(question => question.slug !== slug));
    },
  }
}

export default summaryStore;
