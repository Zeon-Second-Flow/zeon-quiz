import React from "react";
import styles from "./Cat.module.scss";


export const Cat = () => {
    return (
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
    );
};
