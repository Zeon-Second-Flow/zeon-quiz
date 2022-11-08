import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import { useLocation, useNavigate } from 'react-router-dom';

import {
	useGetTestsQuery,
	usePostScoresMutation,
} from '@/store/test/testSlice';

import logo from '@/assets/logo.png';
import first from '@/assets/podium/1.svg';
import second from '@/assets/podium/2.svg';
import third from '@/assets/podium/3.svg';

import styles from './TestPage.module.scss';
import { useAppSelector, useAuth } from '@/hooks';
import { IItem, Questions } from '@/models/models';

export const TestPage = () => {
	const { search } = useLocation();
	const test = search.slice(1, search.length);

	const { data, isLoading, isSuccess, isError, error } = useGetTestsQuery(test);
	const [counter, setCounter] = useState(0);
	const [currInfo, setCurrInfo] = useState<Questions>();
	const [timer, setTimer] = useState(0);
	const [board, setBoard] = useState(false);
	const [correctAnswer, setCorrectAnswer] = useState<string>('');
	const [preload, setPreload] = useState(true);
	const [seconds, setSeconds] = useState(0);
	const [results, setResults] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [fakeId, setFakeId] = useState(0);
	const navigate = useNavigate();
	const [sendScores] = usePostScoresMutation();

	const length = data ? data.questions.length - 1 : 0;

	const { user, isStaff } = useAuth();
	const { users, socket } = useAppSelector((state) => state.websocket);

	const leaders: IItem[] = [
		...users
			.slice(1, users.length)
			.sort((a: IItem, b: IItem) => b.points - a.points),
	].slice(0, 3);

	const usersResult: Array<IItem> = [
		...users
			.slice(1, users.length)
			.sort((a: IItem, b: IItem) => b.points - a.points),
	];

	const isAdmin = users.some(
		(item: IItem) => item.name === user.email && isStaff
	);
	const points =
		data &&
		data.questions &&
		data?.questions[counter].score -
			(data?.questions[counter].score / data?.questions[counter].timer) *
				(data?.questions[counter].timer - timer);

	useEffect(() => {
		socket.on('next', () => {
			if (!isAdmin) {
				dropVal();
			}
		});
		socket.on('toggleBoard', () => {
			if (!isAdmin) {
				setBoard(true);
			}
		});
		socket.on('allFinish', () => {
			if (!isAdmin) {
				setResults(true);
			}
		});
	}, []);

	console.log(counter, 'counter');

	// useEffect(() => {
	// 	if (results && isAdmin) {
	// 		sendScores([
	// 			{
	// 				score: 50,
	// 				login: 'admin@admin.com',
	// 				test: 'Localhost 3000',
	// 			},
	// 		]);
	// 	}
	// }, [results]);

	useEffect(() => {
		if (preload) {
			const interval = setInterval(() => {
				if (seconds <= 100) {
					setSeconds((prev) => prev + 20);
				}
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [preload]);

	useEffect(() => {
		if (data && isSuccess) {
			setCurrInfo(data.questions[counter]);
			setTimer(data.questions[counter].timer + 4);
			setCorrectAnswer(data.questions[counter].correct_answer);
		}
	}, [isSuccess]);

	useEffect(() => {
		if (data && isSuccess) {
			setCurrInfo(data.questions[counter]);
			setCorrectAnswer(data.questions[counter].correct_answer);
			setTimer(data.questions[counter].timer + 6);
		}
	}, [counter]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (timer > 0) {
				setTimer((prev) => prev - 1);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [timer]);

	const dropVal = () => {
		setDisabled(false);
		setBoard(false);
		setCounter((prev) => prev + 1);
		setPreload(true);
		setFakeId(0);
	};

	const afterPreload = () => {
		if (preload) {
			setPreload(false);
			setSeconds(0);
		}
	};

	useEffect(() => {
		if (preload) {
			setTimeout(afterPreload, 6000);
		}
	}, [preload]);

	const modifiedUsersResult = usersResult.map((elem: IItem) => {
		const newObj = {
			score: elem.points,
			login: elem.name,
			test: test,
		};
		return newObj;
	});

	const postUsersResult = async () => {
		if (isAdmin) {
			await sendScores(modifiedUsersResult);
		}

		navigate('/');
	};

	return (
		<>
			{isLoading && (
				<div className={styles.loaderWrapper}>
					<div className={styles.loader}></div>
				</div>
			)}
			{isSuccess && currInfo && (
				<div className={styles.wrapper}>
					<div className={styles.top}>
						<div className={styles.question}>
							<p>{currInfo.question}</p>
						</div>
						{isAdmin && (
							<div className={styles.buttonWrapper}>
								{timer === 0 ? (
									<button
										onClick={() => {
											setBoard(true);
											socket.emit('board');
										}}
									>
										Next
									</button>
								) : (
									<button
										onClick={() => {
											setBoard(true);
											socket.emit('board');
										}}
									>
										Skip
									</button>
								)}
							</div>
						)}
					</div>
					{isAdmin && (
						<div className="container">
							<div className={styles.middle}>
								<div className={styles.timer}>{timer}</div>
								<div className={styles.imageWrapper}>
									{data.test.image ? (
										<img src={data.test.image} alt="the image" />
									) : (
										<img src={logo} alt="default image" />
									)}
								</div>
							</div>
						</div>
					)}
					{!isAdmin && (
						<div className={styles.bottom}>
							{disabled && <div className={styles.loader}>Loading...</div>}
							<div className={styles.answerBlock}>
								<div
									className={
										fakeId !== 1
											? `${styles.answerBlockRed} ${styles.block}`
											: styles.answerBlockShadow
									}
									onClick={() => {
										if (!disabled) {
											setFakeId(1);
											setDisabled(true);
											socket.emit('answer', [
												user,
												currInfo?.answers[0][correctAnswer] ===
												currInfo?.answers[0].A
													? points
													: 0,
											]);
										}
									}}
								>
									{timer === 0 ? (
										<div
											className={
												currInfo.answers &&
												currInfo.answers[0][correctAnswer] ===
													currInfo.answers[0].A
													? styles.correct
													: styles.wrong
											}
										>
											<svg
												fill={'white'}
												viewBox="0 0 32 32"
												focusable="false"
												stroke="rgba(0, 0, 0, 0.15)"
												strokeWidth="1.3px"
												aria-labelledby="label-5bc273c9-8959-479b-bd17-a2bb639c3874"
												aria-hidden="true"
												className="sc-hKgILt bluJxS"
												style={{ paintOrder: 'stroke' }}
											>
												<title id="label-5bc273c9-8959-479b-bd17-a2bb639c3874">
													Icon
												</title>
												<path
													fill={'red'}
													d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
													style={{ fill: 'inherit' }}
												></path>
											</svg>
											<p>{currInfo.answers && currInfo.answers[0].A}</p>
										</div>
									) : (
										<>
											<svg
												fill={'white'}
												viewBox="0 0 32 32"
												focusable="false"
												stroke="rgba(0, 0, 0, 0.15)"
												strokeWidth="1.3px"
												aria-labelledby="label-5bc273c9-8959-479b-bd17-a2bb639c3874"
												aria-hidden="true"
												className="sc-hKgILt bluJxS"
												style={{ paintOrder: 'stroke' }}
											>
												<title id="label-5bc273c9-8959-479b-bd17-a2bb639c3874">
													Icon
												</title>
												<path
													fill={'red'}
													d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
													style={{ fill: 'inherit' }}
												></path>
											</svg>
											<p>{currInfo.answers && currInfo.answers[0].A}</p>
										</>
									)}
								</div>
								<div
									className={
										fakeId !== 2
											? `${styles.answerBlockBlue} ${styles.block}`
											: styles.answerBlockShadow
									}
									onClick={() => {
										if (!disabled) {
											setFakeId(2);
											setDisabled(true);
											socket.emit('answer', [
												user,
												currInfo?.answers[0][correctAnswer] ===
												currInfo?.answers[0].B
													? points
													: 0,
											]);
										}
									}}
								>
									{timer === 0 ? (
										<div
											className={
												currInfo.answers &&
												currInfo.answers[0][correctAnswer] ===
													currInfo.answers[0].B
													? styles.correct
													: styles.wrong
											}
										>
											<svg
												fill={'white'}
												viewBox="0 0 32 32"
												focusable="false"
												stroke="rgba(0, 0, 0, 0.15)"
												strokeWidth="1.3px"
												aria-labelledby="label-266eb77b-6d5e-4633-b897-d990f5aae265"
												aria-hidden="true"
												className="sc-hKgILt bluJxS"
												style={{ paintOrder: 'stroke' }}
											>
												<title id="label-266eb77b-6d5e-4633-b897-d990f5aae265">
													Icon
												</title>
												<path
													fill={'white'}
													d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
													style={{ fill: 'inherit' }}
												/>
											</svg>
											<p>{currInfo.answers && currInfo?.answers[0].B}</p>
										</div>
									) : (
										<>
											<svg
												fill={'white'}
												viewBox="0 0 32 32"
												focusable="false"
												stroke="rgba(0, 0, 0, 0.15)"
												strokeWidth="1.3px"
												aria-labelledby="label-266eb77b-6d5e-4633-b897-d990f5aae265"
												aria-hidden="true"
												className="sc-hKgILt bluJxS"
												style={{ paintOrder: 'stroke' }}
											>
												<title id="label-266eb77b-6d5e-4633-b897-d990f5aae265">
													Icon
												</title>
												<path
													fill={'white'}
													d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
													style={{ fill: 'inherit' }}
												/>
											</svg>
											<p>{currInfo.answers && currInfo?.answers[0].B}</p>
										</>
									)}
								</div>
							</div>
							<div className={styles.answerBlock}>
								<div
									className={
										fakeId !== 3
											? `${styles.answerBlockYellow} ${styles.block}`
											: styles.answerBlockShadow
									}
									onClick={() => {
										if (!disabled) {
											setFakeId(3);
											setDisabled(true);
											socket.emit('answer', [
												user,
												currInfo?.answers[0][correctAnswer] ===
												currInfo?.answers[0].C
													? points
													: 0,
											]);
										}
									}}
								>
									{timer === 0 ? (
										<div
											className={
												currInfo.answers &&
												currInfo.answers[0][correctAnswer] ===
													currInfo.answers[0].C
													? styles.correct
													: styles.wrong
											}
										>
											<svg
												fill={'white'}
												viewBox="0 0 32 32"
												focusable="false"
												stroke="rgba(0, 0, 0, 0.15)"
												strokeWidth="1.3px"
												aria-labelledby="label-c7a7cdec-990a-4057-b6a6-2c5c0ed26fc8"
												aria-hidden="true"
												className="sc-hKgILt bluJxS"
												style={{ paintOrder: 'stroke' }}
											>
												<title id="label-c7a7cdec-990a-4057-b6a6-2c5c0ed26fc8">
													Icon
												</title>
												<path
													d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775
                           9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 
                        C27,22.0751322 22.0751322,27 16,27 Z"
													style={{ fill: 'inherit' }}
												/>
											</svg>
											<p>{currInfo.answers && currInfo?.answers[0].C}</p>
										</div>
									) : (
										<>
											<svg
												fill={'white'}
												viewBox="0 0 32 32"
												focusable="false"
												stroke="rgba(0, 0, 0, 0.15)"
												strokeWidth="1.3px"
												aria-labelledby="label-c7a7cdec-990a-4057-b6a6-2c5c0ed26fc8"
												aria-hidden="true"
												className="sc-hKgILt bluJxS"
												style={{ paintOrder: 'stroke' }}
											>
												<title id="label-c7a7cdec-990a-4057-b6a6-2c5c0ed26fc8">
													Icon
												</title>
												<path
													d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 
                          9.92486775,5 16,5 C22.0751322,5 27,9.92486775
                         27,16 C27,22.0751322 22.0751322,27 16,27 Z"
													style={{ fill: 'inherit' }}
												/>
											</svg>
											<p>{currInfo.answers && currInfo?.answers[0].C}</p>
										</>
									)}
								</div>
								<div
									className={
										fakeId !== 4
											? `${styles.answerBlockGreen} ${styles.block}`
											: styles.answerBlockShadow
									}
									onClick={() => {
										if (!disabled) {
											setFakeId(4);
											setDisabled(true);
											socket.emit('answer', [
												user,
												currInfo?.answers[0][correctAnswer] ===
												currInfo?.answers[0].D
													? points
													: 0,
											]);
										}
									}}
								>
									{timer === 0 ? (
										<div
											className={
												currInfo.answers &&
												currInfo.answers[0][correctAnswer] ===
													currInfo.answers[0].D
													? styles.correct
													: styles.wrong
											}
										>
											<svg
												fill={'white'}
												viewBox="0 0 32 32"
												focusable="false"
												stroke="rgba(0, 0, 0, 0.15)"
												strokeWidth="1.3px"
												aria-labelledby="label-a9903db8-2e98-4d5a-8468-10401b86c28c"
												aria-hidden="true"
												className="sc-hKgILt bluJxS"
												style={{ paintOrder: 'stroke' }}
											>
												<title id="label-a9903db8-2e98-4d5a-8468-10401b86c28c">
													Icon
												</title>
												<path
													d="M7,7 L25,7 L25,25 L7,25 L7,7 Z"
													style={{ fill: 'inherit' }}
												/>
											</svg>
											<p>{currInfo.answers && currInfo?.answers[0].D}</p>
										</div>
									) : (
										<>
											<svg
												fill={'white'}
												viewBox="0 0 32 32"
												focusable="false"
												stroke="rgba(0, 0, 0, 0.15)"
												strokeWidth="1.3px"
												aria-labelledby="label-a9903db8-2e98-4d5a-8468-10401b86c28c"
												aria-hidden="true"
												className="sc-hKgILt bluJxS"
												style={{ paintOrder: 'stroke' }}
											>
												<title id="label-a9903db8-2e98-4d5a-8468-10401b86c28c">
													Icon
												</title>
												<path
													d="M7,7 L25,7 L25,25 L7,25 L7,7 Z"
													style={{ fill: 'inherit' }}
												/>
											</svg>
											<p>{currInfo.answers && currInfo?.answers[0].D}</p>
										</>
									)}
								</div>
							</div>
						</div>
					)}
				</div>
			)}
			{isError && (
				<div className={styles.loaderWrapper}>
					<div className={styles.error}>
						Sorry, there is an error! Try again later!
					</div>
				</div>
			)}
			<div className={board ? styles.wrapperDisplay : styles.wrappers}>
				<div className={styles.board}>
					<div className={styles.boardTitle}>
						<h3>Scoreboard</h3>
					</div>
					{isAdmin && (
						<div className={styles.buttonWrapper}>
							{counter === length ? (
								<button
									onClick={() => {
										socket.emit('finish');
										setResults(true);
									}}
								>
									End
								</button>
							) : (
								<button
									onClick={() => {
										socket.emit('skip');
										dropVal();
									}}
								>
									Next
								</button>
							)}
						</div>
					)}
					<div className={styles.boardInner}>
						{users
							.slice(1, users.length)
							.sort((a: IItem, b: IItem) => b.points - a.points)
							.map((item: IItem) => {
								return (
									<div className={styles.boardInfo}>
										<p>{item.nickname}</p>
										<p>{item.points}</p>
									</div>
								);
							})}
					</div>
				</div>
			</div>
			<div className={preload ? styles.wrapperDisplay : styles.wrappers}>
				<div className="container">
					<div className={styles.preloadBlock}>
						<div className={styles.imageWrapper}>
							<img src={logo} alt="the logo" />
						</div>
						<div className={styles.context}>
							<p>Question:</p>
							<p>{currInfo?.question}</p>
						</div>
					</div>
					<div className={styles.scrollbarWrapper}>
						<div
							style={{ width: `${seconds}%` }}
							className={styles.scrollbar}
						></div>
					</div>
				</div>
			</div>
			{results && (
				<div className={results ? styles.wrapperDisplay : styles.wrappers}>
					<ReactConfetti />
					<div className={styles.titleWrapper}>
						<h2 className={styles.podiumTitle}>{data?.test.title}</h2>
					</div>
					<div className={styles.homeBtn}>
						<button onClick={postUsersResult}>Home</button>
					</div>
					<div className="container">
						<div className={styles.podiums}>
							<div className={styles.podium}>
								<div className={styles.userWrapper}>
									<p className={styles.user}>{leaders[1]?.nickname || ''}</p>
								</div>
								<div className={`${styles.block}  ${styles.placeTwo}`}>
									<div className={styles.placeWrapper}>
										<img src={first} alt="the first place" />
									</div>
									<p>{leaders[1]?.points || 0} </p>
								</div>
							</div>
							<div className={styles.podium}>
								<div className={styles.userWrapper}>
									<p className={styles.user}>{leaders[0]?.nickname}</p>
								</div>
								<div className={`${styles.block}  ${styles.placeOne}`}>
									<div className={styles.placeWrapper}>
										<img src={second} alt="the second place" />
									</div>
									<p>{leaders[0]?.points}</p>
								</div>
							</div>
							<div className={styles.podium}>
								<div className={styles.userWrapper}>
									<p className={styles.user}>{leaders[2]?.nickname || ''}</p>
								</div>
								<div className={`${styles.block}  ${styles.placeThree}`}>
									<div className={styles.placeWrapper}>
										<img src={third} alt="the third place" />
									</div>
									<p>{leaders[2]?.points || 0}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
