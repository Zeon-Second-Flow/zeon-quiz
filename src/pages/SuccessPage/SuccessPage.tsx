import styles from "./SuccessPage.module.scss";
import {ReactComponent as Success} from "@/assets/auth/success.svg";
import {useLocation, useNavigate} from "react-router-dom";


export const SuccessPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navigateHandler = () => {
        navigate("/");
    };

    return (
        <div className={styles.successPage}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Success />
                    <h3>{location?.state?.title}</h3>
                    <p className={styles.p} onClick={navigateHandler}>
                        <button className={styles.btn} type="submit">
                            <p>Go home</p>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};
