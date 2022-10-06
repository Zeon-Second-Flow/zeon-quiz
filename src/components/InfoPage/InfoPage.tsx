import { MouseEvent } from "react";
import styles from "./InfoPage.module.scss";


export const InfoPage = () => {
    // const playVideo = (e: any) => {
    //     e.currentTarget.play();
    // };
    // const stopVideo = (e: any) => {
    //     e.currentTarget.pause();
    //     e.target.currentTime = 0;
    // };
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <div className={styles.blockContext}>
                        <h2>Make learning awesome!</h2>
                        <p>
                            Kahoot! delivers engaging learning to billions. Make sure you
                            register before you play!
                        </p>
                        <button>Let's play!</button>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img
                            className={styles.img}
                            src="https://kahoot.com/files/2020/05/main-image-cropped.jpg"
                            alt="game-pic-1"
                        />
                    </div>
                </div>
                <div className={`${styles.block} ${styles.blockContextWhite}`}>
                    <div className={styles.blockContext}>
                        <h2>Host an inspiring planning with Kahoot!</h2>
                        <p>
                            Recap company strategy, identify opportunities, and align on team
                            goals during your next planning session with Kahoot! 360.
                        </p>
                        <button>Create a game!</button>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img
                            className={styles.img}
                            src="https://kahoot.com/files/2022/09/mosaic-wordcloud-desktop-1.png"
                            alt="game-pic-2"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.workInfo}>
                <div className={styles.workBlock}>
                    <div className={`${styles.videoWrapper} ${styles.videoCreate}`}>
                        <video
                            // onMouseOver={playVideo}
                            // onMouseLeave={stopVideo}
                            src="https://kahoot.com/files/2019/07/kc_1.webm"
                            muted
                            preload="true"
                            playsInline
                        >

                        </video>
                    </div>
                    <div className={styles.workText}>
                        <h5>Create</h5>
                        <p>
                            It only takes minutes to create a learning game or trivia quiz on
                            any topic, in any language.
                        </p>
                    </div>
                </div>
                <div className={styles.workBlock}>
                    <div className={`${styles.videoWrapper} ${styles.videoHost}`}>
                        <video
                            // onMouseOver={playVideo}
                            // onMouseLeave={stopVideo}
                            src="https://kahoot.com/files/2019/07/kc2_2b.webm"
                            muted
                            preload="true"
                            playsInline
                        ></video>
                    </div>
                    <div className={styles.workText}>
                        <h5>Host or Share</h5>
                        <p>
                            Host a live game with questions on a big screen or share a game
                            with remote players.
                        </p>
                    </div>
                </div>
                <div className={styles.workBlock}>
                    <div className={`${styles.videoWrapper} ${styles.videoPlay}`}>
                        <video
                            // onMouseOver={playVideo}
                            // onMouseLeave={stopVideo}
                            src="https://kahoot.com/files/2019/07/kc_3.webm"
                            muted
                            preload="true"
                            playsInline
                        ></video>
                    </div>
                    <div className={styles.workText}>
                        <h5>Play</h5>
                        <p>
                            Game on! Join a kahoot with a PIN provided by the host and answer
                            questions on your device.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={styles.rulesBanner}>
                    <a href="/rules">Learn more about the rules</a>
                </div>
            </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.rulesBanner}>
          <a href="/rules">Learn more about the rules</a>
        </div>
      </div>
    </div>
  );
};

