import {AnimatePresence} from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";


export const AppRoutes = () => {
    const user = true;

    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location}>
                {user
                    ? privateRoutes.map((obj) => (
                        <Route
                            path={obj.path}
                            element={<obj.component />}
                            key={obj.path}
                        />
                    ))
                    : publicRoutes.map((obj) => (
                        <Route
                            path={obj.path}
                            element={<obj.component />}
                            key={obj.path}
                        />
                    ))}
            </Routes>
        </AnimatePresence>
    );
};
