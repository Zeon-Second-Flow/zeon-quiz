import {RulesPage} from "@/pages/RulesPage/RulesPage";
import {routePath} from "./routePaths";
import {CreateTestsPage} from "@/pages/CreateTestsPage/CreateTestsPage";
// import {EnterPage} from "@/pages/EnterPage/EnterPage";
import {NamePage} from "@/pages/NamePage/NamePage";
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
import { TestPage } from "@/pages/TestPage/TestPage";
import { YourIn } from "@/pages/YourIn/YourIn";


export const publicRoutes = [
    {
        path: routePath.HOME,
        component: MainPage,
    },
    {
        path: routePath.RULES,
        component: RulesPage,
    },
    // {
    //     path: routePath.ENTER_PAGE,
    //     component: EnterPage,
    // },
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
        path: routePath.DETAIL,
        component: DetailPage,
    }, {
        path: routePath.GAME,
        component: TestPage
    },
  {
    path: routePath.YOUR_IN, 
    component: YourIn
  }
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
    // {
    //     path: routePath.PROFILE_PAGE,
    //     component: Profile,
    // },
];
    

