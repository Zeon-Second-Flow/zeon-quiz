import React from "react";
import styles from "./InfoPage.module.scss";

export const InfoPage = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <div className={styles.blockContext}>
            <h2>Make learning awesome!</h2>
            <p>Kahoot! delivers engaging learning to billions.</p>
            <button>Let's play!</button>
          </div>
          <img
            className={styles.img}
            src="https://kahoot.com/files/2020/05/main-image-cropped.jpg"
            alt="game-pic-1"
          />
        </div>
        <div className={styles.block}>
          <div className={styles.blockContext}>
            <h2>Host an inspiring planning workshop with Kahoot!</h2>
            <p>
              Recap company strategy, identify opportunities, and align on team
              goals during your next planning session with Kahoot! 360.
            </p>
            <button>Create a game!</button>
          </div>
          <img
            className={styles.img}
            src="https://kahoot.com/files/2022/09/mosaic-wordcloud-desktop-1.png"
            alt="game-pic-2"
          />
        </div>
      </div>
    </div>
  );
};
