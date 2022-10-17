import React from "react";
import styles from "./YourIn.module.scss";

export const YourIn = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.square}></div>
        <div className={styles.circle}></div>
        <div className={styles.enterBlockWrapper}>
          <div className={styles.enterBlock}>
            <div className={styles.info}>
              <h2>Your're in!</h2>
              <p>See your nickname on screen?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
