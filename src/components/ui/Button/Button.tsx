import type {Size} from "@/types/theme.types";
import {clsx} from "clsx";
import type {MouseEventHandler, PropsWithChildren} from "react";
import styles from './button.module.scss';

interface ButtonProperties {
  className?: string | string[];
  size?: Size;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export const Button = ({className, children, size = 'md', onClick}: PropsWithChildren<ButtonProperties>) => {
  return (
    <button
      className={clsx(className, styles.button, styles[`button_${size}`])}
      onClick={event => onClick && onClick(event)}
    >
      {children}
    </button>
  );
};
