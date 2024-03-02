import {Logo} from "@/components/ui";
import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo/>
    </div>
  );
};
