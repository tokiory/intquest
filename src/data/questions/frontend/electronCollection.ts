import tags from "@/data/tags";
import {type QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('electron');
const slugs = {
  bridge: slug('bridge'),
  mainProcess: slug('main-process'),
  rendererProcess: slug('renderer-process'),
  preloadScript: slug('preload-script'),
  security: slug('security'),
  packaging: slug('packaging'),
  updates: slug('updates'),
  performance: slug('performance'),
  nativeModules: slug('native-modules'),
  devTools: slug('dev-tools'),
};

const electronQuestionCollection: QuestionSection = {
  title: 'Electron',
  icon: 'fluent-emoji:dna',
  collection: [
    {
      name: 'Что такое IPC?',
      tags: [
        tags.middle,
        tags.fundamentals
      ],
      references: [
        {
          name: 'Electron Docs: IPC',
          link: 'https://www.electronjs.org/docs/latest/tutorial/ipc',
        }
      ],
      answer: [
        'Модуль межпроцессной связи (IPC) — это механизм, который позволяет обмениваться синхронными ' +
        'и асинхронными сообщениями между основным процессом и процессом рендеринга. ',
        'Связь модуля ipcMain осуществляется от основного процесса к процессу рендеринга, ' +
        'а связь модуля ipcRenderer осуществляется от процесса рендеринга к основному процессу.'
      ],
      slug: slugs["bridge"],
    },
    {
      name: 'Что такое основной процесс в Electron?',
      tags: [
        tags.junior,
        tags.fundamentals
      ],
      references: [
        {
          name: 'Electron Docs: Main Process',
          link: 'https://www.electronjs.org/docs/latest/tutorial/process-model#the-main-process',
        }
      ],
      answer: [
        'Основной процесс в Electron — это процесс, который создает окна и управляет их жизненным циклом. ' +
        'Он также отвечает за взаимодействие с операционной системой и другими процессами.',
      ],
      slug: slugs["mainProcess"],
    },
    {
      name: 'Что такое процесс рендеринга в Electron?',
      tags: [
        tags.junior,
        tags.fundamentals
      ],
      references: [
        {
          name: 'Electron Docs: Renderer Process',
          link: 'https://www.electronjs.org/docs/latest/tutorial/process-model#the-renderer-process',
        }
      ],
      answer: [
        'Процесс рендеринга в Electron — это процесс, который отвечает за отображение веб-страниц. ' +
        'Каждое окно в Electron имеет свой собственный процесс рендеринга.',
      ],
      slug: slugs["rendererProcess"],
    },
    {
      name: 'Какие меры безопасности следует принимать при разработке приложений на Electron?',
      tags: [
        tags.senior,
        tags.security
      ],
      references: [
        {
          name: 'Electron Docs: Security',
          link: 'https://www.electronjs.org/docs/latest/tutorial/security',
        }
      ],
      answer: [
        'При разработке приложений на Electron следует принимать меры для защиты от уязвимостей, таких как XSS и RCE. ' +
        'Это включает использование контекстной изоляции, отключение nodeIntegration и контроль доступа к ресурсам.',
      ],
      slug: slugs["security"],
    },
    {
      name: 'Как упаковать Electron-приложение для различных платформ?',
      tags: [
        tags.middle,
        tags.deployment
      ],
      references: [
        {
          name: 'Electron Docs: Packaging',
          link: 'https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging',
        }
      ],
      answer: [
        'Для упаковки Electron-приложения используются инструменты, такие как electron-forge. ' +
        'Данные инструменты позволяют создавать установочные пакеты для Windows, macOS и Linux.',
      ],
      slug: slugs["packaging"],
    },
    {
      name: 'Как реализовать автоматические обновления в Electron-приложении?',
      tags: [
        tags.senior,
        tags.deployment
      ],
      references: [
        {
          name: 'Electron Docs: Auto Updater',
          link: 'https://www.electronjs.org/docs/latest/tutorial/updates',
        }
      ],
      answer: [
        'Для реализации автоматических обновлений в Electron-приложении используется модуль autoUpdater. ' +
        'Он позволяет проверять наличие новых версий приложения и автоматически загружать и устанавливать их.',
      ],
      slug: slugs["updates"],
    },
    {
      name: 'Как оптимизировать производительность Electron-приложения?',
      tags: [
        tags.senior,
        tags.performance
      ],
      references: [
        {
          name: 'Electron Docs: Performance',
          link: 'https://www.electronjs.org/docs/latest/tutorial/performance',
        }
      ],
      answer: [
        'Для оптимизации производительности Electron-приложения следует минимизировать использование ресурсов, ' +
        'использовать эффективные алгоритмы и структуры данных, а также профилировать и анализировать производительность.',
      ],
      slug: slugs["performance"],
    },
    {
      name: 'Как использовать нативные модули в Electron?',
      tags: [
        tags.senior,
      ],
      references: [
        {
          name: 'Electron Docs: Native Modules',
          link: 'https://www.electronjs.org/docs/latest/tutorial/using-native-node-modules',
        }
      ],
      answer: [
        'Нативные модули в Electron — это модули, написанные на языках, таких как C++, которые могут быть использованы в Electron-приложениях. ' +
        'Для их использования необходимо установить соответствующие зависимости и настроить сборку.',
      ],
      slug: slugs["nativeModules"],
    },
    {
      name: 'Что такое прелоад-скрипт в Electron и зачем он нужен?',
      tags: [
        tags.middle,
        tags.fundamentals
      ],
      references: [
        {
          name: 'Electron Docs: Preload Script',
          link: 'https://www.electronjs.org/docs/latest/tutorial/tutorial-preload',
        }
      ],
      answer: [
        'Прелоад-скрипт в Electron — это скрипт, который выполняется перед загрузкой основного скрипта рендеринга. ' +
        'Он используется для настройки безопасности и предоставления доступа к модулям Node.js в процессе рендеринга.',
      ],
      slug: slugs.preloadScript,
    },
    {
      name: 'Как использовать DevTools в Electron?',
      tags: [
        tags.junior,
        tags.debugging
      ],
      references: [
        {
          name: 'Electron Docs: DevTools',
          link: 'https://www.electronjs.org/docs/latest/tutorial/devtools-extension',
        }
      ],
      answer: [
        'DevTools в Electron — это инструменты разработчика, которые позволяют отлаживать и анализировать приложение. ' +
        'Они включают консоль, отладчик, профилировщик и другие инструменты.',
      ],
      slug: slugs["devTools"],
    },
  ]
}

export default electronQuestionCollection;
