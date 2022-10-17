import { IProps, ITest } from "@/models/models";
import { useGetTestsQuery } from "@/store/test/testSlice";
import { useEffect, useState } from "react";
import styles from "./TestPage.module.scss";

export const TestPage = ({ test }: IProps) => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetTestsQuery("water");
  const user = JSON.parse(localStorage.getItem("currentUser") || ""); //temporarily
  const [counter, setCounter] = useState(0);
  const [currInfo, setCurrInfo] = useState({});
  const [timer, setTimer] = useState(0);
  const [board, setBoard] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState("");

  useEffect(() => {
    if (data && isSuccess) {
      setCurrInfo(data[counter]);
      setTimer(data[counter].timer);
      setCorrectAnswer(data[counter].correct_answer);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (data && isSuccess) {
      setCurrInfo(data[counter]);
      setCorrectAnswer(data[counter].correct_answer);
    }
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  function dropVal() {
    setBoard(false);
    setCounter(counter + 1);
    if (data) {
      setTimer(data[counter].timer);
    }
  }
  return (
    <>
      {isLoading && <div className="container">Loading</div>}
      {isSuccess && currInfo && (
        <div className={styles.wrapper}>
          <div className="container">
            <div className={styles.top}>
              <div></div>
              <div className={styles.question}>
                <p>{currInfo?.question}</p>
              </div>
              <div className={styles.buttonWrapper}>
                {timer === 0 ? (
                  <button onClick={() => setBoard(true)}>Next</button>
                ) : (
                  <button onClick={() => setBoard(true)}>Skip</button>
                )}
              </div>
            </div>
            <div className={styles.middle}>
              <div className={styles.timer}>{timer}</div>
              <div className={styles.imageWrapper}>
                <img
                  src="https://assets-cdn.kahoot.it/player/v2/assets/0_7.67d1bcb8.gif"
                  alt="the image"
                />
              </div>
              <div className={styles.points}>
                <span>0</span>
                <h3>Answers</h3>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.answerBlock}>
              <div className={`${styles.answerBlockRed} ${styles.block}`}>
                {timer === 0 ? (
                  <div
                    className={
                      currInfo.answers &&
                      currInfo.answers[0][correctAnswer] ===
                        currInfo.answers[0].A
                        ? styles.correct
                        : styles.wrong
                    }
                  >
                    <svg
                      fill={"white"}
                      viewBox="0 0 32 32"
                      focusable="false"
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="1.3px"
                      aria-labelledby="label-5bc273c9-8959-479b-bd17-a2bb639c3874"
                      aria-hidden="true"
                      className="sc-hKgILt bluJxS"
                      style={{ paintOrder: "stroke" }}
                    >
                      <title id="label-5bc273c9-8959-479b-bd17-a2bb639c3874">
                        Icon
                      </title>
                      <path
                        fill={"red"}
                        d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
                        style={{ fill: "inherit" }}
                      ></path>
                    </svg>
                    <p>{currInfo.answers && currInfo.answers[0].A}</p>
                  </div>
                ) : (
                  <>
                    <svg
                      fill={"white"}
                      viewBox="0 0 32 32"
                      focusable="false"
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="1.3px"
                      aria-labelledby="label-5bc273c9-8959-479b-bd17-a2bb639c3874"
                      aria-hidden="true"
                      className="sc-hKgILt bluJxS"
                      style={{ paintOrder: "stroke" }}
                    >
                      <title id="label-5bc273c9-8959-479b-bd17-a2bb639c3874">
                        Icon
                      </title>
                      <path
                        fill={"red"}
                        d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
                        style={{ fill: "inherit" }}
                      ></path>
                    </svg>
                    <p>{currInfo.answers && currInfo.answers[0].A}</p>
                  </>
                )}
              </div>
              <div className={`${styles.answerBlockBlue} ${styles.block}`}>
                {timer === 0 ? (
                  <div
                    className={
                      currInfo.answers &&
                      currInfo.answers[0][correctAnswer] ===
                        currInfo.answers[0].B
                        ? styles.correct
                        : styles.wrong
                    }
                  >
                    <svg
                      fill={"white"}
                      viewBox="0 0 32 32"
                      focusable="false"
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="1.3px"
                      aria-labelledby="label-266eb77b-6d5e-4633-b897-d990f5aae265"
                      aria-hidden="true"
                      className="sc-hKgILt bluJxS"
                      style={{ paintOrder: "stroke" }}
                    >
                      <title id="label-266eb77b-6d5e-4633-b897-d990f5aae265">
                        Icon
                      </title>
                      <path
                        fill={"white"}
                        d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
                        style={{ fill: "inherit" }}
                      />
                    </svg>
                    <p>{currInfo.answers && currInfo?.answers[0].B}</p>
                  </div>
                ) : (
                  <>
                    <svg
                      fill={"white"}
                      viewBox="0 0 32 32"
                      focusable="false"
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="1.3px"
                      aria-labelledby="label-266eb77b-6d5e-4633-b897-d990f5aae265"
                      aria-hidden="true"
                      className="sc-hKgILt bluJxS"
                      style={{ paintOrder: "stroke" }}
                    >
                      <title id="label-266eb77b-6d5e-4633-b897-d990f5aae265">
                        Icon
                      </title>
                      <path
                        fill={"white"}
                        d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
                        style={{ fill: "inherit" }}
                      />
                    </svg>
                    <p>{currInfo.answers && currInfo?.answers[0].B}</p>
                  </>
                )}
              </div>
            </div>
            <div className={styles.answerBlock}>
              <div className={`${styles.answerBlockYellow} ${styles.block}`}>
                {timer === 0 ? (
                  <div
                    className={
                      currInfo.answers &&
                      currInfo.answers[0][correctAnswer] ===
                        currInfo.answers[0].C
                        ? styles.correct
                        : styles.wrong
                    }
                  >
                    <svg
                      fill={"white"}
                      viewBox="0 0 32 32"
                      focusable="false"
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="1.3px"
                      aria-labelledby="label-c7a7cdec-990a-4057-b6a6-2c5c0ed26fc8"
                      aria-hidden="true"
                      className="sc-hKgILt bluJxS"
                      style={{ paintOrder: "stroke" }}
                    >
                      <title id="label-c7a7cdec-990a-4057-b6a6-2c5c0ed26fc8">
                        Icon
                      </title>
                      <path
                        d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z"
                        style={{ fill: "inherit" }}
                      />
                    </svg>
                    <p>{currInfo.answers && currInfo?.answers[0].C}</p>
                  </div>
                ) : (
                  <>
                    <svg
                      fill={"white"}
                      viewBox="0 0 32 32"
                      focusable="false"
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="1.3px"
                      aria-labelledby="label-c7a7cdec-990a-4057-b6a6-2c5c0ed26fc8"
                      aria-hidden="true"
                      className="sc-hKgILt bluJxS"
                      style={{ paintOrder: "stroke" }}
                    >
                      <title id="label-c7a7cdec-990a-4057-b6a6-2c5c0ed26fc8">
                        Icon
                      </title>
                      <path
                        d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z"
                        style={{ fill: "inherit" }}
                      />
                    </svg>
                    <p>{currInfo.answers && currInfo?.answers[0].C}</p>
                  </>
                )}
              </div>
              <div className={`${styles.answerBlockGreen} ${styles.block}`}>
                {timer === 0 ? (
                  <div
                    className={
                      currInfo.answers &&
                      currInfo.answers[0][correctAnswer] ===
                        currInfo.answers[0].D
                        ? styles.correct
                        : styles.wrong
                    }
                  >
                    <svg
                      fill={"white"}
                      viewBox="0 0 32 32"
                      focusable="false"
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="1.3px"
                      aria-labelledby="label-a9903db8-2e98-4d5a-8468-10401b86c28c"
                      aria-hidden="true"
                      className="sc-hKgILt bluJxS"
                      style={{ paintOrder: "stroke" }}
                    >
                      <title id="label-a9903db8-2e98-4d5a-8468-10401b86c28c">
                        Icon
                      </title>
                      <path
                        d="M7,7 L25,7 L25,25 L7,25 L7,7 Z"
                        style={{ fill: "inherit" }}
                      />
                    </svg>
                    <p>{currInfo.answers && currInfo?.answers[0].D}</p>
                  </div>
                ) : (
                  <>
                    <svg
                      fill={"white"}
                      viewBox="0 0 32 32"
                      focusable="false"
                      stroke="rgba(0, 0, 0, 0.15)"
                      strokeWidth="1.3px"
                      aria-labelledby="label-a9903db8-2e98-4d5a-8468-10401b86c28c"
                      aria-hidden="true"
                      className="sc-hKgILt bluJxS"
                      style={{ paintOrder: "stroke" }}
                    >
                      <title id="label-a9903db8-2e98-4d5a-8468-10401b86c28c">
                        Icon
                      </title>
                      <path
                        d="M7,7 L25,7 L25,25 L7,25 L7,7 Z"
                        style={{ fill: "inherit" }}
                      />
                    </svg>
                    <p>{currInfo.answers && currInfo?.answers[0].D}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {isError && <div>error</div>}
      {board && (
        <div className={styles.wrapper}>
          <div className={styles.board}>
            <div className={styles.boardTitle}>
              <h3>Scoreboard</h3>
            </div>
            <div className={styles.buttonWrapper}>
              <button onClick={dropVal}>Next</button>
            </div>
            <div className={styles.boardInner}>
              <div className={styles.boardInfo}>
                <p>{user.email}</p>
                <p>5000</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
