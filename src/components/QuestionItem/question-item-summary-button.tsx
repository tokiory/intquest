import { Button } from "@/components/ui";
import { Icon } from "@iconify-icon/react";
import { clsx } from "clsx";
import type { MouseEventHandler } from "react";

interface QuestionItemSummaryButtonProperties {
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const QuestionItemSummaryButton = ({
  isActive,
  onClick,
  className,
}: QuestionItemSummaryButtonProperties) => {
  return (
    <div
      className={clsx(
        "w-16 px-4 cursor-initial",
        isActive ? "block" : "hidden",
        className,
      )}
    >
      <Button
        variant="outline"
        onClick={(event) => onClick && onClick(event)}
        className={clsx(
          "w-full h-full cursor-pointer flex rounded justify-center items-center",
          {
            "bg-accent": isActive,
          },
        )}
      >
        <Icon icon="mdi:checkbox-marked-circle-outline" />
      </Button>
    </div>
  );
};
