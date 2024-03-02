import type {Size} from "@/types/theme.types.ts";
import {clsx} from "clsx";
import type {PropsWithChildren} from "react";
import styles from './title.module.scss';

interface TitleProperties {
  size?: Size;
  className?: string | string[];
}

export const Title = ({size = 'lg', className, children}: PropsWithChildren<TitleProperties>) => {
  return (
    <div className={clsx(styles.title, styles[`title_${size}`], className)}>
      {children}
    </div>
  );
};
