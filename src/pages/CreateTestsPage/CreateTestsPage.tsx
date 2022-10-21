import React, {useState, useEffect, useRef} from "react";
import style from "./CreateTestPage.module.scss";
import {QuizSliderBlock} from "@/components/CreateSliderBlock/QuizSliderBlock";
import {CustomSelect} from "@/components/CustomSelect/CustomSelect";
import {Cat} from "@/components/Cat/Cat";
import {AnswerItem} from "@/components/AnswerItem/AnswerItem";
import {circleSVG, squareSVG, triangleSVG, rhombusSVG, deleteIcon} from "@/components/SVG/svg";
import {CreateTestPreviewComponent} from "@/components/CreateTestPreviewComponent/CreateTestPreviewComponent";
import {useCreateTestMutation, useSentImgMutation} from "@/store/slice/CreateTestSlice";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const CreateTestsPage = () => {
    const [ans1, setAns1] = useState<string>("");
    const [ans2, setAns2] = useState<string>("");
    const [ans3, setAns3] = useState<string>("");
    const [ans4, setAns4] = useState<string>("");
    const [question, setQuestion] = useState<string>("");
    const [points, setPoints] = useState<number>(100);
    const [time, setTime] = useState<number>(20);
    const [rightAns, setRightAns] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState(Object);
    const [toggleForm, setToggleForm] = useState(true);
    const [createTest] = useCreateTestMutation();
    const inpImgRef = useRef<HTMLInputElement | any>(null);
    const [data, setDate] = useState<object>({});
    const [dis, setDis] = useState(null);
    const nav = useNavigate();
    const questionModel = {
        question: "",
        id: Math.random().toString(16).slice(5),
        score: 100,
        timer: 20,
        answers: {
            A: "",
            B: "",
            C: "",
            D: "",
            correct_answer: "",
        }
    };
    const [quizArr, setQuizArr] = useState([{...questionModel}]);
    const [currentTest, setCurrenTest] = useState<string>(quizArr[0].id);
    const [testError, setTestError] = useState<null | any>(null);
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
        const editData = async () => {
            await setData(currentTest);
        };
        editData();
        setDate({
            title: title,
            description: description,
            questions: quizArr
        });
        setDis((!!quizArr[quizArr.length - 1].question &&
                !!quizArr.at(-1).answers.A && !!quizArr.at(-1).answers.B &&
                !!quizArr[quizArr.length - 1].answers.C && !!quizArr[quizArr.length - 1].answers.D) &&
            !!quizArr[quizArr.length - 1].answers.correct_answer);

    }, [question, points, ans4, ans3, time, quizArr.length, currentTest, rightAns, title]);

    const addQuiz = () => {
        const newTest = {...questionModel};
        newTest.id = Math.random().toString(16).slice(5);
        setQuizArr(prevState => [...prevState, newTest]);
    };
    console.log(dis);
    const setChoosedQuestion = (idx: string) => {
        setCurrenTest(idx);
        const currentQuestion = quizArr.find((it) => it.id === idx);
        if (currentQuestion) {
            setAns1(currentQuestion.answers.A);
            setAns2(currentQuestion.answers.B);
            setAns3(currentQuestion.answers.C);
            setAns4(currentQuestion.answers.D);
            setQuestion(currentQuestion.question);
            setTime(currentQuestion.timer);
            setPoints(currentQuestion.score);
            setRightAns(currentQuestion.answers.correct_answer);
        }
        return currentQuestion;
    };

    const setData = (idx: string) => {
        const currentQuestion = quizArr.find((it) => it.id === idx);
        const currentQuestionIndex = quizArr.findIndex((it) => it.id === idx);
        if (currentQuestion) {
            currentQuestion.answers.A = tes.ans1;
            currentQuestion.answers.B = tes.ans2;
            currentQuestion.answers.C = tes.ans3;
            currentQuestion.answers.D = tes.ans4;
            currentQuestion.question = tes.question;
            currentQuestion.timer = tes.time;
            currentQuestion.score = tes.points;
            currentQuestion.answers.correct_answer = tes.rightAns;


            setQuizArr(prev => [...prev.slice(0, currentQuestionIndex), currentQuestion, ...prev.slice(currentQuestionIndex + 1, quizArr.length)]);
        }
    };

    const quizDelete = (id: string) => {
        if (quizArr.length !== 1) {
            setQuizArr(quizArr.filter((it, idx) => it.id !== id));
            setCurrenTest(quizArr[0].id);
        }
    };


    const postTest = async () => {
        const dataImg = new FormData();
        dataImg.append("image", img);
        try {
            const response = await createTest(data).unwrap();
            console.log(response);
            if (!!response) {

                try {
                    const resp = axios.patch(`https://safe-atoll-40972.herokuapp.com/tests/update/${response}`, dataImg, {
                        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                        "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>"
                    }).then(data => {
                        nav("/success", {state: {title: "Successfully created test!"}});
                    });

                } catch (err: typeof err) {
                    console.log(err, "aaaaaaaaaaaaaaaaaaaaaaa");
                }
            }
        } catch (error: typeof error) {
            setToggleForm(true);
            for (const key in error.data) {
                setTestError(...error.data.title);
            }
        }
    };

    return (
        <>
            {toggleForm &&
            <CreateTestPreviewComponent
                description={description}
                testError={testError}
                inpImgRef={inpImgRef} title={title} setTitle={setTitle}
                setDescription={setDescription}
                img={img} setImg={setImg}
                setToggleForm={setToggleForm}
            />
            }
            <section className={style.createTestsPage}>
                <div className={style.creatorSlideBar}>
                    <div className={style.blockSlider}>
                        {quizArr?.map((it, idx) => {
                            return (<QuizSliderBlock quizDelete={quizDelete}
                                deleteIcon={deleteIcon} key={idx}
                                choosedQuestion={setChoosedQuestion}
                                it={it} idx={idx}/>);
                        })}
                    </div>
                    <div className={style.sliderBarBtnBox}>
                        <button onClick={addQuiz}>Add question</button>
                    </div>
                </div>
                <div className={style.createTestFormBox}>
                    <div className={style.catBox}>
                        <Cat/>
                    </div>

                    <form className={style.createTestForm} action="">
                        <button type={"button"} onClick={postTest} disabled={!dis}
                            style={dis ? {} : {background: "gray"}}
                            className={style.finishBtn}>
                            Done
                        </button>
                        <div className={style.questionInpBox}>
                            <input value={question}
                                maxLength={100}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)}
                                placeholder={"Start typing your question"}
                                className={style.createTestInputQuestion} type="text"/>
                            <p style={question.length === 0 ? {color: "white"} : {}}>{100 - question.length}</p>
                        </div>
                        <div className={style.counterBox}>
                            <div>
                                Points
                                <CustomSelect setState={setPoints} options={pointsOption}/>
                            </div>
                            <div>
                                Time limit
                                <CustomSelect setState={setTime} options={timeOption}/>
                            </div>
                        </div>
                        <div className={style.questionBox}>
                            <AnswerItem key={66} rightAns={rightAns} setRightAns={setRightAns} svg={triangleSVG}
                                ans={ans1}
                                color={"rgb(226, 27, 60)"} setAns={setAns1}
                                placeholder={"Add answer 1"} name={"right_answer"} value={"A"}/>
                            <AnswerItem key={77} rightAns={rightAns} setRightAns={setRightAns} svg={rhombusSVG}
                                ans={ans2}
                                color={"rgb(19, 104, 206)"} setAns={setAns2}
                                placeholder={"Add answer 2"} name={"right_answer"} value={"B"}/>
                            <AnswerItem key={88} rightAns={rightAns} setRightAns={setRightAns} svg={circleSVG}
                                ans={ans3}
                                color={"rgb(216, 158, 0)"} setAns={setAns3}
                                placeholder={"Add answer 3"} name={"right_answer"} value={"C"}/>
                            <AnswerItem key={99} rightAns={rightAns} setRightAns={setRightAns} svg={squareSVG}
                                ans={ans4}
                                color={"rgb(38, 137, 12)"} setAns={setAns4}
                                placeholder={"Add answer 4"} name={"right_answer"} value={"D"}/>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};