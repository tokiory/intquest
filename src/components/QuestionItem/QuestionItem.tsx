import {QuestionItemDescription} from "@/components/QuestionItem/QuestionItemDescription.tsx";
import {QuestionItemHeader} from "@/components/QuestionItem/QuestionItemHeader.tsx";
import {QuestionItemReferences} from "@/components/QuestionItem/QuestionItemReferences.tsx";
import {QuestionItemSummaryButton} from "@/components/QuestionItem/QuestionItemSummaryButton.tsx";
import summaryStore from "@/stores/summaryStore.ts";
import type {Question} from "@/types/question.types.ts";
import {useStore} from "@nanostores/react";
import {clsx} from "clsx";
import {type MouseEventHandler, useCallback, useState} from "react";
import styles from './question-item.module.scss';

interface QuestionItemProperties extends Question {
  className?: string | string[];
  noSummary?: boolean;
}

export const QuestionItem = ({className, name, tags, answer, references, slug, similars, noSummary}: QuestionItemProperties) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const summary = useStore(summaryStore.state);
  const isQuestionInSummary = summary.questions.findIndex(question => question.slug === slug) !== -1;

  const onSummaryButtonClick = useCallback<MouseEventHandler<HTMLButtonElement>>((event) => {
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

  return (
  <div
    onClick={() => setIsExpanded(!isExpanded)}
    className={clsx(styles.questionItem, {[styles.questionItem_active]: isQuestionInSummary, [styles.questionItem_summary]: !noSummary}, className)}
  >
      {!noSummary && <QuestionItemSummaryButton onClick={onSummaryButtonClick} isActive={isQuestionInSummary} />}
      <div className={styles.questionItem__wrapper}>
        <QuestionItemHeader name={name} tags={tags} />
        {isExpanded && <QuestionItemDescription answer={answer} />}
        <QuestionItemReferences
          references={references}
          similars={similars}
          noSummary={noSummary}
          slug={slug}
          isExpanded={isExpanded}
        />
      </div>
    </div>
  );
};
