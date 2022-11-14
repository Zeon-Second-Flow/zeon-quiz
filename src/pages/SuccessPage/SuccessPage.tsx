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

	const location = useLocation();

	const message = location.state.title
		? location.state.title
		: 'Successfully changed password!';

	return (
		<div className={styles.successPage}>
			<div className="container">
				<div className={styles.wrapper}>
					<img src={Success} alt="" />
					<h3>{message}</h3>
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
