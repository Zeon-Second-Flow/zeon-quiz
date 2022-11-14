import { useNavigate } from 'react-router-dom';

import styles from '@/pages/DetailPage/DetailPage.module.scss';

import { setSocketRoom, setSocketUsers } from '@/store/websocket/websocket';

import TestImage from '@/assets/test-image.png';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { ITest } from '@/models/models';

interface IProps {
	item: ITest | undefined;
	name: string;
}

export const TestDetail = ({ item, name }: IProps) => {
	const navigate = useNavigate();
	const { socket, users } = useAppSelector((state) => state.websocket);
	const dispatch = useAppDispatch();

	const createGame = () => {
		const username =
			localStorage.getItem('token') &&
			JSON.parse(localStorage.getItem('token') || '');

		socket.emit('username', [username.email, username.group]);

		socket.on('users', (users) => {
			dispatch(setSocketUsers(users));
		});

		socket.on('connected', (user) => {
			dispatch(setSocketRoom(user.room));
			dispatch(setSocketUsers([...users, user]));
		});

		createRoom();
	};

	const createRoom = () => {
		setTimeout(() => {
			navigate(`/room?${item?.title}`);
		}, 1000);
	};

	return (
		<div className={styles.testItem}>
			<img className={styles.poster} src={TestImage} alt="poster" />
			<div className={styles.description}>
				<div className={styles.quantity}>{item?.questions_count} questions</div>
				<h3 className={styles.title}>{item?.title}</h3>
				<div className={styles.subtitle}>
					<p>{item?.group}</p>
					<p>{item?.test_passed} test passed</p>
				</div>

				<button onClick={createGame} className={styles.btn}>
					Start test
				</button>
				<button
					onClick={() => navigate(`/editTests/${name}`)}
					className={styles.btn_edit}
				>
					Edit test
				</button>
			</div>
		</div>
	);
};
