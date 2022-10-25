import {useAppSelector} from "@/hooks";
import {setSocketUsers} from "@/store/websocket/websocket";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from "./YourIn.module.scss";


export const YourIn = () => {
    const {users, socket} = useAppSelector((state) => state.websocket);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on("users", (users) => {
            dispatch(setSocketUsers(users));
        });

        socket.on("starting", (title) => {
            navigate(`/game?${title}`);
        });
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
