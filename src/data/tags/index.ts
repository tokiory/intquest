import type { QuestionTag } from "@/types/question.types.ts";

const tags = {
  junior: {
    color: 'yellow',
    name: 'junior'
  },
  middle: {
    color: 'blue',
    name: 'middle'
  },
  senior: {
    color: 'lime',
    name: 'senior',
  },
  security: {
    color: 'teal',
    name: 'security',
  },
  deployment: {
    color: 'slate',
    name: 'deployment',
  },
  performance: {
    color: 'green',
    name: 'security',
  },
  debugging: {
    color: 'red',
    name: 'debugging',
  },
  dom: {
    color: 'orange',
    name: 'dom',
  },
  webcomponents: {
    color: 'red',
    name: 'web-components',
  },
  fundamentals: {
    color: 'pink',
    name: 'fundamentals'
  },
  function: {
    color: 'emerald',
    name: 'function'
  },
  es6: {
    color: 'sky',
    name: 'es6'
  },
  reactivity: {
    color: 'purple',
    name: 'reactivity'
  },
  vue3: {
    color: 'lime',
    name: 'vue-3',
  },
  vue2: {
    color: 'amber',
    name: 'vue-2',
  },
  vuex: {
    color: 'green',
    name: 'vuex'
  },
  pinia: {
    color: 'orange',
    name: 'pinia',
  }
} as const satisfies Record<string, QuestionTag>;

export default tags;
