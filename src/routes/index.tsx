// import { AnimatePresence } from "framer-motion";
// import React from "react";
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";


export const AppRoutes = () => {
    const user = true;

    //   const element: any = useRoutes([...privateRoutes]);

    //   console.log(element);

    //   const location = useLocation();

    //   if (!element) return null;

    return (
    // <AnimatePresence mode="wait" initial={false}>
    //   {React.cloneElement(element, { key: location.pathname })}
    // </AnimatePresence>
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
