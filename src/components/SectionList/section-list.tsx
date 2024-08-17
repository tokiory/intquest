import { Button } from "@/components/ui";
import type { Section } from "@/types/sections.types.ts";
import { Icon } from "@iconify-icon/react";
import { clsx } from "clsx";
import { Link } from "react-router-dom";

interface SectionListProperties {
  list: Section[];
  className?: string | string[];
}

export const SectionList = ({ list, className }: SectionListProperties) => {
  return (
    <div className={clsx("flex my-3 gap-6", className)}>
      {list.map((item, index) => (
        <Link to={item.path} key={index}>
          <Button>
            <Icon className="mr-2" icon={item.icon} size={200} />
            {item.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};
