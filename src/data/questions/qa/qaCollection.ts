import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('qa');
const slugs = {
  definition: slug('definition'),
  importance: slug('importance'),
  testingTypes: slug('testing-types'),
  manualTesting: slug('manual-testing'),
  automatedTesting: slug('automated-testing'),
  testCases: slug('test-cases'),
  bugTracking: slug('bug-tracking'),
  testPlans: slug('test-plans'),
  regressionTesting: slug('regression-testing'),
  smokeTesting: slug('smoke-testing'),
  integrationTesting: slug('integration-testing'),
  unitTesting: slug('unit-testing'),
  performanceTesting: slug('performance-testing'),
  securityTesting: slug('security-testing'),
  usabilityTesting: slug('usability-testing'),
  compatibilityTesting: slug('compatibility-testing'),
  exploratoryTesting: slug('exploratory-testing'),
  testAutomationTools: slug('test-automation-tools'),
  continuousIntegration: slug('continuous-integration'),
  testDrivenDevelopment: slug('test-driven-development'),
  behaviorDrivenDevelopment: slug('behavior-driven-development'),
  acceptanceTesting: slug('acceptance-testing'),
  testEnvironment: slug('test-environment'),
  testDataManagement: slug('test-data-management'),
  testMetrics: slug('test-metrics'),
};

