import React, { useState } from "react";
import { useLoginUserMutation } from "@/store/auth/signupSlice";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { FormInput } from "@/UI/FormInput";

const loginInputData = [
  {
    name: "login",
    type: "email",
    placeholder: "example@example.com",
  },
  {
    name: "password",
    type: "password",
    placeholder: "password",
  },
];

export interface IValue {
  login: string;
  password: string;
  refresh?: string;
  access?: string;
}

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .email("Email is not valid")
    .min(2, "Too Short!")
    .required("Required!"),
  password: Yup.string()
    .min(4, "Minimum 4 characters required!")
    .required("Required!"),
});

export const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const signinUser = async (values: IValue) => {
    try {
      const data = await loginUser(values).unwrap();
      localStorage.setItem(
        "token",
        JSON.stringify({
          isStaff: data.is_staff,
          refresh: data.refresh,
          token: data.access,
          email: values.login,
        })
      );
      navigate("/");
    } catch (error: typeof error) {
      for (const key in error.data) {
        setErr(error.data[key]);
      }
    }
  };

  const initialValues = {
    login: "",
    password: "",
  };

  return (
    <div className="signup">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="container">
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: IValue) => {
            signinUser(values);
          }}
          validationSchema={SignupSchema}
        >
          <Form className="form" style={{ top: "44%" }}>
            <div className="form_inputs-wrapper">
              {err && <p className="rejectMessage">{err}</p>}
              {loginInputData.map((value, idx) => (
                <FormInput
                  key={idx}
                  name={value.name}
                  placeholder={value.placeholder}
                  type={value.type}
                />
              ))}
            </div>
            <button
              type="submit"
              className={isLoading ? "buttonLoading" : "button"}
            >
              Submit
            </button>
            <div className="linkTo">
              <p>Forgotten password?</p>
              <NavLink to="/restore-password">
                <span>Restore password</span>
              </NavLink>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
