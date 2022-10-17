import { useGetTestsQuery, useGetWaterQuery } from "@/store/test/testSlice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./LocalBoard.module.scss";

interface Props {
  test: string;
}

export interface ITest {
  id: number;
  question: string;
  image: string;
  score: number;
  timer: number;
  test: string;
  correct_answer: string;
  answers: Answer[];
}

export interface Answer {
  A: string;
  B: string;
  C: string;
  D: string;
}
export default function LocalBoard() {
  //   const { data, isLoading, isSuccess, isError, error } = useGetWaterQuery(test);
  const data = [
    {
      id: 1,
      question: "What is longest river?",
      image: "/media/torrent-white-water-force-nature-river.jpg",
      score: 100,
      timer: 20,
      test: "water",
      correct_answer: "A",
      answers: [
        {
          A: "Amazon River",
          B: "Nile",
          C: "Yellow River",
          D: "Congo River",
        },
      ],
    },
    {
      id: 2,
      question: "What is deepest lake in the world?",
      image: "/media/torrent-white-water-force-nature-river_KL4Gs8I.jpg",
      score: 120,
      timer: 20,
      test: "water",
      correct_answer: "B",
      answers: [
        {
          A: "Great Slave Lake",
          B: "Ysyk-köl",
          C: "Baikal",
          D: "Lake Nyasa",
        },
      ],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        <div className={styles.boardTitle}>
          <h3>Scoreboard</h3>
        </div>
        <div className={styles.buttonWrapper}>
          <button>Next</button>
        </div>
        <div className={styles.boardInner}>
          <div className={styles.boardInfo}>
            <p>username</p>
            <p>score</p>
          </div>
          <div className={styles.boardInfo}>
            <p>username</p>
            <p>score</p>
          </div>
          <div className={styles.boardInfo}>
            <p>username</p>
            <p>score</p>
          </div>
        </div>
      </div>
    </div>
  );
}
