import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {resetWebsocket, setSocketUsers} from "@/store/websocket/websocket";


interface IMessage {
  text: string;
  date: number;
  user: string;
}

export const GamePage = () => {
    //   const [users, setUsers] = useState<any[]>([]);
//   const [userId, setUserId] = useState();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<IMessage[]>([]);
    //   const [room, setRoom] = useState();
    //   const [existedRoom, setExistedRoom] = useState();
    //   const [typeSocket, setTypeSocket] = useState();

    const {room, users} = useAppSelector((state) => state.websocket);

    //   console.log(useAppSelector((state) => state.websocket));

    const dispatch = useAppDispatch();
    const socket = useAppSelector((state) => state.websocket.socket);

    console.log("------------------------------------------------------------");

    console.log(room, users);

    const username =
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("token") || "");

    console.log(messages);

    useEffect(() => {
        socket.on("users", (users) => {
            console.log("users++++++++++++++++++++++++: ", users);
            dispatch(setSocketUsers(users));
        });

        socket.on("join", (data) => {
            console.log("DATA: ", data);
        });

        socket.on("message", (message) => {
            setMessages((messages) => [...messages, message]);
        });

        return () => {
            dispatch(resetWebsocket());
        };
    }, []);

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        if (username) {
            event.preventDefault();
            socket.emit("send", message);
            setMessage("");
        }
    };

    return (
        <div className="container">
      GamePage
            <p>{users.length}</p>
            <p>{room}</p>
            <form onSubmit={submit} id="form">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setMessage(e.currentTarget.value)}
                        value={message}
                        id="text"
                    />
                    <span className="input-group-btn">
                        <button id="submit" type="submit" className="btn btn-primary">
              Send
                        </button>
                    </span>
                </div>
            </form>
            {messages.map(({user, date, text}, index) => (
                <div key={index} className="row mb-2">
                    <div className="col-md-3">{date}</div>
                    <div className="col-md-2">{user}</div>
                    <div className="col-md-2">{text}</div>
                </div>
            ))}
        </div>
    );
};
