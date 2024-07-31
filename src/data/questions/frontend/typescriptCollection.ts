import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('typescript');
const slugs = {
  basicTypes: slug('basic-types'),
  interfaces: slug('interfaces'),
  classes: slug('classes'),
  generics: slug('generics'),
  modules: slug('modules'),
  enums: slug('enums'),
  typeAliases: slug('type-aliases'),
  unionTypes: slug('union-types'),
  typeInference: slug('type-inference'),
  typeAssertions: slug('type-assertions'),
  typeGuards: slug('type-guards'),
  advancedTypes: slug('advanced-types'),
  decorators: slug('decorators'),
  namespaces: slug('namespaces'),
  mixins: slug('mixins'),
  typeCompatibility: slug('type-compatibility'),
  typeMapping: slug('type-mapping'),
  conditionalTypes: slug('conditional-types'),
  utilityTypes: slug('utility-types'),
  keyof: slug('keyof'),
  readonly: slug('readonly'),
  partial: slug('partial'),
  required: slug('required'),
  pick: slug('pick'),
  omit: slug('omit'),
  record: slug('record'),
  nonNullable: slug('non-nullable'),
  returnType: slug('return-type'),
  parameters: slug('parameters'),
  constructorParameters: slug('constructor-parameters'),
  instanceType: slug('instance-type'),
  thisParameter: slug('this-parameter'),
  infer: slug('infer'),
};

