import React from "react";
import styles from "@/pages/DetailPage/DetailPage.module.scss";
import TestImage from "@/assets/test-image.png";


interface IData {
    questions_count: number;
    title: string;
    group: string;
    test_passed: number;
}

interface IProps {
    item: IData;
}

export const TestDetail = ({item}: IProps) => {
    return (
        <div className={styles.testItem}>
            <img className={styles.poster} src={TestImage} alt="poster"/>
            <div className={styles.description}>
                <div className={styles.quantity}>{item.questions_count} questions</div>
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.subtitle}>
                    <p>{item.group} •</p>
                    <p>{item.test_passed} players </p>
                </div>
                <button className={styles.btn}>
                    Start test
                </button>
            </div>
        </div>
    );
};