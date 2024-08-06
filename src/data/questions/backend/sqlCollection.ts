import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('sql');

export const slugs = {
    subsets: slug('subsets'),
    waysToJoinTables: slug('ways-to-join-tables'),
    functionTypes: slug('function-types'),
    statementsExecutingOrder: slug('statements-executing-order'),
    nestedAndCorrelatedSubqueries: slug('nested-and-correlated-subqueries'),
    joinVsSubquery: slug('join-vs-subquery'),
};

const browserQuestionCollection: QuestionSection = {
    title: 'SQL',
    icon: 'fluent-emoji:postbox',
    collection: [
        {
            name: 'Из каких подмножеств состоит SQL?',
            slug: slugs.subsets,
            answer: [
                'SQL состоит из:',
                'DDL (язык описания данных) - это набор команд, которые позволяют создавать, изменять и удалять ' +
                'объекты в базе данных, такие как таблицы, представления, индексы и т.д.',
                'DML (язык управления данными) - это набор команд, которые дают возможность работать с ' +
                'данными в базе данных, а именно вставлять, обновлять, удалять и выбирать данные.',
                'DCL (язык контролирования данных) - это набор команд, которые служат для управления правами доступа ' +
                'к базе данных. Например, предоставлять или отзывать разрешения на выполнение различных операций.',
                'TCL (язык управления транзакциями) - это команды, которые используются для обеспечения ' +
                'согласованности базы данных и управления транзакциями.'
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'DDL, DML, DCL и TCL в языке SQL',
                    link: 'https://sky.pro/media/gruppy-operatorov-sql/'
                },
            ]
        },
        {
            name: 'Какие способы объединения таблиц есть в SQL?',
            slug: slugs.waysToJoinTables,
            answer: [
                'Будут разниться от разных диалектов, но если перечислять все: ',
                'INNER JOIN (Внутреннее соединение)',
                'RIGHT JOIN (Правое соединение)',
                'LEFT JOIN (Левое соединение)',
                'FULL JOIN (Полное соединение)',
                'CROSS JOIN  (Прекрестное (или декартово) произведение)',
                'SEMI JOIN  (Полуобъединение)',
                'NATURAL JOIN (Естественное объединение)',
                'Альтернативный синтаксис: IN, NOT EXISTS, NOT IN (Подзапрос)',
                'ANTI JOIN (Антиобъединение)',
                'LATERAL JOIN (Латеральное объединение)',
                'MULTISET',
                'APPLY'
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Типы соединения',
                    link: 'https://learndb.ru/articles/article/30'
                },
                {
                    name: '8 способов объединения (JOIN) таблиц в SQL. Часть 1',
                    link: 'https://datareview.info/article/8-sposobov-obedineniya-join-tablic-v-sql-chast-1/'
                },
                {
                    name: '8 способов объединения (JOIN) таблиц в SQL. Часть 2',
                    link: 'https://datareview.info/article/8-sposobov-obedineniya-join-tablic-v-sql-chast-2/'
                },
            ]
        },
        {
            name: 'Какие типы SQL-функций вы знаете?',
            slug: slugs.functionTypes,
            answer: [
                'Агрегатные функции (Aggregate functions) - работают с несколькими, обычно сгруппированными, ' +
                'записями для заданных столбцов таблицы и возвращают единственное значение (обычно по группе).',
                'Скалярные функции (Scalar functions) - работают с каждым отдельным значением ' +
                'и возвращают единственное значение.',
                'С другой стороны, SQL-функции могут быть встроенными (определенными системой) ' +
                'или определенными пользователем (созданными пользователем для их конкретных потребностей).'
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'SQL Functions (Aggregate and Scalar Functions)',
                    link: 'https://www.geeksforgeeks.org/sql-functions-aggregate-scalar-functions/'
                },
            ]
        },
        {
            name: 'В каком порядке интерпретатор выполняет общие операторы в запросе SELECT?',
            slug: slugs.statementsExecutingOrder,
            answer: [
                'FROM - JOIN - ON - WHERE - GROUP BY - HAVING - SELECT - ORDER BY - LIMIT'
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'SQL Query Order of Execution',
                    link: 'https://www.sisense.com/blog/sql-query-order-of-operations/'
                },
            ]
        },
        {
            name: 'В чем разница между вложенными и коррелированными подзапросами?',
            slug: slugs.nestedAndCorrelatedSubqueries,
            answer: [
                'Коррелированный подзапрос (correlated subquery) - это внутренний запрос, вложенный в более ' +
                'крупный (внешний) запрос, который ссылается на значения из внешнего запроса для своего ' +
                'выполнения, что означает, что коррелированный подзапрос зависит от своего внешнего запроса.',
                'В отличие от этого, некоррелированный подзапрос (non-correlated subquery) не зависит от ' +
                'данных из внешнего запроса и может быть выполнен независимо от него.',
                'Это важно для оптимизации производительности SQL-запросов, поскольку коррелированные ' +
                'подзапросы обычно менее эффективны, чем некоррелированные.'
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'Understanding the Difference: Subquery vs. Correlated Query',
                    link: 'https://dev.to/pwn0x80/subquery-vs-correlated-query-1622'
                },
                {
                    name: 'Difference between Nested & Correlated Subqueries',
                    link: 'https://sql-plsql.blogspot.com/2011/09/difference-nested-correlated-subquery.html'
                },
            ]
        },
        {
            name: 'Что производительнее: JOIN или подзапрос в SQL?',
            slug: slugs.joinVsSubquery,
            answer: [
                'В большинстве случаев использование оператора JOIN обеспечивает более высокую производительность ' +
                'при работе с большими наборами данных и многочисленными таблицами, особенно когда применяются ' +
                'индексы. Конструкции JOIN идеально подходят для объединения строк и легко оптимизируются ' +
                'SQL-движками с помощью планов выполнения. В то же время, подзапросы (SUBQUERY) могут оказываться ' +
                'более удобными при необходимости улучшить читаемость кода или при работе с агрегированными ' +
                'данными и сложными фильтрами в рамках одной таблицы. Отметим, что подзапросы могут нежелательно ' +
                'влиять на производительность из-за возможного повторения выполнения внутренних запросов.',
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'Сравнение производительности: JOIN против подзапросов в SQL',
                    link: 'https://sky.pro/wiki/sql/sravnenie-proizvoditelnosti-join-protiv-podzaprosov-v-sql/'
                },
                {
                    name: 'Вложенные запросы против JOIN в SQL',
                    link: 'https://teletype.in/@pythontalk/subquery_vs_join'
                },
            ]
        },
    ]
};

export default browserQuestionCollection;
