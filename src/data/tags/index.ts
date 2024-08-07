export interface IntquestTag {
  name: string;
  color: `#${string}`;
}

const tags = {
  junior: {
    color: '#f3dd88',
    name: 'junior'
  },
  middle: {
    color: '#83bde3',
    name: 'middle'
  },
  senior: {
    color: '#ccec9b',
    name: 'senior',
  },
  security: {
    color: '#49d3ff',
    name: 'security',
  },
  deployment: {
    color: '#e5e5e5',
    name: 'deployment',
  },
  performance: {
    color: '#79ffd0',
    name: 'security',
  },
  debugging: {
    color: '#ff9fb9',
    name: 'debugging',
  },
  dom: {
    color: '#f1b295',
    name: 'dom',
  },
  webcomponents: {
    color: '#ff8686',
    name: 'web-components',
  },
  fundamentals: {
    color: '#eaa3c8',
    name: 'fundamentals'
  },
  function: {
    color: '#53d9b5',
    name: 'function'
  },
  es6: {
    color: '#e598dd',
    name: 'es6'
  },
  reactivity: {
    color: '#a9a4e5',
    name: 'reactivity'
  },
  vue3: {
    color: '#83d78e',
    name: 'vue-3',
  },
  vue2: {
    color: '#faf7bb',
    name: 'vue-2',
  },
  vuex: {
    color: '#62d2c1',
    name: 'vuex'
  },
  pinia: {
    color: '#e8d42f',
    name: 'pinia',
  }
} as const satisfies Record<string, IntquestTag>;

export default tags;
