import { Icon } from "@iconify-icon/react";
import { Text } from "@/components/ui";
import { clsx } from "clsx";
import type { FC } from "react";

export interface ProComparsionListItemProperties {
  accessible?: boolean;
  limited?: boolean;
  text: string;
  className?: string;
}

export const ProComparsionListItem: FC<ProComparsionListItemProperties> = ({ accessible, limited, text, className }) => {
  return (
    <li className={clsx("flex items-center gap-2", className)}>
      {
        accessible ?
          <Icon className="text-green-500" height={14} icon="ion:checkmark-round" /> :
          <Icon className="text-red-500" height={14} icon="ion:close-round" />
      }
      <Text size="sm">{text}{limited ? <sup>*</sup> : ""}</Text>
    </li>
  )
}
