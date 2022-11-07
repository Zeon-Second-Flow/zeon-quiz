import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useGetAllTestsQuery } from '@/store/search/search.api';
import { useLazyGetUsersTestsQuery } from '@/store/test/testSlice';

import { SearchLoader } from '@/components/Loader/SearchLoader';

import TestImage from '@/assets/test-image.png';

import styles from './TestsPage.module.scss';

export const TestsPage = () => {
	const { data, isLoading } = useGetAllTestsQuery();
	const [getTests, payload] = useLazyGetUsersTestsQuery();
	const { value } = useParams();

	useEffect(() => {
		getTests('tima');
	}, []);
	console.log(payload);

	const searchItem = data?.results.map((item) => {
		return (
			<Link to={`/detail/${item.title}`} className={styles.item}>
				<img className={styles.poster} src={TestImage} alt="poster" />
				<div className={styles.description}>
					<div className={styles.quantity}>
						{item.questions_count} questions
					</div>
					<p className={styles.title}>{item.title}</p>
					<p>{item.group}</p>
					<p>{item.test_passed} players </p>
				</div>
			</Link>
		);
	});

	return (
		<div className={styles.searchPage}>
			<div className={styles.seachContainer}>
				<h3 className={styles.heading}>Results: </h3>
				<div className={styles.wrapper}>
					{data?.results.length === 0 ? (
						'Opps! There are no tests with this title!'
					) : isLoading ? (
						<SearchLoader />
					) : (
						searchItem
					)}
				</div>
			</div>
		</div>
	);
};
