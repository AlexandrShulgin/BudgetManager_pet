import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "..";
import NewOperationModal from "../components/NewOperationModal/NewOperationModal";
import DashboardItem from "../components/UI/DashboardItem/DashboardItem";
import MyContainer from "../components/UI/MyContainer/MyContainer";
import MyModal from "../components/UI/MyModal/MyModal";
import WalletList from "../components/WalletList/WalletList";
import classes from "./Wallet.module.css"
const Wallet = observer(() => {
    const [modal, setModal] = useState(false)
    const {wallet} = useContext(Context)
    const [name, setName] = useState('name')
    const [modalContent, setModalContent] = useState()
    useEffect(() => {
        setName(wallet.selectedWallet.name)
    }, [wallet.selectedWallet])

    const clickHandler = (content) => {
        setModal(true)
        setModalContent(content)
    }


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
                        <MyContainer className={classes.click} clickHandler={() => clickHandler(<NewOperationModal visible={setModal}/>)}>Добавить операцию</MyContainer>
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
            <MyModal visible={modal} setVisible={setModal}>{modalContent}</MyModal>
        </div>
     );
})
 
export default Wallet;