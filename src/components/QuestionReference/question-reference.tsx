import { clsx } from "clsx";

interface QuestionReferenceProperties {
  link: string;
  name: string;
  className?: string | string[];
}

export const QuestionReference = ({
  link,
  name,
  className,
}: QuestionReferenceProperties) => {
  return (
    <a
      onClick={(event) => event.stopPropagation()}
      className={clsx(
        "block transition-all text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300",
        className,
      )}
      href={link}
      target="_blank"
    >
      {name}
    </a>
  );
};
