import "./index.scss";
import {Header} from "@/components/Header/Header";
import {AppRoutes} from "./routes";
import {Footer} from "@/components/Footer/Footer";
import {useLocation} from "react-router-dom";


export const App = () => {
    const {pathname} = useLocation();
    // console.log(pathname);
    return (
        <div className="wrapper">
            <Header />
            <AppRoutes />
            {pathname !== "/create-test" && <Footer />}
        </div>
    );
};
