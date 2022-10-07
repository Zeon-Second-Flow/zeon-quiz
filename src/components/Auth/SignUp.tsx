import {useState} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import {
    useAddUserMutation,
    useLoginUserMutation,
} from "@/store/auth/signupSlice";
import styles from "./SignUp.module.scss";
import {useNavigate} from "react-router-dom";


export interface IValues {
    email: string;
    group: string;
    password: string;
    password_confirm: string;
    error?: object;
}

interface IData {
    email: string;
    password: string;
}

const SignupSchema = Yup.object().shape({
    email: Yup.string().min(2, "Too Short!").required("Required!"),
    group: Yup.string().min(2, "Too Short!").required("Required!"),
    password: Yup.string()
        .min(4, "Minimum 4 characters required!")
        .required("Required!"),
    password_confirm: Yup.string()
        .oneOf([Yup.ref("password")], "Password do not match")
        .required("Required!"),
});

export const SignUp = () => {
    const [addUser, {isLoading}] = useAddUserMutation();
    const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate();
    const [err, setErr] = useState("");

    const login = async (data: IData) => {
        try {
            const res = await loginUser({
                login: data.email,
                password: data.password,
            }).unwrap();
            localStorage.setItem(
                "token",
                JSON.stringify({
                    token: res.refresh,
                    access: res.access,
                    email: res.login,
                })
            );
        } catch (error: typeof error) {
            setErr(error.data.login[0]);
        }
    };
    const createUser = async (values: IValues, reset: () => void) => {
        try {
            await addUser(values).unwrap();
            localStorage.setItem(
                "currentUser",
                JSON.stringify({
                    email: values.email,
                    group: values.group,
                })
            );
            reset();
            login(values);
            navigate("/");
        } catch (error: typeof error) {
            setErr(error.data.email[0]);
        }
    };

    const resetError = () => {
        setErr("");
    };

    const initialValues = {
        email: "",
        group: "",
        password: "",
        password_confirm: "",
    };

    return (
        <div className={styles.signup}>
            <div className={styles.background}>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
            </div>
            <div className="container">
                <h1>Sign up</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values: IValues, {resetForm}) => {
                        await createUser(values, resetForm);
                    }}
                    validationSchema={SignupSchema}
                >
                    <Form>
                        <Field
                            className={styles.input}
                            id="email"
                            name="email"
                            placeholder="example@example.com"
                            type="email"
                            input_name="email"
                            onInput={() => err && resetError()}
                        />
                        <ErrorMessage
                            name="email"
                            component="p"
                            className={styles.errorMessage}
                        />

                        <Field
                            className={styles.input}
                            id="group"
                            name="group"
                            placeholder="group"
                            input_name="group"
                            onInput={() => err && resetError()}
                        />
                        <ErrorMessage
                            name="group"
                            component="p"
                            className={styles.errorMessage}
                        />

                        <Field
                            className={styles.input}
                            id="password"
                            name="password"
                            placeholder="password"
                            input_name="password"
                            onInput={() => err && resetError()}
                        />
                        <ErrorMessage
                            name="password"
                            component="p"
                            className={styles.errorMessage}
                        />

                        <Field
                            className={styles.input}
                            id="password2"
                            name="password_confirm"
                            placeholder="password"
                            input_name="password_confirm"
                            onInput={() => err && resetError()}
                        />
                        <ErrorMessage
                            name="password_confirm"
                            component="p"
                            className={styles.errorMessage}
                        />

                        {err && <p className={styles.rejectMessage}>{err}</p>}
                        <button
                            type="submit"
                            className={isLoading ? styles.buttonLoading : styles.button}
                        >
                            Submit
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
