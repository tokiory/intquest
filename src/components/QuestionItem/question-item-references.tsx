import { QuestionSimilars } from "@/components/QuestionItem/question-similars.tsx";
import { QuestionReference } from "@/components/QuestionReference";
import type { Question } from "@/types/question.types.ts";
import { cva } from "class-variance-authority";

interface QuestionItemReferencesProperties
  extends Pick<Question, "references" | "similars" | "slug"> {
  isExpanded?: boolean;
  noSummary?: boolean;
}

const QuestionItemReferencesVariants = cva("flex gap-4 justify-between mt-2", {
  variants: {
    isExpanded: {
      false: "flex-row items-center",
      true: "flex-col items-start mt-0",
    },
  },
  defaultVariants: {},
});

export const QuestionItemReferences = ({
  isExpanded,
  references,
  similars,
  noSummary,
  slug,
}: QuestionItemReferencesProperties) => {
  return (
    <div
      className={QuestionItemReferencesVariants({
        isExpanded,
      })}
    >
      <div className="flex items-center flex-wrap gap-4">
        {references?.map((reference, index) => (
          <QuestionReference key={index} {...reference} />
        ))}
      </div>
      {!noSummary && similars?.length && (
        <QuestionSimilars
          slug={slug}
          similars={similars}
          isExpanded={isExpanded}
        />
      )}
    </div>
  );
};
