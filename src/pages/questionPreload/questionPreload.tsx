import React, {useEffect, useState} from "react";
// import styles from "./questionPreload.module.scss";
import logo from "@/assets/logo.png";
import {useNavigate} from "react-router-dom";


export const questionPreload = () => {
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            if (counter <= 100) {
                setCounter((prev) => prev + 20);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [counter]);

    if (counter >= 101) {
        navigate("/game");
    }

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.preloadBlock}>
                    <div className={styles.imageWrapper}>
                        <img src={logo} alt="the logo"/>
                    </div>
                    <div className={styles.context}>
                        <p>Question</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className={styles.scrollbarWrapper}>
                    <div
                        style={{width: `${counter}%`}}
                        className={styles.scrollbar}
                    ></div>
                </div>
            </div>
        </div>
    );
};
