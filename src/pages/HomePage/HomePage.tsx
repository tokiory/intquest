import {SectionList} from "@/components/SectionList/SectionList.tsx";
import {Text} from "@/components/ui";
import backend from "@/data/questions/backend";
import devops from "@/data/questions/devops";
import frontend from "@/data/questions/frontend";
import qa from "@/data/questions/qa";
import {Icon} from "@iconify-icon/react";
import {clsx} from "clsx";
import { useMemo } from "react";
import styles from './homepage.module.scss';
import sections from "@/data/sections.ts";

export const HomePage = () => {
  const totalQuestionAmount = useMemo(() => {
    const chapters = [backend, devops, frontend, qa];
    return chapters
      .flatMap(chapter => chapter.map(section => section.collection))
      .reduce((accumulator, collection) => accumulator + collection.length, 0)
  }, []);
    // .reduce((accumulator, collection) => accumulator + collection.collection.length, 0)

  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__title}>
        <span className={clsx(styles.homepage__text, styles.homepage__text_gradient)}>Int</span>
        <span className={clsx(styles.homepage__text, styles.homepage__text_invisible)}>erview</span>
        &nbsp;
        <span className={clsx(styles.homepage__text, styles.homepage__text_gradient)}>Quest</span>
        <span className={clsx(styles.homepage__text, styles.homepage__text_invisible)}>ion</span>
      </div>
      <SectionList className={styles.homepage__sections} list={sections} />

      <Text size="sm" className={styles.homepage__amount}>
        <span title="А хотелось бы 1000...">
          Общее количество вопросов: {totalQuestionAmount}
        </span>
      </Text>

      <div className={styles.homepage__description}>
        Intquest предоставляет собеседующему огромный выбор вопросов для интервью. После того как собеседование будет окончено -
        собеседующий может отправить кандидату список вопросов, который ему ранее задавали для дальнейшего изучение/анализов
        ответа.
      </div>
      <Text className={styles.homepage__author}>
        Coded with a bit of magic by <a className={styles.homepage__link} href="https://developer-log.vercel.app">&lt;tokiory&gt;</a>
        <Icon style={{fontSize: '32px'}} icon="fluent-emoji:whale" />
      </Text>
    </div>
  );
};
