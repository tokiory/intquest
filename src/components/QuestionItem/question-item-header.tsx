import { QuestionItemTags } from "@/components/QuestionItem/question-item-tags.tsx";
import type { Question } from "@/types/question.types.ts";
import { Text } from "@/components/ui";

type QuestionItemHeaderProperties = Pick<Question, "tags" | "name">;

export const QuestionItemHeader = ({
  name,
  tags,
}: QuestionItemHeaderProperties) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
      <Text className="font-medium">{name}</Text>

      <div className="flex gap-2">
        <div className="flex shrink-0 gap-3">
          <QuestionItemTags tags={tags} />
        </div>
      </div>
    </div>
  );
};
