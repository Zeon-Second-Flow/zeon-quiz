import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	setSocketTest,
	setSocketTitle,
	setSocketUsers,
} from '@/store/websocket/websocket';

import styles from './YourIn.module.scss';
import { useAppSelector } from '@/hooks';

export const YourIn = () => {
	const { users, socket } = useAppSelector((state) => state.websocket);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		socket.on('users', (users) => {
			dispatch(setSocketUsers(users));
		});

		socket.on('starting', ([test, title]) => {
			dispatch(setSocketTest(test));
			dispatch(setSocketTitle(title));
			navigate(`/game`);
		});
	}, []);
	return (
		<div className={styles.wrapper}>
			<div className="container">
				<div className={styles.square}></div>
				<div className={styles.circle}></div>
				<div className={styles.enterBlockWrapper}>
					<div className={styles.enterBlock}>
						<div className={styles.info}>
							<h2>You are in!</h2>
							<p>Wait till admin will start the quiz!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
