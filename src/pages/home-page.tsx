import { SectionList } from "@/components/SectionList/section-list.tsx";
import { Text } from "@/components/ui";
import backend from "@/data/questions/backend";
import devops from "@/data/questions/devops";
import frontend from "@/data/questions/frontend";
import qa from "@/data/questions/qa";
import { Icon } from "@iconify-icon/react";
import { useMemo } from "react";
import { useFetch } from "@/hooks/useFetch";
import type { Section } from "@/types/sections.types";

export const HomePage = () => {
  // TODO: Rename interface Section to Category
  const { data: categories, status: categoriesStatus } =
    useFetch<Section[]>("/category");

  const totalQuestionAmount = useMemo(() => {
    const chapters = [backend, devops, frontend, qa];
    return chapters
      .flatMap((chapter) => chapter.map((section) => section.collection))
      .reduce((accumulator, collection) => accumulator + collection.length, 0);
  }, []);

  return (
    <div className="flex flex-col flex-grow items-center justify-center h-full">
      <div className="text-center text-7xl font-bold mt-auto">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
          Int
        </span>
        <span>erview</span>
        &nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
          Quest
        </span>
        <span>ion</span>
      </div>
      {categoriesStatus === "success" && (
        <SectionList className="mt-6" list={categories} />
      )}

      <Text size="sm" className="text-center color-secondary">
        <span title="А хотелось бы 1000...">
          Общее количество вопросов: {totalQuestionAmount}
        </span>
      </Text>

      <div className="mt-auto max-w-3xl text-center">
        Intquest предоставляет собеседующему огромный выбор вопросов для
        интервью.
        <br />
        После того как собеседование будет окончено - собеседующий может
        отправить кандидату список вопросов, который ему ранее задавали для
        дальнейшего изучение/анализов ответа.
      </div>
      <Text size="sm" className="m-4 mt-2 flex items-center gap-2">
        Coded with a bit of magic by{" "}
        <a
          className="text-cyan-500 hover:text-cyan-600"
          href="https://developer-log.vercel.app"
        >
          &lt;tokiory&gt;
        </a>
        <Icon style={{ fontSize: "32px" }} icon="fluent-emoji:whale" />
      </Text>
    </div>
  );
};
