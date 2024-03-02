type QuestionAnswer = string[];

export interface QuestionReference {
  name: string;
  link: `https://${string}`;
}

export interface QuestionTag {
  name: string;
  color: `#${string}`;
}

export interface Question {
  name: string;
  slug: string;
  answer: QuestionAnswer;
  tags?: QuestionTag[];
  references?: QuestionReference[];
  similars?: Question['slug'][];
}

export interface QuestionSection {
  title: string;
  icon?: string;
  collection: Question[];
}

export interface QuestionModule {
  default: QuestionSection[];
}
