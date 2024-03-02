import {clsx} from "clsx";
import {type MouseEventHandler, useCallback} from "react";
import styles from './questiontag.module.scss';
import {Text} from "@/components/ui";
import type {QuestionTag as IQuestionTag} from "@/types/question.types.ts";

interface QuestionTagProperties extends IQuestionTag {
  className?: string | string[];
  onClick?: (tag: IQuestionTag) => void;
}

const getTagStyle = (color: IQuestionTag['color']) => {
  return {
    backgroundColor: color,
  }
};

export const QuestionTag = ({className, name, color, onClick}: QuestionTagProperties) => {
  const tagStyle = getTagStyle(color);

  const onTagClick = useCallback<MouseEventHandler>((event) => {
    event.stopPropagation();
    const currentTag: IQuestionTag = {name, color};
    onClick && onClick(currentTag);
  }, []);

  return (
    <div onClick={onTagClick} style={tagStyle} className={clsx(styles.questiontag, className)}>
      <Text className={styles.questiontag__text} size='sm'>
        {`#${name}`}
      </Text>
    </div>
  );
};
