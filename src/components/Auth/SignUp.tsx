import React, {useState} from "react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import {
    useAddUserMutation,
    useLoginUserMutation,
} from "@/store/auth/signupSlice";
import {NavLink, useNavigate} from "react-router-dom";
import {FormInput} from "@/UI/FormInput";


const signupInputData = [
    {
        name: "email",
        type: "email",
        placeholder: "example@example.com",
    },
    {
        name: "group",
        type: "text",
        placeholder: "Group",
    },

    {
        name: "password",
        type: "password",
        placeholder: "password",
    },

    {
        name: "password_confirm",
        type: "password",
        placeholder: "password_confirm",
    },
];

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
    email: Yup.string()
        .email("Email is not valid")
        .min(2, "Too Short!")
        .required("Required!"),
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
                    token: res.access,
                    refresh: res.refresh,
                    email: res.login,
                })
            );
            navigate("/");
        } catch (error: typeof error) {
            throw new Error(error);
        }
    };
    const createUser = async (values: IValues) => {
        try {
            await addUser(values).unwrap();
            localStorage.setItem(
                "currentUser",
                JSON.stringify({
                    email: values.email,
                    group: values.group,
                })
            );
            await login(values);
        } catch (error: typeof error) {
            for (const key in error.data) {
                setErr(error.data[key]);
            }
        }
    };

    const initialValues = {
        email: "",
        group: "",
        password: "",
        password_confirm: "",
    };

    return (
        <div className="signup">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="container">
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: IValues) => {
                        createUser(values);
                    }}
                    validationSchema={SignupSchema}
                >
                    <Form className="form">
                        <h1>Sign up</h1>
                        {err && <p className="rejectMessage">{err}</p>}
                        {signupInputData.map((value) => (
                            <FormInput
                                name={value.name}
                                placeholder={value.placeholder}
                                type={value.type}
                            />
                        ))}
                        <button
                            type="submit"
                            className={isLoading ? "buttonLoading" : "button"}
                        >
              Submit
                        </button>
                        <NavLink className="linkTo" to="/login">
              Already have an account?
                        </NavLink>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
