import {Title} from "@/components/ui/index.ts";
import filterStore from "@/stores/filterStore.ts";
import summaryStore from "@/stores/summaryStore.ts";
import {Icon} from "@iconify-icon/react";
import {useNavigate} from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();


  const onLogoClick = () => {
    navigate('/');
    filterStore.search.clear();
    filterStore.tags.clear();
    summaryStore.questions.clear();
  };

  return (
    <div onClick={onLogoClick} className="text-transparent flex justify-center items-center gap-3 bg-clip-text font-extrabold select-none cursor-pointer text-3xl">
      <Title className="leading-[1]" size="sm">Intquest</Title>
      <Icon icon="fluent-emoji:dodo" />
    </div>
  );
};
