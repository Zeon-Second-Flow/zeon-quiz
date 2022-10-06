
import React from "react";
import styles from "./MainPage.module.scss";
import {InfoPage} from "@/components/InfoPage/InfoPage";


export const MainPage = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <InfoPage/>
            </div>
        </div>
    );
};

