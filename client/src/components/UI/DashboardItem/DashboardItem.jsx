import classes from './DashboardItem.module.css'
import incIcon from '../../../assets/images/income.png'
import expIcon from '../../../assets/images/expence.png'
import amtIcon from '../../../assets/images/amount.png'
import { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../..'

const DashboardItem = observer((props) => {
    const {stat} = useContext(Context)
    const {wallet} = useContext(Context)
    const wal = wallet.wallets.find(item => item.id === wallet.selectedWallet.id)
    const [money, setMoney] = useState({income: wal.income, expense: wal.expense, amount: wal.amount})

    useEffect(() => {
        setMoney({income: wal.income, expense: wal.expense, amount: wal.amount})
    }, [wal, wal.name, wal.income, wal.expense, wal.amount, stat.update])

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

            : //props.type === "amount"
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