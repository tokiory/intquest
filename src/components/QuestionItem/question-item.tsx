import { QuestionItemDescription } from "@/components/QuestionItem/question-item-description.tsx";
import { QuestionItemHeader } from "@/components/QuestionItem/question-item-header.tsx";
import { QuestionItemReferences } from "@/components/QuestionItem/question-item-references.tsx";
import { QuestionItemSummaryButton } from "@/components/QuestionItem/question-item-summary-button.tsx";
import summaryStore from "@/stores/summaryStore.ts";
import type { Question } from "@/types/question.types.ts";
import { useStore } from "@nanostores/react";
import { type MouseEventHandler, useCallback, useState } from "react";
import { Card } from "@/components/ui";
import { clsx } from "clsx";

interface QuestionItemProperties extends Question {
  className?: string | string[];
  noSummary?: boolean;
}

export const QuestionItem = ({
  className,
  name,
  tags,
  answer,
  references,
  slug,
  similars,
  noSummary,
}: QuestionItemProperties) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const summary = useStore(summaryStore.state);
  const isQuestionInSummary =
    summary.questions.findIndex((question) => question.slug === slug) !== -1;

  const onSummaryButtonClick = useCallback<
    MouseEventHandler<HTMLButtonElement>
  >((event) => {
    event.stopPropagation();

    summaryStore.questions.toggle({
      slug,
      tags,
      answer,
      name,
      references,
      similars,
    });
  }, []);

  // QuestionItem className={clsx(styles.questionItem, {[styles.questionItem_active]: isQuestionInSummary, [styles.questionItem_summary]: !noSummary}, className)}
  return (
    <div
      className={clsx(
        "flex select-none hover:pl-0",
        {
          "-ml-16 pl-16 group": !noSummary,
          "!pl-0": isQuestionInSummary,
        },
        className,
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {!noSummary && (
        <QuestionItemSummaryButton
          className="group-hover:block"
          onClick={onSummaryButtonClick}
          isActive={isQuestionInSummary}
        />
      )}
      <Card className="w-full py-3 px-4 cursor-pointer transition-all">
        <QuestionItemHeader name={name} tags={tags} />
        {isExpanded && <QuestionItemDescription answer={answer} />}
        <QuestionItemReferences
          references={references}
          similars={similars}
          noSummary={noSummary}
          slug={slug}
          isExpanded={isExpanded}
        />
      </Card>
    </div>
  );
};
