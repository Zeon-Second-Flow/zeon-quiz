import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setSocketUsers } from '@/store/websocket/websocket';

import styles from './NamePage.module.scss';
import { useAppSelector } from '@/hooks';

export const NamePage = () => {
	const { socket, room } = useAppSelector((state) => state.websocket);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [value, setValue] = useState('');

	const user =
		localStorage.getItem('token') &&
		JSON.parse(localStorage.getItem('token') || '');

	useEffect(() => {
		socket.on('users', (users) => {
			dispatch(setSocketUsers(users));
		});
	}, []);

	const navigateToGame = () => {
		if (value.length > 0) {
			socket.emit('nickname', [user.email, room, value, user.group]);
			setTimeout(() => {
				navigate('/in');
			}, 200);
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className="container">
				<div className={styles.square}></div>
				<div className={styles.circle}></div>
				<div className={styles.enterBlockWrapper}>
					<div className={styles.enterBlock}>
						<div className={styles.title}></div>
						<div className={styles.form}>
							<input
								className={styles.common}
								type="text"
								placeholder="Nickname"
								value={value}
								onChange={(e) => setValue(e.currentTarget.value)}
							/>
							<div>
								<button onClick={navigateToGame} className={styles.common}>
									OK, go!
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
