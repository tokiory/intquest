import type {Section} from "@/types/sections.types.ts";

const getSectionUrl = (slug: string): `/${string}` => {
  return `/browse/${slug}`;
};

const sections: Section[] = [
  {
    name: 'Frontend',
    link: getSectionUrl('frontend'),
    icon: 'fe:coffee',
  },
  {
    name: 'Backend',
    link: getSectionUrl('backend'),
    icon: 'fe:terminal'
  },
  {
    name: 'QA',
    link: getSectionUrl('qa'),
    icon: 'fe:question',
  },
  {
    name: 'DevOps',
    link: getSectionUrl('devops'),
    icon: 'fe:scale',
  },
  {
    name: 'Fullstack',
    link: getSectionUrl('fullstack'),
    icon: 'fe:vector'
  }
];

export default sections;
