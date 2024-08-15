import sectionsStore from "@/stores/sectionsStore.ts";
import { Text } from "@/components/ui";
import { type Question } from "@/types/question.types.ts";

interface QuestionSimilarsProperties {
  isExpanded?: boolean;
  similars?: Question["similars"];
  slug?: Question["slug"];
}

export const QuestionSimilars = ({
  isExpanded,
  similars,
}: QuestionSimilarsProperties) => {
  const similarsTitle = isExpanded && (
    <Text className="font-bold">Похожие вопросы:</Text>
  );

  const similarsList = similars?.map((slug) => {
    // eslint-disable-next-line unicorn/no-array-callback-reference
    const question = sectionsStore.find(slug);
    return (
      question && (
        <li key={`similars-${slug}`}>
          —&nbsp;&nbsp;
          <a className="text-cyan-600 hover:text-cyan-700" href={`#${slug}`}>
            {question.name}
          </a>
        </li>
      )
    );
  });

  return (
    <div className="mt-2">
      {similarsTitle}
      {isExpanded ? (
        <ul className="flex mt-3 flex-col gap-2">{similarsList}</ul>
      ) : (
        <div className="font-medium text-sm text-gray-300">
          +{similars?.length}
        </div>
      )}
    </div>
  );
};
