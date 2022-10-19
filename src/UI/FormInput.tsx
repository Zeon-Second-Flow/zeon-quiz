import {ErrorMessage, useField} from "formik";
import styles from "./FormInput.module.scss";
import {PasswordConfirmField} from "./PasswordConfirmInput";
import {PasswordField} from "./PasswordInput";
import {Select} from "./Select";


interface IProps {
    name: string;
    placeholder: string;
    type: string;
    as?: string;
}

export const FormInput = (props: IProps) => {
    const [field, meta] = useField(props);


    return (
        <>
            {props.name === "group" && <Select />}
            {props.name === "password" && <PasswordField {...props} />}
            {props.name === "password_confirm" && props.type === "password" && (
                <PasswordConfirmField {...props} />
            )}
            {(props.type === "text" ||
                props.type === "email" ||
              
                props.type === "number") && (
                <>
                    <input
                        className={`${styles.input} ${meta.touched && meta.error && styles.invalid}`}
                        {...field}
                        {...props}
                     
                        autoComplete="off" />
                        
                </>
            )}
           
            <ErrorMessage
                component="div"
                name={field.name}
                className={styles.errorMessage}
            />
        </>
    );
};





// export const Select = ({options, name}) => {
//     const {
//         register,
//         formState: {errors},
//     } = useFormikContext();

//     return (
//         <select className={styles.select} {...register(name)}>
//             {options.map((value:any) => (
//                 <option key={value} value={value}>
//                     {value}
//                 </option>
//             ))}
//         </select>
//     );
// };
