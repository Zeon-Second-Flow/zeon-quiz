import { InfoPage } from "@/components/InfoPage/InfoPage";
import React from "react";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.block}>MainPage</div>
        <div className={styles.block}>More Main Page</div>
        <InfoPage />
      </div>
    </div>
  );
};
