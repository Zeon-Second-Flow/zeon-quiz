import { useLocation, useNavigate } from 'react-router-dom';

import Success from '@/assets/auth/success.svg';

import styles from './SuccessPage.module.scss';

interface StateLocation {
	title: string;
}

export const SuccessPage = () => {
	const navigate = useNavigate();
	const state = useLocation().state as StateLocation;

	const navigateHandler = () => {
		navigate('/');
	};

	return (
		<div className={styles.successPage}>
			<div className="container">
				<div className={styles.wrapper}>
					{/* <Success /> */}
					<img src={Success} alt="" />
					<h3>{state.title}</h3>
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
