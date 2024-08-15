import { QuestionTag } from "@/components/QuestionTag";
import filterStore from "@/stores/filterStore.ts";
import { type QuestionTag as IQuestionTag } from "@/types/question.types.ts";
import { useCallback } from "react";

interface QuestionItemTagsProperties {
  tags?: IQuestionTag[];
}

export const QuestionItemTags = ({ tags }: QuestionItemTagsProperties) => {
  const onTagClick = useCallback((tag: IQuestionTag) => {
    filterStore.tags.toggle(tag);
  }, []);

  return (
    <ul className="flex gap-2">
      {tags?.map((tag) => (
        <li className="cursor-pointer" key={tag.name}>
          <QuestionTag onClick={onTagClick} {...tag} />
        </li>
      ))}
    </ul>
  );
};
