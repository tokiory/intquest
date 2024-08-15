import { Text } from "@/components/ui";
import type { Question } from "@/types/question.types.ts";

type QuestionItemDescriptionProperties = Pick<Question, "answer">;

export const QuestionItemDescription = ({
  answer,
}: QuestionItemDescriptionProperties) => {
  return (
    <div className="pt-4">
      <Text className="font-bold">Краткое описание:</Text>
      {answer.map((text, index) => (
        <div key={index} className="leading-6 text-sm">
          {text}
        </div>
      ))}
    </div>
  );
};
