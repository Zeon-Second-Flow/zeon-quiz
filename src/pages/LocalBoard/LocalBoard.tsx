import { IProps } from "@/models/models";
import { useGetTestsQuery } from "@/store/test/testSlice";
import styles from "./LocalBoard.module.scss";

export default function LocalBoard() {
  const user = JSON.parse(localStorage.getItem("currentUser") || "");
  console.log(user.email);
  //should change when they enter game do, have to save their names in local storage or state(context)
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
            <p>{user.email}</p>
            <p>5000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
