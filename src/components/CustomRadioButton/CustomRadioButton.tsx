import React from "react";
import "./index.scss";


interface IProps {
    value: string;
    name:string;
}

export const CustomRadioButton = ({value, name}:IProps) => {
    return (
        <ul className={"product-color"}>
            <li>

                <label style={{backgroundColor: "white"}}>
                    <input type='radio' name={name} value={value} />
                    <label htmlFor="white" style={{backgroundColor: "white"}}>

                    </label>
                </label>
            </li>
        </ul>


    );
};

