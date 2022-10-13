import io from "socket.io-client";

import {useEffect} from "react";


export const GamePage = () => {
    // const [users, setUsers] = useState<any[]>([]);
    // const [userId, setUserId] = useState();
    // const [message, setMessage] = useState("");
    // const [messages, setMessages] = useState([]);
    // const [room, setRoom] = useState();
    // const [existedRoom, setExistedRoom] = useState();
    // const [typeSocket, setTypeSocket] = useState();

    const socket = io("http://localhost:3333", {
        transports: ["websocket", "polling"],
    });

    const username =
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("token") || "");

    useEffect(() => {
        socket.on("connect", () => {
            socket.emit("username", username.email);
        });

        socket.on("users", (users) => {
            setUsers(users);
        });

        socket.on("test", (data) => {
            console.log(data);
        });

        socket.on("connected", (user) => {
            setUsers((users) => [...users, user]);
            setRoom(user.room);
            setUserId(user.id);
        });

        socket.on("disconnected", (id) => {
            setUsers((users) => {
                return users.filter((user) => user.id !== id);
            });
        });
    }, []);

    return <div>GamePage</div>;
};
