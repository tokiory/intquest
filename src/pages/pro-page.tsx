import { PageWrapper } from "@/components/PageWrapper";
import { ProComparsionList } from "@/components/ProComparsionList";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Text,
  Title,
} from "@/components/ui";
import { Icon } from "@iconify-icon/react";
import {
  ProFeature,
  ProFeatureImage,
  type ProFeatureImageProperties,
  type ProFeatureProperties,
} from "@/components/ProFeature";

type CardsType =
  | ({ type: "description" } & ProFeatureProperties)
  | ({ type: "image" } & ProFeatureImageProperties);

export const ProPage = () => {
  const cards: CardsType[] = [
    {
      type: "description",
      title: "Отправляйте форму с вопросами кандидатам",
      text: "Отправляйте форму с вопросами кандидатам и получайте уведомления в телеграм с отчетом по завершению прохождения вопросов.",
      className: "col-span-4",
    },
    {
      type: "image",
      className: "col-span-1 hidden sm:block",
      image: "/illustrations/meditating.svg",
    },
    {
      type: "image",
      image: "/illustrations/share.svg",
      className: "col-span-2 row-span-2 hidden sm:block",
    },
    {
      type: "description",
      title: "Смотрите ответы на вопросы",
      text: "В бесплатной версии возможно просмотреть ответы на вопросы 50 раз в месяц. C Pro вы можете просматривать ответы на вопросы без ограничений.",
      className: "col-span-3",
    },
    {
      type: "description",
      title: "Делитесь вопросами без ограничений",
      text: 'По умолчанию функция "Отправить" доступна 3 раза в месяц. С Pro вы можете делиться вопросами неограниченное количество раз.',
      className: "col-span-3",
    },
    {
      type: "description",
      title: "История вопросов и фильтры",
      text: "Вы можете посмотреть историю вопросов прямо в приложении. После отправки формы кандидату вопросы сразу же появятся в истории вопросов.",
      className: "col-span-3",
    },
    {
      type: "image",
      className: "col-span-2 border-none shadow-none hidden sm:block",
      image: "/illustrations/loosing-data.png",
    },
    {
      type: "description",
      title: "Готовая инфраструктура",
      text: "Готовая инфракструктура для вашего проекта и вашей команды.\nВы можете использовать Intquest для создания более эффективных и удобных вопросов для внутренней проверки грейдов или найма нового персонала.",
      className: "col-span-4",
    },
    {
      type: "image" as const,
      image: "/illustrations/reading.svg",
      className: "col-span-1 hidden sm:block",
    },
  ];

  const freeVersionComparsionList = [
    {
      accessible: true,
      text: "Доступ к категориям: Backend, Frontend, QA, DevOps, Design, CS",
    },
    {
      accessible: true,
      text: "Просмотр списка вопросов",
    },
    {
      accessible: true,
      text: "Ссылки на полезные материалы к каждому вопросу",
    },
    {
      accessible: true,
      limited: true,
      text: "Просмотр ответов на вопросы",
    },
    {
      accessible: true,
      limited: true,
      text: "Возможность поделиться коллекцией вопросов",
    },
    { accessible: false, text: "Просмотр истории вопросов" },
    { accessible: false, text: "Продвинутый конструктор вопросов" },
    {
      accessible: false,
      text: "Возможность отправить анкету вопросов кандидату",
    },
    {
      accessible: false,
      text: "Возможность развернуть свою копию Intquest для корпоративного использования",
    },
    { accessible: false, text: "Просмотр отчетов кандидата в Telegram" },
    {
      accessible: false,
      text: "Возможность добавлять новые вопросы через бота в Telegram и внешнее API",
    },
  ];

  const proComparsionList = freeVersionComparsionList.map((item) => ({
    ...item,
    accessible: true,
    limited: false,
  }));

  return (
    <PageWrapper>
      <Title className="flex gap-2 justify-center mb-12 text-center">
        Intquest Pro <Icon icon="fluent-emoji:sparkles" />
      </Title>
      <div className="flex flex-col sm:grid grid-cols-5 gap-3 w-full">
        {cards.map((card, index) =>
          card.type === "description" ? (
            <ProFeature key={index} {...card} />
          ) : (
            <ProFeatureImage key={index} {...card} />
          ),
        )}
      </div>
      <div className="sm:grid grid-cols-2 gap-3 mt-12 w-full">
        <Card className="hidden sm:block">
          <CardHeader>
            <CardTitle>Intquest</CardTitle>
            <CardDescription>
              Все что нужно для самоподготовки к собеседованиям
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProComparsionList list={freeVersionComparsionList} />
            <div className="flex flex-col gap-2 mt-6">
              <Text className="text-xs">
                <sup>*</sup> Возможно просмотреть не более 50 ответов на вопросы
                в месяц
              </Text>
              <Text className="text-xs">
                <sup>*</sup> Возможно отправить не более 3 коллекций вопросов в
                месяц
              </Text>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Intquest Pro</CardTitle>
            <CardDescription>
              Все для найма, проверки грейдов и управления списками вопросов
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProComparsionList list={proComparsionList} />
          </CardContent>
          <CardFooter>
            {/* TODO: Price should come from the server */}
            {/* TODO: Remove the hidden class, when the server will be done */}
            <Button className="hidden w-full">Купить один раз за 1299₽</Button>
            <Button className="w-full">В разработке ✨</Button>
          </CardFooter>
        </Card>
      </div>
    </PageWrapper>
  );
};
