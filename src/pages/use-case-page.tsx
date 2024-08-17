import { PageWrapper } from "@/components/PageWrapper";
import { Title, Text, Link } from "@/components/ui";
import { Icon } from "@iconify-icon/react";

export const UseCasePage = () => {
  return (
    <PageWrapper>
      <Title className="flex gap-2">
        Юзкейсы
        <Icon icon="fluent-emoji:eyes" />
      </Title>
      <hr className="h-px w-full bg-secondary mt-4" />
      <Text className="mt-8 flex text-xl font-semibold items-center gap-2">
        <Icon
          height="32"
          className="flex pb-1"
          icon="fluent-emoji:woman-dancing"
        />
        Пользователи
      </Text>
      <ul className="list ml-4 mt-4 list-disc flex flex-col gap-1">
        <li>
          С помощью Intquest вы можете подготовиться к собеседованию, а также
          провести самопроверку изученных материалов;
        </li>
        <li>
          Вы можете выучить новые технологии и посмотреть частозадаваемые
          вопросы по вашему новому стеку;
        </li>
        <li>
          Делитесь вопросами с друзьями и коллегами для дальнейшего обсуждения;
        </li>
        <li>
          Если у вас есть ссылка от собеседующего, то вы можете просмотреть все
          вопросы, которые были заданы вам на собеседовании;
        </li>
      </ul>
      <img
        src="/illustrations/user-flow.svg"
        className="w-full mt-12 dark:invert"
      />

      <hr className="h-0 mt-8 w-full border border-dashed border-stone-300 dark:border-stone-700" />

      <Text className="mt-8 flex text-xl font-semibold items-center gap-2">
        <Icon height="32" className="flex pb-1" icon="fluent-emoji:cityscape" />
        Компании
      </Text>
      <ul className="list ml-4 mt-4 list-disc flex flex-col gap-1">
        <li>
          С помощью Intquest вы можете заранее создать список вопросов для
          кандидатов на определенную позицию, тем самым экономя время на
          первичном скрининге;
        </li>
        <li>
          Вы можете просмотреть историю ответов на вопросы от различных
          кандидатов
        </li>
        <li>
          Вы можете добавлять новые вопросы, темы и целые разделы через бота в
          Telegram и внешнее API;
        </li>
        <li>
          В <Link to="/pro">Pro</Link> версии появляется возможность развернуть
          свою копию Intquest для корпоративного использования: проведение
          внутренних собеседований, скрининг грейдов сотрудников и так далее;
        </li>
      </ul>
      <img
        src="/illustrations/company-flow.svg"
        className="w-full mt-12 dark:invert"
      />
    </PageWrapper>
  );
};
