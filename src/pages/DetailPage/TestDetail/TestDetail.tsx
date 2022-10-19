import React from "react";
import styles from "@/pages/DetailPage/DetailPage.module.scss";
import TestImage from "@/assets/test-image.png";
import {ITest} from "@/models/models";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {setSocketRoom, setSocketUsers} from "@/store/websocket/websocket";


interface IProps {
  item: ITest | undefined;
}

export const TestDetail = ({item}: IProps) => {
    const navigate = useNavigate();
    const {socket, users} = useAppSelector((state) => state.websocket);
    const dispatch = useAppDispatch();

    const createGame = () => {
        const username =
      localStorage.getItem("token") &&
      JSON.parse(localStorage.getItem("token") || "");

        socket.emit("username", [username.email]);

        socket.on("users", (users) => {
            dispatch(setSocketUsers(users));
        });

        socket.on("connected", (user) => {
            dispatch(setSocketRoom(user.room));
            dispatch(setSocketUsers([...users, user]));
        });

        createRoom();
    };

    const createRoom = () => {
        setTimeout(() => {
            navigate(`/game?${item?.title}`);
        }, 1000);
    };

    return (
        <div className={styles.testItem}>
            <img className={styles.poster} src={TestImage} alt="poster" />
            <div className={styles.description}>
                <div className={styles.quantity}>{item?.questions_count} questions</div>
                <h3 className={styles.title}>{item?.title}</h3>
                <div className={styles.subtitle}>
                    <p>{item?.group}</p>
                    <p>{item?.test_passed} test passed</p>
                </div>

                <button onClick={createGame} className={styles.btn}>
          Start test
                </button>
            </div>
        </div>
    );
};
