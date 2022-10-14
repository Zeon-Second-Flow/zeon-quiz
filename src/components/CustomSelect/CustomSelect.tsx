import React from "react";
import Select from "react-select";


interface IOption {
    value:number;
    label:string;
}

interface Ioptions {
    options: IOption[];
    setState: (e:number) => void;
    defaultValue: string;
}

export const CustomSelect = ({options, setState, defaultValue}:Ioptions) => {

    return (
        <div>
            <Select
                defaultInputValue={defaultValue}
                onChange={(option: IOption | null) => {
                    setState(option!.value);
                }}
                options={options}
            />
        </div>
    );
};



