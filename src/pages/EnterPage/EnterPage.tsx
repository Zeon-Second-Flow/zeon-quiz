import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setSocketRoom, setSocketUsers } from '@/store/websocket/websocket';

import logo from '@/assets/logo.png';

import styles from './EnterPage.module.scss';
import { useAppDispatch, useAppSelector, useAuth } from '@/hooks';

export const EnterPage = () => {
	const [value, setValue] = useState('');
	const navigate = useNavigate();
	const { users, socket } = useAppSelector((state) => state.websocket);
	const { isStaff } = useAuth();
	const [error, setError] = useState('');

	const dispatch = useAppDispatch();

	const enterGame = () => {
		setError('');
		const user =
			localStorage.getItem('token') &&
			JSON.parse(localStorage.getItem('token') || '');

		console.log(user);

		// socket.emit('join', [user.email, value]);
		socket.emit('join', [user.email, value, user.group]);

		// socket.on("users", (users) => {
		//   dispatch(setSocketUsers(users));
		// });

		// socket.on("connected", (user) => {
		//   dispatch(setSocketRoom(user.room));
		//   dispatch(setSocketUsers([...users, user]));
		//   navigateToGame();
		// });

		socket.on('enterNickname', ([username, room]) => {
			dispatch(setSocketRoom(room));
			navigateToGame();
		});

		socket.on('disconnected', (id) => {
			dispatch(setSocketUsers(users.filter((user) => user.id !== id)));
		});

		socket.on('error', (error) => {
			setError(error);
		});
	};

	const navigateToGame = () => {
		setTimeout(() => {
			navigate('/name-page');
		}, 200);
	};

	return (
		<div className={styles.wrapper}>
			<div className="container">
				<div className={styles.square}></div>
				<div className={styles.circle}></div>
				<div className={styles.enterBlockWrapper}>
					<div className={styles.enterBlock}>
						<div className={styles.title}>
							<img src={logo} alt="Logo" />
						</div>
						<div className={styles.form}>
							<input
								className={styles.input}
								type="text"
								placeholder="Game PIN"
								onChange={(e) => setValue(e.currentTarget.value)}
								value={value}
							/>
							<div>
								<button className={styles.common} onClick={enterGame}>
									Enter
								</button>
							</div>
						</div>

						<span className={styles.error}> {error}</span>
					</div>
				</div>
				{isStaff && (
					<div className={styles.extraInfo} onClick={() => navigate('/tests')}>
						<p>
							Create your own room for free at <span>zeon-quiz.com</span>
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
