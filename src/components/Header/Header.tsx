import React from "react";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";
import {Search} from "@/components/Search/Search";
import Logo from "@/assets/logo.png";
import {ReactComponent as BurgerMenu} from "@/assets/burger-menu.svg";


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
                    <BurgerMenu className={styles.burger}/>
                    <Link to={"/"}>
                        <div className={styles.logo}>
                            <img width={120}  src={Logo} alt="logo"/>
                        </div>
                    </Link>
                    <Search/>
                </div>
            </div>
        </div>
    );
};

