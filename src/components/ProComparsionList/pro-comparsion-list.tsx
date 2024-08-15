import { clsx } from "clsx";
import type { FC } from "react";
import { ProComparsionListItem, type ProComparsionListItemProperties } from "./pro-comparsion-list-item";

interface ProComparsionListProperties {
  list: ProComparsionListItemProperties[];
  className?: string;
}

export const ProComparsionList: FC<ProComparsionListProperties> = ({ list, className }) => {
  return (
    <ul className={clsx("flex flex-col gap-2", className)}>
      {list.map((item, index) => (
        <ProComparsionListItem key={index} {...item} />
      ))}
    </ul>
  )
}
