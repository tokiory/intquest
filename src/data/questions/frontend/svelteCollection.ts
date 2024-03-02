import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('svelte');
const slugs = {
  difference: slug('difference'),
  "rest-props": slug('rest-props'),
  "raw-html": slug('raw-html'),
};

const svelteQuestionCollection: QuestionSection = {
  title: 'Svelte',
  icon: 'fluent-emoji:flamingo',
  collection: [
    {
      name: 'Чем Svelte отличается от Vue/React?',
      slug: slugs.difference,
      answer: [
        'Svelte отличается тем, что выполняет большую часть работы на этапе сборки, ' +
        'генерируя эффективный встроенный код, в то время как React и Vue выполняют ' +
        'большую часть работы во время выполнения в браузере. Это позволяет Svelte создавать более ' +
        'эффективные приложения, так как он не нуждается в виртуальном DOM для отслеживания изменений.'
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'Svelte.dev',
          link: 'https://svelte.dev/',
        }
      ]
    },
    {
      name: 'В чем различия $$props и $$restProps?',
      slug: slugs["rest-props"],
      references: [
        {
          name: 'Svelte.dev: Attributes and props',
          link: 'https://svelte.dev/docs/basic-markup#attributes-and-props',
        }
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      answer: [
        '$$props — содержит все поля которые объявлены с помощью export.',
        '$$restProps — содержит все поля которые НЕ были объявлены с помощью export, однако присутствуют в атрибутах.',
      ]
    },
    {
      name: 'Как вставить сырой HTML в тег?',
      slug: slugs["raw-html"],
      references: [
        {
          name: 'Svelte.dev: Special tags',
          link: 'https://svelte.dev/docs/special-tags',
        }
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      answer: [
        'Сырой HTML можно вставить с помощью специального тега html.'
      ]
    }
  ],

};
export default svelteQuestionCollection;
