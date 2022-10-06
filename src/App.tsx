import "./index.scss";
import {Header} from "@/components/Header/Header";
import {AppRoutes} from "./routes";
import {Footer} from "@/components/Footer/Footer";


export const App = () => {
    return (
        <>
            <Header />
            <AppRoutes />
            <Footer />
        </>
    );
};
