import React, {useState} from "react";
import style from "./CreateTestPage.module.scss";
import {QuizSliderBlock} from "@/components/CreateSliderBlock/QuizSliderBlock";
import {CustomSelect} from "@/components/CustomSelect/CustomSelect";
import {Cat} from "@/components/Cat/Cat";
import {AnswerItem} from "@/components/AnswerItem/AnswerItem";
import {circleSVG, squareSVG, triangleSVG, rhombusSVG} from "@/components/SVG/svg";


export const CreateTestsPage = () => {
    const [ans1, setAns1] = useState<string>("");
    const [ans2, setAns2] = useState<string>("");
    const [ans3, setAns3] = useState<string>("");
    const [ans4, setAns4] = useState<string>("");
    const questionModel = {
        question: "",
        score: 0,
        timer: 20,
        answer: {
            A: "",
            B: "",
            C: "",
            D: "",
            correct_answer: "",
            question_id: 0
        }
    };
    const pointsOption = [
        {value: 80, label: "80 points"},
        {value: 90, label: "90 points"},
        {value: 100, label: "100 points"},
        {value: 110, label: "110 points"},
        {value: 120, label: "120 points"}
    ];
    const timeOption = [
        {value: 5, label: "5 seconds"},
        {value: 10, label: "10 seconds"},
        {value: 20, label: "20 seconds"},
        {value: 30, label: "30 seconds"},
        {value: 60, label: "1 minute"},
        {value: 90, label: "1 minute 30 seconds"},
        {value: 120, label: "2 minute"},
    ];
    const [quizArr, setQuizArr] = useState([{...questionModel}]);

    const addQuiz = () => {
        setQuizArr(prevState => [...prevState, questionModel]);
    };

    const choosedQuestion = (idx : number) => {
        return idx;
    };

    return (
        <section className={style.createTestsPage}>
            <div className={style.creatorSlideBar}>
                <div className={style.blockSlider}>
                    {quizArr?.map((it, idx) => {return (<QuizSliderBlock choosedQuestion={choosedQuestion} it={it} idx={idx}/>);})}
                </div>
                <div className={style.sliderBarBtnBox}>
                    <button onClick={addQuiz}>Add quiz</button>
                </div>
            </div>
            <div className={style.createTestForm}>
                <div className={style.catBox}>
                    <Cat/>
                </div>
                <form action="">
                    <input placeholder={"Start typing your question"} className={style.createTestInputQuestion} type="text"/>
                    <div className={style.counterBox}>
                        <div>
                            Points
                            <CustomSelect onChange={(e:React.FormEvent<HTMLInputElement>) => {console.log(e);}} options={pointsOption}/>
                        </div>
                        <div>
                            Time limit
                            <CustomSelect onChange={(e:React.FormEvent<HTMLInputElement>) => {console.log(e);}} options={timeOption}/>
                        </div>
                    </div>
                    <div className={style.questionBox}>
                        <AnswerItem svg={triangleSVG} ans={ans1} color={"rgb(226, 27, 60)"} setAns={setAns1}
                            placeholder={"Add answer 1"} name={"right_answer"} value={"A"}/>
                        <AnswerItem svg={rhombusSVG} ans={ans2} color={"rgb(19, 104, 206)"} setAns={setAns2}
                            placeholder={"Add answer 2"} name={"right_answer"} value={"B"}/>
                        <AnswerItem svg={circleSVG} ans={ans3} color={"rgb(216, 158, 0)"} setAns={setAns3}
                            placeholder={"Add answer 3"} name={"right_answer"} value={"C"}/>
                        <AnswerItem svg={squareSVG} ans={ans4} color={"rgb(38, 137, 12)"} setAns={setAns4}
                            placeholder={"Add answer 4"} name={"right_answer"} value={"D"}/>
                    </div>
                </form>
            </div>
        </section>
    );
};