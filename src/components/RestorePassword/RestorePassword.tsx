import {useRestorePasswordMutation} from "@/store/auth/signupSlice";
import {FormInput} from "@/UI/FormInput";
import {Form, Formik} from "formik";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";


const restorePasswordInputData = [
    {
        name: "login",
        type: "email",
        placeholder: "example@example.com",
    },
];

export interface IRestorePassword {
  login: string;
}

const RestorePasswordSchema = Yup.object().shape({
    login: Yup.string()
        .email("Email is not valid")
        .min(2, "Too Short!")
        .required("Required!"),
});

const initialValues = {
    login: "",
};

export const RestorePassword = () => {
    const [restorePassword] = useRestorePasswordMutation();
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    const fetchRestorePasswordData = async (values: IRestorePassword) => {
        try {
            await restorePassword(values).unwrap();
            navigate("/restore-complete", {state: {title: values.login}});
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
                <h1>Restore password</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: IRestorePassword) => {
                        fetchRestorePasswordData(values);
                    }}
                    validationSchema={RestorePasswordSchema}
                >
                    <Form className="form">
                        <div className="form_inputs-wrapper">
                            {err && <p className="rejectMessage">{err}</p>}
                            {restorePasswordInputData.map((value) => (
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
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
