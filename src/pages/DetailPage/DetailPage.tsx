import React from "react";
import {useParams} from "react-router-dom";
import {useGetQuestionsQuery, useGetTestsByNameQuery} from "@/store/search/search.api";
import styles from "./DetailPage.module.scss";
import TestImage from "@/assets/test-image.png";


export const DetailPage = () => {
    const {name} = useParams();
    const {data} = useGetQuestionsQuery(name ?? "");
    const {data: result} = useGetTestsByNameQuery(name ?? "");

    const questions = data?.map((item, i) => {
        return (
            <div key={item.id} className={styles.item}>
                <div className={styles.question}>
                    <div>{i + 1} - Quiz</div>
                    <p>{item.question}</p>
                </div>
                <img width={100} src={TestImage} alt="poster"/>
            </div>
        );
    });

    const testItem = result?.results?.map(item => (
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
    ));

    return (
        <div className={styles.detailPage}>
            <div className="container">
                <div className={styles.wrapper}>
                    {testItem}
                    <div className={styles.questions}>
                        <h3>Questions </h3>
                        {questions}
                    </div>
                </div>
            </div>
        </div>
    );
};
