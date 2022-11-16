import {useField} from "formik";
import {useState} from "react";
import PasswordIcon from "@/assets/auth/eye-close.svg";
import PasswordShowIcon from "@/assets/auth/eye-open.svg";
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
                <img
                    src={PasswordShowIcon}
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    className={styles.showPassword}
                    alt=""
                />
            ) : (
                <img
                    src={PasswordIcon}
                    className={styles.hidePassword}
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    alt=""
                />
            )}
        </div>
    );
};
