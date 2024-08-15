import { QuestionTag } from "@/components/QuestionTag";
import filterStore from "@/stores/filterStore.ts";
import type { Question } from "@/types/question.types.ts";

interface BrowserFilterTagsProperties {
  tags: Exclude<Question["tags"], undefined>;
}

export const BrowserFilterTags = ({ tags }: BrowserFilterTagsProperties) => {
  const tagList = tags.map((tag) => (
    <QuestionTag
      onClick={(tag) => filterStore.tags.toggle(tag)}
      {...tag}
      key={`filter-tag-${tag.name}`}
      className="h-fit"
    />
  ));

  return <div className="flex gap-3 h-12 mt-4">{tagList}</div>;
};
