import Select from "react-select";


interface IOption {
    value:number;
    label:string;
}

interface Ioptions {
    options: IOption[];
    setState: (e:number) => void;
}

export const CustomSelect = ({options, setState}:Ioptions) => {

    return (
        <div>
            <Select
                defaultValue={options[2]}
                onChange={(option: IOption | null) => {
                    setState(option!.value);
                }}
                options={options}
            />
        </div>
    );
};



