import React from "react";
import MyButton from "../components/UI/MyButton/MyButton"
import MyInput from "../components/UI/MyInput/MyInput";
import MyContainer from '../components/UI/MyContainer/MyContainer'
import classes from './Auth.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return ( 
        <div className={classes.Auth}>
            <MyContainer className={classes.AuthContainer}>
                <span className={classes.Title}>{isLogin ? "LOGIN" : "REGISTRATION"}</span>
                <MyInput type={"email"} caption={"Email"}/>
                <MyInput type={"password"} caption={"Password"}/>
                <div className={classes.BottomSection}>
                    {isLogin ?
                        <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                        :
                        <NavLink to={LOGIN_ROUTE}>Авторизация</NavLink>
                    }
                    <MyButton width={"135px"} height={"42px"}>{isLogin ? "Log in" : "Register"}</MyButton>
                </div>
            </MyContainer>
        </div>
     );
}
 
export default Auth;