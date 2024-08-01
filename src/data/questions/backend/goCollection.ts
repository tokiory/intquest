import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('go');
const slugs = {
  introduction: slug('introduction'),
  variables: slug('variables'),
  dataTypes: slug('data-types'),
  functions: slug('functions'),
  packages: slug('packages'),
  errorHandling: slug('error-handling'),
  concurrency: slug('concurrency'),
  interfaces: slug('interfaces'),
  structs: slug('structs'),
  pointers: slug('pointers'),
  slices: slug('slices'),
  maps: slug('maps'),
  channels: slug('channels'),
  goroutines: slug('goroutines'),
  testing: slug('testing'),
  benchmarking: slug('benchmarking'),
  modules: slug('modules'),
  goRoutines: slug('go-routines'),
  context: slug('context'),
  reflection: slug('reflection'),
  cgo: slug('cgo'),
  garbageCollection: slug('garbage-collection'),
  performance: slug('performance'),
  bestPractices: slug('best-practices'),
  deployment: slug('deployment'),
  security: slug('security'),

  typeAssertions: slug('type-assertions'),
  concurrencyPatterns: slug('concurrency-patterns'),
  errorWrapping: slug('error-wrapping'),
  customErrors: slug('custom-errors'),
  goModuleVersioning: slug('go-module-versioning'),
  deferUsage: slug('defer-usage'),
  interfaceEmpty: slug('interface-empty'),
  reflectionPerformance: slug('reflection-performance'),
  contextCancellation: slug('context-cancellation'),
  garbageCollectionTuning: slug('garbage-collection-tuning'),
};

