
import {useNavigate} from "react-router-dom";
import styles from "./Error.module.scss";


export const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.blockOutter}>
            <div className={styles.square}></div>
            <div className={styles.circle}></div>
            <div className="container">
                <div className={styles.block}>
                    <h4>Error</h4>
                    <span>404</span>
                    <p>Page not found</p>
                    <button onClick={() => navigate("/")}>Back to home</button>
                </div>
            </div>
        </div>
    );
};