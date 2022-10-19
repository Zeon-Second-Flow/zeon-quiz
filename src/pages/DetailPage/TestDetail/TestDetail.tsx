import React from "react";
import styles from "@/pages/DetailPage/DetailPage.module.scss";
import TestImage from "@/assets/test-image.png";
import {ITest} from "@/models/models";


// interface IData {
//     description: string;
//     group: string;
//     image: string;
//     is_active: boolean;
//     questions_count: number;
//     title: string;
//     test_passed: number;
// }

interface IProps {
    item: ITest | undefined;
}

export const TestDetail = ({item}: IProps) => {
    return (
        <div className={styles.testItem}>
            <img className={styles.poster} src={TestImage} alt="poster"/>
            <div className={styles.description}>
                <div className={styles.quantity}>{item?.questions_count} questions</div>
                <h3 className={styles.title}>{item?.title}</h3>
                <div className={styles.subtitle}>
                    <p>{item?.group} •</p>
                    <p>{item?.test_passed} test passed</p>
                </div>
                <button className={styles.btn}>
                    Start test
                </button>
            </div>
        </div>
    );
};