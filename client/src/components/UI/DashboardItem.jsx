import classes from './DashboardItem.module.css'
import incIcon from '../../assets/images/income.png'
import expIcon from '../../assets/images/expence.png'
import amtIcon from '../../assets/images/amount.png'


const DashboardItem = (props) => {
    return ( 
        <div className={classes.DashboardItem}>
            <div className={classes.ItemIcon + " " + classes[props.color]}>
                <img src={props.color === "green" ? incIcon : props.color === "red" ? expIcon : amtIcon} alt="itemicon"></img>
            </div>
            <div className={classes.ItemContent}>
                <div className={classes.ContentTitle}>{props.title}</div>
                <div className={classes.ContentAmount}>{props.amount}₽</div>
            </div>
        </div>
     );
}
 
export default DashboardItem;