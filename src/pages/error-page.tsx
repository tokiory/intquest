import {Button, Title} from "@/components/ui";
import {Icon} from "@iconify-icon/react";
import {Link} from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center gap-6">
      <Icon icon="fluent-emoji:skull-and-crossbones" style={{fontSize: '128px'}}/>
      <Title className="text-center" size="lg">Данная страница не найдена!</Title>
      <Link to="/">
        <Button className="flex gap-2">
          Вернуться на главную страницу <Icon icon="fluent-emoji:t-rex"/>
        </Button>
      </Link>
    </div>
  );
};
