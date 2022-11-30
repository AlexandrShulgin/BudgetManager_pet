import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../..";
import classes from "./StatList.module.css"
import dayjs from 'dayjs'
import { useEffect } from "react";
import { getAll } from "../../http/statAPI";

const StatList = observer(() => {

    const {wallet} = useContext(Context)
    const {stat} = useContext(Context)
    
    const wal = wallet.wallets.find(item => item.id === wallet.selectedWallet.id)

    useEffect(() => {
        getAll(wal.id).then((data) => {
            stat.setStats(data)
        })
    }, [wallet.selectedWallet, stat.update])

    return ( 
        <div className={classes.StatList}>

            {stat.stats.length > 0 && stat.stats.map((stat, index, arr) => 
                
                <div className={classes.StatItem} key={stat.id}>
                    
                    <div className={classes.StatDate}>
                        {index !== 0 ? (arr[index].date !== arr[index-1].date ? dayjs(stat.date).format('MM-YYYY') : "") : dayjs(stat.date).format('MM-YYYY')}
                    </div>

                    <div className={classes.StatContent}>
                        
                        <div className={classes.Content}>
                            <span className={classes.Stat}>Доход: {stat.income}</span>
                            <span className={classes.Stat}>Расход: {stat.expense}</span>
                            <span className={classes.Stat}>Разница: {stat.diff}</span>
                        </div>

                    </div>

                </div>
            )}

            {stat.stats.length === 0 && 
                <div className={classes.NoData}>
                    <span>Пока что здесь пусто, в конце месяца появится запись.</span>
                </div>
            }
            
        </div>
     );
})
 
export default StatList;