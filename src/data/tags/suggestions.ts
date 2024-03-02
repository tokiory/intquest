import tags from '@/data/tags';

export default {
  frontend: [
    "junior",
    "middle",
    "senior",
    "dom",
    "fundamentals",
    "function",
    "es6",
    "reactivity",
    "vue3",
    "vue2",
    "vuex",
    "pinia"
].map(key => tags[key as keyof typeof tags]),
  backend: []
}
