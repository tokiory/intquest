import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('css');

export const slugs = {
  "em-rem": slug('em-rem'),
  "crossbrowser": slug('crossbrowser'),
  "flexbox": slug('flexbox'),
  "grid": slug('grid'),
  "specificity": slug('specificity'),

  "box-model": slug('box-model'),
  "positioning": slug('positioning'),
  "media-queries": slug('media-queries'),
  "pseudo-classes": slug('pseudo-classes'),
  "pseudo-elements": slug('pseudo-elements'),
  "animation": slug('animation'),
  "transition": slug('transition'),
  "z-index": slug('z-index'),
  "inheritance": slug('inheritance'),
  "variables": slug('variables'),
};

const browserQuestionCollection: QuestionSection = {
  title: 'CSS',
  icon: 'fluent-emoji:framed-picture',
  collection: [
    {
      name: 'Что такое Flexbox и как его использовать?',
      slug: slugs["flexbox"],
      answer: [
        'Flexbox (Flexible Box Layout) — это модуль CSS, который предоставляет более эффективный способ распределения пространства ' +
        'между элементами в контейнере, даже если их размер неизвестен или динамичен.',
        'Основные свойства Flexbox включают display: flex;, flex-direction, justify-content, align-items и другие.',
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'MDN Web Docs: Flexbox',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox'
        },
      ]
    },
    {
      name: 'Чем отличается em от rem?',
      slug: slugs["em-rem"],
      answer: [
        'em - единица измерения, которая задается относительно font-size на текущем или на родительском уровне. По умолчанию 1em равен ' +
        'выставленному font-size',
        'rem - единица измерения, которая задается относительно font-size на уровне тега <html>. По умолчанию 1rem равен ' +
        '16px',
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'Learn Javascript: Единицы измерения',
          link: 'https://learn.javascript.ru/css-units'
        },
      ]
    },
    {
      name: 'Как писать кроссбраузерный css?',
      slug: slugs.crossbrowser,
      tags: [
        tags.junior,
      ],
      answer: [
        'Кроссбраузерная верстка подразумевает использование вендорных префиксов (-moz, -webkit) для того чтобы ' +
        'добиться лучшей совместимости разных свойств CSS среди множества браузеров.',
        'Достаточно часто для этой задачи используют пакеты normalize.css и autoprefixer.',
      ],
      references: [
        {
          name: 'npm: autoprefixer',
          link: 'https://www.npmjs.com/package/autoprefixer',
        },
        {
          name: 'npm: normalize.css',
          link: 'https://www.npmjs.com/package/normalize.css',
        },
        {
          name: 'HTMLAcademy: Кроссбраузерная верстка',
          link: 'https://htmlacademy.ru/blog/css/short-21',
        }
      ]
    },
    {
      name: 'Что такое CSS Grid и как его использовать?',
      slug: slugs.grid,
      tags: [
        tags.junior,
      ],
      answer: [
        'CSS Grid Layout — это модуль CSS, который позволяет создавать сложные сеточные макеты с помощью CSS. Он предоставляет ' +
        'более мощные возможности для создания двумерных макетов по сравнению с Flexbox.',
        'Основные свойства CSS Grid включают display: grid;, grid-template-columns, grid-template-rows и другие.',
      ],
      references: [
        {
          name: 'MDN Web Docs: CSS Grid Layout',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout',
        },
      ]
    },
    {
      name: 'Что такое специфичность CSS и как она работает?',
      slug: slugs.specificity,
      tags: [
        tags.junior,
      ],
      answer: [
        'Специфичность CSS — это алгоритм, который браузеры используют для определения, какие стили применять к элементу, если ' +
        'есть конфликтующие правила.',
        'Специфичность определяется комбинацией типов селекторов: идентификаторы (#id), классы (.class), теги (tag) и универсальные селекторы (*).',
      ],
      references: [
        {
          name: 'MDN Web Docs: Specificity',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity',
        },
      ]
    },

    {
      name: 'Что такое модель коробки (Box Model) в CSS?',
      slug: slugs["box-model"],
      answer: [
        'Модель коробки в CSS описывает, как элементы отображаются на странице. Она включает в себя content, padding, border и margin.',
        'Свойства, такие как width и height, задают размеры контента, а padding, border и margin добавляют дополнительное пространство вокруг контента.',
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'MDN Web Docs: Box Model',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model'
        },
      ]
    },
    {
      name: 'Что такое позиционирование в CSS и какие типы позиционирования существуют?',
      slug: slugs.positioning,
      tags: [
        tags.junior,
      ],
      answer: [
        'Позиционирование в CSS позволяет контролировать расположение элементов на странице. Основные типы позиционирования включают static, relative, absolute, fixed и sticky.',
        'Каждый тип позиционирования имеет свои особенности и применяется в зависимости от задачи.',
      ],
      references: [
        {
          name: 'MDN Web Docs: Positioning',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/position',
        },
      ]
    },
    {
      name: 'Что такое медиа-запросы (Media Queries) и как их использовать?',
      slug: slugs["media-queries"],
      tags: [
        tags.junior,
      ],
      answer: [
        'Медиа-запросы позволяют применять стили в зависимости от характеристик устройства, таких как ширина экрана, ориентация и тип устройства.',
        'Они используются для создания адаптивных дизайнов, которые хорошо выглядят на разных устройствах.',
      ],
      references: [
        {
          name: 'MDN Web Docs: Media Queries',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries',
        },
      ]
    },
    {
      name: 'Что такое псевдоклассы в CSS и как их использовать?',
      slug: slugs["pseudo-classes"],
      tags: [
        tags.junior,
      ],
      answer: [
        'Псевдоклассы позволяют применять стили к элементам в зависимости от их состояния. Примеры включают :hover, :focus, :active и :nth-child.',
        'Они используются для создания интерактивных элементов и улучшения пользовательского опыта.',
      ],
      references: [
        {
          name: 'MDN Web Docs: Pseudo-classes',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes',
        },
      ]
    },
    {
      name: 'Что такое псевдоэлементы в CSS и как их использовать?',
      slug: slugs["pseudo-elements"],
      tags: [
        tags.junior,
      ],
      answer: [
        'Псевдоэлементы позволяют стилизовать определенные части элемента. Примеры включают ::before, ::after, ::first-line и ::first-letter.',
        'Они используются для добавления декоративных элементов и улучшения визуального оформления.',
      ],
      references: [
        {
          name: 'MDN Web Docs: Pseudo-elements',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements',
        },
      ]
    },
    {
      name: 'Что такое анимации в CSS и как их создавать?',
      slug: slugs["animation"],
      tags: [
        tags.junior,
      ],
      answer: [
        'Анимации в CSS позволяют создавать плавные переходы и движения элементов. Основные свойства включают @keyframes, animation-name, animation-duration и animation-timing-function.',
        'Они используются для создания динамичных и интерактивных интерфейсов.',
      ],
      references: [
        {
          name: 'MDN Web Docs: CSS Animations',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations',
        },
      ]
    },
    {
      name: 'Что такое переходы (Transitions) в CSS и как их использовать?',
      slug: slugs["transition"],
      tags: [
        tags.junior,
      ],
      answer: [
        'Переходы в CSS позволяют создавать плавные изменения между состояниями элементов. Основные свойства включают transition-property, transition-duration, transition-timing-function и transition-delay.',
        'Они используются для создания плавных и приятных для глаза изменений.',
      ],
      references: [
        {
          name: 'MDN Web Docs: CSS Transitions',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions',
        },
      ]
    },
    {
      name: 'Что такое z-index в CSS и как его использовать?',
      slug: slugs["z-index"],
      tags: [
        tags.junior,
      ],
      answer: [
        'z-index в CSS определяет порядок наложения элементов по оси z. Элементы с более высоким значением z-index будут отображаться поверх элементов с более низким значением.',
        'Оно используется для управления порядком наложения элементов на странице.',
      ],
      references: [
        {
          name: 'MDN Web Docs: z-index',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/z-index',
        },
      ]
    },
    {
      name: 'Что такое наследование в CSS и как оно работает?',
      slug: slugs["inheritance"],
      tags: [
        tags.junior,
      ],
      answer: [
        'Наследование в CSS позволяет дочерним элементам унаследовать стили от родительских элементов. Некоторые свойства, такие как color и font-family, наследуются по умолчанию.',
        'Это помогает уменьшить дублирование кода и упростить управление стилями.',
      ],
      references: [
        {
          name: 'MDN Web Docs: Inheritance',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance',
        },
      ]
    },
    {
      name: 'Что такое переменные в CSS и как их использовать?',
      slug: slugs["variables"],
      tags: [
        tags.junior,
      ],
      answer: [
        'Переменные в CSS позволяют хранить и повторно использовать значения в стилях. Они определяются с помощью --имя-переменной и используются с помощью var(--имя-переменной).',
        'Они помогают упростить управление стилями и сделать код более гибким.',
      ],
      references: [
        {
          name: 'MDN Web Docs: CSS Variables',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties',
        },
      ]
    },
  ]
};

export default browserQuestionCollection;
