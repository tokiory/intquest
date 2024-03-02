import {Title} from "@/components/ui";
import filterStore from "@/stores/filterStore.ts";
import summaryStore from "@/stores/summaryStore.ts";
import {Icon} from "@iconify-icon/react";
import {useNavigate} from "react-router-dom";
import styles from './logo.module.scss';

export const Logo = () => {
  const navigate = useNavigate();


  const onLogoClick = () => {
    navigate('/');
    filterStore.search.clear();
    filterStore.tags.clear();
    summaryStore.questions.clear();
  };

  return (
    <div onClick={onLogoClick} className={styles.logo}>
      <Title className={styles.logo__text} size="sm">Intquest</Title>
      <Icon icon="fluent-emoji:dodo" />
    </div>
  );
};
