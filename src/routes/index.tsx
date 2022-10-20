import {useAuth} from "@/hooks";
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, stuffRoutes} from "./routes";


export const AppRoutes = () => {
    const {user, isStaff} = useAuth();

    return (
        <Routes>
            {isStaff
                ? stuffRoutes.map((obj) => (
                    <Route path={obj.path} element={<obj.component />} key={obj.path} />
                ))
                : user
                    ? privateRoutes.map((obj) => (
                        <Route path={obj.path} element={<obj.component />} key={obj.path} />
                    ))
                    : publicRoutes.map((obj) => (
                        <Route path={obj.path} element={<obj.component />} key={obj.path} />
                    ))}
        </Routes>
    );
};
