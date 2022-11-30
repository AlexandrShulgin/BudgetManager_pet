import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "..";
import HistoryList from "../components/HistoryList/HistoryList";
import NewNotificationModal from "../components/NewNotificationModal/NewNotificationModal";
import NewOperationModal from "../components/NewOperationModal/NewOperationModal";
import NewWalletModal from "../components/NewWalletModal/NewWalletModal";
import NotificationList from "../components/NotificationList/NotificationList";
import StatList from "../components/StatList/StatList";
import DashboardItem from "../components/UI/DashboardItem/DashboardItem";
import MyContainer from "../components/UI/MyContainer/MyContainer";
import MyModal from "../components/UI/MyModal/MyModal";
import WalletList from "../components/WalletList/WalletList";
import WalletSettingsModal from "../components/WalletSettingsModal/WalletSettingsModal";
import classes from "./Wallet.module.css"
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { LOGIN_ROUTE } from "../utils/consts";
import { update } from "../http/walletAPI";
import { create } from "../http/statAPI";


const Wallet = observer(() => {

    const {wallet} = useContext(Context)
    const {user} = useContext(Context)

    const [modal, setModal] = useState(false)
    const [name, setName] = useState('name')
    const [modalContent, setModalContent] = useState()
    const [del, setDel] = useState(false)
    const [sortType, setSortType] = useState("fromHigherDate")
    const [statMode, setStatMode] = useState(false)
    const nav = useNavigate()

    useEffect(() => {
        setName(wallet.selectedWallet.name)
    }, [wallet.selectedWallet])

    const clickHandler = (content) => {
        setModal(true)
        setModalContent(content)
    }

    const modeChange = () => {
        if(statMode) {
            setStatMode(false)
        } else {
            setStatMode(true)
        }
    }

    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
        nav(LOGIN_ROUTE)
    }

    const newMonth = async () => {
        const wal = wallet.selectedWallet
        await create({date: (dayjs().subtract(1, 'month')).format('YYYY-MM-DD'), income: wal.income, expense: wal.expense, diff: wal.income-wal.expense, walletId: wal.id})
        await update(wal.id, {income: 0, expense: 0})
    }

    return ( 
        <div className={classes.Wallet}>
            
            {/*Menu section*/}
            <MyContainer className={classes.MenuContainer}>

                <div className={classes.userField}>
                    <div className={classes.email}>Email: {user.user.email}</div>
                    <div className={`${classes.MyButton} ${classes.click}`} onClick={logout}>Выйти</div>
                </div>

                <div className={classes.MenuHeader}>Кошельки</div>
                <WalletList clickHandler={() => clickHandler(<NewWalletModal visible={setModal}/>)}
                            settingsHandler={() => clickHandler(<WalletSettingsModal visible={setModal}/>)}/>
                
                <div className={classes.MenuHeader}>Напоминания</div>
                <NotificationList clickHandler={() => clickHandler(<NewNotificationModal visible={setModal}/>)}/>

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
                        <MyContainer className={classes.click} clickHandler={() => del === true ? setDel(false) : setDel(true)}>Удалить операцию</MyContainer>
                        <MyContainer className={classes.click} clickHandler={newMonth}>Новый месяц</MyContainer>
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

                            <MyContainer className={classes.click} 
                                         clickHandler={sortType === "fromHigherDate" ? 
                                                       () => setSortType("fromLowerDate") : 
                                                       () => setSortType("fromHigherDate")}>
                                                        
                                Дата
                            </MyContainer>

                            <MyContainer className={classes.click} 
                                         clickHandler={sortType === "fromHigherAmount" ? 
                                                       () => setSortType("fromLowerAmount") : 
                                                       () => setSortType("fromHigherAmount")}>
                                Сумма
                            </MyContainer>

                            <MyContainer className={classes.click}
                                         clickHandler={modeChange}>
                                Статистика
                            </MyContainer>

                        </div>
                        <MyContainer className={classes.HistoryList}>
                            {statMode ?
                                <StatList/> : 
                                <HistoryList isDeletable={del} setIsDeletable={setDel} sortType={sortType} setSortType={setSortType}/>
                            }
                            
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