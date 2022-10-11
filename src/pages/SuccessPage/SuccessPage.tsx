import styles from './SuccessPage.module.scss';
import { ReactComponent as Success } from '@/assets/auth/success.svg';
import { useNavigate } from 'react-router-dom';

export const SuccessPage = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.successPage}>
      <div className="container">
        <div className={styles.wrapper}>
          <Success />
          <h3>Successfully changed password!</h3>
          <p className={styles.p} onClick={navigateHandler}>
            <button className={styles.btn} type="submit">
              <p>Go home</p>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
