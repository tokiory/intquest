import type { Section } from "@/types/sections.types.ts";

const getSectionUrl = (slug: string): `/${string}` => {
  return `/browse/${slug}`;
};

const sections: Section[] = [
  {
    name: "Frontend",
    path: getSectionUrl("frontend"),
    icon: "fe:coffee",
  },
  {
    name: "Backend",
    path: getSectionUrl("backend"),
    icon: "fe:terminal",
  },
  {
    name: "QA",
    path: getSectionUrl("qa"),
    icon: "fe:question",
  },
  {
    name: "DevOps",
    path: getSectionUrl("devops"),
    icon: "fe:scale",
  },
];

export default sections;