const qaQuestionCollection: QuestionSection = {
  title: 'QA (Quality Assurance)',
  icon: 'fluent-emoji:check-mark-button',
  collection: [
    {
      name: 'Что такое QA (Quality Assurance)?',
      slug: slugs.definition,
      answer: [
        'QA (Quality Assurance) — это процесс, направленный на обеспечение качества программного обеспечения. ' +
        'Он включает в себя планирование, контроль и улучшение процессов разработки и тестирования для достижения высокого качества конечного продукта.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'QA_Bible: QA/QC/Testing',
          link: 'https://vladislaveremeev.gitbook.io/qa_bible/obshee/qa-qc-testing',
        }
      ]
    },
    {
      name: 'Какие существуют типы тестирования в QA?',
      slug: slugs.testingTypes,
      answer: [
        'Существуют различные типы тестирования, включая функциональное тестирование, нефункциональное тестирование, ручное тестирование, автоматизированное тестирование, регрессионное тестирование, интеграционное тестирование и другие.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Types of Software Testing',
          link: 'https://www.softwaretestinghelp.com/types-of-software-testing/',
        }
      ]
    },
    {
      name: 'Что такое ручное тестирование и как его проводить?',
      slug: slugs.manualTesting,
      answer: [
        'Ручное тестирование — это процесс тестирования программного обеспечения вручную без использования автоматизированных инструментов. ' +
        'Оно включает в себя выполнение тестовых сценариев и проверку результатов на соответствие ожидаемым результатам.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Habr: Гид по ручному тестированию приложений: преимущества, этапы и методологии',
          link: 'https://habr.com/ru/companies/skillbox/articles/418889/',
        }
      ]
    },
    {
      name: 'Что такое автоматизированное тестирование и как его проводить?',
      slug: slugs.automatedTesting,
      answer: [
        'Автоматизированное тестирование — это процесс тестирования программного обеспечения с использованием автоматизированных инструментов и скриптов. ' +
        'Оно позволяет выполнять тесты быстрее и с меньшими затратами человеческих ресурсов.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Automated Testing',
          link: 'https://www.softwaretestinghelp.com/automation-testing-tutorial/',
        }
      ]
    },
    {
      name: 'Что такое тестовые кейсы и как их создавать?',
      slug: slugs.testCases,
      answer: [
        'Тест-кейсы — это документы, описывающие условия и шаги для проверки определенной функциональности программного обеспечения. ' +
        'Они включают в себя входные данные, ожидаемые результаты и критерии успешного выполнения теста.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Test Cases',
          link: 'https://www.softwaretestinghelp.com/test-case/',
        }
      ]
    },
    {
      name: 'Что такое отслеживание ошибок (bug tracking) и как его организовать?',
      slug: slugs.bugTracking,
      answer: [
        'Отслеживание ошибок — это процесс записи, отслеживания и управления ошибками, обнаруженными в процессе тестирования. ' +
        'Оно включает в себя использование систем управления ошибками, таких как Jira, Bugzilla и другие.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'IBM: What is bug tracking?',
          link: 'https://www.ibm.com/topics/bug-tracking#:~:text=Bug%20tracking%20is%20the%20process,defect%20tracking%20or%20issue%20tracking.',
        }
      ]
    },
    {
      name: 'Что такое тестовые планы и как их создавать?',
      slug: slugs.testPlans,
      answer: [
        'Тестовые планы — это документы, описывающие стратегию и подход к тестированию программного обеспечения. ' +
        'Они включают в себя цели тестирования, область тестирования, критерии успешного выполнения тестирования и другие аспекты.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'QA_Bible: План тестирования (Test plan)',
          link: 'https://vladislaveremeev.gitbook.io/qa_bible/testovaya-dokumentaciya-i-artefakty-test-deliverablestest-artifacts/plan-testirovaniya-test-plan',
        }
      ]
    },
    {
      name: 'Что такое регрессионное тестирование?',
      slug: slugs.regressionTesting,
      answer: [
        'Регрессионное тестирование — это процесс повторного тестирования программного обеспечения после внесения изменений для проверки, что новые изменения не ввели новые ошибки. ' +
        'Оно включает в себя выполнение тестовых случаев, которые уже были пройдены ранее.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'QA_Bible: Регрессивные виды тестирования',
          link: 'https://vladislaveremeev.gitbook.io/qa_bible/vidy-metody-urovni-testirovaniya/regressionnye-vidy-testirovaniya-regression-testing',
        }
      ]
    },
    {
      name: 'Что такое смоук-тестирование?',
      slug: slugs.smokeTesting,
      answer: [
        'Смоук-тестирование — это процесс быстрого тестирования основных функций программного обеспечения для проверки его работоспособности. ' +
        'Оно используется для выявления критических ошибок на ранних стадиях тестирования.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Habr: В чём разница Smoke, Sanity, Regression, Re-test и как их различать?',
          link: 'https://habr.com/ru/articles/358142/',
        }
      ]
    },
    {
      name: 'Что такое интеграционное тестирование?',
      slug: slugs.integrationTesting,
      answer: [
        'Интеграционное тестирование — это процесс тестирования взаимодействия различных модулей или компонентов программного обеспечения. ' +
        'Оно используется для проверки, что все части системы работают вместе корректно.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'QA_Bible: Интеграционное тестирование',
          link: 'https://vladislaveremeev.gitbook.io/qa_bible/vidy-metody-urovni-testirovaniya/integracionnoe-testirovanie-integration-testing',
        }
      ]
    },
    {
      name: 'Что такое модульное тестирование (unit testing)?',
      slug: slugs.unitTesting,
      answer: [
        'Модульное тестирование — это процесс тестирования отдельных модулей или компонентов программного обеспечения. ' +
        'Оно используется для проверки, что каждый модуль работает корректно в изоляции от других модулей.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Unit Testing',
          link: 'https://www.softwaretestinghelp.com/unit-testing/',
        }
      ]
    },
    {
      name: 'Что такое тестирование производительности?',
      slug: slugs.performanceTesting,
      answer: [
        'Тестирование производительности — это процесс оценки производительности программного обеспечения под нагрузкой. ' +
        'Оно включает в себя тестирование скорости отклика, пропускной способности, времени отклика и других параметров производительности.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'QA_Bible: Тестирование производительности',
          link: 'https://vladislaveremeev.gitbook.io/qa_bible/vidy-metody-urovni-testirovaniya/testirovanie-proizvoditelnosti-performance-testing',
        }
      ]
    },
    {
      name: 'Что такое тестирование безопасности?',
      slug: slugs.securityTesting,
      answer: [
        'Тестирование безопасности — это процесс оценки уязвимостей и угроз безопасности программного обеспечения. ' +
        'Оно включает в себя тестирование на уязвимости, тестирование на проникновение, тестирование на утечки данных и другие аспекты безопасности.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Security Testing',
          link: 'https://www.softwaretestinghelp.com/security-testing/',
        }
      ]
    },
    {
      name: 'Что такое тестирование удобства использования (UX)?',
      slug: slugs.usabilityTesting,
      answer: [
        'Тестирование удобства использования — это процесс оценки удобства и интуитивности пользовательского интерфейса программного обеспечения. ' +
        'Оно включает в себя тестирование на удобство использования, тестирование на доступность и другие аспекты удобства использования.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Usability Testing',
          link: 'https://www.softwaretestinghelp.com/usability-testing/',
        }
      ]
    },
    {
      name: 'Что такое тестирование совместимости?',
      slug: slugs.compatibilityTesting,
      answer: [
        'Тестирование совместимости — это процесс проверки совместимости программного обеспечения с различными операционными системами, браузерами, устройствами и другими программными продуктами. ' +
        'Оно используется для обеспечения корректной работы программного обеспечения в различных средах.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Habr: Тестирование совместимости: всё, что вам нужно знать',
          link: 'https://habr.com/ru/articles/716862/',
        }
      ]
    },
    {
      name: 'Что такое исследовательское тестирование?',
      slug: slugs.exploratoryTesting,
      answer: [
        'Исследовательское тестирование — это процесс тестирования программного обеспечения без заранее подготовленных тестовых случаев. ' +
        'Оно используется для выявления неожиданных ошибок и улучшения понимания функциональности программного обеспечения.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Habr: Что такое исследовательское тестирование?',
          link: 'https://habr.com/ru/articles/148479/',
        }
      ]
    },
    {
      name: 'Какие инструменты автоматизации тестирования существуют?',
      slug: slugs.testAutomationTools,
      answer: [
        'Существуют различные инструменты автоматизации тестирования, такие как Selenium, Appium, TestComplete, JUnit, Playwright, NUnit и другие. ' +
        'Они используются для создания и выполнения автоматизированных тестов, что позволяет ускорить процесс тестирования и снизить затраты на человеческие ресурсы.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Habr: Part 1. Инструменты автоматизации тестирования',
          link: 'https://habr.com/ru/articles/768154/',
        }
      ]
    },
    {
      name: 'Что такое непрерывная интеграция (Continuous Integration)?',
      slug: slugs.continuousIntegration,
      answer: [
        'Непрерывная интеграция (Continuous Integration) — это практика автоматического объединения изменений кода в основную ветвь репозитория. ' +
        'Она включает в себя автоматическое выполнение тестов и сборку проекта, что позволяет быстро выявлять и исправлять ошибки.'
      ],
      tags: [
        tags.middle,

      ],
      references: [
        {
          name: 'Continuous Integration',
          link: 'https://www.softwaretestinghelp.com/continuous-integration/',
        }
      ]
    },
    {
      name: 'Что такое разработка через тестирование (Test-Driven Development)?',
      slug: slugs.testDrivenDevelopment,
      answer: [
        'Test-Driven Development — это методология разработки программного обеспечения, при которой тесты пишутся до написания кода. ' +
        'Она позволяет обеспечить высокое качество кода и минимизировать количество ошибок.'
      ],
      tags: [
        tags.middle,

      ],
      references: [
        {
          name: 'Habr: TDD: методология разработки, которая изменила мою жизнь',
          link: 'https://habr.com/ru/companies/ruvds/articles/450316/',
        }
      ]
    },
    {
      name: 'Что такое разработка через поведение (Behavior-Driven Development)?',
      slug: slugs.behaviorDrivenDevelopment,
      answer: [
        'Behavior-Driven Development — это методология разработки программного обеспечения, при которой тесты пишутся на основе поведения системы. ' +
        'Она позволяет обеспечить высокое качество кода и минимизировать количество ошибок.'
      ],
      tags: [
        tags.middle,

      ],
      references: [
        {
          name: 'Habr: Введение в BDD',
          link: 'https://habr.com/ru/companies/auriga/articles/808527/',
        }
      ]
    },
    {
      name: 'Что такое приемочное тестирование?',
      slug: slugs.acceptanceTesting,
      answer: [
        'Приемочное тестирование — это процесс тестирования программного обеспечения для проверки его соответствия требованиям и ожиданиям пользователей. ' +
        'Оно используется для обеспечения качества конечного продукта перед его выпуском.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'QA_Bible: Приемочное тестирование',
          link: 'https://vladislaveremeev.gitbook.io/qa_bible/vidy-metody-urovni-testirovaniya/priemochnoe-testirovanie-at-acceptance-testing',
        }
      ]
    },
    {
      name: 'Что такое тестовая среда?',
      slug: slugs.testEnvironment,
      answer: [
        'Тестовая среда — это окружение, в котором выполняется тестирование программного обеспечения. ' +
        'Она включает в себя оборудование, программное обеспечение, данные и другие ресурсы, необходимые для выполнения тестов.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'QA_Bible: Тестовая среда и тестовый стенд',
          link: 'https://vladislaveremeev.gitbook.io/qa_bible/obshee/testovaya-sreda-i-testovyi-stend-test-environment-test-bed',
        }
      ]
    },
    {
      name: 'Что такое управление тестовыми данными?',
      slug: slugs.testDataManagement,
      answer: [
        'Управление тестовыми данными — это процесс создания, хранения и управления данными, используемыми для тестирования программного обеспечения. ' +
        'Оно включает в себя создание тестовых данных, их хранение в базах данных и обеспечение их доступности для выполнения тестов.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Habr: Part 2. Инструменты управления тестированием',
          link: 'https://habr.com/ru/articles/771138/',
        }
      ]
    },
    {
      name: 'Что такое метрики тестирования?',
      slug: slugs.testMetrics,
      answer: [
        'Метрики тестирования — это показатели, используемые для оценки эффективности и качества тестирования программного обеспечения. ' +
        'Они включают в себя количество обнаруженных ошибок, процент успешных тестов, время выполнения тестов и другие параметры.'
      ],
      tags: [
        tags.junior,
        tags.fundamentals,
      ],
      references: [
        {
          name: 'Habr: Метрики тестирования, которые вы точно должны внедрить в процесс',
          link: 'https://habr.com/ru/companies/innotech/articles/678380/',
        }
      ]
    },
  ]
};

export default qaQuestionCollection;
