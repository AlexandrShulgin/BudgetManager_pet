import React from "react";
import MyButton from "../components/UI/MyButton/MyButton"
import MyInput from "../components/UI/MyInput/MyInput";
import MyContainer from '../components/UI/MyContainer/MyContainer'
import classes from './Auth.module.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, WALLET_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { useState } from "react";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { create } from "../http/walletAPI";
const Auth = observer(() => {

    const {user} = useContext(Context)
    const {wallet} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
                user.setUser(data)
            } else {
                data = await registration(email, password)
                user.setUser(data)
                const wal = await create({name: 'Wallet', income: 0, expense: 0, amount: 0, userId: user.user.id})
                wallet.wallets.push(wal)
            }
            user.setIsAuth(true)
            navigate(WALLET_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }

    return ( 
        <div className={classes.Auth}>
            <MyContainer className={classes.AuthContainer}>
                <span className={classes.Title}>{isLogin ? "ВОЙТИ" : "ЗАРЕГИСТРИРОВАТЬСЯ"}</span>
                <MyInput type={"email"}
                         caption={"Email"}
                         value={email}
                         onChange={e => setEmail(e.target.value)}/>
                <MyInput type={"password"} 
                         caption={"Password"}
                         value={password}
                         onChange={e => setPassword(e.target.value)}/>
                <div className={classes.BottomSection}>
                    {isLogin ?
                        <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                        :
                        <NavLink to={LOGIN_ROUTE}>Авторизация</NavLink>
                    }
                    <MyButton onClick={click} className={classes.MyButton}>{isLogin ? "Вход" : "Регистрация"}</MyButton>
                </div>
            </MyContainer>
        </div>
     );
})
 
export default Auth;