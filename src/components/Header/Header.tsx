import React from "react";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";
import {Search} from "@/components/Search/Search";
import {ReactComponent as Logo} from "@/assets/logo.svg";


export const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>

                    <nav className={styles.navbar}>
                        <ul className={styles.menu}>
                            <li className={styles.menuItem}>
                                <Link to={"/rules"}>
                                    Rules
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                Leaderboards
                            </li>
                            <li className={styles.menuItem}>
                                Groups
                            </li>
                        </ul>
                    </nav>
                    <Link to={"/"}>
                        <div className={styles.logo}>
                            <Logo/>
                        </div>
                    </Link>
                    <Search/>
                </div>
            </div>
        </div>
    );
};

