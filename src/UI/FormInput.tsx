import {ErrorMessage, useField} from "formik";
import styles from "./FormInput.module.scss";
import {PasswordConfirmField} from "./PasswordConfirmInput";
import {PasswordField} from "./PasswordInput";


interface IProps {
    name: string;
    placeholder: string;
    type: string;
}

export const FormInput = (props: IProps) => {
    const [field, meta] = useField(props);

    return (
        <div>
            {props.name === "password" && <PasswordField {...props} />}
            {props.name === "password_confirm" && props.type === "password" && (
                <PasswordConfirmField {...props} />
            )}
            {(props.type === "text" ||
                props.type === "email" ||
                props.type === "number") && (
                <input
                    className={`${styles.input} ${
                        meta.touched && meta.error && styles.invalid
                    }`}
                    {...field}
                    {...props}
                    autoComplete="off"
                />
            )}

            <ErrorMessage
                component="div"
                name={field.name}
                className={styles.errorMessage}
            />
        </div>
    );
};
