import React, {useState, useEffect} from "react";
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
    const [question, setQuestion] = useState<string>("");
    const [points, setPoints] = useState<number>(100);
    const [time, setTime] = useState<number>(20);
    const [rightAns, setRightAns] = useState("");
    const questionModel = {
        question: "",
        id: Math.random().toString(16).slice(5),
        score: 100,
        timer: 20,
        answer: {
            A: "",
            B: "",
            C: "",
            D: "",
            correct_answer: "",
        }
    };
    const [quizArr, setQuizArr] = useState([{...questionModel}]);
    const [currentTest, setCurrenTest] = useState<string>(quizArr[0].id);

    const tes = {
        question,
        points,
        time,
        ans1,
        ans2,
        ans3,
        ans4,
        rightAns
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

    useEffect(() => {
        const  editData = async () => {
            await setData(currentTest);

            // const currentQuestion = quizArr.find((it) => it.id === currentTest)
            // const currentQuestionIndex = quizArr.findIndex((it) => it.id === currentTest)
            // console.log(currentQuestionIndex)
            // setQuizArr(prev => [...prev.slice(0, currentQuestionIndex), currentQuestion, ...prev.slice(currentQuestionIndex + 1, quizArr.length)])
        };
        editData();

    }, [question, ans1, ans2, ans3, ans4, points, time, rightAns]);

    const addQuiz = () => {
        const newTest = {...questionModel};
        newTest.id =Math.random().toString(16).slice(5);
        setQuizArr(prevState => [...prevState, newTest]);
        // setTimeout(() => {
        //     console.log(quizArr[quizArr.length -1].id, "newwwwwwwww")
        //     setChoosedQuestion(quizArr[quizArr.length -1].id)
        // }, 100)
    };

    const setChoosedQuestion = (idx : string) => {
        console.log(idx, "CHANGED");
        setCurrenTest(idx);
        const currentQuestion = quizArr.find((it) => it.id === idx);
        if (currentQuestion) {
            setAns1( currentQuestion.answer.A);
            setAns2( currentQuestion.answer.B);
            setAns3( currentQuestion.answer.C);
            setAns4( currentQuestion.answer.D);
            setQuestion(currentQuestion.question);
            setTime(currentQuestion.timer);
            setPoints(currentQuestion.score);
            setRightAns(currentQuestion.answer.correct_answer);
        }
        return currentQuestion;
    };

    const setData = (idx : string) => {
        const currentQuestion = quizArr.find((it) => it.id === idx);
        const currentQuestionIndex = quizArr.findIndex((it) => it.id === idx);
        if (currentQuestion){
            currentQuestion.answer.A = tes.ans1;
            currentQuestion.answer.B = tes.ans2;
            currentQuestion.answer.C = tes.ans3;
            currentQuestion.answer.D = tes.ans4;
            currentQuestion.question = tes.question;
            currentQuestion.timer = tes.time;
            currentQuestion.score = tes.points;
            currentQuestion.answer.correct_answer = tes.rightAns;
            // setQuizArr(prev => [...prev.filter(item => item.id !== currentQuestion.id), currentQuestion])

            // setQuizArr([...startQuiz, currentQuestion, ...endQuiz])

            // console.log(quizArr)


            const startQuiz = quizArr.slice(0, currentQuestionIndex);
            const endQuiZ = quizArr.slice(currentQuestionIndex + 1, quizArr.length);

            console.log(quizArr, "AAAAAAAAAAAAAAAa");
            console.log([
                ...startQuiz, currentQuestion, ...endQuiZ
            ], "EDIT");

            setQuizArr(prev => [...prev.slice(0, currentQuestionIndex), currentQuestion, ...prev.slice(currentQuestionIndex + 1, quizArr.length)]);
        }
    };

    return (
        <section className={style.createTestsPage}>
            <div className={style.creatorSlideBar}>
                <div className={style.blockSlider}>
                    {quizArr?.map((it, idx) => {return (<QuizSliderBlock key={idx} choosedQuestion={setChoosedQuestion} it={it} idx={idx}/>);})}
                </div>
                <div className={style.sliderBarBtnBox}>
                    <button onClick={addQuiz}>Add quiz</button>
                </div>
            </div>
            <div className={style.createTestFormBox}>
                <div className={style.catBox}>
                    <Cat/>
                </div>
                <form className={style.createTestForm} action="">
                    <input value={question}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)}
                        placeholder={"Start typing your question"}
                        className={style.createTestInputQuestion} type="text"/>

                    <div className={style.counterBox}>
                        <div>
                            Points
                            <CustomSelect defaultValue={"100 points"} setState={setPoints}  options={pointsOption}/>
                        </div>
                        <div>
                            Time limit
                            <CustomSelect defaultValue={"20 seconds"} setState={setTime} options={timeOption}/>
                        </div>
                    </div>
                    <div className={style.questionBox}>
                        <AnswerItem rightAns={rightAns} setRightAns={setRightAns} svg={triangleSVG} ans={ans1}
                            color={"rgb(226, 27, 60)"} setAns={setAns1}
                            placeholder={"Add answer 1"} name={"right_answer"} value={"A"}/>
                        <AnswerItem rightAns={rightAns} setRightAns={setRightAns} svg={rhombusSVG} ans={ans2}
                            color={"rgb(19, 104, 206)"} setAns={setAns2}
                            placeholder={"Add answer 2"} name={"right_answer"} value={"B"}/>
                        <AnswerItem rightAns={rightAns} setRightAns={setRightAns} svg={circleSVG} ans={ans3}
                            color={"rgb(216, 158, 0)"} setAns={setAns3}
                            placeholder={"Add answer 3"} name={"right_answer"} value={"C"}/>
                        <AnswerItem rightAns={rightAns} setRightAns={setRightAns} svg={squareSVG} ans={ans4}
                            color={"rgb(38, 137, 12)"} setAns={setAns4}
                            placeholder={"Add answer 4"} name={"right_answer"} value={"D"}/>
                    </div>
                </form>
            </div>
        </section>
    );
};