import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('svelte');

const slugs = {
  "difference": slug('difference'),
  "rest-props": slug('rest-props'),
  "raw-html": slug('raw-html'),
  "reactivity": slug('reactivity'),
  "stores": slug('stores'),
  "lifecycle": slug('lifecycle'),
  "context": slug('context'),
  "bindings": slug('bindings'),
  "events": slug('events'),
  "components": slug('components'),
  "slots": slug('slots'),
  "transitions": slug('transitions'),
  "animations": slug('animations'),
  "actions": slug('actions'),
  "ssr": slug('ssr'),
  "performance": slug('performance'),
  "testing": slug('testing'),
  "plugins": slug('plugins'),
  "preprocessors": slug('preprocessors'),
  "custom-elements": slug('custom-elements'),
};

const svelteQuestionCollection: QuestionSection = {
  title: 'Svelte',
  icon: 'fluent-emoji:flamingo',
  collection: [
    {
      name: 'Чем Svelte отличается от Vue/React?',
      slug: slugs["difference"],
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
          name: 'Svelte Docs: Attributes and props',
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
          name: 'Svelte Docs: Special tags',
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
    },
    {
      name: 'Как работает реактивность в Svelte?',
      slug: slugs["reactivity"],
      answer: [
        'Реактивность в Svelte работает путем автоматического отслеживания изменений в переменных и обновления DOM в соответствии с этими изменениями. ' +
        'Это позволяет разработчикам писать декларативный код, который автоматически обновляется при изменении данных.'
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'Reddit: Svelte reactivity — an inside and out guide',
          link: 'https://www.reddit.com/r/sveltejs/comments/12xe4ae/svelte_reactivity_an_inside_and_out_guide/'
        },
        {
          name: 'Svelte Tour: Reactivity',
          link: 'https://learn.svelte.dev/tutorial/reactive-declarations',
        }
      ]
    },
    {
      name: 'Что такое сторы (stores) в Svelte и как их использовать?',
      slug: slugs["stores"],
      answer: [
        'Сторы в Svelte — это объекты, которые позволяют хранить и управлять состоянием приложения. ' +
        'Они предоставляют реактивные примитивы, такие как writable, readable и derived, которые можно использовать для управления состоянием и его обновлениями.'
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Svelte Docs: Stores',
          link: 'https://svelte.dev/docs/svelte-store',
        }
      ]
    },
    {
      name: 'Какие жизненные циклы компонентов существуют в Svelte?',
      slug: slugs["lifecycle"],
      answer: [
        'В Svelte существуют следующие жизненные циклы компонентов: onMount, beforeUpdate, afterUpdate и onDestroy. ' +
        'Эти функции позволяют выполнять код в определенные моменты жизненного цикла компонента.'
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Svelte Docs: Runtime',
          link: 'https://svelte.dev/docs/svelte',
        }
      ]
    },
    {
      name: 'Что такое контекст (context) в Svelte и как его использовать?',
      slug: slugs["context"],
      answer: [
        'Контекст в Svelte позволяет передавать данные между компонентами без необходимости передавать их через пропсы. ' +
        'Это полезно для управления глобальным состоянием или передачи данных между компонентами, которые не являются прямыми родителями и детьми.'
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Svelte Tour: Context API',
          link: 'https://learn.svelte.dev/tutorial/context-api',
        }
      ]
    },
    {
      name: 'Как работают привязки (bindings) в Svelte?',
      slug: slugs["bindings"],
      answer: [
        'Привязки в Svelte позволяют синхронизировать состояние между DOM-элементами и переменными в компоненте. ' +
        'Они используются для двусторонней связи данных, что позволяет автоматически обновлять DOM при изменении данных и наоборот.'
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'Svelte Docs: Element Directives',
          link: 'https://svelte.dev/docs/element-directives#binding-select-value',
        }
      ]
    },
    {
      name: 'Как обрабатывать события в Svelte?',
      slug: slugs["events"],
      answer: [
        'События в Svelte обрабатываются с помощью директивы on:event. ' +
        'Это позволяет привязывать обработчики событий к DOM-элементам и выполнять код при возникновении событий.'
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'Svelte Tour: DOM Events',
          link: 'https://learn.svelte.dev/tutorial/dom-events',
        }
      ]
    },
    {
      name: 'Что такое слоты (slots) в Svelte и как их использовать?',
      slug: slugs["slots"],
      answer: [
        'Слоты в Svelte позволяют вставлять содержимое в компоненты извне. ' +
        'Это позволяет создавать более гибкие и переиспользуемые компоненты, которые могут принимать внешнее содержимое.'
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Svelte Docs: <slot>',
          link: 'https://svelte.dev/docs/special-elements#slot',
        }
      ]
    },
    {
      name: 'Как создавать переходы (transitions) в Svelte?',
      slug: slugs["transitions"],
      answer: [
        'Переходы в Svelte позволяют анимировать изменения в DOM. ' +
        'Они используются для создания плавных анимаций при добавлении, удалении или изменении элементов.',
        'Переходы создаются с помощью функций, которые описаны в svelte/transition'
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'Svelte Docs: Transitions',
          link: 'https://svelte.dev/docs/svelte-transition',
        }
      ]
    },
    {
      name: 'Как создавать анимации в Svelte?',
      slug: slugs["animations"],
      answer: [
        'Пакет svelte/animation позволяет создавать сложные анимации с помощью встроенных функций и библиотек. ' +
        'Он используется для создания интерактивных и динамичных интерфейсов.'
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'Svelte Docs: Animations',
          link: 'https://svelte.dev/docs/svelte-animate',
        }
      ]
    },
    {
      name: 'Что такое действия (actions) в Svelte и как их использовать?',
      slug: slugs["actions"],
      answer: [
        'Действия в Svelte позволяют применять функции к DOM-элементам при их создании и удалении. ' +
        'Они используются для добавления поведения к элементам, такому как обработка событий или анимации.',
        'Для реализации такого поведения обычно используют пакет svelte/action'
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Svelte Docs: Actions',
          link: 'https://svelte.dev/docs/svelte-action',
        }
      ]
    },
    {
      name: 'Как реализовать серверный рендеринг (SSR) в Svelte?',
      slug: slugs["ssr"],
      answer: [
        'Серверный рендеринг в Svelte позволяет рендерить компоненты на сервере и отправлять их клиенту в виде HTML. ' +
        'Это улучшает производительность и SEO, так как страницы загружаются быстрее и могут быть проиндексированы поисковыми системами.',
        'Для того чтобы рендерить компоненты на сервере, нужно использовать метод render, который есть у каждого Svelte-компонента.'
      ],
      tags: [
        tags.senior,
      ],
      references: [
        {
          name: 'Svelte Docs: Server-side Component API',
          link: 'https://svelte.dev/docs/server-side-component-api',
        }
      ]
    },
    {
      name: 'Как оптимизировать производительность Svelte-приложения?',
      slug: slugs["performance"],
      answer: [
        'Для оптимизации производительности Svelte-приложения следует минимизировать использование ресурсов, ' +
        'использовать эффективные алгоритмы и структуры данных, а также профилировать и анализировать производительность.'
      ],
      tags: [
        tags.senior,
        tags.performance
      ],
      references: [
        {
          name: 'Svelte Docs: Performance',
          link: 'https://kit.svelte.dev/docs/performance',
        }
      ]
    },
    {
      name: 'Как тестировать Svelte-приложения?',
      slug: slugs["testing"],
      answer: [
        'Для тестирования Svelte-приложения можно использовать библиотеки, такие как Jest и Testing Library. ' +
        'Эти инструменты позволяют писать и выполнять тесты для компонентов и функций, чтобы обеспечить их корректную работу.'
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'Svelte Docs: FAQ / Testing',
          link: 'https://svelte.dev/docs/faq#how-do-i-test-svelte-apps',
        }
      ]
    },
    {
      name: 'Как использовать веб-компоненты в Svelte?',
      slug: slugs["custom-elements"],
      answer: [
        'Пользовательские элементы в Svelte позволяют создавать собственные HTML-элементы с использованием компонентов Svelte. ' +
        'Это полезно для создания переиспользуемых компонентов, которые могут быть использованы в любом контексте.',
        'Для того чтобы использовать кастомные элементы в Svelte, нужно использовать <svelte:options customElement="my-element" />'
      ],
      tags: [
        tags.senior,
        tags.webcomponents
      ],
      references: [
        {
          name: 'Svelte Docs: Custom elements',
          link: 'https://svelte.dev/docs/custom-elements-api',
        }
      ]
    },
  ]
};

export default svelteQuestionCollection;
