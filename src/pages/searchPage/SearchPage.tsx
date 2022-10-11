import {useLazyGetTestsByNameQuery} from "@/store/search/searchSlice";
import React, {useEffect} from "react";
import styles from "./SearchPage.module.scss";
import {useParams} from "react-router-dom";


export const SearchPage = () => {
    const [getTestsByName, {data}] = useLazyGetTestsByNameQuery();
    const {value} = useParams();
    useEffect(() => {
        if (value) {
            getTestsByName(value);
        }
    }, [value]);
    console.log(data);
    return (
        <div className={styles.searchPage}>
            {
                data?.results.map(item => {
                    return (<div className={styles.item}>
                        <div>
                            Title: {item.title}
                        </div>
                        <div>
                            Group: {item.group}
                        </div>
                        <div>
                            Total questions: {item.questions_count}
                        </div>
                    </div>);
                })

            }
        </div>
    );
};