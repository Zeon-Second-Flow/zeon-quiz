import {useNavigate} from "react-router-dom";
import styles from "./PrivatePage.module.scss";


export const PrivatePage = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.blockOutter}>
            <div className={styles.square}></div>
            <div className={styles.circle}></div>
            <div className="container">
                <div className={styles.block}>
                    <h4>Ooops</h4>
                    <p>Only admin can host the game</p>
                    <button onClick={() => navigate("/")}>Back to home</button>
                </div>
            </div>
        </div>
    );
};
