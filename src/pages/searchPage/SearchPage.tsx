import {useLazyGetTestsByNameQuery} from "@/store/search/search.api";
import React, {useEffect} from "react";
import styles from "./SearchPage.module.scss";
import {useParams} from "react-router-dom";
import TestImage from "@/assets/test-image.png";


export const SearchPage = () => {
    const [getTestsByName, {data}] = useLazyGetTestsByNameQuery();
    const {value} = useParams();
    useEffect(() => {
        if (value) {
            getTestsByName(value);
        }
    }, [value]);
    const searchItem = data?.results.map(item => {
        return (
            <div className={styles.item}>
                <img className={styles.poster} src={TestImage} alt="poster"/>
                <div className={styles.description}>
                    <div className={styles.quantity}>{item.questions_count} questions</div>
                    <p className={styles.title}>{item.title}</p>
                    <p>{item.group}</p>
                    <p>{item.test_passed} players </p>
                </div>
            </div>);
    });

    return (
        <div className={styles.searchPage}>
            <div className="container">
                <h3 className={styles.heading}>Tests</h3>
                <div className={styles.wrapper}>
                    {searchItem}
                </div>
            </div>
        </div>
    );
};