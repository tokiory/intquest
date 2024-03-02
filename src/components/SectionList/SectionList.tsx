import {Button} from "@/components/ui";
import type {Section} from "@/types/sections.types.ts";
import {Icon} from "@iconify-icon/react";
import {clsx} from "clsx";
import {Link} from "react-router-dom";
import styles from './sectionlist.module.scss';

interface SectionListProperties {
  list: Section[];
  className?: string | string[];
}

export const SectionList = ({list, className}: SectionListProperties) => {
  return (
    <div className={clsx(styles.sectionlist, className)}>
      {list.map((item, index) =>
        <Link to={item.link} key={index}>
          <Button>
            <Icon icon={item.icon} size={200} />
            {item.name}
          </Button>
        </Link>
      )}
    </div>
  );
};
