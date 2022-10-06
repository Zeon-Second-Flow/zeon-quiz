import { useLoginUserMutation } from '@/store/auth/signupSlice';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

export interface IValue {
  login: string;
  password: string;
  refresh?: string;
  access?: string;
}

const SignupSchema = Yup.object().shape({
  login: Yup.string().min(2, 'Too Short!').required('Required!'),
  password: Yup.string()
    .min(4, 'Minimum 4 characters required!')
    .required('Required!'),
});

const Login = () => {
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const [err, setErr] = useState('');

  const signinUser = async (values: IValue, reset: () => void) => {
    try {
      let data = await loginUser(values).unwrap();
      reset();
      navigate('/');
      localStorage.setItem(
        'token',
        JSON.stringify({
          token: data.refresh,
          access: data.access,
          email: values.login,
        })
      );
    } catch (error: any) {
      setErr(error.data.login[0]);
    }
  };

  const resetError = () => {
    setErr('');
  };

  const initialValues = {
    login: '',
    password: '',
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
          onSubmit={async (values: IValue, { resetForm }) => {
            await signinUser(values, resetForm);
          }}
          validationSchema={SignupSchema}
        >
          <Form>
            <Field
              className={styles.input}
              id="login"
              name="login"
              placeholder="example@example.com"
              type="email"
              input_name="email"
              onInput={() => err && resetError()}
            />
            <ErrorMessage
              name="login"
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

            {err && <p className={styles.rejectMessage}>{err}</p>}
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
