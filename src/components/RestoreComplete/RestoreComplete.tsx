import {
    useRestoreCompleteMutation,
    useRestorePasswordMutation,
} from "@/store/auth/signupSlice";
import {FormInput} from "@/UI/FormInput";
import {Form, Formik} from "formik";
import React, {useState} from "react";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import * as Yup from "yup";


const restoreCompleteInputData = [
    {
        name: "login",
        type: "email",
        placeholder: "example@example.com",
    },
    {
        name: "activation_code",
        type: "text",
        placeholder: "activation_code",
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

export interface IRestoreComplete {
  login: string;
  activation_code: string;
  password: string;
  password_confirm: string;
}

const RestoreCompleteSchema = Yup.object().shape({
    login: Yup.string()
        .email("Email is not valid")
        .min(2, "Too Short!")
        .required("Required!"),
    activation_code: Yup.string().min(2, "Too Short!").required("Required!"),
    password: Yup.string()
        .min(4, "Minimum 4 characters required!")
        .required("Required!"),
    password_confirm: Yup.string()
        .oneOf([Yup.ref("password")], "Password do not match")
        .required("Required!"),
});

export const RestoreComplete = () => {
    const [restoreComplete] = useRestoreCompleteMutation();
    const [err, setErr] = useState("");
    const location = useLocation();

    const initialValues = {
        login: location.state.title,
        activation_code: "",
        password: "",
        password_confirm: "",
    };

    const navigate = useNavigate();

    const fetchRestoreCompleteData = async (values: IRestoreComplete) => {
        try {
            await restoreComplete(values).unwrap();
            navigate("/success");
        } catch (error: any) {
            for (const key in error.data) {
                setErr(error.data[key]);
            }
            console.log(error);
        }
    };

    return (
        <div className="signup">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="container">
                <h1>Restore Complete</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: IRestoreComplete) => {
                        fetchRestoreCompleteData(values);
                    }}
                    validationSchema={RestoreCompleteSchema}
                >
                    <Form className="form">
                        <div className="form_inputs-wrapper">
                            {err && <p className="rejectMessage">{err}</p>}
                            {restoreCompleteInputData.map((value) => (
                                <FormInput
                                    key={Math.random()}
                                    name={value.name}
                                    placeholder={value.placeholder}
                                    type={value.type}
                                />
                            ))}
                        </div>
                        <button type="submit" className="button">
              Submit
                        </button>
                        <NavLink className="linkTo" to="/restore-password">
              Send code again
                        </NavLink>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
