import classes from './DashboardItem.module.css'
import incIcon from '../../assets/images/income.png'
import expIcon from '../../assets/images/expence.png'
import amtIcon from '../../assets/images/amount.png'
import { Context } from '../..'
import { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'

const DashboardItem = observer((props) => {
    const {wallet} = useContext(Context)
    const [money, setMoney] = useState({income: 0, expense: 0, amount: 0})
    useEffect(() => {
        setMoney({income: wallet.selectedWallet.income, expense: wallet.selectedWallet.expense, amount: wallet.selectedWallet.amount})
    }, [wallet.selectedWallet])
    return ( 
        <div className={classes.DashboardItem}>
            {props.type === "income" ?
                    <>
                    <div className={classes.ItemIcon + " " + classes.income}>
                        <img src={incIcon} alt="itemicon"></img>
                    </div>
                    <div className={classes.ItemContent}>
                        <div className={classes.ContentTitle}>Доход в этом месяце:</div>
                        <div className={classes.ContentAmount}>{money.income}₽</div>
                    </div>
                    </>
            : props.type === "expense" ?
                    <>
                    <div className={classes.ItemIcon + " " + classes.expense}>
                        <img src={expIcon} alt="itemicon"></img>
                    </div>
                    <div className={classes.ItemContent}>
                        <div className={classes.ContentTitle}>Расход в этом месяце:</div>
                        <div className={classes.ContentAmount}>{money.expense}₽</div>
                    </div>
                    </>
            :
                    <>
                    <div className={classes.ItemIcon + " " + classes.amount}>
                        <img src={amtIcon} alt="itemicon"></img>
                    </div>
                    <div className={classes.ItemContent}>
                        <div className={classes.ContentTitle}>Сумма на счете:</div>
                        <div className={classes.ContentAmount}>{money.amount}₽</div>
                    </div>
                    </>
                
            }
        </div>
     );
})
 
export default DashboardItem;