const typescriptQuestionCollection: QuestionSection = {
  title: 'TypeScript',
  icon: 'fluent-emoji:camel',
  collection: [
    {
      name: 'Какие основные типы данных существуют в TypeScript?',
      slug: slugs.basicTypes,
      answer: [
        'Основные типы данных в TypeScript включают: number, string, boolean, null, undefined, void, any, never, object, array, tuple, enum, unknown.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Basic Types',
          link: 'https://www.typescriptlang.org/docs/handbook/basic-types.html',
        }
      ]
    },
    {
      name: 'Что такое интерфейсы в TypeScript и как их использовать?',
      slug: slugs.interfaces,
      answer: [
        'Интерфейсы в TypeScript используются для определения структуры объектов. Они позволяют описывать свойства и методы, которые объект должен иметь.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Interfaces',
          link: 'https://www.typescriptlang.org/docs/handbook/interfaces.html',
        }
      ]
    },
    {
      name: 'Какие есть особенности у классов в TypeScript?',
      slug: slugs.classes,
      answer: [
        'Классы в TypeScript поддерживают множество особенностей, включая наследование, инкапсуляцию, полиморфизм и другие объектно-ориентированные концепции. ' +
        'Они также поддерживают модификаторы доступа (public, private, protected), статические методы и свойства, конструкторы, абстрактные классы и методы, ' +
        'а также декораторы для расширения функциональности классов.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Classes',
          link: 'https://www.typescriptlang.org/docs/handbook/classes.html',
        }
      ]
    },
    {
      name: 'Что такое обобщения (generics) в TypeScript и как их использовать?',
      slug: slugs.generics,
      answer: [
        'Обобщения в TypeScript позволяют создавать компоненты, которые работают с различными типами данных. Они используются для создания гибких и переиспользуемых функций и классов.',
      ],
      tags: [
        tags.middle,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Generics',
          link: 'https://www.typescriptlang.org/docs/handbook/generics.html',
        }
      ]
    },
    {
      name: 'Что такое модули в TypeScript и как их использовать?',
      slug: slugs.modules,
      answer: [
        'Модули в TypeScript позволяют организовать код в отдельные файлы и импортировать/экспортировать функции, классы и переменные между ними.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Modules',
          link: 'https://www.typescriptlang.org/docs/handbook/modules.html',
        }
      ]
    },
    {
      name: 'Что такое перечисления (enums) в TypeScript и как их использовать?',
      slug: slugs.enums,
      answer: [
        'Перечисления в TypeScript позволяют определять набор именованных констант. Они используются для создания перечислимых типов данных.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Enums',
          link: 'https://www.typescriptlang.org/docs/handbook/enums.html',
        }
      ]
    },
    {
      name: 'Что такое псевдонимы типов (type aliases) в TypeScript и как их использовать?',
      slug: slugs.typeAliases,
      answer: [
        'Псевдонимы типов в TypeScript позволяют создавать новые имена для существующих типов. Они используются для упрощения и улучшения читаемости кода.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Type Aliases',
          link: 'https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases',
        }
      ]
    },
    {
      name: 'Что такое объединения типов?',
      slug: slugs.unionTypes,
      answer: [
        'Объединения типов в TypeScript позволяют определять переменные, которые могут принимать несколько типов данных. Они используются для создания гибких и переиспользуемых функций и классов.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Union Types',
          link: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unions',
        }
      ]
    },
    {
      name: 'Что такое выведение типов?',
      slug: slugs.typeInference,
      answer: [
        'Вывод типов в TypeScript позволяет компилятору автоматически определять типы переменных на основе их значений. Это упрощает написание кода и улучшает его читаемость.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Type Inference',
          link: 'https://www.typescriptlang.org/docs/handbook/type-inference.html',
        }
      ]
    },
    {
      name: 'Что такое утверждение типов?',
      slug: slugs.typeAssertions,
      answer: [
        'Утверждения типов в TypeScript позволяют явно указать тип переменной. Они используются для уточнения типов данных и улучшения безопасности кода.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Type Assertions',
          link: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions',
        }
      ]
    },
    {
      name: 'Что такое гарды?',
      slug: slugs.typeGuards,
      answer: [
        'Гарды типов в TypeScript позволяют проверять типы данных во время выполнения. Они используются для обеспечения безопасности типов и улучшения читаемости кода.',
      ],
      tags: [
        tags.middle,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Type Guards',
          link: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards',
        }
      ]
    },
    {
      name: 'Что такое декораторы?',
      slug: slugs.decorators,
      answer: [
        'Декораторы в TypeScript позволяют добавлять метаданные и поведение к классам, методам и свойствам. Они используются для расширения функциональности и улучшения читаемости кода.',
      ],
      tags: [
        tags.senior,

      ],
      references: [
        {
          name: 'TypeScript Docs: Decorators',
          link: 'https://www.typescriptlang.org/docs/handbook/decorators.html',
        }
      ]
    },
    {
      name: 'Что такое пространства имен?',
      slug: slugs.namespaces,
      answer: [
        'Пространства имен в TypeScript позволяют организовать код в логические группы. Они используются для предотвращения конфликтов имен и улучшения читаемости кода.',
      ],
      tags: [
        tags.middle,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Namespaces',
          link: 'https://www.typescriptlang.org/docs/handbook/namespaces.html',
        }
      ]
    },
    {
      name: 'Что такое миксины?',
      slug: slugs.mixins,
      answer: [
        'Миксины в TypeScript позволяют объединять несколько классов в один. Они используются для создания гибких и переиспользуемых классов.',
      ],
      tags: [
        tags.senior,

      ],
      references: [
        {
          name: 'TypeScript Docs: Mixins',
          link: 'https://www.typescriptlang.org/docs/handbook/mixins.html',
        }
      ]
    },
    {
      name: 'Что такое совместимость типов и как она работает?',
      slug: slugs.typeCompatibility,
      answer: [
        'Совместимость типов в TypeScript определяет, можно ли присвоить значение одного типа переменной другого типа. Она основана на структурной типизации.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: Type Compatibility',
          link: 'https://www.typescriptlang.org/docs/handbook/type-compatibility.html',
        }
      ]
    },
    {
      name: 'Что такое картирование типов (type mapping)?',
      slug: slugs.typeMapping,
      answer: [
        'Картирование типов в TypeScript позволяет создавать новые типы на основе существующих типов. Оно используется для создания гибких и переиспользуемых типов.',
      ],
      tags: [
        tags.middle,

      ],
      references: [
        {
          name: 'TypeScript Docs: Type Mapping',
          link: 'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html',
        }
      ]
    },
    {
      name: 'Что такое условные типы?',
      slug: slugs.conditionalTypes,
      answer: [
        'Условные типы в TypeScript позволяют создавать типы, которые зависят от условий. Они используются для создания гибких и переиспользуемых типов.',
      ],
      tags: [
        tags.senior,

      ],
      references: [
        {
          name: 'TypeScript Docs: Conditional Types',
          link: 'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html',
        }
      ]
    },
    {
      name: 'Что такое утилитарные типы (utility types)?',
      slug: slugs.utilityTypes,
      answer: [
        'Утилитарные типы в TypeScript предоставляют встроенные типы для выполнения распространенных операций с типами. Они включают Partial, Readonly, Record, Pick, Omit и другие.',
      ],
      tags: [
        tags.middle,

      ],
      references: [
        {
          name: 'TypeScript Docs: Utility Types',
          link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html',
        }
      ]
    },
    {
      name: 'Зачем нужно ключевое слово keyof?',
      slug: slugs.keyof,
      answer: [
        'Ключевое слово keyof в TypeScript позволяет получить объединение строковых или числовых литералов, представляющих ключи типа.',
        'Он используется для создания гибких и переиспользуемых типов.',
      ],
      tags: [
        tags.junior,

      ],
      references: [
        {
          name: 'TypeScript Docs: keyof',
          link: 'https://www.typescriptlang.org/docs/handbook/2/keyof-types.html',
        }
      ]
    },
    {
      name: 'Зачем нужно ключевое слово readonly?',
      slug: slugs.readonly,
      answer: [
        'Только для чтения (readonly) в TypeScript позволяет создавать свойства, которые не могут быть изменены после их инициализации. Это полезно для создания неизменяемых объектов.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'TypeScript Docs: readonly and const',
          link: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const',
        }
      ]
    },
    {
      name: 'Как получить тип this?',
      slug: slugs.thisParameter,
      answer: [
        'Тип this (ThisParameter) в TypeScript позволяет указать тип this в функции. Это полезно для создания типов на основе функций.',
      ],
      tags: [
        tags.middle,

      ],
      references: [
        {
          name: 'TypeScript Docs: ThisParameter',
          link: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#thisparametertypetype',
        }
      ]
    },
    {
      name: 'Зачем нужно ключевое слово infer?',
      slug: slugs.infer,
      answer: [
        'Тип вывода (Infer) в TypeScript позволяет выводить типы из условных типов.',
      ],
      tags: [
        tags.senior,

      ],
      references: [
        {
          name: 'TypeScript Docs: Infer',
          link: 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types',
        }
      ]
    },
  ]
};

export default typescriptQuestionCollection;
