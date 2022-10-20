import styles from "./Footer.module.scss";
import {Link} from "react-router-dom";
import Instagram from "@/assets/instagram.svg";
import VK from "@/assets/vk.svg";
import FaceBook from "@/assets/facebook-f.svg";
import EmailIcon from "@/assets/emailIcon.svg";
import PhoneIcone from "@/assets/phoneIcon.svg";
import Logo from "@/assets/logo.png";


export const Footer = () => {
    // const scroll = () => {
    //     window.scrollTo({top: 0, behavior: "smooth"});
    // };
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <div className={styles.footerInner}>
                            <Link to={"/"}>
                                <div className={styles.logo}>
                                    <img width={160} src={Logo} alt="logo" />
                                </div>
                            </Link>
                            <div className={styles.footerBlock}>
                                <h4>We are in social networks</h4>
                                <a target="_blank" href="vk.com">
                                    <div className={styles.footerInnerBlock}>
                                        {/* <VK className={styles.contactsIcon} /> */}
                                        <img src={VK} className={styles.contactsIcon} alt="Icon" />
                                        <span>Вконтакте</span>
                                    </div>
                                </a>
                                <a target="_blank" href="www.facebook.com">
                                    <div className={styles.footerInnerBlock}>
                                        {/* <FaceBook className={styles.contactsIcon} /> */}
                                        <img
                                            src={FaceBook}
                                            className={styles.contactsIcon}
                                            alt="Icon"
                                        />
                                        <span>Facebook</span>
                                    </div>
                                </a>
                                <a target="_blank" href="www.instagram.com">
                                    <div className={styles.footerInnerBlock}>
                                        {/* <Instagram className={styles.contactsIcon} /> */}
                                        <img
                                            src={Instagram}
                                            className={styles.contactsIcon}
                                            alt="Icon"
                                        />
                                        <span>Instagram</span>
                                    </div>
                                </a>
                            </div>
                            <div className={styles.footerBlock}>
                                <h4>Contacts us</h4>
                                <div className={styles.footerInnerBlock}>
                                    {/* <EmailIcon className={styles.contactsIcon} /> */}
                                    <img
                                        src={EmailIcon}
                                        className={styles.contactsIcon}
                                        alt="Icon"
                                    />
                                    <a href="owner@zeon.ltd">owner@zeon.ltd</a>
                                </div>
                                <div className={styles.footerInnerBlock}>
                                    {/* <PhoneIcone className={styles.contactsIcon} /> */}
                                    <img
                                        src={PhoneIcone}
                                        className={styles.contactsIcon}
                                        alt="Icon"
                                    />
                                    <a href="tel:+996 500 123 456">+996 500 123 456</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
