import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";


export const AppRoutes = () => {
    const user = false;

    return (
        <Routes>
            {user
                ? privateRoutes.map((obj) => (
                    <Route path={obj.path} element={<obj.component />} key={obj.path} />
                ))
                : publicRoutes.map((obj) => (
                    <Route path={obj.path} element={<obj.component />} key={obj.path} />
                ))}
        </Routes>
    );
};
