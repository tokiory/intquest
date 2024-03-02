import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('html');

export const slugs = {
  semantic: slug('semantic'),
  "block-line": slug('block-line'),
  "alt-required": slug('alt-required'),
  "alt-empty": slug('alt-empty'),
};

const browserQuestionCollection: QuestionSection = {
  title: 'HTML',
  icon: 'fluent-emoji:skull',
  collection: [
    {
      name: 'Что такое семантические теги и зачем они нужны?',
      slug: slugs.semantic,
      answer: [
        'Семантические элементы - это элементы или теги со значением.',
        'Есть теги, которые не описывают контент, который они хранят в себе (например <div>).',
        'Есть теги, которые описывают структуру документа или контент, который хранится в них ' +
        '(например <header>, <blockquote>, <a>, <footer>, <article>), такие теги и являются семантическими',
        'Семантические теги в основном используются для того чтобы задать ' +
        'структуру документа, а также для того чтобы у ' +
        'сайта были хорошие показатели SEO.'
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'MDN: Semantics',
          link: 'https://developer.mozilla.org/en-US/docs/Glossary/Semantics',
        },
      ]
    },
    {
      name: 'Что такое блочные и строчные элементы? Чем они отличаются?',
      slug: slugs["block-line"],
      answer: [
        'Блочные элементы - это теги, которые занимают всю ширину окна браузера и могут свободно по ней перемещаться (<p>, <div>, <blockquote>, <header>)',
        'Строчные элементы - это теги, которые не занимают всю ширину окна браузера (<span>, <img>, <super>)',
        'Строчный элемент можно вложить в блочный, блочный элемент нельзя вложить в строчный.'
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'MDN: Блочные элементы',
          link: 'https://developer.mozilla.org/ru/docs/Glossary/Block-level_content'
        },
        {
          name: 'MDN: Строчные элементы',
          link: 'https://developer.mozilla.org/ru/docs/orphaned/Web/HTML/Inline_elements'
        },
      ]
    },
    {
      name: 'Является ли атрибут alt обязательным для img элемента?',
      slug: slugs["alt-required"],
      answer: [
        'Данный аттрибут является обязательным, однако его значение можно оставить пустым (alt="")',
        'Браузер не будет жаловаться на то, что атрибута нет, однако, верстка не пройдет валидацию на W3C Validator',
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'Stack Overflow',
          link: 'https://stackoverflow.com/questions/4359920/is-it-necessary-to-include-alt-in-images',
        }
      ]
    },
    {
      name: 'В каком случае атрибует alt можно оставить пустым?',
      slug: slugs["alt-empty"],
      answer: [
        'В случае если картинка имеет декоративный характер и не несет никакой смысловой нагрузки (иконка, разделитель текста, emoji)'
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'MDN',
          link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-alt',
        }
      ]
    },
  ]
};

export default browserQuestionCollection;
