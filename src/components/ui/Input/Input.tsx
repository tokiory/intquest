import {clsx} from "clsx";
import styles from './input.module.scss';
import type {FormEventHandler} from "react";

interface InputProperties {
  onInput?: FormEventHandler<HTMLInputElement>;
  value: string;
  className?: string | string[];
  placeholder?: string;
}
export const Input = ({onInput, value, className, placeholder}: InputProperties) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onInput={onInput}
      className={clsx(styles.input, className)}
      value={value}
    />
  );
};
