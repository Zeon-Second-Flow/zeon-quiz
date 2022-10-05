import './index.scss';
import { Header } from '@/components/Header/Header';
import { AppRoutes } from './routes';
import { SignUp } from './components/Auth/SignUp';

export const App = () => {

    return (
        <>
            <Header />
            <SignUp />
            <AppRoutes />
        </>
    );

};
