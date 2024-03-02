import styles from "@/components/QuestionItem/question-item.module.scss";
import {Text} from "@/components/ui";
import type {Question} from "@/types/question.types.ts";

type QuestionItemDescriptionProperties = Pick<Question, 'answer'>;

export const QuestionItemDescription = ({answer}: QuestionItemDescriptionProperties) => {
  return (
    <div className={styles.answer}>
      <Text className={styles.answer__title}>
        Краткое описание:
      </Text>
      {answer.map((text, index) =>
        <div key={index} className={styles.answer__line}>{text}</div>
      )}
    </div>
  );
};
