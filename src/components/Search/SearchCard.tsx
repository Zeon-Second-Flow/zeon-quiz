import React from "react";
import {IITem} from "@/components/Search/Search";
import styles from "./Search.module.scss";


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
            {value.title}
        </span>
    );
};