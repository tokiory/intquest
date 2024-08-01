import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('python');

export const slugs = {
    syntaxErrorCheck: slug('syntax-error-check'),
    defaultArgumentsWithMutableTypes: slug('default-arguments-with-mutable-types'),
    interAndNextDistinction: slug('inter-next-distinction'),
    elseInTryExcept: slug('else-in-try-except'),
    namespacesInPython: slug('namespaces-in-python'),
    mro: slug('mro'),
    compilationProcess: slug('compilation-process'),
    slotsInClasses: slug('slots-in-classes'),
    stringInterning: slug('string-interning'),
    metaclasses: slug('metaclasses'),
    tailCallOptimization: slug('tail-call-optimization'),
    filePth: slug('file-pth'),
};

const browserQuestionCollection: QuestionSection = {
    title: 'Python 3',
    icon: 'fluent-emoji:snake',
    collection: [
        {
            name: 'Как проверить файл .py на синтаксические ошибки, не запуская его?',
            slug: slugs.syntaxErrorCheck,
            answer: [
                'Можно использовать командную строку или терминал для проверки файла .py ' +
                'на наличие синтаксических ошибок, не запуская его, используя флаг -m с модулем py_compile',
                'python -m py_compile file_name.py',
                'Эта команда выполнит проверку файла и выведет описание любых синтаксических ошибок, ' +
                'которые были найдены, или пустой вывод, если ошибок нет.'
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Python3 docs. py_compile',
                    link: 'https://docs.python.org/3/library/py_compile.html'
                },
            ]
        },
        {
            name: 'Почему мутабельный объект, например список, нельзя использовать как аргумент по умолчанию?',
            slug: slugs.defaultArgumentsWithMutableTypes,
            answer: [
                'Аргументы со значениями по умолчанию вычисляются при определении функции, а не при ее вызове. ' +
                'Использование изменяемого типа (например, списка) в качестве значения по умолчанию ' +
                'может привести к неожиданному поведению, так как каждый вызов, изменяющий список, ' +
                'также изменит значение по умолчанию для последующих вызовов.',
                'Вместо использования пустого списка в качестве значения по умолчанию лучше использовать None ' +
                'и создавать новый список внутри функции при необходимости. '
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Default Parameter Values in Python',
                    link: 'https://web.archive.org/web/20200221224620id_/http://effbot.org/zone/default-values.htm'
                },
                {
                    name: 'Python3 docs. Function definitions',
                    link: 'https://docs.python.org/3/reference/compound_stmts.html#function-definitions'
                },
            ]
        },
        {
            name: 'Основное различие между методами iter и next?',
            slug: slugs.interAndNextDistinction,
            answer: [
                'Методы iter и next в Python обеспечивают основу для реализации итераторов - объектов, ' +
                'которые могут быть использованы для итерации по элементам контейнера.',
                'Метод iter создает итератор, возвращая объект, который содержит метод next. ' +
                'Этот метод next отвечает за получение следующего элемента при итерации. ' +
                'Он должен либо возвращать следующий элемент, либо вызывать исключение StopIteration, ' +
                'если элементы в итераторе закончились.',
                'Таким образом, iter создает итератор, а next последовательно получает элементы из этого итератора.'
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Python3 docs. Iterator term',
                    link: 'https://docs.python.org/3/glossary.html#term-iterator'
                },
                {
                    name: 'Python3 docs. Iter',
                    link: 'https://docs.python.org/3/library/functions.html#iter'
                },
                {
                    name: 'Python3 docs. Next',
                    link: 'https://docs.python.org/3/library/functions.html#next'
                },
            ]
        },
        {
            name: 'Когда будет выполнена ветка else в конструкции try…except…else?',
            slug: slugs.elseInTryExcept,
            answer: [
                'Ветка else в конструкции try...except...else выполняется, если в блоке try не возникало исключений. ' +
                'Если в блоке try произошло исключение, выполнение переходит к соответствующему блоку except, ' +
                'а ветка else пропускается'
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Python3 docs. Handling exceptions',
                    link: 'https://docs.python.org/3/tutorial/errors.html#handling-exceptions'
                },
            ]
        },
        {
            name: 'Пространства имен в Python',
            slug: slugs.namespacesInPython,
            answer: [
                'Пространство имен - совокупность имен и объектов. ' +
                'Python имеет встроенное, глобальное, локальное, модульное и классов.',
                'Основные пространства имен:',
                'builtins: встроенные функции и типы',
                '__main__: определения главного скрипта',
                '__name__: имя текущего модуля',
                'globals(): глобальные переменные',
                'locals(): локальные переменные',
                'Это далеко не полный список, но это некоторые из наиболее распространенных пространств имен в Python.'
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Python3 docs. Python Scopes and Namespaces',
                    link: 'https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces'
                },
            ]
        },
        {
            name: 'Порядок разрешения методов',
            slug: slugs.mro,
            answer: [
                'Метод разрешения порядка (MRO) - это механизм, используемый в Python для определения ' +
                'последовательности поиска методов при наследовании классов.' +
                'Когда вызывается метод на экземпляре класса, Python ищет этот метод в самом классе, ' +
                'а затем в его родительских классах в порядке, определенном MRO. ' +
                'Таким образом, MRO управляет тем, как Python обрабатывает методы, ' +
                'унаследованные из нескольких родительских классов.',
                'MRO определяется с помощью алгоритма C3, который гарантирует, ' +
                'что порядок разрешения методов соблюдает локальный порядок наследования каждого класса ' +
                'и не создает циклов. Например, для класса A, наследующегося от B и C, где B наследуется от D, а C от E, ' +
                'MRO будет [A, B, D, C, E, object]. Это означает, что если метод определен в классе A и его родителях, ' +
                'будет вызван метод из класса A.'
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'Python3 docs. Method Resolution Order',
                    link: 'https://docs.python.org/3/howto/mro.html#python-2-3-mro'
                },
                {
                    name: 'Python3 docs. __mro__',
                    link: 'https://docs.python.org/3/library/stdtypes.html#class.__mro__'
                },
                {
                    name: 'Python3 docs. Custom classes',
                    link: 'https://docs.python.org/3/library/stdtypes.html#class.__mro__'
                },
            ]
        },
        {
            name: 'Процесс компиляции в Python',
            slug: slugs.compilationProcess,
            answer: [
                'Python - это интерпретируемый язык, который не требует полноценной компиляции, как C или C++. ' +
                'Вместо этого, Python использует компиляцию байт-кода. При запуске скрипта на Python, ' +
                'интерпретатор компилирует исходный код в байт-код, который затем выполняется виртуальной машиной Python ' +
                '(PVM). Скомпилированный байт-код сохраняется в каталоге pycache с расширением .pyc. ' +
                'Если файл .pyc новее, чем соответствующий файл .py, интерпретатор использует уже скомпилированный ' +
                'байт-код, что ускоряет запуск скрипта. Таким образом, компиляция в Python происходит автоматически, ' +
                'без явного шага компиляции со стороны пользователя.'
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'Python3 docs. Complied python files',
                    link: 'https://docs.python.org/3/tutorial/modules.html#compiled-python-files'
                },
                {
                    name: 'Python3 docs. Term bytecode',
                    link: 'https://docs.python.org/3/glossary.html#term-bytecode'
                },
            ]
        },
        {
            name: 'Что такое атрибут slots в классах?',
            slug: slugs.slotsInClasses,
            answer: [
                'Атрибут __slots__ в классах Python используется для оптимизации памяти и производительности. ' +
                'Он позволяет указать фиксированный набор атрибутов, которые будут доступны для экземпляров класса. ' +
                'Это избавляет от необходимости создавать словарь для хранения атрибутов, ' +
                'что экономит память и ускоряет доступ к атрибутам. ' +
                'Использование __slots__ целесообразно, когда у класса ожидается большое количество экземпляров ' +
                'с небольшим числом атрибутов.'
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'Python3 docs. __slots__',
                    link: 'https://docs.python.org/3/reference/datamodel.html#slots'
                },
                {
                    name: 'Using __slots__ to Store Object Data in Python',
                    link: 'https://stackabuse.com/using-slots-to-store-object-data-in-python/'
                },
            ]
        },
        {
            name: 'Что такое интернирование строк?',
            slug: slugs.stringInterning,
            answer: [
                'Интернирование строк - это механизм, при котором одинаковые строковые литералы в коде ссылаются на один' +
                'и тот же объект в памяти. Это оптимизирует использование памяти и ускоряет сравнение строк.',
                'В Python интернирование применяется автоматически для строковых констант, состоящих из символов ASCII ' +
                'длиной до 20 символов. Это ограничение связано с потенциальными проблемами производительности ' +
                'при работе с большими строками.',
                'Интернирование строк является одним из способов оптимизации производительности в Python. ' +
                'Он позволяет экономить память и ускорять операции со строками за счет устранения дублирования объектов.'
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'String interning',
                    link: 'https://svemaraju.github.io/python-string-interning.html'
                },
                {
                    name: 'Python3 docs. Sys.intern',
                    link: 'https://docs.python.org/3/library/sys.html#sys.intern'
                },
            ]
        },
        {
            name: 'Что такое метаклассы и когда их стоит применять?',
            slug: slugs.metaclasses,
            answer: [
                'Метаклассы - это классы, определяющие поведение других классов. ' +
                'Они позволяют динамически изменять способ создания и обработки классов в Python. ',
                'Метаклассы полезны для:',
                'Динамического изменения поведения классов (добавление/удаление атрибутов, методов)',
                'Создания классов из данных, известных только во время выполнения',
                'Разработки фреймворков и библиотек с гибкой настройкой',
                'Создания классов со специальными свойствами (автоматическая регистрация, сериализация)'
            ],
            tags: [
                tags.senior,
            ],
            references: [
                {
                    name: 'Python3 docs. Metaclasses',
                    link: 'https://docs.python.org/3/reference/datamodel.html#metaclasses'
                },
            ]
        },
        {
            name: 'Отсутствие оптимизации хвостовой рекурсии в Python и способы ее реализации',
            slug: slugs.tailCallOptimization,
            answer: [
                'В Python нет автоматической оптимизации хвостовой рекурсии. Это связано с тем, ' +
                'что такая оптимизация может привести к переполнению стека вызовов. ' +
                'Поэтому в Python принято использовать итеративный подход при написании функций, ' +
                'которые в других языках могли бы быть реализованы через хвостовую рекурсию.',
                'Несмотря на это, вы можете увеличить максимальную глубину стека вызовов, используя функцию ' +
                'sys.setrecursionlimit(). Однако это не рекомендуется, так как установка слишком большого ' +
                'лимита может негативно сказаться на производительности, а слишком маленький лимит приведет ' +
                'к ошибкам переполнения стека вызовов'
            ],
            tags: [
                tags.senior,
            ],
            references: [
                {
                    name: 'Python3 docs. sys.setrecursionlimit',
                    link: 'https://docs.python.org/3.11/library/sys.html#sys.setrecursionlimit'
                },
                {
                    name: 'Настройка рекурсии в Python',
                    link: 'https://docs-python.ru/standart-library/modul-sys-python/nastrojka-rekursii/'
                },
            ]
        },
        {
            name: 'Что такое файлы .pth',
            slug: slugs.filePth,
            answer: [
                'Файлы с расширением .pth - это текстовые файлы, используемые в Python для настройки путей поиска ' +
                'импортируемых модулей. Каждая строка в таком файле задает директорию, которую нужно ' +
                'добавить в sys.path - переменную, определяющую, где Python будет искать модули.',
                'Файлы .pth очень удобны для импорта модулей из нестандартных директорий, без необходимости ' +
                'изменять сам код. Вместо этого, нужно просто добавить путь к нужному каталогу в .pth-файле. ' +
                'Такой подход широко используется в экосистеме Python, в частности, в различных фреймворках.'
            ],
            tags: [
                tags.senior,
            ],
            references: [
                {
                    name: 'What exactly is the .pth file?',
                    link: 'https://medium.com/@yulin_li/what-exactly-is-the-pth-file-9a487044a36b'
                },
                {
                    name: 'Python and the Module Search Path',
                    link: 'https://towardsdatascience.com/python-and-the-module-search-path-e71ae7a7e65f'
                },
            ]
        },
    ]
};

export default browserQuestionCollection;
