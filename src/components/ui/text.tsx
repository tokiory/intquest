import type { Size } from "@/types/theme.types.ts";
import { cva } from "class-variance-authority";
import type { PropsWithChildren } from "react";

interface TextProperties {
  className?: string | string[];
  size?: Size;
  bold?: boolean;
}

export const TextVariants = cva("inline-block", {
  variants: {
    bold: {
      true: "font-bold",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
      md: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const Text = ({
  className,
  size = "md",
  bold,
  children,
}: PropsWithChildren<TextProperties>) => {
  return (
    <div className={TextVariants({ size, className, bold })}>{children}</div>
  );
};
