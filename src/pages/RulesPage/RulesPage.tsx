import React from "react";
import styles from "./RulesPage.module.scss";

import createImg from "@/assets/rules/create.png";
import playImg from "@/assets/rules/play.png";
import shareImg from "@/assets/rules/share.png";
import {motion} from "framer-motion";
import {Cat} from "@/components/Cat/Cat";


export const RulesPage = () => {
    const initial = {opacity: 0};
    const initialX = {opacity: 0, x: -100};
    const initialReverseX = {opacity: 0, x: 100};
    const initialY = {opacity: 0, y: 100};
    const initialImageRight = {x: 200};
    const initialImageLeft = {x: -200};
    const whileInViewImage = {x: 0};

    const whileInView = {opacity: 1, x: 0, y: 0};
    const transition = {duration: 0.5};
    const transitionImage = {duration: 1};

    //   const isPresent = useIsPresent();

    return (
        <motion.div
            initial={{scaleX: 1}}
            //   animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
            //   exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
            //   style={{ originX: isPresent ? 0 : 1 }}
            className={styles.wrapper}
        >
            <article className={styles.wrapper}>
                <section className={styles.heading}>
                    <motion.div
                        initial={initialY}
                        whileInView={whileInView}
                        transition={transition}
                        className={styles.text}
                    >
                        <p className={styles.block}>Zeon-Quiz</p>
                        <p className={styles.block}>Rules</p>
                    </motion.div>
                    <Cat />
                </section>
                <section className={styles.title}>
                    <motion.h2
                        initial={{opacity: 0, x: -100}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                    >
            Played around the world
                    </motion.h2>
                </section>

                <section className={styles.steps}>
                    <div className="container">
                        <motion.div
                            className={styles.step}
                            initial={initial}
                            whileInView={whileInView}
                        >
                            <motion.p
                                transition={transition}
                                initial={initialX}
                                whileInView={whileInView}
                            >
                                <h2>Create</h2>
                                <h4>
                  Create a fun learning game in minutes – we call these
                  Zeon-Quiz. The format and number of questions is up to you.
                  Add videos, images and diagrams to your questions to amplify
                  engagement.
                                </h4>
                            </motion.p>
                            <motion.img
                                src={createImg}
                                alt="Create"
                                initial={initialImageRight}
                                whileInView={whileInViewImage}
                                transition={transitionImage}
                            />
                        </motion.div>
                        <motion.div
                            className={styles.step}
                            initial={initial}
                            whileInView={whileInView}
                        >
                            <motion.p
                                transition={transition}
                                initial={initialReverseX}
                                whileInView={whileInView}
                            >
                                <h2>Play</h2>
                                <h4>
                  Zeon-Quiz is the best played in a group setting. To join a
                  game, you need a unique PIN. If youU+2019re the game host, you
                  need a big screen. Players answer on their own devices, while
                  questions are displayed on a shared screen. In addition to
                  live games, you can also send kahoot challenges that players
                  complete at their own pace – for example, for homework or
                  remote training.
                                </h4>
                            </motion.p>
                            <motion.img
                                src={playImg}
                                alt="Play"
                                initial={initialImageLeft}
                                whileInView={whileInViewImage}
                                transition={transitionImage}
                            />
                        </motion.div>
                        <motion.div
                            className={styles.step}
                            initial={initial}
                            whileInView={whileInView}
                        >
                            <motion.p
                                transition={transition}
                                initial={initialX}
                                whileInView={whileInView}
                            >
                                <h2>Share</h2>
                                <h4>
                  After a game, encourage players to create and share their own
                  rooms! With one of our premium plans for schools or business,
                  you can co-create games with your colleagues and save time on
                  finding relevant kahoots for your class or training session.
                                </h4>
                            </motion.p>
                            <motion.img
                                src={shareImg}
                                alt="Share"
                                initial={initialImageRight}
                                whileInView={whileInViewImage}
                                transition={transitionImage}
                            />
                        </motion.div>
                    </div>
                </section>
            </article>
        </motion.div>
    );
};
