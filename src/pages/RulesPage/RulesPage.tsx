import React from "react";
import styles from "./RulesPage.module.scss";


export const RulesPage = () => {
    return (
        <>
            <article className={styles.wrapper}>
                <section className={styles.heading}>
                    <div className={styles.text}>
                        <p className={styles.block}>Zeon-Quiz</p>
                        <p className={styles.block}>Rules</p>
                    </div>
                    <div className={styles.room}>
                        <div className={styles.window}>
                            <div className={styles.stars}></div>
                            <div className={styles.star}></div>
                            <div className={styles.moon}></div>
                            <div className={styles.cloud}></div>
                            <div className={styles.eiffelTower}>
                                <div className={styles.platform}></div>
                            </div>
                            <div className={styles.roof}></div>
                            <div className={styles.bush}></div>
                        </div>
                        <div className={styles.windowSill}>
                            <div className={styles.cat}>
                                <div className={styles.head}>
                                    <div className={styles.eyes}></div>
                                </div>
                                <div className={styles.tail}></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.steps}>
                    <div className={styles.one}>
                        <h2>Create</h2>
                        <p>
              Create a fun learning game in minutes – we call these Zeon-Quiz.
              The format and number of questions is up to you. Add videos,
              images and diagrams to your questions to amplify engagement.
                        </p>
                    </div>
                    <div className={styles.two}>
                        <h2>Play</h2>
                        <p>
              Zeon-Quiz is the best played in a group setting. To join a game,
              you need a unique PIN. If youU+2019re the game host, you need a
              big screen. Players answer on their own devices, while questions
              are displayed on a shared screen. In addition to live games, you
              can also send kahoot challenges that players complete at their own
              pace – for example, for homework or remote training.
                        </p>
                    </div>
                    <div className={styles.three}>
                        <h2>Share</h2>
                        <p>
              After a game, encourage players to create and share their own
              rooms! With one of our premium plans for schools or business, you
              can co-create games with your colleagues and save time on finding
              relevant kahoots for your class or training session.
                        </p>
                    </div>
                </section>
                <section className={styles.info}>Played around the world</section>
            </article>
        </>
    );
};
