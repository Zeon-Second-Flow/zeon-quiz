import "./index.scss";
import {Header} from "@/components/Header/Header";
import {AppRoutes} from "./routes";
import {Footer} from "@/components/Footer/Footer";
import {useLocation} from "react-router-dom";
import {ScrollToTop} from "./components/ScrollToTop";


export const App = () => {
    const {pathname} = useLocation();
    return (
        <div className="wrapper">
            <ScrollToTop/>
            <Header />
            <AppRoutes />
            {pathname !== "/create-test" && <Footer />}
        </div>
    );
};
