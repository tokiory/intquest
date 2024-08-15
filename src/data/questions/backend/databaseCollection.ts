import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('database');

export const slugs = {
    differenceBetweenClusteredAndNonClustered: slug('difference-between-clustered-and-non-clustered'),
    indexesMulticolumn: slug('indexes-multicolumn'),
    columnsOrderInCompositeIndex: slug('columns-order-in-composite-index'),
    isolationLevels: slug('indexes-multicolumn'),
    mmvc: slug('mmvc'),
};

const browserQuestionCollection: QuestionSection = {
    title: 'Database',
    icon: 'fluent-emoji:bento-box',
    collection: [
        {
            name: 'В чем разница между кластеризованным и некластеризованным индексами в SQL?',
            slug: slugs.differenceBetweenClusteredAndNonClustered,
            answer: [
                'Кластеризованный индекс:',
                'Определяет физический порядок данных в таблице.',
                'Только один кластеризованный индекс на таблицу.',
                'В MySQL, если первичный ключ не определен, в качестве кластеризованного индекса используется ' +
                'первый уникальный индекс, в котором все столбцы являются NOT NULL.',
                'Некластеризованный индекс:',
                'Отдельная структура данных, хранящая значения индекса и указатели на фактические строки данных.',
                'На одной таблице может быть несколько некластеризованных индексов.',
                'Не определяет физический порядок данных.',
                'Требует дополнительного шага для поиска фактических строк данных по сравнению с ' +
                'кластеризованным индексом.'
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Yandex Questions: В чем разница между кластеризованным и некластеризованным индексами в SQL?',
                    link: 'https://yandex.ru/q/datascience/10931953921/'
                },
            ]
        },
        {
            name: 'Что такое составной индекс?',
            slug: slugs.indexesMulticolumn,
            answer: [
                'Построенный с посыланием на несколько колонок одновременно. Иначе говоря, это комплексный индекс, ' +
                'состоящий из нескольких колонок.'
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Postgres Docs: Составные индексы',
                    link: 'https://postgrespro.ru/docs/postgrespro/9.5/indexes-multicolumn'
                },
            ]
        },
        {
            name: 'Имеет ли значение порядок колонок в составном индексе?',
            slug: slugs.columnsOrderInCompositeIndex,
            answer: [
                'Да.',
                'При создании составного индекса сначала строится обычный индекс для его первой колонки, ' +
                'а потом уже на основе него строится индекс для второй колонки и так дальше.',
                'Другими словами, колонки, по которым поиск выполняется чаще всего, должны стоять в составном ' +
                'индексе первыми.'
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Postgres Docs: Составные индексы',
                    link: 'https://postgrespro.ru/docs/postgrespro/9.5/indexes-multicolumn'
                },
            ]
        },
        {
            name: 'Уровни изолированности транзакций',
            slug: slugs.isolationLevels,
            answer: [
                'Каждый уровень изолированности разрешает/запрещает определенные действия (возможности):',
                'фантомное чтение — в рамках одной транзакции один и тот же запрос данных дает разные результаты, ' +
                'что происходит из-за добавления данных другой (параллельной) транзакцией.',
                'неповторяющееся чтение — в рамках одной транзакции один и тот же запрос данных дает разные ' +
                'результаты, что происходит из-за изменения или удаления данных другой (параллельной) транзакцией.',
                '«грязное» чтение — чтение данных, добавленных или измененных транзакцией, ' +
                'которая впоследствии не откатится.',
                'потерянное обновление — при одновременном изменении одного блока данных разными транзакциями ' +
                'теряются все изменения, кроме последнего (похоже на “состояние гонки” в многопоточности).'
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'Postgres Docs: Изоляция транзакций',
                    link: 'https://postgrespro.ru/docs/postgrespro/9.5/transaction-iso'
                },
                {
                    name: 'Уровни изолированности транзакций для самых маленьких',
                    link: 'https://habr.com/ru/articles/469415/'
                },
            ]
        },
        {
            name: 'Что такое MVCC?',
            slug: slugs.mmvc,
            answer: [
                'Это механизм управления параллельным доступом к данным в базе данных',
                ' MVCC позволяет разным транзакциям видеть базу данных в разных “версиях” (или состояниях), ' +
                'что обеспечивает высокую степень изоляции и консистентности данных.',
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'Транзакции и MVCC в PostgreSQL',
                    link: 'https://aristov.tech/blog/tranzakczii-i-mvcc/'
                },
            ]
        },
    ]
};

export default browserQuestionCollection;
