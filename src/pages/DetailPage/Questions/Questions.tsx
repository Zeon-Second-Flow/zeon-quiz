import styles from "@/pages/DetailPage/DetailPage.module.scss";
import TestImage from "@/assets/test-image.png";


interface IData {
    question: string;
};

interface IProps {
    item: IData;
    index: number;
}

export const Questions = ({item, index}: IProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.question}>
                <div>{index + 1} - Quiz</div>
                <p>{item.question}</p>
            </div>
            <img width={100} src={TestImage} alt="poster"/>
        </div>
    );
};