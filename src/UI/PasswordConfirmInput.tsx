import { useField } from 'formik';
import { useState } from 'react';
import styles from './FormInput.module.scss';
import { ReactComponent as PasswordIcon } from '@/assets/auth/eye-close.svg';
import { ReactComponent as PasswordShowIcon } from '@/assets/auth/eye-open.svg';

interface IProps {
  name: string;
  placeholder: string;
  type: string;
}

export const PasswordConfirmField = (props: IProps) => {
  const [field, meta] = useField(props);
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);

  return (
    <div className="password_form">
      <input
        className={`${styles.input} ${
          meta.touched && meta.error && styles.invalid
        }`}
        {...field}
        name={props.name}
        placeholder={props.placeholder}
        type={!isEyeOpen ? 'password' : 'text'}
        autoComplete="off"
      />
      {isEyeOpen && props.name === 'password_confirm' ? (
        <PasswordShowIcon
          onClick={() => setIsEyeOpen(!isEyeOpen)}
          className={styles.showPassword}
        />
      ) : (
        <PasswordIcon
          className={styles.hidePassword}
          onClick={() => setIsEyeOpen(!isEyeOpen)}
        />
      )}
    </div>
  );
};
