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
import clsx from "clsx";

export const BrowserPage = () => {
  const path = useLocation();
  const currentSection = path.pathname.split('/').at(-1);
  const summary = useStore(summaryStore.state);

  // useStore here is only for side effects
  useStore(sectionsStore.state);
  const isFetchingSections = useStore(sectionsStore.state).fetchState === 'loading';
  useStore(filterStore.state);

  useEffect(() => {
    sectionsStore.fetch(currentSection!);
  }, []);

  const filteredSections = computed(
    [sectionsStore.state, filterStore.state], (sectionStore, filterStore) => {
      const sections = sectionStore.sections;
      return sections.map((section) => {
        const collection = section.collection
          .filter(question => {
            const questionTags = question.tags?.map(item => item.name);
            return question.name.toLowerCase().includes(filterStore.search.toLowerCase())
              && filterStore.tags.every(tag => questionTags?.includes(tag.name));
          });

        return {
          ...section,
          collection
        };
      });
  });

  const isSectionFolded = (key: string) => filterStore.state.get().fold.includes(key);

  const questionList = filteredSections.get().map((section) => {

    const isFolded = isSectionFolded(section.title);

    return (section.collection.length > 0 && <div className={clsx(styles.questions, isFolded && styles.questions_folded)} key={section.title}>
      <div className={styles.questions__header}>
        <Title onClick={() => filterStore.fold.toggle(section.title)} dimmed={isFolded} className={styles.questions__title}>
          {section.icon && <Icon icon={section?.icon} />}
          {section.title}
        </Title>
        <Title className={styles.questions__amount} size={"sm"}>{section.collection.length}</Title>
      </div>
      {isFolded ? <></> : <QuestionList className={styles.browserpage__collection} list={section.collection} />}
    </div>)
  });

  const stub = isFetchingSections ? <></> : <QuestionListStub />

  return (
    <div className={styles.browserpage}>
      <BrowserFilter />
      {questionList?.some(element => element) ? questionList : stub}
      {summary.questions.length > 0 && <SummaryFooter />}
    </div>
  );
};
