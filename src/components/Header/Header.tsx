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
    console.log(user);
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <BurgerMenu className={styles.burger} onClick={() => setOpen(true)} />
                    <Link to={"/"}>
                        <div className={styles.logo}>
                            <img width={120} src={Logo} alt="logo" />
                        </div>
                    </Link>
                    <nav className={styles.navbar}>
                        <ul className={styles.menu}>
                            <li className={styles.menuItem}>
                                <Link to={"/rules"}>Rules</Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link to={"/leaderboard"}>Leaderboards</Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link to={"/group-page"}>Groups</Link>
                            </li>
                        </ul>
                    </nav>
                    {open && <Burger setOpen={setOpen} /> }
                    {user && <Search />}
                    <Link
                        className={styles.userLogo}
                        to={user ? `/profile-page/${user.email}` : "/auth"}
                    >
                        <User />
                    </Link>
                </div>
            </div>
        </div>
    );
};
