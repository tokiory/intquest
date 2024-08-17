import clsx from "clsx";
import type { FC } from "react";
import { Link as ReactRouterLink, type LinkProps } from "react-router-dom";

export const Link: FC<LinkProps> = ({ children, className, ...properties }) => {
  return (
    <ReactRouterLink
      {...properties}
      className={clsx(
        "text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300",
        className,
      )}
    >
      {children}
    </ReactRouterLink>
  );
};
