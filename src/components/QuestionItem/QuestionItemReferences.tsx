import {QuestionSimilars} from "@/components/QuestionItem/QuestionSimilars.tsx";
import {QuestionReference} from "@/components/QuestionReference";
import type {Question} from "@/types/question.types.ts";
import {clsx} from "clsx";
import styles from './question-item.module.scss';

interface QuestionItemReferencesProperties extends Pick<Question, 'references' | 'similars' | 'slug'> {
  isExpanded?: boolean;
  noSummary?: boolean;
}

export const QuestionItemReferences = ({isExpanded, references, similars, noSummary, slug}: QuestionItemReferencesProperties) => {
  return (
    <div className={clsx(styles.references, {[styles.references_active]: isExpanded})}>
      <div className={styles.references__list}>
        {
          references?.map((reference, index) =>
            <QuestionReference key={index} {...reference} />
          )
        }
      </div>
      {!noSummary && similars?.length && <QuestionSimilars slug={slug} similars={similars} isExpanded={isExpanded} />}
    </div>
  );
};
