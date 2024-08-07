import type { FetchState } from "@/types/common.types";
import type {Question, QuestionModule} from "@/types/question.types.ts";
import type {QuestionSection} from "@/types/question.types.ts";
import {sortQuestion} from "@/utils/sortQuestion.ts";
import {computed, map} from "nanostores";

const $sectionsStore = map<SectionsStoreState>({
  sections: [],
  fetchState: 'idle',
})

interface SectionsStoreState {
  sections: QuestionSection[];
  fetchState: FetchState;
}

const transformSectionModule = async (module: QuestionModule) => {
  return module.default;
};


const flattenedQuestions = computed($sectionsStore, state =>
  // eslint-disable-next-line unicorn/no-array-reduce
  state.sections.reduce<Question[]>((accumulator, section) => [...accumulator, ...section.collection], [])
);

const sectionsStore = {
  state: $sectionsStore,
  find(slug: Question['slug']) {
    return flattenedQuestions.get()?.find(item => item.slug === slug);
  },

  async fetch(collection: string) {
    this.state.setKey('sections', []);
    this.state.setKey('fetchState', 'loading');
    const fetchSections = async () =>
      import(`../data/questions/${collection}/index.ts`);

    fetchSections()
      .then(transformSectionModule)
      .then(sections => {
        const sortedSections = sections.map(section => ({
          ...section,
          collection: section.collection.sort(sortQuestion),
        }));
        this.state.setKey('sections', sortedSections);
        this.state.setKey('fetchState', 'success');
      })
      .catch(() => {
        this.state.setKey('fetchState', 'error');
      })
  }
}

export default sectionsStore;
