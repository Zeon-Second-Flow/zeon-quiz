import {Link} from "react-router-dom";
import User from "@/assets/user.svg";
import Close from "@/assets/close.svg";
import styles from "./Burger.module.scss";
import Logo from "@/assets/logo.png";
import {useAuth} from "@/hooks";


interface IProps {
  setOpen: (value: boolean) => void;
}

export const Burger = ({setOpen}: IProps) => {
    const close = () => {
        setOpen(false);
    };
    const {user} = useAuth();
    return (
        <div className={styles.burger}>
            <div className={styles.wrapper}>
                <Link to={"/"} onClick={close}>
                    <div className={styles.logo}>
                        <img width={120} src={Logo} alt="logo" />
                    </div>
                </Link>
                <nav className={styles.navbar}>
                    <ul className={styles.menu}>
                        <li className={styles.menuItem} onClick={close}>
                            <Link to={"/rules"}>Rules</Link>
                        </li>
                        <li className={styles.menuItem} onClick={close}>
                            <Link to={"/leaderboard"}>Leaderboards</Link>
                        </li>
                        <li className={styles.menuItem} onClick={close}>
                            <Link to={"/group-page"}>Groups</Link>
                        </li>
                    </ul>
                </nav>
                {/* <Close className={styles.closeIcon} width={24} onClick={close} /> */}
                <img
                    src={Close}
                    alt="User"
                    className={styles.closeIcon}
                    width={24}
                    onClick={close}
                />
                <Link
                    to={user ? `/profile-page/${user.email}` : "/auth"}
                    onClick={close}
                >
                    <img src={User} alt="User" />
                    {/* <User /> */}
                </Link>
            </div>
        </div>
    );
};
