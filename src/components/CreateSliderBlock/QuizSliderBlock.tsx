import React from "react";
import style from "@/pages/CreateTestsPage/CreateTestPage.module.scss";


interface IsliderBlockItem {
    it: {
        question: string;
        score: number;
        timer: number;
        answer: {
            A: string;
            B: string;
            C: string;
            D: string;
            correct_answer: string;
            question_id: number;
        };
    };
    idx: number;
    choosedQuestion: (idx: number) => number;
}

export const QuizSliderBlock = ({it, idx, choosedQuestion}:IsliderBlockItem) => {

    return (
        <div onClick={() => choosedQuestion(idx)} className={style.sliderBlockItem}>
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

