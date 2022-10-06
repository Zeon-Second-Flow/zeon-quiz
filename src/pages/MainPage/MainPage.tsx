
import { InfoPage } from "@/components/InfoPage/InfoPage";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <InfoPage/>
            </div>
        </div>
    );
};

