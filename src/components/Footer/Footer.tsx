import React from "react";
import styles from "./Footer.module.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Instagram} from "@/assets/instagram.svg";
import {ReactComponent as VK} from "@/assets/vk.svg";
import {ReactComponent as FaceBook} from "@/assets/facebook-f.svg";
import {ReactComponent as EmailIcon} from "@/assets/emailIcon.svg";
import {ReactComponent as PhoneIcone} from "@/assets/phoneIcon.svg";
import {ReactComponent as Logo} from "@/assets/logo.svg";


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
                                    <Logo/>
                                </div>
                            </Link>
                            <div className={styles.footerBlock}>
                                <h4>We are in social networks</h4>
                                <a target="_blank" href="vk.com">
                                    <div className={styles.footerInnerBlock}>
                                        <VK className={styles.contactsIcon}/>
                                        <span>Вконтакте</span>
                                    </div>
                                </a>
                                <a target="_blank" href="www.facebook.com">
                                    <div className={styles.footerInnerBlock}>
                                        <FaceBook className={styles.contactsIcon}/>
                                        <span>Facebook</span>
                                    </div>
                                </a>
                                <a target="_blank" href="www.instagram.com">
                                    <div className={styles.footerInnerBlock}>
                                        <Instagram className={styles.contactsIcon}/>
                                        <span>Instagram</span>
                                    </div>
                                </a>
                            </div>
                            <div className={styles.footerBlock}>
                                <h4>Contacts us</h4>
                                <div className={styles.footerInnerBlock}>
                                    <EmailIcon className={styles.contactsIcon}/>
                                    <a href="owner@zeon.ltd">owner@zeon.ltd</a>
                                </div>
                                <div className={styles.footerInnerBlock}>
                                    <PhoneIcone className={styles.contactsIcon}/>
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