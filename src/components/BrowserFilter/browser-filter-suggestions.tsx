import { QuestionTag } from "@/components/QuestionTag";
import { Text } from "@/components/ui";
import suggestions from "@/data/tags/suggestions.ts";
import filterStore from "@/stores/filterStore.ts";
import { useLocation } from "react-router-dom";

export const BrowserFilterSuggestions = () => {
  const currentSection = useLocation()
    .pathname.split("/")
    .at(-1) as keyof typeof suggestions;

  const suggestionList = Object.values(suggestions[currentSection]).map(
    (tag) => (
      <li key={`suggestion-tag-${tag.name}`}>
        <QuestionTag onClick={(tag) => filterStore.tags.toggle(tag)} {...tag} />
      </li>
    ),
  );

  return (
    <div className="flex flex-col gap-3 mt-4">
      <Text size="sm" className="font-medium text-slate-500">
        Попробуйте следующие теги:
      </Text>
      <ul className="flex flex-wrap gap-3">{suggestionList}</ul>
    </div>
  );
};
