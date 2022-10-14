import { RulesPage } from '@/pages/RulesPage/RulesPage';
import { routePath } from './routePaths';
import { CreateTestsPage } from '@/pages/CreateTestsPage/CreateTestsPage';
import { EnterPage } from '@/pages/EnterPage/EnterPage';
import { NamePage } from '@/pages/NamePage/NamePage';
import { SignUp } from '@/components/Auth/SignUp';
import { MainPage } from '@/pages/MainPage/MainPage';
import { Login } from '@/components/Login/Login';
import { ChangePassword } from '@/components/ChangePassword/ChangePassword';
import { SuccessPage } from '@/pages/SuccessPage/SuccessPage';
import questionPreload from '@/pages/questionPreload/questionPreload';
import { TestPage } from '@/pages/TestPage/TestPage';
import LocalBoard from '@/pages/LocalBoard/LocalBoard';

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
    path: routePath.ENTER_PAGE,
    component: EnterPage,
  },
  {
    path: routePath.NAME_PAGE,
    component: NamePage,
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
    path: routePath.QUESTION_PRELOAD, 
    component: questionPreload,
  },
  {
    path: routePath.GAME, 
    component: TestPage
  }, 
  {
    path: routePath.LOCALBOARD, 
    component: LocalBoard
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
];