const goQuestionCollection: QuestionSection = {
  title: 'Go',
  icon: 'fluent-emoji:beaver',
  collection: [
    {
      name: 'Как объявлять и использовать переменные в Go?',
      slug: slugs.variables,
      answer: [
        'Переменные в Go объявляются с помощью ключевого слова var. Также можно использовать сокращенное объявление := для объявления и инициализации переменной одновременно.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Go Spec: Variables',
          link: 'https://golang.org/doc/effective_go.html#variables',
        }
      ]
    },
    {
      name: 'Какие основные типы данных существуют в Go?',
      slug: slugs.dataTypes,
      answer: [
        'Основные типы данных в Go включают:',
        '- Целочисленные значения: int8, int16, int32, int64, int',
        '- Целочисленные неотрицательные значения: uint8, uint16, uint32, uint64, uint',
        '- Числа с плавающей точкой: float32, float64',
        '- Комплексные значения: complex64, complex128',
        '- Строчные значения: string',
        '- Булевые значения: bool',
        '- Алиасы: byte (uint8), rune (uint32)',
        '- Тип nil: nil',
        '- Массивы: [n]T',
        '- Слайсы: []T',
        '- Мапы: map[K]V',
        '- Структуры: struct { ... }',
        '- Интерфейсы: interface { ... }',
        '- Указатели: *T',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Go Spec: Data Types',
          link: 'https://golang.org/ref/spec#Types',
        }
      ]
    },
    {
      name: 'Что такое модули в Go?',
      slug: slugs.modules,
      answer: [
        'Модули в Go позволяют управлять зависимостями и версиями пакетов. Они используются для создания переиспользуемых библиотек и управления зависимостями проекта.',
      ],
      tags: [
        tags.junior,
      ],
      references: [
        {
          name: 'Go Spec: Modules',
          link: 'https://golang.org/doc/modules/',
        }
      ]
    },
    {
      name: 'Что такое пакеты в Go и как их использовать?',
      slug: slugs.packages,
      answer: [
        'Пакеты в Go используются для организации кода. Они позволяют группировать функции, переменные и типы данных в логические блоки.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Go Spec: Packages',
          link: 'https://golang.org/doc/effective_go.html#packages',
        }
      ]
    },
    {
      name: 'Как обрабатывать ошибки в Go?',
      slug: slugs.errorHandling,
      answer: [
        'Ошибки в Go обрабатываются с помощью типа error. Функции могут возвращать ошибки, которые затем можно проверять и обрабатывать.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Go Spec: Error Handling',
          link: 'https://golang.org/doc/effective_go.html#errors',
        }
      ]
    },
    {
      name: 'Что такое параллелизм в Go и как его использовать?',
      slug: slugs.concurrency,
      answer: [
        'Параллелизм в Go достигается с помощью горутин (goroutines) и каналов (channels).',
        'Горутины позволяют выполнять функции параллельно, а каналы используются для обмена данными между горутинами.',
      ],
      tags: [
        tags.middle,

      ],
      references: [
        {
          name: 'Go Spec: Concurrency',
          link: 'https://golang.org/doc/effective_go.html#concurrency',
        }
      ]
    },
    {
      name: 'Что такое интерфейсы в Go и как их использовать?',
      slug: slugs.interfaces,
      answer: [
        'Интерфейсы в Go определяют набор методов, которые должны быть реализованы типом. Они позволяют создавать абстракции и обеспечивать полиморфизм.',
        'Для того чтобы использовать интерфейсы в Go, их не нужно импортировать, их использование является неявным.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Go Spec: Interfaces',
          link: 'https://golang.org/doc/effective_go.html#interfaces',
        }
      ]
    },
    {
      name: 'Что такое структуры в Go и как их использовать?',
      slug: slugs.structs,
      answer: [
        'Структуры в Go позволяют создавать пользовательские типы данных, объединяющие несколько полей. Они используются для определения сложных данных и обеспечения их структурированности.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Go Spec: Structs',
          link: 'https://golang.org/doc/effective_go.html#structs',
        }
      ]
    },
    {
      name: 'Что такое указатели в Go и как их использовать?',
      slug: slugs.pointers,
      answer: [
        'Указатели в Go позволяют работать с адресами переменных в памяти. Они используются для передачи данных по ссылке и управления памятью.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Go Spec: Pointers',
          link: 'https://golang.org/doc/effective_go.html#pointers',
        }
      ]
    },
    {
      name: 'Что такое срезы в Go и как их использовать?',
      slug: slugs.slices,
      answer: [
        'Срезы в Go представляют собой динамические массивы, которые могут изменять свой размер. Они используются для хранения и управления последовательностями данных.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Go Spec: Slices',
          link: 'https://golang.org/doc/effective_go.html#slices',
        }
      ]
    },
    {
      name: 'Что такое мапы в Go и как их использовать?',
      slug: slugs.maps,
      answer: [
        'Мапы в Go представляют собой ассоциативные массивы, которые хранят пары ключ-значение. Они используются для хранения и управления данными, связанными с ключами.',
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Go Spec: Maps',
          link: 'https://golang.org/doc/effective_go.html#maps',
        }
      ]
    },
    {
      name: 'Как тестировать код в Go?',
      slug: slugs.testing,
      answer: [
        'Тестирование в Go осуществляется с помощью пакета testing.',
        'Тесты пишутся в отдельных файлах с суффиксом _test.go и используют функции TestXXX для определения тестов.',
      ],
      tags: [
        tags.middle,

      ],
      references: [
        {
          name: 'Go: Testing',
          link: 'https://golang.org/pkg/testing/',
        }
      ]
    },
    {
      name: 'Как проводить бенчмаркинг в Go?',
      slug: slugs.benchmarking,
      answer: [
        'Бенчмаркинг в Go осуществляется с помощью пакета testing.',
        'Бенчмарки пишутся в отдельных файлах с суффиксом _test.go и используют функции BenchmarkXXX для определения бенчмарков.',
      ],
      tags: [
        tags.middle,

      ],
      references: [
        {
          name: 'Go Benchmarking',
          link: 'https://golang.org/pkg/testing/#hdr-Benchmarks',
        }
      ]
    },
    {
      name: 'Что такое контекст в Go и как его использовать?',
      slug: slugs.context,
      answer: [
        'Контекст в Go используется для передачи данных между функциями и управления временем жизни запросов. Он позволяет передавать контекстные данные, такие как таймауты и отмены.',
      ],
      tags: [
        tags.middle,

      ],
      references: [
        {
          name: 'Go Context',
          link: 'https://golang.org/pkg/context/',
        }
      ]
    },
    {
      name: 'Что такое рефлексия в Go и как ее использовать?',
      slug: slugs.reflection,
      answer: [
        'Рефлексия в Go позволяет анализировать и изменять структуру программы во время выполнения.',
        'Она используется для создания гибких и динамических программ.',
      ],
      tags: [
        tags.senior,

      ],
      references: [
        {
          name: 'Go Reflection',
          link: 'https://golang.org/pkg/reflect/',
        },
        {
          name: 'Habr: Законы рефлексии в Gо',
          link: 'https://habr.com/ru/articles/415171/',
        }
      ]
    },
    {
      name: 'Что такое cgo и как его использовать?',
      slug: slugs.cgo,
      answer: [
        'Cgo позволяет вызывать функции, написанные на языке C, из кода на Go. Это полезно для интеграции с существующими библиотеками на C.',
      ],
      tags: [
        tags.senior,

      ],
      references: [
        {
          name: 'Go cgo',
          link: 'https://golang.org/cmd/cgo/',
        },
        {
          name: 'Habr: С-вызовы в Go: принцип работы и производительность',
          link: 'https://habr.com/ru/companies/intel/articles/275709/'
        }
      ]
    },
    {
      name: 'Как освобождается память в Go?',
      slug: slugs.garbageCollection,
      answer: [
        'Сборщик мусора в Go автоматически освобождает память, которая больше не используется программой.',
        ''
      ],
      tags: [
        tags.senior,

      ],
      references: [
        {
          name: 'Go Garbage Collection',
          link: 'https://golang.org/pkg/runtime/#GarbageCollector',
        },
        {
          name: 'Habr: Go\'s Garbage Collection: как работает и почему это важно знать',
          link: 'https://habr.com/ru/companies/avito/articles/753244/',
        }
      ]
    },
    {
      name: 'Как использовать утверждения типа (type assertions) в Go и в каких случаях это полезно?',
      slug: slugs.typeAssertions,
      answer: [
        'Утверждения типа позволяют приводить интерфейсы к конкретным типам. Это полезно, когда работаешь с пустым интерфейсом (interface{}), и нужно проверить, соответствует ли объект конкретному типу.',
        'Пример: `value, ok := i.(ConcreteType)`',
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Go Type Assertions',
          link: 'https://golang.org/ref/spec#Type_assertions',
        }
      ]
    },
    {
      name: 'Какие существуют распространенные паттерны параллелизма в Go и когда их использовать?',
      slug: slugs.concurrencyPatterns,
      answer: [
        'В Go распространены паттерны, такие как Worker Pools, Publish/Subscribe, и Fan-out/Fan-in. Эти паттерны помогают управлять параллелизмом и обеспечивают эффективное использование горутин и каналов.',
        'Примеры использования: Worker Pools для ограничения числа одновременно работающих задач, Publish/Subscribe для уведомления нескольких слушателей, Fan-out/Fan-in для сбора данных из нескольких источников.',
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Go Concurrency Patterns',
          link: 'https://blog.golang.org/pipelines',
        }
      ]
    },
    {
      name: 'Как оборачивать ошибки в Go для добавления дополнительного контекста?',
      slug: slugs.errorWrapping,
      answer: [
        'Оборачивание ошибок с помощью `fmt.Errorf` или `errors.Wrap` позволяет добавлять контекст к ошибкам, что упрощает их диагностику и отладку.',
        'Пример: `return fmt.Errorf("failed to open file: %w", err)`',
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Go Error Wrapping',
          link: 'https://blog.golang.org/error-handling-and-go',
        }
      ]
    },
    {
      name: 'Как создавать и использовать пользовательские ошибки в Go?',
      slug: slugs.customErrors,
      answer: [
        'Пользовательские ошибки создаются с помощью структур, реализующих интерфейс `error`. Это позволяет создавать более специфичные ошибки, которые могут содержать дополнительную информацию.',
        'Пример: `type MyError struct { Message string }`',
        'Метод `Error()` должен быть реализован для структуры, чтобы она соответствовала интерфейсу `error`.',
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Creating Custom Errors in Go',
          link: 'https://blog.golang.org/error-handling-and-go',
        }
      ]
    },
    {
      name: 'Как управлять версиями модулей в Go с помощью go.mod?',
      slug: slugs.goModuleVersioning,
      answer: [
        'Файл `go.mod` используется для управления зависимостями и версиями пакетов. Команды `go get` и `go mod tidy` помогают обновлять и поддерживать актуальные версии зависимостей.',
        'Пример: `go get example.com/pkg@v1.2.3`',
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Go Modules',
          link: 'https://golang.org/ref/mod',
        }
      ]
    },
    {
      name: 'Как правильно использовать оператор defer в Go и какие подводные камни следует учитывать?',
      slug: slugs.deferUsage,
      answer: [
        'Оператор `defer` используется для отложенного выполнения функции до выхода из текущей функции. Он полезен для выполнения очистки ресурсов, но может влиять на производительность и память.',
        'Важно помнить, что отложенные вызовы выполняются в обратном порядке, и их использование должно быть осознанным.',
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Go Defer',
          link: 'https://blog.golang.org/defer-panic-and-recover',
        }
      ]
    },
    {
      name: 'Как использовать пустой интерфейс (interface{}) и что нужно учитывать при его использовании?',
      slug: slugs.interfaceEmpty,
      answer: [
        'Пустой интерфейс (interface{}) может хранить значения любого типа, но это требует приведения типа и проверки. Это может усложнить код и снизить его безопасность.',
        'Рекомендуется использовать пустой интерфейс с осторожностью и, по возможности, использовать конкретные типы.',
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Go Empty Interface',
          link: 'https://blog.golang.org/laws-of-reflection',
        }
      ]
    },
    {
      name: 'Как рефлексия влияет на производительность в Go и как её минимизировать?',
      slug: slugs.reflectionPerformance,
      answer: [
        'Рефлексия в Go может быть медленной, так как требует выполнения дополнительных проверок и операций на этапе выполнения. Используйте рефлексию только в случаях, когда это действительно необходимо, и минимизируйте её использование.',
        'Оптимизируйте код, избегая частого использования рефлексии в критичных к производительности участках.',
      ],
      tags: [
        tags.senior,
      ],
      references: [
        {
          name: 'Go Reflection Performance',
          link: 'https://blog.golang.org/laws-of-reflection',
        }
      ]
    },
    {
      name: 'Как управлять отменой запросов с помощью контекста в Go?',
      slug: slugs.contextCancellation,
      answer: [
        'Контекст в Go используется для передачи сигналов отмены и тайм-аутов между функциями. Используйте функции `context.WithCancel`, `context.WithTimeout`, и `context.WithDeadline` для управления временем жизни операций.',
        'Пример: `ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)`',
      ],
      tags: [
        tags.middle,
      ],
      references: [
        {
          name: 'Go Context Cancellation',
          link: 'https://blog.golang.org/context',
        }
      ]
    },
    {
      name: 'Как настраивать сборщик мусора в Go для оптимизации работы с памятью?',
      slug: slugs.garbageCollectionTuning,
      answer: [
        'Go позволяет настраивать параметры сборщика мусора через переменные окружения, такие как `GOGC`. Это может помочь оптимизировать использование памяти в зависимости от требований вашего приложения.',
        'Пример: `GOGC=100` для управления частотой сборки мусора.',
      ],
      tags: [
        tags.senior,
      ],
      references: [
        {
          name: 'Go Docs: A Guide to the Go Garbage Collector',
          link: 'https://tip.golang.org/doc/gc-guide',
        }
      ]
    },
  ]
};

export default goQuestionCollection;
