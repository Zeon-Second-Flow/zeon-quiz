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
            <div className="container">
                {data && data.map((user:IUser) => (
                    <div className={styles.login}>
                        <div className={styles.logo_block}>
                            <UserLogo className={styles.logo}/>
                            <h3> Login: {user.login}</h3>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.card}>
                                <div className={styles.content}>
                                    <h4>User information</h4>
                                    <div><b>Group: </b><p>{user.group}</p></div>
                                    <div><b>Overall rating: </b><p>{user.overall_rating}</p></div>
                                    <div><b>Group rating: </b><p>{user.group_rating}</p></div>
                                    <div><b>Overall score:</b> <p>{user.overall_score}</p></div>
                                    <div><b>Passed tests: </b><p>{user.passed_tests}</p></div>
                                </div>
                            </div>
                            {user.tests.map((test) => (
                                <div className={styles.card}>
                                    <div className={styles.content}>
                                        <h4>Last game</h4>
                                        <div className={styles.info_content}><b>Title: </b><p>{test.title}</p></div>
                                        <div className={styles.info_content}> <b>Score: </b><p>{test.score}</p></div>
                                        <div className={styles.info_content}><b>Rate: </b><p>{test.rating}</p></div>
                                    </div>
                                </div>
                            ))}         
                        </div>       
                    </div>
                ))}
            </div>
        </div>
    );
};
