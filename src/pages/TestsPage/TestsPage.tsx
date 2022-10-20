import {useGetAllTestsQuery} from "@/store/search/search.api";
import styles from "./TestsPage.module.scss";
import {Link, useParams} from "react-router-dom";
import TestImage from "@/assets/test-image.png";
import {SearchLoader} from "@/components/Loader/SearchLoader";


export const TestsPage = () => {
    const {data, isLoading} = useGetAllTestsQuery();
    const {value} = useParams();


    const searchItem = data?.results.map((item) => {
        return (
            <Link
                to={`/detail/${item.title}`}
                className={styles.item}
            >
                <img className={styles.poster} src={TestImage} alt="poster" />
                <div className={styles.description}>
                    <div className={styles.quantity}>
                        {item.questions_count} questions
                    </div>
                    <p className={styles.title}>{item.title}</p>
                    <p>{item.group}</p>
                    <p>{item.test_passed} players </p>
                </div>
            </Link>
        );
    });

    return (
        <div className={styles.searchPage}>
            <div className={styles.seachContainer}>
                <h3 className={styles.heading}>Results: </h3>
                <div className={styles.wrapper}>
                    {data?.results.length === 0 ? (
                        "Opps! There are no tests with this title!"
                    ) : isLoading ? (
                        <SearchLoader />
                    ) : (
                        searchItem
                    )}
                </div>
            </div>
        </div>
    );
};
