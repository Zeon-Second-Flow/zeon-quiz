import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setSocketRoom, setSocketUsers } from '@/store/websocket/websocket';

import logo from '@/assets/logo.png';

import styles from './EnterPage.module.scss';
import { useAppDispatch, useAppSelector, useAuth } from '@/hooks';

function generateUUID() {
	// Public Domain/MIT
	var d = new Date().getTime(); //Timestamp
	var d2 =
		(typeof performance !== 'undefined' &&
			performance.now &&
			performance.now() * 1000) ||
		0; //Time in microseconds since page-load or 0 if unsupported
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16; //random number between 0 and 16
		if (d > 0) {
			//Use timestamp until depleted
			r = (d + r) % 16 | 0;
			d = Math.floor(d / 16);
		} else {
			//Use microseconds since page-load if supported
			r = (d2 + r) % 16 | 0;
			d2 = Math.floor(d2 / 16);
		}
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	});
}

export const EnterPage = () => {
	const [value, setValue] = useState('');
	const navigate = useNavigate();
	const { users, socket } = useAppSelector((state) => state.websocket);
	const { isStaff } = useAuth();
	const [error, setError] = useState('');

	const dispatch = useAppDispatch();

	const enterGame = () => {
		setError('');

		if (!localStorage.getItem('token')) {
			localStorage.setItem(
				'token',
				JSON.stringify({
					email: 'anonym',
					group: 'anonym',
					id: generateUUID(),
				})
			);
		}

		const { user, isStaff } = useAuth();

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
