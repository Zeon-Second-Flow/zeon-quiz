import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import {
	setSocketTest,
	setSocketTitle,
	setSocketUsers,
} from '@/store/websocket/websocket';

import styles from './YourIn.module.scss';
import { useAppSelector } from '@/hooks';
import {unloadCallback} from "@/utils/beforeunload";

export const YourIn = () => {
	const { users, socket, room } = useAppSelector((state) => state.websocket);
	const { pathname } = useLocation();
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

		history.pushState(null, '', window.location.href);
		console.log(room)
		if(room === 0) navigate('/enter-page');

		const preventBack = () => {
			const warningMessage = confirm('Are you sure you want to leave this page?!');

			if (warningMessage) {
				history.back();
			} else {
				history.pushState(null, '', window.location.href);
			}
		};

		if(window.location.pathname === '/in') {
			window.addEventListener('popstate', preventBack);
			window.addEventListener("beforeunload", unloadCallback);
		}

		return () => {
			window.removeEventListener('popstate', preventBack);
			window.removeEventListener("beforeunload", unloadCallback);
		};
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
