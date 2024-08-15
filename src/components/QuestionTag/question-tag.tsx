import { type MouseEventHandler, useCallback } from "react";
import { Badge } from "@/components/ui";
import type { QuestionTag as IQuestionTag } from "@/types/question.types.ts";

interface QuestionTagProperties extends IQuestionTag {
  className?: string | string[];
  onClick?: (tag: IQuestionTag) => void;
}

function getBackgroundColor(color: string): string {
  switch (color) {
    case 'yellow': {
      return 'bg-yellow-600 dark:bg-yellow-300';
    }
    case 'blue': {
      return 'bg-blue-600 dark:bg-blue-300';
    }
    case 'green': {
      return 'bg-green-600 dark:bg-green-300';
    }
    case 'red': {
      return 'bg-red-600 dark:bg-red-300';
    }
    case 'purple': {
      return 'bg-purple-600 dark:bg-purple-300';
    }
    case 'pink': {
      return 'bg-pink-600 dark:bg-pink-300';
    }
    case 'slate': {
      return 'bg-slate-600 dark:bg-slate-300';
    }
    case 'orange': {
      return 'bg-orange-600 dark:bg-orange-300';
    }
    case 'amber': {
      return 'bg-amber-600 dark:bg-amber-300';
    }
    case 'lime': {
      return 'bg-lime-600 dark:bg-lime-300';
    }
    case 'cyan': {
      return 'bg-cyan-600 dark:bg-cyan-300';
    }
    case 'teal': {
      return 'bg-teal-600 dark:bg-teal-300';
    }
    case 'sky': {
      return 'bg-sky-600 dark:bg-sky-300';
    }
    case 'emerald': {
      return 'bg-emerald-600 dark:bg-emerald-300';
    }
    default: {
      return 'bg-gray-600 dark:bg-gray-300';
    }
  }
}

export const QuestionTag = ({
  name,
  color,
  onClick,
}: QuestionTagProperties) => {
  const onTagClick = useCallback<MouseEventHandler>((event) => {
    event.stopPropagation();
    const currentTag: IQuestionTag = { name, color };
    onClick && onClick(currentTag);
  }, [color, name, onClick]);

  return (
    <Badge onClick={onTagClick} className={`font-medium cursor-pointer px-3 ${getBackgroundColor(color)} py-1 h-fit`}>{`#${name}`}</Badge>
  );
};
