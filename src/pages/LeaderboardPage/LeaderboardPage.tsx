import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { LeaderboardLoader } from '@/pages/LeaderboardPage/leaderboardLoader';

import './Leaderboard.scss';

interface IUsers {
	group: string;
	login: string;
	name: string;
	second_name: string;
	phone_number: string;
	overall_score: number;
	overall_rating: number;
	user_id: string;
	group_rating: number;
	passed_tests: number;
	user_id?: string;
}

export const LeaderboardPage = () => {
	const [users, setUsers] = useState<IUsers[]>([]);
	const [sortBy, setSortBy] = useState('Points');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios('https://safe-atoll-40972.herokuapp.com/account/users/?limit=10')
			.then(({ data }) => setUsers(data.results))
			.then(() => {
				setIsLoading(false);
			});
	}, []);

	const sortUsers = (str: string) => {
		setSortBy(str);
		setUsers(
			users.sort((a, b) =>
				str === 'Points'
					? b.overall_score - a.overall_score
					: b.passed_tests - a.passed_tests
			)
		);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<section className="leaderboardsBox">
			<div id="leaderboards" className="container">
				<div className="options">
					<div className="sort">
						<h2>Sort By</h2>
						<form className="tabContents">
							<li className="tab bedwars active">
								<input
									defaultChecked={true}
									name="sort"
									id="q"
									type="radio"
									value="Points"
								/>
								<label onClick={() => sortUsers('Points')} htmlFor="q">
									Points
								</label>
								<input name="sort" id="w" type="radio" value="Games Played" />
								<label onClick={() => sortUsers('Game')} htmlFor="w">
									Games Played
								</label>
							</li>
						</form>
					</div>
				</div>
				<ul className="toplist">
					{isLoading ? (
						<LeaderboardLoader />
					) : (
						users.map((it, idx) => {
							return (
								<li key={it.login} data-rank={idx + 1}>
									<div className="thumb">
										<span className="img" data-name={it.login}>
											{' '}
										</span>
										<span className="name">
											<Link to={`/profile-page/${it.user_id}`}>{it.login}</Link>
											<span>Group: {it.group}</span>{' '}
										</span>
										<span className="stat">
											<b>
												{sortBy === 'Points'
													? it.overall_score
													: it.passed_tests}
											</b>
											{sortBy === 'Points' ? 'points' : 'games'}
										</span>
									</div>
								</li>
							);
						})
					)}
				</ul>
			</div>
		</section>
	);
};
