import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Burger } from '@/components/Burger/Burger';
import { Search } from '@/components/Search/Search';

import BurgerMenu from '@/assets/BurgermMenu.svg';
import Logo from '@/assets/logo.png';
import User from '@/assets/user.svg';

import styles from './Header.module.scss';
import { useAuth } from '@/hooks';

export const Header = () => {
	const [open, setOpen] = useState(false);
	const { user } = useAuth();
	return (
		<div className={styles.header}>
			<div className="container">
				<div className={styles.wrapper}>
					<img
						className={styles.burger}
						onClick={() => setOpen(true)}
						src={BurgerMenu}
						alt="Icon"
					/>
					<Link to={'/'}>
						<div className={styles.logo}>
							<img width={120} src={Logo} alt="logo" />
						</div>
					</Link>
					<nav className={styles.navbar}>
						<ul className={styles.menu}>
							<li className={styles.menuItem}>
								<Link to={'/rules'}>Rules</Link>
							</li>
							<li className={styles.menuItem}>
								<Link to={'/leaderboard'}>Leaderboards</Link>
							</li>
							<li className={styles.menuItem}>
								<Link to={'/group-page'}>Groups</Link>
							</li>
						</ul>
					</nav>
					{open ? <Burger setOpen={setOpen} /> : ''}
					{user && <Search />}
					<Link
						className={styles.userLogo}
						to={
							user && user.email !== 'anonym'
								? `/profile-page/${user.id}`
								: '/auth'
						}
					>
						<img src={User} alt="Icon" />
					</Link>
				</div>
			</div>
		</div>
	);
};
