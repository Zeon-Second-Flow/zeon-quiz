import styles from "./SuccessPage.module.scss";
import Success from "@/assets/auth/success.svg";
import {useLocation, useNavigate} from "react-router-dom";


export const SuccessPage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate("/");
    };

		const location = useLocation();

		const message = location.state.title ? location.state.title : 'Successfully changed password!';

    return (
        <div className={styles.successPage}>
            <div className="container">
                <div className={styles.wrapper}>
                    {/* <Success /> */}
                    <img src={Success} alt="" />
                    <h3>{message}</h3>
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
