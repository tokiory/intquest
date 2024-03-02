import {Button, Title} from "@/components/ui";
import {Icon} from "@iconify-icon/react";
import {Link} from "react-router-dom";
import styles from './question-list-stub.module.scss';

export const QuestionListStub = () => {
  return (
    <div className={styles.stub}>
      <Icon icon="fluent-emoji:speak-no-evil-monkey" className={styles.stub__emoji} />
      <Title className={styles.stub__title}>Ничего не найдено</Title>
      <Link target="_blank" to="https://github.com/tokiory/intquest/issues/new">
        <Button>Предложить свой вопрос</Button>
      </Link>
    </div>
  );
};
