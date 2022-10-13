import io from "socket.io-client";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import styles from "./EnterPage.module.scss";


export const EnterPage = () => {
    const [value, setValue] = useState("");
    console.log(value);

    const user =
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("token") || "");
    
    console.log(user);

    const enterGame = () => {
        const socket = io("http://localhost:3333", {
            transports: ["websocket", "polling"],
        });

        socket.emit("join", [user.email, value]);
    };

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.square}></div>
                <div className={styles.circle}></div>
                <div className={styles.enterBlockWrapper}>
                    <div className={styles.enterBlock}>
                        <div className={styles.title}></div>
                        <div className={styles.form}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Game PIN"
                                onChange={(e) => setValue(e.currentTarget.value)}
                                value={value}
                            />
                            <div>
                                <button className={styles.common} onClick={enterGame}>
                  Enter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.extraInfo}>
                    <NavLink to="/game">
            Create your own kahoot for free at <span>kahoot.com</span>
                    </NavLink>
                    <span>Terms | Privacy</span>
                </div>
            </div>
        </div>
    );
};
