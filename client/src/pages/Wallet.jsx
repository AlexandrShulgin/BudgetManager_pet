import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "..";
import DashboardItem from "../components/UI/DashboardItem";
import MyContainer from "../components/UI/MyContainer";
import WalletList from "../components/WalletList";
import classes from "./Wallet.module.css"
const Wallet = observer(() => {
    const {wallet} = useContext(Context)
    const [name, setName] = useState('name')
    useEffect(() => {
        setName(wallet.selectedWallet.name)
    }, [wallet.selectedWallet])
    return ( 
        <div className={classes.Wallet}>
            <MyContainer className={classes.MenuContainer}>
                <WalletList/>
            </MyContainer>
            <div></div>
            <div className={classes.WalletContainer}>    
                <div className={classes.WalletDashboard}>
                    <div className={classes.DashboardMenu}>
                        <MyContainer>{name}</MyContainer>
                        <MyContainer>Добавить операцию</MyContainer>
                        <MyContainer>Удалить операцию</MyContainer>
                        <MyContainer>Режим прогноза</MyContainer>
                    </div>
                    <MyContainer className={classes.Dashboard}>
                        <DashboardItem type={"income"}/>
                        <DashboardItem type={"expense"}/>
                        <DashboardItem type={"amount"}/>
                    </MyContainer>
                </div>
                <div className={classes.History}>

                </div>
            </div>
            <div></div>
        </div>
     );
})
 
export default Wallet;