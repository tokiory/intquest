import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('postgres');

export const slugs = {
    pgumpPurpose: slug('pgdump-purpose'),
    howSecurityEnsured: slug('how-security-ensured'),
    tableMaxSize: slug('table-max-size'),
    compositeType: slug('composite-type'),
    pgcronPurpose: slug('pgcron-purpose'),
    tableInheritance: slug('pgcron-purpose'),
    geqo: slug('geqo'),
};

const browserQuestionCollection: QuestionSection = {
    title: 'Postgres',
    icon: 'fluent-emoji:elephant',
    collection: [
        {
            name: 'Для чего используется метод pg_dump?',
            slug: slugs.pgumpPurpose,
            answer: [
                'Метод pg_dump позволяет создать текстовый файл со набором команд SQL, которые, при выполнении ' +
                'на сервере PostgreSQL, воссоздадут базу данных в том же состоянии, в котором она была на момент ' +
                'создания дампа.',
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Postgres Docs: pg_dump',
                    link: 'https://www.postgresql.org/docs/current/app-pgdump.html'
                },
            ]
        },
        {
            name: 'Как обеспечивается безопасность в PostgreSQL?',
            slug: slugs.howSecurityEnsured,
            answer: [
                'Безопасность в PostgreSQL обеспечивается на нескольких уровнях:',
                'Защита файлов базы данных: только суперпользователь Postgres имеет доступ к чтению файлов, ' +
                'хранящихся в базе данных.',
                'По умолчанию, соединения с клиентом к серверу базы данных разрешены только через локальный Unix-сокет',
                'Доступ клиентов к серверу можно ограничить по IP-адресу и/или имени пользователя.',
                'Аутентификация клиентов может быть реализована с помощью внешних пакетов.',
                'Каждый пользователь в Postgres имеет уникальное имя и, при необходимости, пароль.',
                'Пользователей можно группировать, а доступ к таблицам ограничивать на основе привилегий группы.'
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Postgres Docs: Security',
                    link: 'https://www.postgresql.org/docs/7.0/security.htm'
                },
            ]
        },
        {
            name: 'Каков максимальный размер таблицы в PostgreSQL?',
            slug: slugs.tableMaxSize,
            answer: [
                'Хотя PostgreSQL позволяет пользователям создавать бесконечные базы данных, ' +
                'у него есть ограничение на максимальный размер таблицы. ' +
                'Максимальный размер таблицы в PostgreSQL составляет 32 ТБАЙТ.',
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Postgres Docs: Limits',
                    link: 'https://www.postgresql.org/docs/current/limits.html'
                },
            ]
        },
        {
            name: 'Что такое составной тип в PostgreSQL?',
            slug: slugs.compositeType,
            answer: [
                'Составной тип в PostgreSQL позволяет определять пользовательские структуры данных, ' +
                'которые могут содержать несколько значений разных типов данных. Он позволяет создавать ' +
                'пользовательские типы, состоящие из существующих типов данных. Составные типы полезны, ' +
                'когда вы хотите сгруппировать связанные элементы данных в единую сущность.',
                'Чтобы определить составной тип, вы можете использовать инструкцию CREATE TYPE'
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'Postgres Docs: Composite Types',
                    link: 'https://www.postgresql.org/docs/current/rowtypes.html'
                },
            ]
        },
        {
            name: 'Для чего нужно расширение pg_cron в PostgreSQL?',
            slug: slugs.pgcronPurpose,
            answer: [
                'Расширение pg_cron в PostgreSQL позволяет планировать задания или задачи базы данных с ' +
                'использованием синтаксиса cron. Оно позволяет планировать повторяющиеся или разовые задачи ' +
                'в самой базе данных, устраняя необходимость во внешних инструментах планирования.',
                'Расширение добавляет в вашу базу данных новую схему cron, в которой вы можете создавать ' +
                'задания cron и управлять ими, используя предоставленные функции и таблицы. ' +
                'В таблице cron.job хранятся определения заданий и cron.Функция schedule позволяет планировать ' +
                'или изменять задания, используя выражения cron.'
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'Github repo: pg_cron',
                    link: 'https://github.com/citusdata/pg_cron'
                },
            ]
        },
        {
            name: 'Типы наследования таблиц в PostgreSQL?',
            slug: slugs.tableInheritance,
            answer: [
                'Single Table Inheritance (STI): одно родительское таблица, множество дочерних таблиц.',
                'Multiple Table Inheritance (MTI): дочерняя таблица наследует от нескольких родительских таблиц.',
                'Joined Table Inheritance (JTI): родительская таблица содержит общие столбцы, дочерние таблицы - ' +
                'только уникальные столбцы.',
                'Наследование таблиц определяется с помощью ключевого слова INHERITS в операторе CREATE TABLE.'
            ],
            tags: [
                tags.senior,
            ],
            references: [
                {
                    name: 'Postgres Docs: Inheritance',
                    link: 'https://www.postgresql.org/docs/current/tutorial-inheritance.html'
                },
            ]
        },
        {
            name: 'Как работает генетическая оптимизация запросов (GEQO)?',
            slug: slugs.geqo,
            answer: [
                'Генетическая оптимизация запросов (GEQO) - это метод оптимизации запросов в PostgreSQL, ' +
                'который использует генетические алгоритмы для поиска оптимального плана выполнения запроса.',
                '1. Инициализация: GEQO создает начальную популяцию планов выполнения запроса, используя случайные ' +
                'комбинации операторов и таблиц.',
                '2. Оценка: Каждый план выполнения запроса оценивается по критериям эффективности, таким как время ' +
                'выполнения, количество операций ввода-вывода и т.п.',
                '3. Селекция: GEQO выбирает лучшие планы выполнения запроса из популяции, используя методы селекции, ' +
                'такие как турнирная селекция или пропорциональная селекция.',
                '4. Скрещивание: GEQO скрещивает выбранные планы выполнения запроса, чтобы создать новые планы, ' +
                'используя методы скрещивания, такие как одноточечное скрещивание или двухточечное скрещивание.',
                '5. Мутация: GEQO вносит случайные изменения в новые планы выполнения запроса, чтобы избежать ' +
                'локальных оптимумов.',
                '6. Повторение: GEQO повторяет шаги 2-5 до тех пор, пока не будет найден оптимальный план выполнения ' +
                'запроса или пока не будет достигнуто максимальное количество итераций.'
            ],
            tags: [
                tags.senior,
            ],
            references: [
                {
                    name: 'Postgres Docs: Genetic Query Optimization (GEQO)',
                    link: 'https://www.postgresql.org/docs/current/geqo-pg-intro.html'
                },
                {
                    name: 'Habr: Как работает оптимизатор PostgreSQL при большом количестве таблиц в запросе',
                    link: 'https://habr.com/ru/companies/postgrespro/articles/662021/'
                },
            ]
        },
    ]
};

export default browserQuestionCollection;
