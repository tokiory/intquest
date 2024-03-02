import {QuestionTag} from "@/components/QuestionTag";
import {Text} from "@/components/ui";
import suggestions from "@/data/tags/suggestions.ts";
import filterStore from "@/stores/filterStore.ts";
import {useLocation} from "react-router-dom";
import styles from './browserfilter.module.scss';

export const BrowserFilterSuggestions = () => {

  const currentSection = useLocation().pathname.split('/').at(-1) as keyof typeof suggestions;

  const suggestionList = Object.values(suggestions[currentSection]).map(tag =>
    <li key={`suggestion-tag-${tag.name}`}>
      <QuestionTag
        onClick={tag => filterStore.tags.toggle(tag)}
        {...tag}
      />
    </li>
  );

  return (
    <div className={styles.suggestions}>
      <Text size="sm" className={styles.suggestions__text}>
        Попробуйте следующие теги:
      </Text>
      <ul className={styles.suggestions__list}>
        {suggestionList}
      </ul>
    </div>
  );
};
