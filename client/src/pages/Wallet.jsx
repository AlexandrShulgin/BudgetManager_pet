import React from "react";
import MyContainer from "../components/UI/MyContainer";
import classes from "./Wallet.module.css"
const Wallet = () => {
    return ( 
        <div className={classes.Wallet}>
            <MyContainer className={classes.MenuContainer}>

            </MyContainer>

            <MyContainer className={classes.DashboardContainer}>

            </MyContainer>
        </div>
     );
}
 
export default Wallet;