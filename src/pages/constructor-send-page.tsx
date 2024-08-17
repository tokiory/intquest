import { PageWrapper } from "@/components/PageWrapper";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";
import { Icon } from "@iconify-icon/react/dist/iconify.js";

export const ConstructorSendPage = () => {
  const url = "https://intquest.vercel.app/summary?section=frontend&slugs=html-semantic"

  const onCopyClick = async () => {
    await navigator.clipboard.writeText(url);
  }
  return <PageWrapper className="flex justify-center items-center">
      <Card className="max-w-[512px]">
        <CardHeader>
          <CardTitle>
            Готово!
          </CardTitle>
          <CardDescription>
            Скопируйте ссылку внизу и отправьте ее человеку, который должен ответить на вопросы из составленного вами списка
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="rounded-lg px-4 py-2 overflow-hidden">
            <div className="text-nowrap truncate">
              {url}
            </div>
          </Card>
        </CardContent>
        <CardFooter>
          <Button onClick={onCopyClick} className="flex w-full items-center gap-2">
            Копировать
            <Icon icon="gravity-ui:copy" />
          </Button>
        </CardFooter>
      </Card>
  </PageWrapper>
}
