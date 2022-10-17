import React from "react";
import styles from "./TestPage.module.scss";

export const TestPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.top}>
          <div></div>
          <div className={styles.question}>
            <p>What is this?</p>
          </div>
          <div className={styles.buttonWrapper}>
            <button>Skip</button>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.timer}>0</div>
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
          <div className={styles.answerBlockRed}>
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              doloremque.
            </p>
          </div>
          <div className={styles.answerBlockBlue}>
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              doloremque.
            </p>
          </div>
        </div>
        <div className={styles.answerBlock}>
          <div className={styles.answerBlockYellow}>
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              doloremque.
            </p>
          </div>
          <div className={styles.answerBlockGreen}>
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
