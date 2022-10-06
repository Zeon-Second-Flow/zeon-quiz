import React from "react";
import styles from "./NamePage.module.scss";

export const NamePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.square}></div>
        <div className={styles.circle}></div>
        <div className={styles.enterBlockWrapper}>
          <div className={styles.enterBlock}>
            <div className={styles.title}></div>
            <div className={styles.form}>
              <input
                className={styles.common}
                type="text"
                placeholder="Nickname"
              />
              <div>
                <button className={styles.common}>OK, go!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
