import styles from "@/components/QuestionItem/question-item.module.scss";
import sectionsStore from "@/stores/sectionsStore.ts";
import {Text} from '@/components/ui';
import {type Question} from "@/types/question.types.ts";

interface QuestionSimilarsProperties {
  isExpanded?: boolean;
  similars?: Question['similars'];
  slug?: Question['slug'];
}

export const QuestionSimilars = ({isExpanded, similars}: QuestionSimilarsProperties) => {
  const similarsTitle = (isExpanded && <Text className={styles.similars__text}>Похожие вопросы:</Text>);

  const similarsList = similars?.map(slug => {
    // eslint-disable-next-line unicorn/no-array-callback-reference
    const question = sectionsStore.find(slug);
    return (question &&
      <li key={`similars-${slug}`}>—&nbsp;&nbsp;<a className={styles.similars__link} href={`#${slug}`}>{question.name}</a></li>
    );
  });

  return (
    <div className={styles.similars}>
      {similarsTitle}
      {
        isExpanded
          ? <ul className={styles.similars__list}>{similarsList}</ul>
          : <div className={styles.similars__counter}>+{similars?.length}</div>
      }
    </div>
  );
};
