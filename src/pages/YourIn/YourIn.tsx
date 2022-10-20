import {useAppSelector, useAuth} from "@/hooks";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./YourIn.module.scss";


export const YourIn = () => {
    // const navigate = useNavigate();
    const {users} = useAppSelector((state) => state.websocket);
    // const {user} = useAuth();

    console.log(users);
  

    useEffect(() => {}, []);
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.square}></div>
                <div className={styles.circle}></div>
                <div className={styles.enterBlockWrapper}>
                    <div className={styles.enterBlock}>
                        <div className={styles.info}>
                            <h2>You are in!</h2>
                            <p>Wait till admin will start the quiz!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
