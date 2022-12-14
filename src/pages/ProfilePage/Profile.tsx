import {IUser, useLazyGetUserQuery} from "@/store/profile/profile.api";
import {useEffect} from "react";
import styles from "./Profile.module.scss";
import UserLogo from "@/assets/userLogo.svg";
import ChangePasswordLogo from "@/assets/key-solid.svg";
import LogoutLogo from "@/assets/logout.svg";
import {MyLoader} from "@/components/Loader/MyLoader";
import {NavLink, useParams, useNavigate} from "react-router-dom";
import {useLogoutUserMutation} from "@/store/auth/signupSlice";


export const Profile = () => {
    const token =
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("token") || "");

    const {name} = useParams();

    const [getUser, {data, isLoading}] = useLazyGetUserQuery();
    const [logoutUser] = useLogoutUserMutation();
    const navigate = useNavigate();

    useEffect(() => {
        getUser(name);
    }, []);

    if (isLoading) {
        return <MyLoader />;
    }

    const fetchLogoutUser = (e: any) => {
        e.preventDefault();
        logoutUser(token.refresh);
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className={styles.profile}>
            <div className="container">
                {data &&
          data.map((user: IUser) => (
              <div className={styles.login}>
                  {name === token.email && (
                      <div className={styles.logo_block}>
                          <div className={styles.logo_block_info}>
                              <h3>
                                  {/* <UserLogo className={styles.logo} /> */}
                                  <img className={styles.logo} src={UserLogo} alt="" />
                                  {user.login}
                              </h3>
                              <NavLink to="/change-password">
                                  {/* <ChangePasswordLogo className={styles.logo} /> */}
                                  <img
                                      src={ChangePasswordLogo}
                                      className={styles.logo}
                                      alt=""
                                  />
                                  <span>Change password</span>
                              </NavLink>
                              <div>
                                  <NavLink to="/logout">
                                      {/* <LogoutLogo className={styles.logo} /> */}
                                      <img src={LogoutLogo} className={styles.logo} alt="" />
                                      <span onClick={fetchLogoutUser}>Logout</span>
                                  </NavLink>
                              </div>
                          </div>
                      </div>
                  )}
                  <div className={styles.info}>
                      <div className={styles.card}>
                          <div className={styles.content}>
                              <h4>User information</h4>
                              <div>
                                  <b>Group: </b>
                                  <p>{user.group}</p>
                              </div>
                              <div>
                                  <b>Overall rating: </b>
                                  <p>{user.overall_rating}</p>
                              </div>
                              <div>
                                  <b>Group rating: </b>
                                  <p>{user.group_rating}</p>
                              </div>
                              <div>
                                  <b>Overall score:</b> <p>{user.overall_score}</p>
                              </div>
                              <div>
                                  <b>Passed tests: </b>
                                  <p>{user.passed_tests}</p>
                              </div>
                          </div>
                      </div>
                      <div
                          className={styles.card}
                          key={user.tests[user.tests.length - 1].score}
                      >
                          <div className={styles.content}>
                              <h4>Last game</h4>
                              <div className={styles.info_content}>
                                  <b>Title: </b>
                                  <p>{user.tests[user.tests.length - 1].title}</p>
                              </div>
                              <div className={styles.info_content}>
                                  <b>Score: </b>
                                  <p>{user.tests[user.tests.length - 1].score}</p>
                              </div>
                              <div className={styles.info_content}>
                                  <b>Rate: </b>
                                  <p>{user.tests[user.tests.length - 1].rating}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          ))}
            </div>
        </div>
    );
};
