import React from "react";
import style from "@/pages/CreateTestsPage/CreateTestPage.module.scss";


interface IItem {
        question: string;
        id: string;
        score: number;
        timer: number;
        answer: {
            A: string;
            B: string;
            C: string;
            D: string;
            correct_answer: string;
        };
}

interface IsliderBlockItem {
    it: IItem;
    idx: number;
    choosedQuestion: (idx: string) => IItem | undefined;
}

export const QuizSliderBlock = ({it, idx, choosedQuestion}:IsliderBlockItem) => {

    console.log(it, "it");

    return (
        <div onClick={() => choosedQuestion(it.id)} className={style.sliderBlockItem}>
            <h3 className={style.sliderBlockTitle}>{idx +1} Quiz</h3>
            <div  className={style.blockContentBox}>
                <h3 className={style.itemTitle}>{it.question || "Question"}</h3>
                <div  className={style.itemCounter}>
                    <div>Score: {it.score}</div>
                    <div>Timer: {it.timer} s</div>
                </div>
                <div className={style.itemAnswers}>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                    <div> </div>
                </div>
            </div>
        </div>
    );
};

