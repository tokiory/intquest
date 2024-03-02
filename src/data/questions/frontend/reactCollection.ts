import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('react');
const slugs = {
  presentcontainer: slug('presentcontainer'),
};

const reactCollection: QuestionSection = {
  title: 'React',
  icon: 'fluent-emoji:llama',
  collection: [
    {
      name: 'В чем разница между презентационным компонентом и компонентом-контейнером?',
      answer: [
        'Презентационные (UI) компоненты — это компоненты, которые нужны для того чтобы отображать ' +
        'какой-то контент/дизайн. Такие компоненты не имеют собственных состояний и принимают только коллбэки и ' +
        'пропсы.',
        'Контейнерные (Логические) компоненты — это компоненты, которые содержат в себе какую-то логику (состояния) ' +
        'и занимаются стилизацией (расположением) презентационных компонентов.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'FreeCodeCamp',
          link: 'https://www.freecodecamp.org/news/separation-of-concerns-react-container-and-presentational-components/',
        }
      ],
      slug: slugs.presentcontainer,
    },
    // {
    //   name: 'Для чего используется оператор "&&"',
    //   answer: [
    //     'Оператор "&&" (логическое и) находит и возвращает первое ложное значение либо последний операнд, когда все значения истинные',
    //   ],
    // },
  ]
};

export default reactCollection;
