import type {Size} from "@/types/theme.types.ts";
import {clsx} from "clsx";
import type {PropsWithChildren} from "react";
import styles from './text.module.scss';


interface TextProperties {
  className?: string | string[];
  size?: Size;
}

export const Text = ({className, size = 'md', children}: PropsWithChildren<TextProperties>) => {
  return (
    <div className={clsx(styles.text, styles[`text_${size}`], className)}>
      {children}
    </div>
  );
};
