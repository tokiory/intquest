import {Button} from "@/components/ui";
import {Icon} from "@iconify-icon/react";
import {clsx} from "clsx";
import type {MouseEventHandler} from "react";
import styles from './question-item.module.scss';

interface QuestionItemSummaryButtonProperties {
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const QuestionItemSummaryButton = ({isActive, onClick}: QuestionItemSummaryButtonProperties) => {
  return (
    <div className={clsx(styles.summary, {[styles.summary_active]: isActive})}>
      <Button
        onClick={event => onClick && onClick(event)}
        className={clsx(styles.summary__button, {[styles.summary__button_active]: isActive})}
      >
        <Icon icon="mdi:checkbox-marked-circle-outline" />
      </Button>
    </div>
  );
};
