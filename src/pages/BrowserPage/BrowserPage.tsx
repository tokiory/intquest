import {BrowserFilter} from "@/components/BrowserFilter/BrowserFilter.tsx";
import {QuestionList} from "@/components/QuestionList";
import {QuestionListStub} from "@/components/QuestionListStub";
import {SummaryFooter} from "@/components/SummaryFooter";
import {Title} from "@/components/ui/Title/Title.tsx";
import filterStore from "@/stores/filterStore.ts";
import sectionsStore from "@/stores/sectionsStore.ts";
import summaryStore from "@/stores/summaryStore.ts";
import {Icon} from "@iconify-icon/react";
import {useStore} from "@nanostores/react";
import {computed} from "nanostores";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import styles from './browserpage.module.scss';

export const BrowserPage = () => {
  const path = useLocation();
  const currentSection = path.pathname.split('/').at(-1);
  const summary = useStore(summaryStore.state);

  // useStore here is only for side effects
  useStore(sectionsStore.state);
  useStore(filterStore.state);

  useEffect(() => {
    sectionsStore.fetch(currentSection!);
  }, []);

  const filteredSections = computed(
    [sectionsStore.state, filterStore.state], (sections, filters) => {
      return sections.map(section => {
        const collection = section.collection
          .filter(question => {
            const questionTags = question.tags?.map(item => item.name);
            return question.name.includes(filters.search)
              && filters.tags.every(tag => questionTags?.includes(tag.name));
          });

        return {
          ...section,
          collection
        };
      })
  });

  const questionList = filteredSections.get().map((section) => (
    section.collection.length > 0 && <div className={styles.questions} key={section.title}>
      <Title className={styles.questions__title}>
        {section.icon && <Icon icon={section?.icon} />}
        {section.title}
      </Title>
      <QuestionList className={styles.browserpage__collection} list={section.collection} />
    </div>
  ));

  console.log({questionList});

  return (
    <div className={styles.browserpage}>
      <BrowserFilter />
      {questionList?.some(element => element) ? questionList : <QuestionListStub />}
      {summary.questions.length > 0 && <SummaryFooter />}
    </div>
  );
};
