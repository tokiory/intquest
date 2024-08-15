import type { Size } from "@/types/theme.types.ts";
import type { PropsWithChildren } from "react";
import { cva } from "class-variance-authority";

export const TitleVariants = cva(
  "inline-block font-extrabold select-none",
  {
    variants: {
      dimmed: {
        true: "text-muted-foreground line-through",
      },
      size: {
        sm: "text-xl",
        md: "text-2xl",
        lg: "text-5xl",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

interface TitleProperties {
  size?: Size;
  onClick?: () => void;
  className?: string | string[];
  dimmed?: boolean;
}

export const Title = ({
  size = "lg",
  className,
  children,
  onClick,
  dimmed,
}: PropsWithChildren<TitleProperties>) => {
  return (
    <div
      onClick={onClick}
      className={TitleVariants({ size, dimmed, className })}
    >
      {children}
    </div>
  );
};
