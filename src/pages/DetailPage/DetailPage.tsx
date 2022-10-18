import React from "react";
import {useParams} from "react-router-dom";
import {useGetQuestionsQuery, useGetTestsByNameQuery} from "@/store/search/search.api";
import styles from "./DetailPage.module.scss";
import {MyLoader} from "@/components/Loader/MyLoader";
import {Questions} from "@/pages/DetailPage/Questions/Questions";
import {TestDetail} from "@/pages/DetailPage/TestDetail/TestDetail";


export const DetailPage = () => {
    const {name} = useParams();
    const {data, isLoading} = useGetQuestionsQuery(name ?? "");
    const {data: result, isLoading: loading} = useGetTestsByNameQuery(name ?? "");

    return (
        <div className={styles.detailPage}>
            <div className="container">
                {isLoading && loading ? <MyLoader/> : (<div className={styles.wrapper}>
                    {
                        result?.results?.map((item, i) => <TestDetail key={i} item={item}/>)
                    }
                    <div className={styles.questions}>
                        <h3>Questions </h3>
                        {
                            data?.map((item, i) => <Questions key={item.id} item={item} index={i}/>)
                        }
                    </div>
                </div>)}
            </div>
        </div>
    );
};
