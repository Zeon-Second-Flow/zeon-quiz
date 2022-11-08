import { useLocation, useParams } from 'react-router-dom';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import { ScrollToTop } from './components/ScrollToTop';
import './index.scss';
import { AppRoutes } from './routes';

export const App = () => {
	const { pathname } = useLocation();
	console.log(pathname.split('/')[1]);
	return (
		<div className="wrapper">
			<ScrollToTop />
			{pathname !== '/game' && <Header />}
			<AppRoutes />
			{pathname !== '/create-test' &&
				pathname !== '/game' &&
				pathname.split('/')[1] !== 'editTests' && <Footer />}
		</div>
	);
};
