import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../..";
import classes from "./HistoryList.module.css"

const HistoryList = observer(({isDeletable, setIsDeletable}) => {

    const {wallet} = useContext(Context)
    const {history} = useContext(Context)
    
    const filteredList = history.history.filter(his => his.wal_id === wallet.selectedWallet.id)
    const wal = wallet.wallets.find(item => item.id === wallet.selectedWallet.id)

    const clickHandler = (item) => {
        history.history.splice(history.history.indexOf(item), 1)
        if (item.type === "income") {
            wal.income -= parseFloat(item.amount)
            wal.amount -= parseFloat(item.amount)
        } else {
            wal.expense -= parseFloat(item.amount)
            wal.amount += parseFloat(item.amount)
        }
        setIsDeletable(false)
    }


    return ( 
        <div className={classes.HistoryList}>

            {filteredList.length > 0 && filteredList.map((his, index, arr) => 
                
                <div className={classes.HistoryItem} key={his.id} onClick={isDeletable ? () => clickHandler(his) : ''}>
                    
                    <div className={classes.HistoryDate}>
                        {index !== 0 ? (arr[index].date !== arr[index-1].date ? his.date : "") : his.date}
                    </div>

                    <div className={`${classes.HistoryContent} ${isDeletable ? classes.deletable : ''}`}>
                        <div className={`${classes.ContentIcon}  ${his.type === "income" ? classes.income : classes.expense}`}>
                            {/*category img*/}
                        </div>

                        <div className={classes.Content}>
                            <span className={classes.Name}>{his.name}</span>
                            <span className={classes.Description}>{his.description}</span>
                            <span className={classes.Category}>{his.category}</span>
                        </div>

                        {his.type === "income" ?
                            <div className={`${classes.Amount} ${classes.plus}`}>
                                +{his.amount}
                            </div>
                        :
                            <div className={`${classes.Amount} ${classes.minus}`}>
                                --{his.amount}
                            </div>
                        }
                    </div>

                </div>
            )}

            {filteredList.length === 0 && 
                <div className={classes.NoData}>
                    <span>Пока что здесь пусто, добавьте операцию, чтобы она появилась в истории.</span>
                </div>
            }
            
        </div>
     );
})
 
export default HistoryList;