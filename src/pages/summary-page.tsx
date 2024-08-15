import { PageWrapper } from "@/components/PageWrapper";
import {QuestionList} from "@/components/QuestionList/question-list.tsx";
import {type Question, type QuestionModule} from "@/types/question.types.ts";
import {useCallback, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const SummaryPage = () => {
  const location = useLocation();
  const [questions, setQuestions] = useState<Question[]>([]);
  const parametersGetter = new URLSearchParams(location.search);
  const parameters = {
    section: parametersGetter.get('section'),
    slugs: parametersGetter.get('slugs'),
  };


  const fetchQuestions = useCallback(async () => {
    const fetchSections = async () =>
      import(`../data/questions/${parameters.section}/index.ts`);

    const transformSectionModule = async (module: QuestionModule) => {
      return module.default;
    };

    return fetchSections()
      .then(transformSectionModule)
      .then((sections) => {
        const questions: Question[] = [];

        for (const section of sections) {
          questions.push(...section.collection);
        }

        return questions.filter(question => parameters.slugs?.includes(question.slug));
      });
  }, []);

  useEffect(() => {
    fetchQuestions().then(collection => {
      setQuestions(collection || []);
    });
  }, []);
  return (
    <PageWrapper>
      <QuestionList noSummary list={questions} />
   </PageWrapper>
  );
};
