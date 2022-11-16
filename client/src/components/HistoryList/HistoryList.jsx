import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../..";
import classes from "./HistoryList.module.css"
import { CATEGORIES } from "../../utils/consts";

import c_communal from "../../assets/images/c_communal.png"
import c_credits from "../../assets/images/c_credits.png"
import c_education from "../../assets/images/c_education.png"
import c_gift from "../../assets/images/c_gift.png"
import c_other from "../../assets/images/c_other.png"
import c_salary from "../../assets/images/c_salary.png"
import c_shopping from "../../assets/images/c_shopping.png"
import c_transport from "../../assets/images/c_transport.png"

const HistoryList = observer(({isDeletable, setIsDeletable, sortType, setSortType}) => {

    const {wallet} = useContext(Context)
    const {history} = useContext(Context)
    
    const filteredList = history.history.filter(his => his.wal_id === wallet.selectedWallet.id)
    const wal = wallet.wallets.find(item => item.id === wallet.selectedWallet.id)

    const imgPath = '../../assets/images/'

    const listSorting = (sortType) => {
        let sortedList
        switch(sortType) {
            case "fromHigherDate":
                sortedList = filteredList.sort((a, b) => new Date(b.date) - new Date(a.date))
                break

            case "fromLowerDate":
                sortedList = filteredList.sort((a, b) => new Date(a.date) - new Date(b.date))
                break
            
            case "fromHigherAmount":
                sortedList = filteredList.sort((a, b) => b.amount - a.amount)
                break
            
            case "fromLowerAmount":
                sortedList = filteredList.sort((a, b) => a.amount - b.amount)
                break
                
            default:
                sortedList = filteredList
                break
        }
        return sortedList
    }

    const setCategoryImage = (category) => {
        let src
        switch (category) {
            case "shopping":
                src = c_shopping
                
                break;
            case "communal":
                src = c_communal
                
                break;
            case "credits":
                src = c_credits
                
                break;
            case "gift":
                src = c_gift
                
                break;
            case "salary":
                src = c_salary
                
                break;
            case "education":
                src = c_education
                
                break;
            case "transport":
                src = c_transport
                
                break;
            case "other":
                src = c_other
                
                break;
            default:
                src = c_other
                
                break;
        }
        return src
    }
    
    

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

            {filteredList.length > 0 && listSorting(sortType).map((his, index, arr) => 
                
                <div className={classes.HistoryItem} key={his.id} onClick={isDeletable ? () => clickHandler(his) : null}>
                    
                    <div className={classes.HistoryDate}>
                        {index !== 0 ? (arr[index].date !== arr[index-1].date ? his.date : "") : his.date}
                    </div>

                    <div className={`${classes.HistoryContent} ${isDeletable ? classes.deletable : ''}`}>
                        <div className={`${classes.ContentIcon}  ${his.type === "income" ? classes.income : classes.expense}`}>
                            <img src={setCategoryImage(his.category)} alt={'category'}/> 
                        </div>

                        <div className={classes.Content}>
                            <span className={classes.Name}>{his.name}</span>
                            <span className={classes.Description}>{his.description}</span>
                            <span className={classes.Category}>{CATEGORIES.find(item => item.value === his.category).name}</span>
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