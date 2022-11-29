import { useContext } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../..";
import classes from './NotificationList.module.css'
import binIcon from '../../assets/images/bin.png'
import dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import { useEffect } from "react";
import { getAll } from "../../http/notificationAPI";
import { destroy } from "../../http/notificationAPI";

dayjs.extend(RelativeTime)
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  relativeTime: {
    future: "%s",
    past: "время вышло",
    s: 'несколько секунд',
    m: "минута",
    mm: "несколько минут",
    h: "час",
    hh: "%d часа(ов)",
    d: "день",
    dd: "%d дня(ей)",
    M: "месяц",
    MM: "%d месяца(ев)",
    y: "год",
    yy: "%d года(лет)"
  }
})

const {user} = useContext(Context)
const {notification} = useContext(Context)

const NotificationList = observer((props) => {

    const {user} = useContext(Context)
    const {notification} = useContext(Context)

    useEffect(() => {
        getAll(user.user.id).then((data) => {
            notification.setNotifications(data)
        })
    }, [])

    const deleteHandler = (id) => {
        notification.notifications.splice(notification.notifications.indexOf(notification.notifications.find(el => el.id === id)), 1)
    } 
    
    const updateTime = (date) => {
        if (dayjs(date) < dayjs()) {
            return (dayjs(date).add(1, 'month')).fromNow()
        }
        return dayjs(date).fromNow()
    }

    const updateDate = (date) => {
        if (dayjs(date) < dayjs()) {
            return (dayjs(date).add(1, 'month')).format('DD-MM-YYYY')
        }
        return dayjs(date).format('DD-MM-YYYY')
    }

    useEffect(() => {
        notification.notifications.map(notif => {
            const interval = setInterval(() => updateTime(notif.date), 36000)
            return () => clearInterval(interval) 
        })
    }, [])

    return (
        <div className={classes.List}>
            {notification.notifications.map(notif =>
                <div 
                    key={notif.id}
                    className={classes.ListItem}
                >
                    <div className={classes.Left}>
                        <div className={classes.Name}>
                            {notif.name}
                            
                        </div>
                        <div className={classes.Date}>
                            ({updateDate(notif.date)}) осталось: <span className={classes.red}>{updateTime(notif.date)}</span>
                        </div>

                    </div>

                    <div className={classes.Right}>
                        
                        <div className={classes.Amount}>
                            {parseFloat(notif.amount)}₽
                        </div>

                        <div className={classes.settingsButton}
                            onClick={() => {deleteHandler(notif.id); destroy(notif.id)}}>
                                <img src={binIcon} alt={'delete'}/>
                        </div>
                    </div>
                    
                    
                </div>
                )}

            <div className={classes.ListItem} onClick={props.clickHandler}>Добавить напоминание</div> 
        </div>
    )
})

export default NotificationList