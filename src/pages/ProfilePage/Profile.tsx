import {IUser, useLazyGetUserQuery} from "@/store/profile/profile.api";
import {useEffect} from "react";
import styles from "./Profile.module.scss";
import {ReactComponent as UserLogo} from "@/assets/userLogo.svg";


export const Profile = () => {
    const token =
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("token") || "");
    const [getUser, {data}] = useLazyGetUserQuery();

    console.log(data);
    

    useEffect(() => {
        getUser(token.email);
    }, []);
    
    return (
        <div className={styles.profile}>
            {data && data.map((user:IUser) => (
                <div className={styles.login}>
                    <div className={styles.logo_block}>
                        <UserLogo className={styles.logo}/>
                        <h3> Login: {user.login}</h3>
                    </div>
                    <div className={styles.user_Logo}>
                        <div><b>Group:</b><p>{user.group}</p></div>
                        <div><b>Overall rating:</b><p>{user.overall_rating}</p></div>
                        <div><b>Group rating:</b><p>{user.group_rating}</p></div>
                        <div>Overall score:<p>{user.overall_score}</p></div>
                        <div><b>Passed tests:</b><p>{user.passed_tests}</p></div>
                    </div>
                    <div>
                        {user.tests.map((test) => (
                            <div>
                                <p>{test.title}</p>
                                <p>{test.group}</p>
                                <p>{test.score}</p>
                                <p>{test.rating}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
