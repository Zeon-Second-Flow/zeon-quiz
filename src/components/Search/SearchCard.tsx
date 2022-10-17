import React from "react";
import styles from "./Search.module.scss";
import {Link} from "react-router-dom";
import {IITem} from "@/models/models";


type Props = {
    value: IITem;
    clearInput: () => void;
    setShowInput: (value: boolean) => void;
};

export const SearchCard = ({value, clearInput, setShowInput}: Props) => {
    const checkDetails = () => {
        clearInput();
        setShowInput(false);
    };
    return (
        <span key={value.title} onClick={checkDetails} className={styles.dataItem}>
            <Link to={`/detail/${value.title}`}>
                {value.title}
            </Link>
        </span>
    );
};