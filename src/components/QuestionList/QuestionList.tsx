import {QuestionItem} from "@/components/QuestionItem";
import type {Question} from "@/types/question.types.ts";
import {clsx} from 'clsx';
import {useLocation} from "react-router-dom";
import styles from './questionlist.module.scss';

interface QuestionListProperties {
  list: Question[];
  noSummary?: boolean;
  className?: string | string[];
}

export const QuestionList = ({className, list, noSummary}: QuestionListProperties) => {
  const location = useLocation();
  const slug = location.hash.replace('#', '');

  return (
    <ul className={clsx(styles.questionlist, className)}>
      {list.map((item) =>
          <li
            key={item.slug}
            id={item.slug}
            className={clsx(styles.questionlist__item, slug === item.slug && styles.questionlist__item_active)}
          >
            <QuestionItem noSummary={noSummary} {...item} />
          </li>
        )}
    </ul>
  );
};
