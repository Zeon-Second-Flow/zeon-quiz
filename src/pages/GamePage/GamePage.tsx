import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useGetTestsQuery } from '@/store/test/testSlice';
import {
	resetWebsocket,
	setSocketTest,
	setSocketTitle,
	setSocketUsers,
} from '@/store/websocket/websocket';

import userLogo from '@/assets/game/account.png';

import styles from './GamePage.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { ITestData } from '@/models/models';

interface IMessage {
	text: string;
	user: string;
}

export const GamePage = () => {
	const [isStart, setIsStart] = useState(false);
	const [messages, setMessages] = useState<IMessage[]>([]);
	const navigate = useNavigate();

	const username =
		localStorage.getItem('token') &&
		JSON.parse(localStorage.getItem('token') || '');

	const { search } = useLocation();
	const test = search.slice(1, search.length);

	const obj = {
		test: test,
		token: username.token,
	} as ITestData;

	const { data, isLoading, isSuccess, isError, error } = useGetTestsQuery(obj);

	const { room, users } = useAppSelector((state) => state.websocket);
	console.log(users);
	const dispatch = useAppDispatch();
	const socket = useAppSelector((state) => state.websocket.socket);

	useEffect(() => {
		socket.on('users', (users) => {
			dispatch(setSocketUsers(users));
		});

		socket.on('join', (data) => {
			console.log('DATA: ', data);
		});

		socket.on('username', (data) => {
			console.log('username: ', data);
		});

		// socket.on('message', (message) => {
		// 	setMessages((messages) => [...messages, message]);
		// });

		socket.on('connected', (user) => {
			console.log(user, 'CONNECTED');
		});

		// socket.on('starting', () => {
		// 	console.log('START');

		// 	const test = search.slice(1, search.length);
		// 	navigate(`/game?${test}`);
		// });
	}, []);

	const startGame = () => {
		const test = search.slice(1, search.length);
		dispatch(setSocketTest(data));
		dispatch(setSocketTitle(test));

		socket.emit('start-game', [data, test]);
		navigate('/game');
	};

	// useEffect(() => {
	// 	let func = () => {
	// 		let bool = confirm('Do you wanna leave game?');

	// 		if (!bool) {
	// 			navigate(pathname + search);
	// 		}
	// 	};
	// 	if (isStart) {
	// 		startGame();
	// 	}
	// 	return () => {
	// 		if (!isStart) {
	// 			func();
	// 		}
	// 	};
	// }, [isStart]);

	// const beforeUnloadListener = (event: any) => {
	// 	event.preventDefault();
	// 	event.returnValue = 'Are you sure you want to reload the page?';
	// };
	// addEventListener('beforeunload', beforeUnloadListener, { capture: true });

	// function goodbye(e: any) {
	// 	if (!e) e = window.event;
	// 	//e.cancelBubble is supported by IE - this will kill the bubbling process.
	// 	e.cancelBubble = true;
	// 	e.returnValue = 'You sure you want to leave?'; //This is displayed on the dialog

	// 	//e.stopPropagation works in Firefox.
	// 	if (e.stopPropagation) {
	// 		e.stopPropagation();
	// 		e.preventDefault();
	// 	}
	// }
	// window.onbeforeunload = goodbye;

	// useEffect(() => {
	// 	return () => {};
	// }, []);

	return (
		<div className={styles.game}>
			<div className={styles.square}></div>
			<div className={styles.circle}></div>
			<div className="container">
				<div className={styles.body}>
					<div className={styles.user}>
						<img src={userLogo} alt="User" />
						{users.length - 1}
					</div>

					<div className="box-room">
						<div className="wave -one"></div>
						<div className="wave -two"></div>
						<div className="wave -three"></div>
						<div className="title-room">Room code: </div>
						<div className="title-code">{room}</div>
					</div>

					<button className={styles.start} onClick={startGame}>
						Start
					</button>
				</div>

				<ul className={styles.usersList}>
					{users
						.filter((item) => !item.isAdmin)
						.map((item) => (
							<li className={styles.user}>
								<small>{item.nickname}</small>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};
