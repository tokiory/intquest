import { Button, Title } from "@/components/ui";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";

export const QuestionListStub = () => {
  return (
    <div className="flex flex-grow flex-col justify-center items-center">
      <Icon icon="fluent-emoji:speak-no-evil-monkey" className="text-7xl" />
      <Title className="text-center">Ничего не найдено</Title>
      <Link target="_blank" to="https://github.com/tokiory/intquest/issues/new">
        <Button className="mt-5">Предложить свой вопрос</Button>
      </Link>
    </div>
  );
};
