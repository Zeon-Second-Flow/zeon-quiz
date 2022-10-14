// import { useEffect, useState } from "react";
import {useAppSelector} from "@/hooks";


export const GamePage = () => {
    // const [users, setUsers] = useState<any[]>([]);
    // const [userId, setUserId] = useState();
    // const [message, setMessage] = useState("");
    // const [messages, setMessages] = useState([]);
    // const [room, setRoom] = useState();
    // const [existedRoom, setExistedRoom] = useState();
    // const [typeSocket, setTypeSocket] = useState();

    const {room, users} = useAppSelector((state) => state.websocket);

    console.log(room, users);

    const username =
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("token") || "");

    console.log(username);
    

    // console.log(users);

    return (
        <div className="container">
      GamePage
            <p>{users.length}</p>
            <p>{room}</p>
        </div>
    );
};
