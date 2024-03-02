import {Header} from "@/components/Header";
import styles from './defaultlayout.module.scss';
import {Outlet} from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div className={styles.defaultlayout}>
      <Header />
      <Outlet />
    </div>
  );
};
