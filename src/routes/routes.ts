import {
	CreateTestsPage,
	EditTestsPage,
} from '@/pages/CreateTestsPage/CreateTestsPage';
import { DetailPage } from '@/pages/DetailPage/DetailPage';
import { EnterPage } from '@/pages/EnterPage/EnterPage';
import { ErrorPage } from '@/pages/ErrorPage/Error';
import { GamePage } from '@/pages/GamePage/GamePage';
import { GroupLeaderboardPage } from '@/pages/LeaderboardPage/GroupLeaderboardPage';
import { LeaderboardPage } from '@/pages/LeaderboardPage/LeaderboardPage';
import { MainPage } from '@/pages/MainPage/MainPage';
import { NamePage } from '@/pages/NamePage/NamePage';
import { PrivatePage } from '@/pages/PrivatePage/PrivatePage';
import { Profile } from '@/pages/ProfilePage/Profile';
import { RulesPage } from '@/pages/RulesPage/RulesPage';
import { SuccessPage } from '@/pages/SuccessPage/SuccessPage';
import { TestPage } from '@/pages/TestPage/TestPage';
import { TestsPage } from '@/pages/TestsPage/TestsPage';
import { YourIn } from '@/pages/YourIn/YourIn';
import { SearchPage } from '@/pages/searchPage/SearchPage';

import { SignUp } from '@/components/Auth/SignUp';
import { ChangePassword } from '@/components/ChangePassword/ChangePassword';
import { Login } from '@/components/Login/Login';
import { RestoreComplete } from '@/components/RestoreComplete/RestoreComplete';
import { RestorePassword } from '@/components/RestorePassword/RestorePassword';

import { routePath } from './routePaths';

export const publicRoutes = [
	{
		path: routePath.GAME,
		component: TestPage,
	},
	{
		path: routePath.ROOM,
		component: GamePage,
	},
	{
		path: routePath.YOUR_IN,
		component: YourIn,
	},
	{
		path: routePath.ENTER_PAGE,
		component: EnterPage,
	},
	{
		path: routePath.NAME_PAGE,
		component: NamePage,
	},
	{
		path: routePath.HOME,
		component: MainPage,
	},
	{
		path: routePath.RULES,
		component: RulesPage,
	},
	{
		path: routePath.AUTH,
		component: SignUp,
	},
	{
		path: routePath.LOGIN,
		component: Login,
	},
	{
		path: routePath.SEARCH_PAGE,
		component: SearchPage,
	},
	{
		path: routePath.LEADERBOARD,
		component: LeaderboardPage,
	},
	{
		path: routePath.GROUP_PAGE,
		component: GroupLeaderboardPage,
	},
	{
		path: routePath.PRIVATE_PAGE,
		component: PrivatePage,
	},
	{
		path: routePath.PAGE_NOT_FOUND,
		component: ErrorPage,
	},
	{
		path: routePath.CHANGE_PASSWORD,
		component: ChangePassword,
	},
	{
		path: routePath.SUCCESS_PAGE,
		component: SuccessPage,
	},
	{
		path: routePath.RESTORE_PASSWORD,
		component: RestorePassword,
	},
];

export const privateRoutes = [
	...publicRoutes,
	{
		path: routePath.CREATE_TEST,
		component: CreateTestsPage,
	},
	{
		path: routePath.RESTORE_COMPLETE,
		component: RestoreComplete,
	},
	{
		path: routePath.PROFILE_PAGE,
		component: Profile,
	},
];

export const stuffRoutes = [
	...privateRoutes,
	{
		path: routePath.CREATE_TEST,
		component: CreateTestsPage,
	},
	{
		path: routePath.SEARCH_PAGE,
		component: SearchPage,
	},
	{
		path: routePath.DETAIL,
		component: DetailPage,
	},
	{
		path: routePath.TESTS,
		component: TestsPage,
	},
	{
		path: 'editTests/:test',
		component: EditTestsPage,
	},
];
