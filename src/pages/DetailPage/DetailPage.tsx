import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useGetQuestionsQuery} from "@/store/search/search.api";
import styles from "./DetailPage.module.scss";
import {MyLoader} from "@/components/Loader/MyLoader";
import {Questions} from "@/pages/DetailPage/Questions/Questions";
import {TestDetail} from "@/pages/DetailPage/TestDetail/TestDetail";
import {IQuestionsData} from "@/models/models";
import {Pagination} from "@/pages/DetailPage/Pagination/Pagination";


export const DetailPage = () => {
    const {name} = useParams();
    const {data, isLoading} = useGetQuestionsQuery(name ?? "");

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

    const onChangePage = (item: number) => {
        setCurrectPage(item);
    };
    const testDetail = data?.test;
    return (
        <div className={styles.detailPage}>
            <div className="container">
                {isLoading ? <MyLoader/> : (<div className={styles.wrapper}>
                    <TestDetail item={testDetail}/>
                    <div className={styles.questionsWrapper}>
                        <div className={styles.questions}>
                            <h3>Questions </h3>
                            {
                                questions?.map((item, i: number) => {
                                    const index = data?.questions?.findIndex((it) => it.id === item.id) || 0;
                                    return <Questions
                                        key={item.id} item={item} index={index}/>;
                                }
                                )
                            }
                        </div>
                        <div className={styles.paginationDetail}>
                            <Pagination setPage={onChangePage} page={currentPage} countItems={totalPages}/>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};
