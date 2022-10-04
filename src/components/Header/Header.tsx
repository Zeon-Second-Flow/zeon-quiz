import React from "react";
import styles from "./Header.module.scss";


export const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        Kahoot Logo
                    </div>
                </div>
            </div>
        </div>
    );
};

