import tags from "@/data/tags";
import type {Question} from "@/types/question.types.ts";

const numberOrZero = (n?: number) => n || 0;

const levelWeights = [
  tags.junior.name,
  tags.middle.name,
  tags.senior.name
];

export const sortQuestion = (a: Question, b : Question): number => {
  let weight: number = numberOrZero(b.similars?.length) - numberOrZero(a.similars?.length);

  const firstQuestionTagNames = a.tags?.map(tag => tag.name)

  for (const level of levelWeights) {
    if (!firstQuestionTagNames) {
      break;
    }

    const foundIndex = firstQuestionTagNames.indexOf(level)

    if (foundIndex !== -1) {
      weight += foundIndex;
      break;
    }
  }

  return weight;
};
