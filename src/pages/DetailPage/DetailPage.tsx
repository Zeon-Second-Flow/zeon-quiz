import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useGetQuestionsQuery, useGetTestsByNameQuery} from "@/store/search/search.api";
import styles from "./DetailPage.module.scss";
import {MyLoader} from "@/components/Loader/MyLoader";
import {Questions} from "@/pages/DetailPage/Questions/Questions";
import {TestDetail} from "@/pages/DetailPage/TestDetail/TestDetail";
import {IQuestions, IQuestionsData} from "@/models/models";
import {set} from "husky";


export const DetailPage = () => {
    const {name} = useParams();
    const {data, isLoading} = useGetQuestionsQuery(name ?? "");
    const {data: result, isLoading: loading} = useGetTestsByNameQuery(name ?? "");

    const limit = 4;
    const totalCount = data?.questions.length ?? 0;
    const totalPages = Math.ceil(totalCount / limit);
    const [currentPage, setCurrectPage] = useState(1);
    const [questions, setQuestions] = useState<IQuestionsData[]>([]);
    const arr: number[] = [];

    useEffect(() => {
        if (data) {
            setQuestions(
                data.questions.slice((currentPage - 1) * limit, currentPage * limit)
            );
        }
    }, [currentPage, data]);

    for (let i = 0; i < totalPages; i++) {
        arr.push(i + 1);
    }
    // const count: [] = [];
    // for (let i = 0; i < totalCount; i++) {
    //     count.push(i);
    // }
    // // console.log(count);
    // const countQuestions = count.map(item => (item));
    // console.log(countQuestions);
    const onChangePage = (item: number) => {
        setCurrectPage(item);
    };

    // console.log(data.questions);


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
                            questions?.map((item, i: number) => {
                                // console.log(result?.results.indexOf(item.score));
                                return <Questions
                                    key={item.id} item={item} index={i}/>;
                            }
                            )
                        }
                        <div>
                            {
                                arr.map((item: number) => (
                                    <div key={item} className={styles.pageBtn} onClick={() => onChangePage(item)}>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>)}
            </div>
        </div>
    );
};
