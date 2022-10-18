import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./EnterPage.module.scss";
import {useAppDispatch, useAppSelector, useAuth} from "@/hooks";
import {setSocketRoom, setSocketUsers} from "@/store/websocket/websocket";
import logo from "@/assets/logo.png";


export const EnterPage = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const {users} = useAppSelector((state) => state.websocket);
    const {isStaff} = useAuth();

    const dispatch = useAppDispatch();
    const socket = useAppSelector((state) => state.websocket.socket);

    const enterGame = () => {
        const user =
      localStorage.getItem("token") &&
      JSON.parse(localStorage.getItem("token") || "");

        socket.emit("join", [user.email, value]);

        socket.on("users", (users) => {
            console.log("users: ", users);
            dispatch(setSocketUsers(users));
        });

        socket.on("test", (data) => {
            console.log(data);
        });

        socket.on("connected", (user) => {
            console.log("connected: ", [...users, user]);
            dispatch(setSocketRoom(user.room));
            dispatch(setSocketUsers([...users, user]));
        });

        socket.on("disconnected", (id) => {
            // setUsers((users) => {
            //   return users.filter((user) => user.id !== id);
            // });
            dispatch(setSocketUsers(users.filter((user) => user.id !== id)));
        });

        navigateToGame();
    };

    const createGame = () => {
        const username =
      localStorage.getItem("token") &&
      JSON.parse(localStorage.getItem("token") || "");

        socket.emit("username", [username.email]);

        socket.on("users", (users) => {
            console.log("users: ", users);
            dispatch(setSocketUsers(users));
        });

        socket.on("test", (data) => {
            console.log(data);
        });

        socket.on("connected", (user) => {
            console.log("connected: ", [...users, user]);
            dispatch(setSocketRoom(user.room));
            dispatch(setSocketUsers([...users, user]));
        });

        socket.on("disconnected", (id) => {
            // setUsers((users) => {
            //   return users.filter((user) => user.id !== id);
            // });

            dispatch(setSocketUsers(users.filter((user) => user.id !== id)));
        });

        navigateToGame();
    };

    const navigateToGame = () => {
        setTimeout(() => {
            navigate("/game");
        }, 500);
    };

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.square}></div>
                <div className={styles.circle}></div>
                <div className={styles.enterBlockWrapper}>
                    <div className={styles.enterBlock}>
                        <div className={styles.title}>
                            <img src={logo} alt="Logo" />
                        </div>
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
                {isStaff && (
                    <div className={styles.extraInfo} onClick={createGame}>
                        <p>
              Create your own room for free at <span>zeon-quiz.com</span>
                        </p>
                    </div>
                )}
                <span>Terms | Privacy</span>
            </div>
        </div>
    );
};
