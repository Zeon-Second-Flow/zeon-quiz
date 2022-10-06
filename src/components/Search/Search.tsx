import React, {useState} from "react";
import styles from "./Search.module.scss";
import {ReactComponent as CloseIcon} from "@/assets/close.svg";
import  {ReactComponent as SearchIcon} from "@/assets/searchIcon.svg";
import {SearchCard} from "@/components/Search/SearchCard";


export const Search = () => {
    const [show, setShow] = useState(false);

    const onBlur = () => {
        setTimeout(() => setShow(false), 200);
    };

    return (
        <div className={styles.searchOutter}>
            <div className={styles.search}>
                <div className={styles.searchInputs}>
                    <input
                        onBlur={onBlur}
                        placeholder="Поиск"
                        type="text"
                    />
                    <div className={styles.searchIcon}>
                        <SearchIcon
                            className={styles.searchIcon}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.smallSearch}>
                {false ? (
                    <div >
                        <CloseIcon
                            onClick={() => setShow(false)}
                            className={styles.searchIcon}
                        />
                    </div>
                ) : (
                    <div >
                        <SearchIcon className={styles.searchIcon} />
                    </div>
                )}
                {show ? (
                    <div className={styles.smallSearchOutter}>
                        <div className={styles.smallSearchInputs}>
                            <input
                                onBlur={onBlur}
                                placeholder="Поиск"
                                type="text"
                            />
                            <div className={styles.smallSearchIcon}>
                                <SearchIcon  />
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <SearchCard/>
        </div>
    );
};