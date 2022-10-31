import React from "react";
import DashboardItem from "../components/UI/DashboardItem";
import MyContainer from "../components/UI/MyContainer";
import WalletList from "../components/WalletList";
import classes from "./Wallet.module.css"
const Wallet = () => {
    return ( 
        <div className={classes.Wallet}>
            <MyContainer className={classes.MenuContainer}>
                <WalletList/>
            </MyContainer>
            <div></div>
            <div className={classes.WalletContainer}>    
                <div className={classes.WalletDashboard}>
                    <div className={classes.DashboardMenu}>
                        <MyContainer>Имя</MyContainer>
                        <MyContainer>Добавить операцию</MyContainer>
                        <MyContainer>Удалить операцию</MyContainer>
                        <MyContainer>Режим прогноза</MyContainer>
                    </div>
                    <MyContainer className={classes.Dashboard}>
                        <DashboardItem color={"green"} title={"Доход в этом месяце"} amount={"123"}/>
                        <DashboardItem color={"red"} title={"Расход в этом месяце"} amount={"123"}/>
                        <DashboardItem color={"yellow"} title={"Сумма на счете"} amount={"123"}/>
                    </MyContainer>
                </div>
                <div className={classes.History}>

                </div>
            </div>
            <div></div>
        </div>
     );
}
 
export default Wallet;