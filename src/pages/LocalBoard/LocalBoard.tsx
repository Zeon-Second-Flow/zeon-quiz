import styles from "./LocalBoard.module.scss";


export const LocalBoard = () => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "");
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
};
