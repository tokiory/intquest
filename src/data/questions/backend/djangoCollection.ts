import tags from "@/data/tags";
import type {QuestionSection} from "@/types/question.types.ts";
import {createQuestionSlug} from "@/utils/slug.ts";

const slug = createQuestionSlug('django');

export const slugs = {
    modelInheritanceStyles: slug('model-inheritance-styles'),
    doesDjangoSupportMultiColumnPrimaryKeys: slug('does-django-support-multi-column-primary-keys'),
    requestProcessing: slug('request-processing'),
    sqlQueryCounts: slug('sql-query-counts'),
};

const browserQuestionCollection: QuestionSection = {
    title: 'Django',
    icon: 'logos:django-icon',
    collection: [
        {
            name: 'Перечислите стили наследования модели Django?',
            slug: slugs.modelInheritanceStyles,
            answer: [
                'В Django существует три возможных стиля наследования.',
                'Абстрактные базовые классы: Этот стиль используется, когда вы хотите, чтобы родительский класс ' +
                'содержал только информацию, которую вы не хотите вводить для каждой дочерней модели.',
                'Многотабличное наследование: Этот стиль используется, если вы разделяете существующую модель ' +
                'на подклассы и хотите, чтобы каждая модель имела собственную таблицу базы данных.',
                'Прокси модели: Вы можете использовать эту модель, если хотите изменить поведение модели ' +
                'на уровне Python, не меняя поля модели.'
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Django docs. Model inheritance',
                    link: 'https://docs.djangoproject.com/en/5.0/topics/db/models/#model-inheritance'
                },
            ]
        },
        {
            name: 'Поддерживает ли Django первичные ключи с несколькими столбцами?',
            slug: slugs.doesDjangoSupportMultiColumnPrimaryKeys,
            answer: [
                'Нет. Поддерживаются только одностолбцовые первичные ключи.',
                'Но на практике это не является проблемой, поскольку ничто не мешает вам добавить другие ограничения ' +
                '(используя опцию модели unique_together или создав ограничение непосредственно в базе данных) ' +
                'и обеспечить уникальность на этом уровне. Первичные ключи с одним столбцом необходимы для работы ' +
                'таких вещей, как интерфейс администратора; например, вам нужно одно значение, чтобы указать объект ' +
                'для редактирования или удаления.'
            ],
            tags: [
                tags.junior,
            ],
            references: [
                {
                    name: 'Django docs. Automatic primary key fields',
                    link: 'https://docs.djangoproject.com/en/5.1/topics/db/models/#automatic-primary-key-fields'
                },
                {
                    name: 'Django docs. Unique together',
                    link: 'https://docs.djangoproject.com/en/5.0/ref/models/options/#unique-together'
                },
            ]
        },
        {
            name: 'Объясните, как обрабатывается запрос (request) в Django?',
            slug: slugs.requestProcessing,
            answer: [
                '1. Django определяет, какой корневой URL-конфигурационный модуль (URLconf) должен быть использован',
                '2. Загружается этот Python-модуль, и Django ищет переменную urlpatterns',
                '3. Django пробегает по этим URL-паттернам, пока не находит первое совпадение с запрошенным URL',
                '4. Django импортирует и вызывает соответствующее представление (view)',
                '5. Если ни один из URL-паттернов не соответствует запрошенному URL, Django вызывает ' +
                'представление для обработки ошибки.'
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'Django docs. How Django processes a request',
                    link: 'https://docs.djangoproject.com/en/5.0/topics/http/urls/#how-django-processes-a-request'
                },
            ]
        },
        {
            name: 'Как получить количество SQL-запросов во время сеанса в Django',
            slug: slugs.sqlQueryCounts,
            answer: [
                'Убедитесь, что режим отладки включен (settings.DEBUG = True)',
                'Используйте connection.queries из django.db',
                'print(f"Количество запросов: {len(connection.queries)}")'
            ],
            tags: [
                tags.middle,
            ],
            references: [
                {
                    name: 'Django docs. How can I see the raw SQL queries Django is running?',
                    link: 'https://docs.djangoproject.com/en/5.0/faq/models/#how-can-i-see-the-raw-sql-queries-django-is-running'
                },
            ]
        },
    ]
};

export default browserQuestionCollection;
