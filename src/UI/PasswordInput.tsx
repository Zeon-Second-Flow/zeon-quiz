import {useField} from "formik";
import {useState} from "react";
import {ReactComponent as PasswordIcon} from "@/assets/auth/eye-close.svg";
import {ReactComponent as PasswordShowIcon} from "@/assets/auth/eye-open.svg";
import styles from "./FormInput.module.scss";


interface IProps {
  name: string;
  placeholder: string;
  type: string;
}

export const PasswordField = (props: IProps) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const [field, meta] = useField(props);

    return (
        <div className="password_form">
            <input
                className={`${styles.input} ${
                    meta.touched && meta.error && styles.invalid
                }`}
                {...field}
                name={props.name}
                placeholder={props.placeholder}
                type={!isShowPassword ? "password" : "text"}
                autoComplete="off"
            />

            {isShowPassword && props.name === "password" ? (
                <PasswordShowIcon
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    className={styles.showPassword}
                />
            ) : (
                <PasswordIcon
                    className={styles.hidePassword}
                    onClick={() => setIsShowPassword(!isShowPassword)}
                />
            )}
        </div>
    );
};
