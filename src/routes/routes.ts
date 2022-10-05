import {MainPage} from "@/pages/MainPage/MainPage";
import {RulesPage} from "@/pages/RulesPage/RulesPage";
import {routePath} from "./routePaths";
import {CreateTestsPage} from "@/pages/CreateTestsPage/CreateTestsPage";
import { EnterPage } from "@/pages/EnterPage/EnterPage";
import { NamePage } from "@/pages/NamePage/NamePage";


export const publicRoutes = [
    {
        path: routePath.HOME,
        component: MainPage
    },
    {
        path: routePath.RULES,
        component: RulesPage
    },
    {
        path: routePath.ENTER_PAGE, 
        component : EnterPage
    },
    {
        path: routePath.NAME_PAGE, 
        component : NamePage
    }
];

export const privateRoutes = [
    ...publicRoutes,
    {
        path: routePath.CREATE_TEST,
        component: CreateTestsPage
    }
];