import type {Question, QuestionModule} from "@/types/question.types.ts";
import type {QuestionSection} from "@/types/question.types.ts";
import {sortQuestion} from "@/utils/sortQuestion.ts";
import {atom, computed} from "nanostores";

const $sectionsStore = atom<QuestionSection[]>([]);

const flattenedQuestions = computed($sectionsStore, sections =>
  // eslint-disable-next-line unicorn/no-array-reduce
  sections.reduce<Question[]>((accumulator, section) => [...accumulator, ...section.collection], [])
);

const sectionsStore = {
  state: $sectionsStore,
  find(slug: Question['slug']) {
    return flattenedQuestions.get()?.find(item => item.slug === slug);
  },

  async fetch(collection: string) {
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
        console.log({sortedSections});
        this.state.set(sortedSections);
      });
  }
}

export default sectionsStore;
