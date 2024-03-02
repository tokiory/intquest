import {QuestionTag} from "@/components/QuestionTag";
import filterStore from "@/stores/filterStore.ts";
import type {Question} from "@/types/question.types.ts";
import styles from './browserfilter.module.scss';

interface BrowserFilterTagsProperties {
  tags: Exclude<Question['tags'], undefined>;
}

export const BrowserFilterTags = ({tags}: BrowserFilterTagsProperties) => {
  const tagList = tags.map(tag =>
    <QuestionTag
      onClick={tag => filterStore.tags.toggle(tag)}
      {...tag}
      key={`filter-tag-${tag.name}`}
      className={styles.tags__item}
    />);

  return (
    <div className={styles.tags}>
      {tagList}
    </div>
  );
};
