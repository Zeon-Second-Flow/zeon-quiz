import React from "react";
// import {useParams} from "react-router-dom";
// import {useGetQuestionsQuery} from "@/store/search/search.api";
import styles from "./DetailPage.module.scss";
import TestImage from "@/assets/test-image.png";


export const DetailPage = () => {
    // const {name} = useParams();
    // const [test, setTest] = useState("");
    // const {data} = useGetQuestionsQuery(name ?? "");


    return (
        <div className={styles.detailPage}>
            <div className="container">

                {/*{*/}
                {/*    data?.map(item => {*/}
                {/*        return (<div key={item.id}>*/}
                {/*            <p>{item.question}</p>*/}
                {/*        </div>);*/}
                {/*    })*/}
                {/*}*/}
                <div className={styles.wrapper}>
                    <div className={styles.testItem}>
                        <img className={styles.poster} src={TestImage} alt="poster"/>
                        <div className={styles.description}>
                            <div className={styles.quantity}>2 questions</div>
                            <h3 className={styles.title}>Water</h3>
                            <div className={styles.subtitle}>
                                <p>Zeon •</p>
                                <p>6 players </p>
                            </div>
                            <button className={styles.btn}>
                                Start test
                            </button>
                        </div>
                    </div>
                    <div className={styles.questions}>
                        <h3>Questions (3)</h3>
                        <div className={styles.item}>
                            <div className={styles.question}>
                                <div>1 - Quiz</div>
                                <p>What is longest river?</p>
                            </div>
                            <img width={100} src={TestImage} alt="poster"/>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.question}>
                                <div>1 - Quiz</div>
                                <p>What is longest river?</p>
                            </div>
                            <img width={100} src={TestImage} alt="poster"/>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.question}>
                                <div>1 - Quiz</div>
                                <p>What is longest river?</p>
                            </div>
                            <img width={100} src={TestImage} alt="poster"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
