import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "..";
import HistoryList from "../components/HistoryList/HistoryList";
import NewOperationModal from "../components/NewOperationModal/NewOperationModal";
import NewWalletModal from "../components/NewWalletModal/NewWalletModal";
import DashboardItem from "../components/UI/DashboardItem/DashboardItem";
import MyContainer from "../components/UI/MyContainer/MyContainer";
import MyModal from "../components/UI/MyModal/MyModal";
import WalletList from "../components/WalletList/WalletList";
import WalletSettingsModal from "../components/WalletSettingsModal/WalletSettingsModal";
import classes from "./Wallet.module.css"
const Wallet = observer(() => {

    const [modal, setModal] = useState(false)
    const {wallet} = useContext(Context)

    const [name, setName] = useState('name')
    const [modalContent, setModalContent] = useState()
    const [del, setDel] = useState(false)

    useEffect(() => {
        setName(wallet.selectedWallet.name)
    }, [wallet.selectedWallet])

    const clickHandler = (content) => {
        setModal(true)
        setModalContent(content)
    }


    return ( 
        <div className={classes.Wallet}>
            
            {/*Menu section*/}
            <MyContainer className={classes.MenuContainer}>
                <WalletList clickHandler={() => clickHandler(<NewWalletModal visible={setModal}/>)}
                            settingsHandler={() => clickHandler(<WalletSettingsModal visible={setModal}/>)}/>
            </MyContainer>

            <div></div>

            {/*Main section*/}
            <div className={classes.WalletContainer}>   

                {/*Dashboard section*/} 
                <div className={classes.WalletDashboard}>
                    <div className={classes.DashboardMenu}>
                        <MyContainer>{name}</MyContainer>
                        <MyContainer className={classes.click} 
                                     clickHandler={() => clickHandler(<NewOperationModal visible={setModal}/>)}>
                            Добавить операцию
                        </MyContainer>
                        <MyContainer className={classes.click} clickHandler={() => setDel(true)}>Удалить операцию</MyContainer>
                        {/*<MyContainer>Режим прогноза</MyContainer>*/}
                    </div>
                    <MyContainer className={classes.Dashboard}>
                        <DashboardItem type={"income"}/>
                        <DashboardItem type={"expense"}/>
                        <DashboardItem type={"amount"}/>
                    </MyContainer>
                </div>

                {/*History section*/}
                <div className={classes.History}>
                    <div className={classes.HistoryMenu}>
                            <MyContainer>История</MyContainer>
                            <MyContainer>Дата</MyContainer>
                            <MyContainer>Сумма</MyContainer>
                            <MyContainer>Расширенный фильтр</MyContainer>
                        </div>
                        <MyContainer className={classes.HistoryList}>
                            <HistoryList isDeletable={del} setIsDeletable={setDel}/>
                        </MyContainer>
                </div>

            </div>
            <div></div>

            {/*Modal window*/}
            <MyModal visible={modal} setVisible={setModal}>{modalContent}</MyModal>
        </div>
     );
})
 
export default Wallet;