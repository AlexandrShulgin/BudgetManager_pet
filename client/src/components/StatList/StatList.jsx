import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../..";
import classes from "./StatList.module.css"
import dayjs from 'dayjs'

const StatList = observer(() => {

    const {wallet} = useContext(Context)
    const {stat} = useContext(Context)
    
    const filteredList = stat.stats.filter(stat => stat.wal_id === wallet.selectedWallet.id)

    return ( 
        <div className={classes.StatList}>

            {filteredList.length > 0 && filteredList.map((stat, index, arr) => 
                
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

            {filteredList.length === 0 && 
                <div className={classes.NoData}>
                    <span>Пока что здесь пусто, в конце месяца появится запись.</span>
                </div>
            }
            
        </div>
     );
})
 
export default StatList;