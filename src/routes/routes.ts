import {RulesPage} from "@/pages/RulesPage/RulesPage";
import {routePath} from "./routePaths";
import {CreateTestsPage} from "@/pages/CreateTestsPage/CreateTestsPage";
import {EnterPage} from "@/pages/EnterPage/EnterPage";
import {SignUp} from "@/components/Auth/SignUp";
import {MainPage} from "@/pages/MainPage/MainPage";
import {Login} from "@/components/Login/Login";
import {ChangePassword} from "@/components/ChangePassword/ChangePassword";
import {SuccessPage} from "@/pages/SuccessPage/SuccessPage";
import {GamePage} from "@/pages/GamePage/GamePage";
import {SearchPage} from "@/pages/searchPage/SearchPage";
import {DetailPage} from "@/pages/DetailPage/DetailPage";
import {RestorePassword} from "@/components/RestorePassword/RestorePassword";
import {RestoreComplete} from "@/components/RestoreComplete/RestoreComplete";
import {YourIn} from "@/pages/YourIn/YourIn";
import {Profile} from "@/pages/ProfilePage/Profile";
import {LeaderboardPage} from "@/pages/LeaderboardPage/LeaderboardPage";
import {GroupLeaderboardPage} from "@/pages/LeaderboardPage/GroupLeaderboardPage";
import {ErrorPage} from "@/pages/ErrorPage/Error";
import {PrivatePage} from "@/pages/PrivatePage/PrivatePage";
import {TestPage} from "@/pages/TestPage/TestPage";
import {TestsPage} from "@/pages/TestsPage/TestsPage";
import {NamePage} from "@/pages/NamePage/NamePage";


export const publicRoutes = [
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
];

export const privateRoutes = [
    ...publicRoutes,
    {
        path: routePath.CREATE_TEST,
        component: CreateTestsPage,
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
    {
        path: routePath.RESTORE_COMPLETE,
        component: RestoreComplete,
    },
    {
        path: routePath.PROFILE_PAGE,
        component: Profile,
    },
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
];
