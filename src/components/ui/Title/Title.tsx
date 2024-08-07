import type {Size} from "@/types/theme.types.ts";
import {clsx} from "clsx";
import type {PropsWithChildren} from "react";
import styles from './title.module.scss';

interface TitleProperties {
  size?: Size;
  onClick?: () => void;
  className?: string | string[];
  dimmed?: boolean;
}

export const Title = ({size = 'lg', className, children, onClick, dimmed}: PropsWithChildren<TitleProperties>) => {
  return (
    <div onClick={onClick} className={clsx(styles.title, styles[`title_${size}`], dimmed && styles.title_dimmed, className)}>
      {children}
    </div>
  );
};
