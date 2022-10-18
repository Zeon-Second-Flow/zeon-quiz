import {useLazyGetGroupQuery} from "@/store/auth/signupSlice";
import {Field} from "formik";
import {useEffect} from "react";


export const Select = () => {
    const  [getGroup, {data}] = useLazyGetGroupQuery(); 
    useEffect(() => {
        getGroup("");
    }, []); 
    
    return (
        <Field as="select" name="group" className="select_group">          
            {data?.map((item:any, idx:number) => (
                <option key={idx} value={item.name}>{item.name}</option>
            ))}
        </Field>
    );
};
