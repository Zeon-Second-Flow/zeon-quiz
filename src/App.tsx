import "./index.scss";
import {Header} from "@/components/Header/Header";
import {AppRoutes} from "./routes";


export const App = () => {
    return (
        <>
            <Header />
            
            <AppRoutes />
        </>
    );
};
