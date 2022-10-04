import {MainPage} from "@/pages/MainPage/MainPage";
import {RulesPage} from "@/pages/RulesPage/RulesPage";
import {routePath} from "./routePaths";


export const publicRoutes = [
    {
        path: routePath.HOME,
        component: MainPage
    },
    {
        path: routePath.RULES,
        component: RulesPage
    }
];

export const privateRoutes = [
    ...publicRoutes,
    // {
    //     path: routePath.AUTH,
    //     component: 
    // }
];