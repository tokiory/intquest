import {clsx} from "clsx";
import styles from './questionreference.module.scss';

interface QuestionReferenceProperties {
  link: string;
  name: string;
  className?: string | string[];
}

export const QuestionReference = ({link, name, className}: QuestionReferenceProperties) => {
  return (
    <a onClick={event => event.stopPropagation()} className={clsx(styles.questionreference, className)} href={link} target="_blank">
      {name}
    </a>
  );
};
