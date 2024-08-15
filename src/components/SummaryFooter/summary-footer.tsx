import { Button } from "@/components/ui";
import summaryStore from "@/stores/summaryStore.ts";
import { Icon } from "@iconify-icon/react";
import { computed } from "nanostores";
import { useLocation, useNavigate } from "react-router-dom";

export const SummaryFooter = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const summaryUrl = computed(summaryStore.state, (store) => {
    const section = location.pathname.split("/").at(-1)!;
    const slugs = store.questions.map((question) => question.slug);
    const parameters = new URLSearchParams({
      section,
      slugs: slugs.toString(),
    });
    return `/summary?${parameters.toString()}`;
  });

  const onProceedButton = () => {
    navigate(summaryUrl.get());
    summaryStore.questions.clear();
  };

  return (
    <div className="fixed border-t bg-background bottom-0 left-0 w-full py-4 px-5 flex items-center justify-between">
      <Button
        onClick={summaryStore.questions.clear}
        variant="destructive"
        size="icon"
      >
        <Icon icon="material-symbols:delete-outline-rounded" />
      </Button>
      <Button onClick={onProceedButton}>
        Поделиться
        <Icon className="ml-2" icon="ion:md-share" />
      </Button>
    </div>
  );
};
