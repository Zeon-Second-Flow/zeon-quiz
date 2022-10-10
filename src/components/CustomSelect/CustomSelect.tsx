import React  from "react";
import Select from "react-select";


interface IOption {
    value:number;
    label:string;
}

interface Ioptions {
    options: IOption[];
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const CustomSelect = ({options}:Ioptions) => {
    return (
        <div>
            <Select
                onChange={(e) => {console.log(e);}}
                options={options}
            />
        </div>
    );
};



