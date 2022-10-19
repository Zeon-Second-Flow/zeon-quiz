import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {resetWebsocket, setSocketUsers} from "@/store/websocket/websocket";

import userLogo from "@/assets/game/account.png";
import styles from "./GamePage.module.scss";


interface IMessage {
  text: string;
  user: string;
}

export const GamePage = () => {
    //   const [users, setUsers] = useState<any[]>([]);
    //   const [userId, setUserId] = useState();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [isAdmin, setIsAdmin] = useState(true);
    //   const [room, setRoom] = useState();
    //   const [existedRoom, setExistedRoom] = useState();
    //   const [typeSocket, setTypeSocket] = useState();

    const {room, users} = useAppSelector((state) => state.websocket);
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

        return () => {
            
            dispatch(resetWebsocket());
        };
    }, []);

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (username) {
            socket.emit("send", message);
            setMessage("");
        }
    };

    return (
        <div className={styles.game}>
            <div className={styles.square}></div>
            <div className={styles.circle}></div>
            <div className="container">
                <div className={styles.user}>
                    <img src={userLogo} alt="User" />
                    {users.length}
                </div>
                <p>{room}</p>
                <form onSubmit={submit} id="form">
                    <div className="input-group">
                        {/* <input
              type="text"
              className="form-control"
              onChange={(e) => setMessage(e.currentTarget.value)}
              value={message}
              id="text"
            /> */}
                        <button id="submit" type="submit" className={styles.start}>
              Ready
                        </button>
                    </div>
                </form>
                {/* {messages.map(({ text, user }, index) => (
          <div key={index} className="row mb-2">
            <div className="col-md-2">{user}</div>
            <div className="col-md-2">{text}</div>
          </div>
        ))} */}
                <button className={styles.start}>Start</button>
            </div>
        </div>
    );
};
