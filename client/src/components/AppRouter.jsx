import React from "react";
import { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE } from "../utils/consts";

const AppRouter = () => {
    const {user} = useContext(Context)
    const isAuth = user.isAuth
    return ( 
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component} exact/>
            )}

            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component} exact/>
            )}

            {isAuth && <Route
                path="*"
                element={<Navigate to="/wallet" replace />}
            />}

            <Route
                path="*"
                element={<Navigate to="/login" replace />}
            />
        </Routes>
     );
}
 
export default AppRouter;