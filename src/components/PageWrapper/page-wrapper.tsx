import { clsx } from "clsx";
import type { FC, PropsWithChildren } from "react";

interface PageWrapperProperties {
  className?: string;
}
export const PageWrapper: FC<PropsWithChildren<PageWrapperProperties>> = ({children, className}) => {
  return (
    <div className={clsx("flex flex-col flex-grow pt-12 min-h-[100vh-61px] px-3 pb-16 w-full my-0 mx-auto max-w-[840px]", className)}>
      {children}
    </div>
  )
}
