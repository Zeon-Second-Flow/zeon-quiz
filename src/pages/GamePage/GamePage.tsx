import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {resetWebsocket, setSocketUsers} from "@/store/websocket/websocket";

import userLogo from "@/assets/game/account.png";
import styles from "./GamePage.module.scss";
import {useLocation, useNavigate} from "react-router-dom";


interface IMessage {
  text: string;
  user: string;
}

export const GamePage = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [isAdmin, setIsAdmin] = useState(true);
    const navigate = useNavigate();
    const {search} = useLocation();

    const {room, users} = useAppSelector((state) => state.websocket);
    console.log(users);
    const dispatch = useAppDispatch();
    const socket = useAppSelector((state) => state.websocket.socket);
    const username =
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("token") || "");

    useEffect(() => {
        socket.on("users", (users) => {
            dispatch(setSocketUsers(users));
        });

        socket.on("join", (data) => {
            console.log("DATA: ", data);
        });

        socket.on("username", (data) => {
            console.log("username: ", data);
        });

        socket.on("message", (message) => {
            setMessages((messages) => [...messages, message]);
        });

        socket.on("connected", (user) => {
            console.log(user, "CONNECTED");
        });

        socket.on("starting", () => {
            console.log("START");

            const test = search.slice(1, search.length);
            navigate(`/game?${test}`);
        });
    }, []);

    const startGame = () => {
        const test = search.slice(1, search.length);
        navigate(`/game?${test}`);
        socket.emit("start-game", test);
    };

    return (
        <div className={styles.game}>
            <div className={styles.square}></div>
            <div className={styles.circle}></div>
            <div className="container">
                <div className={styles.body}>
                    <div className={styles.user}>
                        <img src={userLogo} alt="User" />
                        {users.length}
                    </div>

                    <div className="box-room">
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                        <div className="title-room">Room code: </div>
                        <div className="title-code">{room}</div>
                    </div>

                    {users.length > 1 ? (
                        <button className={styles.start} onClick={startGame}>
              Start
                        </button>
                    ) : (
                        <button className={styles.startDisabled}>Start</button>
                    )}
                </div>

                <ul className={styles.usersList}>
                    {users.map((item) => (
                        <li className={styles.user}>
                            <small>{item.name}</small>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
