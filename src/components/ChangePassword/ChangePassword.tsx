import {useChangePasswordMutation} from "@/store/auth/signupSlice";
import {FormInput} from "@/UI/FormInput";
import {Formik, Form} from "formik";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";


export interface IPassword {
  old_password: string;
  new_password: string;
  password_confirm: string;
}

const PasswordSchema = Yup.object().shape({
    old_password: Yup.string().min(4, "Too Short!").required("Введите пароль"),
    new_password: Yup.string().min(4, "Too Short!").required("Повторите пароль"),
    password_confirm: Yup.string()
        .oneOf([Yup.ref("new_password"), null], "Пароли должны совпадать")
        .required("Подтвердите пароль"),
});

const initialValues: IPassword = {
    old_password: "",
    new_password: "",
    password_confirm: "",
};

const changePasswordData = [
    {
        name: "old_password",
        type: "text",
        placeholder: "old_password",
    },
    {
        name: "new_password",
        type: "text",
        placeholder: "new_password",
    },
    {
        name: "password_confirm",
        type: "number",
        placeholder: "password_confirm",
    },
];

export const ChangePassword = () => {
    const [changePassword] = useChangePasswordMutation();
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    const fetchPasswordData = async (values: IPassword) => {
        console.log("fetch");

        try {
            await changePassword(values).unwrap();
            navigate("/success");
        } catch (error: typeof error) {
            for (const key in error.data) {
                setErr(error.data[key]);
            }
        }
    };

    return (
        <div className="signup">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="container">
                <h1>Change password</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: IPassword) => {
                        fetchPasswordData(values);
                    }}
                    validationSchema={PasswordSchema}
                >
                    <Form className="form">
                        <div className="form_inputs-wrapper">
                            {err && <p className="rejectMessage">{err}</p>}
                            {changePasswordData.map((value) => (
                                <FormInput
                                    name={value.name}
                                    placeholder={value.placeholder}
                                    type={value.type}
                                />
                            ))}
                        </div>

                        <button type="submit" className="button">
              Submit
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
