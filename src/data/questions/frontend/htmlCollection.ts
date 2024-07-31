import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('html');

export const slugs = {
  semantic: slug('semantic'),
  "block-line": slug('block-line'),
  "alt-required": slug('alt-required'),
  "alt-empty": slug('alt-empty'),
  "web-components": slug('web-components'),
  "shadow-dom": slug('shadow-dom'),
  "custom-elements": slug('custom-elements'),
  "web-manifest": slug('web-manifest'),
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
          name: 'MDN: <img>',
          link: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-alt',
        }
      ]
    },
    {
      name: 'Что такое Web Components и как их использовать?',
      slug: slugs["web-components"],
      answer: [
        'Web Components — это набор технологий, которые позволяют создавать переиспользуемые компоненты с использованием HTML, CSS и JavaScript.',
        'Основные технологии включают Custom Elements, Shadow DOM и HTML Templates.',
      ],
      tags: [
        tags.middle,
        tags.webcomponents,
      ],
      references: [
        {
          name: 'MDN: Web Components',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Web_Components',
        },
      ]
    },
    {
      name: 'Что такое Shadow DOM и как его использовать?',
      slug: slugs["shadow-dom"],
      answer: [
        'Shadow DOM — это технология, которая позволяет инкапсулировать DOM и стили компонента, чтобы избежать конфликтов с глобальными стилями и скриптами.',
        'Shadow DOM используется для создания изолированных компонентов, которые могут быть безопасно использованы в любом контексте.',
      ],
      tags: [
        tags.middle,
        tags.webcomponents,
      ],
      references: [
        {
          name: 'MDN: Shadow DOM',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM',
        },
      ]
    },
    {
      name: 'Что такое Custom Elements и как их создавать?',
      slug: slugs["custom-elements"],
      answer: [
        'Custom Elements — это технология, которая позволяет создавать пользовательские HTML-элементы с использованием JavaScript.',
        'Они используются для создания переиспользуемых компонентов, которые могут быть использованы в любом контексте.',
      ],
      tags: [
        tags.middle,
        tags.webcomponents,
      ],
      references: [
        {
          name: 'MDN: Custom Elements',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements',
        },
      ]
    },
    {
      name: 'Что такое Web App Manifest и как его использовать?',
      slug: slugs["web-manifest"],
      answer: [
        'Web App Manifest — это файл JSON, который описывает веб-приложение и его метаданные.',
        'Он используется для создания прогрессивных веб-приложений (PWA), которые могут быть установлены на устройства и работать офлайн.',
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'MDN: Web App Manifest',
          link: 'https://developer.mozilla.org/en-US/docs/Web/Manifest',
        },
      ]
    },
  ]
};

export default browserQuestionCollection;
