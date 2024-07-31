import type {Question, QuestionModule} from "@/types/question.types.ts";
import type {QuestionSection} from "@/types/question.types.ts";
import {sortQuestion} from "@/utils/sortQuestion.ts";
import {atom, computed} from "nanostores";

const $sectionsStore = atom<QuestionSection[]>([]);
const $isFetching = atom(false);

const flattenedQuestions = computed($sectionsStore, sections =>
  // eslint-disable-next-line unicorn/no-array-reduce
  sections.reduce<Question[]>((accumulator, section) => [...accumulator, ...section.collection], [])
);

const sectionsStore = {
  state: $sectionsStore,
  isFetching: $isFetching,
  find(slug: Question['slug']) {
    return flattenedQuestions.get()?.find(item => item.slug === slug);
  },

  async fetch(collection: string) {
    this.state.set([])
    this.isFetching.set(true);
    const fetchSections = async () =>
      import(`../data/questions/${collection}/index.ts`);

    const transformSectionModule = async (module: QuestionModule) => {
      return module.default;
    };

    fetchSections()
      .then(transformSectionModule)
      .then(sections => {
        const sortedSections = sections.map(section => ({
          ...section,
          collection: section.collection.sort(sortQuestion),
        }));
        this.state.set(sortedSections);
        this.isFetching.set(false);
      });
  }
}

export default sectionsStore;
