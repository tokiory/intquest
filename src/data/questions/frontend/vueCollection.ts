import tags from '@/data/tags';
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('vue');
const slugs = {
  "event-modificators": slug('event-modificators'),
  "key-modificators": slug('key-modificators'),
  "reactivity-3": slug('reactivity-3'),
  "reactivity-2": slug('reactivity-2'),
  "immediate-watch": slug('immediate-watch'),
  "stop-watch": slug('stop-watch'),
  "functional-ref": slug('functional-ref'),
  "component-ref": slug('component-ref'),
  refdirective: slug('refdirective'),
  store: slug('store'),
  lifecycle: slug('lifecycle'),
  refvfor: slug('refvfor'),
  watcheffect: slug('watcheffect'),
  watch: slug('watch'),
  twobind: slug('twobind'),
  props: slug('props'),
  computed: slug('computed'),
  keys: slug('keys'),
  html: slug('html'),
};

const browserQuestionCollection: QuestionSection = {
  title: 'Vue',
  icon: 'fluent-emoji:dragon-face',
  collection: [
    {
      name: 'Как реализовать двухстороннее связывание во Vue?',
      slug: slugs.twobind,
      answer: [
        'Двухсторонее связывание можно реализовать двумя способами: v-model и bind',
        'Для того чтобы реализовать двухстороннее связывание с помощью v-model, достаточно просто инициализировать ' +
        'реактивное состояние и привязать его к нужному инпуту с помощью v-model',
        'Для того чтобы реализовать двухстороннее связывание с помощью bind, ' +
        'нужно реализовать реактивное состояние и метод ' +
        'который будет обновлять данное реактивное состояние, а затем привязать реактивное состояние и метод с помощью ' +
        'v-bind (:) и v-on (@)',
      ],
      references: [
        {
          name: 'Vue.js Documentation',
          link: 'https://vuejs.org/guide/essentials/forms.html',
        }
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
        tags.reactivity,
      ]
    },
    {
      name: 'Каким образом компоненты могут обмениваться даными между собой?',
      slug: slugs.props,
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Vue.js Documentation',
          link: 'https://vuejs.org/guide/essentials/component-basics.html#passing-props',
        }
      ],
      answer: [
        'Если речь идет о передаче сверху вниз: пропсы, provide/inject',
        'Если речь идет о передаче снизу вверх: emit',
        'Если речь идет о глобальных реактивных состояниях: стор (Vuex/Pinia)',
      ]
    },
    {
      name: 'Как вставить сырой HTML внутрь тега?',
      slug: slugs.html,
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Vue.js Docs: Raw HTML',
          link: 'https://vuejs.org/guide/essentials/template-syntax.html#raw-html',
        }
      ],
      answer: [
        'Для того чтобы вставить сырой HTML внутрь тега нужно использовать директиву v-html',
      ]
    },
    {
      name: 'Чем watchEffect отличается от watch?',
      tags: [
        tags.middle,
        tags.fundamentals,
      ],
      answer: [
        'Методу watch нужно состояние за которым он будет следить, после измения реактивного состояния ' +
        'watch выполнит callback',
        'watchEffect ничего не нужно, он следит за всеми реактивными состояниями, которые находятся внутри' +
        'его callback\'а, а также он запускает callback сразу же после монтирования компонента',
      ],
      slug: slugs.watcheffect,
      references: [
        {
          name: 'Vue.js Docs: watchEffect()',
          link: 'https://vuejs.org/guide/essentials/watchers.html#watcheffect',
        }
      ]
    },
    {
      name: 'Для чего нужна директива ref',
      slug: slugs.refdirective,
      answer: [
        'Директива ref привязывает DOM-элемент к реактивному состоянию',
      ],
      similars: [
        slugs.refvfor,
        slugs["component-ref"],
        slugs["functional-ref"]
      ],
      references: [
        {
          name: 'Vue.js Docs: Template Refs',
          link: 'https://vuejs.org/guide/essentials/template-refs.html',
        }
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ]
    },
    {
      name: 'Что такое watch?',
      slug: slugs.watch,
      similars: [
        slugs.watcheffect,
        slugs["immediate-watch"],
        slugs["stop-watch"],
      ],
      references: [
        {
          name: 'Vue.js Docs: Watchers',
          link: 'https://vuejs.org/guide/essentials/watchers.html#watchers'
        }
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      answer: [
        'Watch — специальный метод из @vue/reactivity, который позволяет следить за изменениями ' +
        'реактивных состояний и запускать переданный ему во втором аргументе коллбэк, когда состояния ' +
        'за которыми он следит меняются.',
      ],
    },
    {
      name: 'Как использовать директиву ref с директивой v-for?',
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Vue.js Docs: Refs inside v-for',
          link: 'https://vuejs.org/guide/essentials/template-refs.html#refs-inside-v-for',
        }
      ],
      slug: slugs.refvfor,
      answer: [
        'Для того чтобы использовать ref с v-for достаточно просто создать реактивное состояние, ' +
        'которое по умолчанию будет содержать массив. После того как v-for выполнится - массив ' +
        'заполнится рефами с DOM-элементами',
      ],
    },
    {
      name: 'Можно ли в директиву ref передать функцию?',
      slug: slugs['functional-ref'],
      answer: [
        'Да, можно. Как только DOM-элемент отрендерится — коллбэк переданный в директиву ref выполнится, первым ' +
        'аргументом внутри данного колбэка может быть параметр, который будет содержать DOM-элемент',
      ],
      tags: [
        tags.middle,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Vue.js Docs: Functional Refs',
          link: 'https://vuejs.org/guide/essentials/template-refs.html#function-refs',
        }
      ],
    },
    {
      name: 'Что будет если мы используем директиву ref с компонентом?',
      slug: slugs['component-ref'],
      answer: [
        'ref будет содержать пустой объект, в котором ничего не будет. Для того чтобы в данном объекте ' +
        'были какие-либо данные нужно использовать defineExpose().',
      ],
      tags: [
        tags.middle,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Vue.js Docs: Ref on Component',
          link: 'https://vuejs.org/guide/essentials/template-refs.html#ref-on-component',
        }
      ],
    },
    {
      name: 'Как остановить слежение за изменениями с помощью watch?',
      tags: [
        tags.middle,
        tags.fundamentals,
      ],
      answer: [
        'Когда мы вызываем watch() он отдает нам коллбэк, которым как раз можно остановить его действие',
      ],
      slug: slugs['stop-watch'],
      references: [
        {
          name: 'Vue.js Docs: Watchers',
          link: 'https://vuejs.org/guide/essentials/watchers.html#watchers'
        }
      ]
    },
    {
      name: 'Как сделать так, чтобы коллбэк в watch запустился при монтировании компонента?',
      slug: slugs['immediate-watch'],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Vue.js Docs: Eager Watchers',
          link: 'https://vuejs.org/guide/essentials/watchers.html#eager-watchers'
        }
      ],
      answer: [
        'Для того чтобы watch запустился сразу же после монтирования компонента достаточно использовать опцию ' +
        '{immediate: true}'
      ]
    },
    {
      name: 'Для чего нужны сторы?',
      answer: [
        'Сторы хранят глобальные реактивные состояния, которые могут быть использованы на любом уровне вложенности ' +
        'компонентов.',
      ],
      slug: slugs.store,
      references: [
        {
          name: 'Vuex Docs: What is Vuex?',
          link: 'https://vuex.vuejs.org/',
        },
        {
          name: 'Pinia Docs: What is Pinia?',
          link: 'https://pinia.vuejs.org/introduction.html',
        },
      ],
      tags: [
        tags.junior,
        tags.pinia,
        tags.vuex,
      ],
    },
    {
      name: 'Что такое computed?',
      slug: slugs.computed,
      references: [
        {
          name: 'Vue.js Documentation: computed',
          link: 'https://vuejs.org/api/reactivity-core.html#computed',
        }
      ],
      answer: [
        'computed - это вычисляемое реактивное состояние, которое обновляется ' +
        'каждый раз при обновлении его зависимостей.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
        tags.reactivity,
      ]
    },
    {
      name: 'Зачем директиве v-for нужны ключи?',
      tags: [
        tags.junior,
        tags.reactivity,
        tags.fundamentals,
      ],
      answer: [
        'Ключи в директиве v-for во Vue используются для оптимизации обновления DOM. Они помогают Vue отслеживать ' +
        'идентичность элементов массива при их изменении, что позволяет избежать перерисовки всего списка и ' +
        'обеспечивает более эффективное обновление интерфейса.',
        'Ключи помогают установить соответствие между новым состоянием данных и существующими элементами DOM. ' +
        'Если элементам в списке сопоставлены уникальные ключи, Vue может более точно определить, какие элементы ' +
        'нужно добавить, изменить или удалить, минимизируя количество операций в DOM.'
      ],
      slug: slugs.keys,
      references: [
        {
          name: 'Vue.js Docs: Maintaining State with key',
          link: 'https://vuejs.org/guide/essentials/list.html#maintaining-state-with-key',
        }
      ],
    },
    {
      name: 'Что такое модификаторы событий?',
      answer: [
        'Модификаторы событий во Vue — это расширения для обработчиков событий, добавляющие дополнительное поведение, ' +
        'такое как предотвращение действий по умолчанию или остановка распространения событий.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Vue.js Docs: Event Modifiers',
          link: 'https://vuejs.org/guide/essentials/event-handling.html#event-modifiers',
        }
      ],
      slug: slugs["event-modificators"]
    },
    {
      name: 'Как повесить слушатель событий на нажатие только одной кнопки с помощью директивы?',
      slug: slugs['key-modificators'],
      answer: [
        'Для того чтобы повесить слушатель событий только на одну кнопку — нужно использовать модификатор клавиши.',
        'Данные модификаторы можно повесить на события keyup, keydown, keypress',
        'Для того чтобы слушать только одну кнопку достаточно указать ее код через точку: @keyup.enter="() => {}"',
      ],
      tags: [
        tags.middle,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Vue.js Docs: Key Modifiers',
          link: 'https://vuejs.org/guide/essentials/event-handling.html#event-modifiers',
        }
      ]
    },
    {
      name: 'Какие есть события жизненного цикла во Vue 3?',
      slug: slugs.lifecycle,
      tags: [
        tags.junior,
        tags.fundamentals,
        tags.vue3,
      ],
      references: [
        {
          name: 'Vue.js Docs: Lifecycle Hooks',
          link: 'https://vuejs.org/api/composition-api-lifecycle.html',
        },
      ],
      answer: [
        '- setup',
        '- beforeMount',
        '- onMounted',
        '- beforeUpdate',
        '- onUpdated',
        '- beforeUnmount',
        '- onUnmounted',
      ]
    },
    {
      name: 'Как работает реактивность во Vue 2?',
      slug: slugs['reactivity-2'],
      answer: [
        'В Vue 2 система реактивности строится на использовании Object.defineProperty. ' +
        'Этот метод позволяет Vue следить за изменениями данных в компоненте. ' +
        'При инициализации данных Vue создает геттеры и сеттеры для каждого свойства объекта данных.',
        'Геттеры отслеживают моменты чтения свойств, формируя список зависимостей. ' +
        'Когда данные изменяются через сеттеры, Vue автоматически обновляет компоненты, зависящие от этих данных.',
        'Таким образом, изменения данных могут динамически отражаться в пользовательском интерфейсе без ' +
        'необходимости явного обновления или манипуляций со стороны разработчика.'
      ],
      tags: [
        tags.middle,
        tags.vue2,
      ],
      references: [
        {
          name: 'Vue.js Docs: Reactivity in Depth',
          link: 'https://v2.vuejs.org/v2/guide/reactivity.html',
        }
      ]
    },
    {
      name: 'Как работает реактивность во Vue 3?',
      answer: [
        'Во Vue 3 реактивность базируется на использовании объекта Proxy, ' +
        'который предоставляет более мощный и гибкий механизм для перехвата операций чтения ' +
        'и записи свойств объекта. Когда вы объявляете реактивные данные в компоненте Vue, они оборачиваются в Proxy.',
        'При обращении к свойствам объекта Vue, Proxy перехватывает этот доступ и уведомляет систему о необходимости ' +
        'обновления. Это позволяет Vue автоматически отслеживать зависимости и обновлять компоненты, ' +
        'связанные с изменяющимися данными.',
        'Применение Proxy в реактивности Vue 3 приводит к более эффективной обработке изменений и ' +
        'сравнению с предыдущей версией Vue, основанной на Object.defineProperty.'
      ],
      tags: [
        tags.middle,
        tags.vue3,
      ],
      references: [
        {
          name: 'Vue.js Docs: Reactivity in Depth',
          link: 'https://vuejs.org/guide/extras/reactivity-in-depth.html',
        },
      ],
      slug: slugs['reactivity-3'],
    },
  ]
};

export default browserQuestionCollection;
