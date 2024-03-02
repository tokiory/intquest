import {Button, Title} from "@/components/ui";
import {Icon} from "@iconify-icon/react";
import {Link} from "react-router-dom";
import styles from './error-page.module.scss';

export const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <Icon icon="fluent-emoji:skull-and-crossbones" style={{fontSize: '128px'}}/>
      <Title size="lg">Данная страница не найдена!</Title>
      <Link to="/">
        <Button>
          Вернуться на главную страницу <Icon icon="fluent-emoji:t-rex"/>
        </Button>
      </Link>
    </div>
  );
};
