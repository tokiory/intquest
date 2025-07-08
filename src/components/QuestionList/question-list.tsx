import { QuestionItem } from "@/components/QuestionItem";
import type { Question } from "@/types/question.types.ts";
import { clsx } from "clsx";
import { memo } from "react";

interface QuestionListProperties {
  list: Question[];
  noSummary?: boolean;
  className?: string | string[];
}

export const QuestionList = memo(
  ({ className, list, noSummary }: QuestionListProperties) => {
    return (
      <ul className={clsx("flex flex-col gap-4 py-4", className)}>
        {list.map((item) => (
          <li key={item.slug} id={item.slug} className="scroll-my-32">
            <QuestionItem noSummary={noSummary} {...item} />
          </li>
        ))}
      </ul>
    );
  },
);
