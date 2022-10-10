import React from "react";
import style from "@/pages/CreateTestsPage/CreateTestPage.module.scss";
import {CustomRadioButton} from "../CustomRadioButton/CustomRadioButton.js";


interface IProps {
    ans: string;
    color :string;
    setAns: (e: string) => void;
    placeholder:string;
    name:string;
    value:string;
    svg: JSX.Element;
}

export const AnswerItem = ({ans, color, setAns, placeholder, name, value, svg}: IProps) => {
    return (
        <div style={!!ans ? {background: color} : {}} className={style.questionInputBox}>
            <div style={{background: color}} className={style.questionSvgBox}>
                {svg}
            </div>
            <input style={!!ans ? {background: color} : {}}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAns(e.target.value)}
                placeholder={placeholder} className={style.questionInputText} type="text"/>
            <CustomRadioButton value={value} name={name}/>
        </div>
    );
};


