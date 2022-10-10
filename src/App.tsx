import './index.scss';
import { Header } from '@/components/Header/Header';
import { AppRoutes } from './routes';
import { Footer } from '@/components/Footer/Footer';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};
