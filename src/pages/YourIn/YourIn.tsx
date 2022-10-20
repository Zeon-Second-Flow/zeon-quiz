import {useAppSelector, useAuth} from "@/hooks";
import {resetWebsocket, setSocketUsers} from "@/store/websocket/websocket";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import styles from "./YourIn.module.scss";


export const YourIn = () => {
    const {users, socket} = useAppSelector((state) => state.websocket);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(users);

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

        socket.on("connected", (user) => {
            console.log(user, "CONNECTED");
        });

        socket.on("starting", (title) => {
            navigate(`/game?${title}`);
        });

    // return () => {
    //   dispatch(resetWebsocket());
    // };
    }, []);
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
