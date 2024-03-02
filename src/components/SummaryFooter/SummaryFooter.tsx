import {Button, Text} from "@/components/ui";
import summaryStore from "@/stores/summaryStore.ts";
import {Icon} from "@iconify-icon/react";
import {clsx} from "clsx";
import {computed} from "nanostores";
import {useLocation, useNavigate} from "react-router-dom";
import styles from './summary-footer.module.scss';

export const SummaryFooter = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const summaryUrl = computed(summaryStore.state, (store) => {
    const section = location.pathname.split('/').at(-1)!;
    const slugs = store.questions.map(question => question.slug);
    const parameters = new URLSearchParams({
      section,
      slugs: slugs.toString(),
    });
    return `/summary?${parameters.toString()}`
  });

  const onProceedButton = () => {
    navigate(summaryUrl.get());
    summaryStore.questions.clear();
  };

  return (
    <div className={styles.summaryFooter}>
      <Button onClick={summaryStore.questions.clear} className={clsx(styles.summaryFooter__button, styles.summaryFooter__button_back)}>
        <Icon icon="material-symbols:delete-outline-rounded" />
      </Button>
        <Button
          onClick={onProceedButton}
          className={clsx(styles.summaryFooter__button, styles.summaryFooter__button_proceed)}
        >
          <Text>
            Поделиться
          </Text>
          <Icon icon="ion:md-share" />
        </Button>
    </div>
  );
};
