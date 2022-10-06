import React from "react";
import styles from "./EnterPage.module.scss";

export const EnterPage = () => {
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
                placeholder="Game PIN"
              />
              <div>
                <button className={styles.common}>Enter</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.extraInfo}>
          <p>
            Create your own kahoot for free at <span>kahoot.com</span>
          </p>
          <span>Terms | Privacy</span>
        </div>
      </div>
    </div>
  );
};
