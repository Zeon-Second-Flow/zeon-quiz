import React, {useState} from "react";
import styles from "./Header.module.scss";
import {Link} from "react-router-dom";
import {Search} from "@/components/Search/Search";
import Logo from "@/assets/logo.png";
import {ReactComponent as BurgerMenu} from "@/assets/burger-menu.svg";
import {ReactComponent as User} from "@/assets/user.svg";
import {Burger} from "@/components/Burger/Burger";
import {useAuth} from "@/hooks";


export const Header = () => {
    const [open, setOpen] = useState(false);
    const {user} = useAuth();
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <nav className={styles.navbar}>
                        <ul className={styles.menu}>
                            <li className={styles.menuItem}>
                                <Link to={"/rules"}>Rules</Link>
                            </li>
                            <li className={styles.menuItem}>Leaderboards</li>
                            <li className={styles.menuItem}>Groups</li>
                        </ul>
                    </nav>
                    <BurgerMenu className={styles.burger} onClick={() => setOpen(true)} />
                    {open ? <Burger setOpen={setOpen} /> : ""}
                    <Link to={"/"}>
                        <div className={styles.logo}>
                            <img width={120} src={Logo} alt="logo" />
                        </div>
                    </Link>
                    <Search />
                    <Link
                        className={styles.userLogo}
                        to={user ? "/profile-page" : "/auth"}
                    >
                        <User />
                    </Link>
                </div>
            </div>
        </div>
    );
};
