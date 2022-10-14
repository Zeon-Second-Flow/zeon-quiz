import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";


export const AppRoutes = () => {
    const user =
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("token") || "");

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
