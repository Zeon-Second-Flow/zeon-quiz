// import {useLazyGetTestsByNameQuery} from "@/store/search/search.api";
import React from "react";
import styles from "./SearchPage.module.scss";
// import {useParams} from "react-router-dom";
import TestImage from "@/assets/test-image.png";


export const SearchPage = () => {
    // const [getTestsByName, {data}] = useLazyGetTestsByNameQuery();
    // const {value} = useParams();
    // useEffect(() => {
    //     if (value) {
    //         getTestsByName(value);
    //     }
    // }, [value]);
    return (
        <div className={styles.searchPage}>
            <div className="container">

                {/*{*/}
                {/*    data?.results.map(item => {*/}
                {/*        return (<div className={styles.item}>*/}
                {/*            <div>*/}
                {/*                Title: {item.title}*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                Group: {item.group}*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                Total questions: {item.questions_count}*/}
                {/*            </div>*/}
                {/*        </div>);*/}
                {/*    })*/}
                {/*}*/}
                <h3 className={styles.heading}>Tests</h3>
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <img className={styles.poster} src={TestImage} alt="poster"/>
                        <div className={styles.description}>
                            <div className={styles.quantity}>2 questions</div>
                            <p className={styles.title}>Water</p>
                            <p>Zeon</p>
                            <p>6 players </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.poster} src={TestImage} alt="poster"/>
                        <div className={styles.description}>
                            <div className={styles.quantity}>2 questions</div>
                            <p className={styles.title}>Tech</p>
                            <p>Zeon</p>
                            <p>6 players </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.poster} src={TestImage} alt="poster"/>
                        <div className={styles.description}>
                            <div className={styles.quantity}>2 questions</div>
                            <p className={styles.title}>String</p>
                            <p>Zeon</p>
                            <p>6 players </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
