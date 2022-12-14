import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../..';
import { create } from '../../http/notificationAPI';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import classes from './NewNotificationModal.module.css'
const NewNotificationModal = observer((props) => {

    const {notification} = useContext(Context)
    const {user} = useContext(Context)
    const [notificationData, setNotificationData] = useState({name: "", date: "", amount: 0, userId: user.user.id})

    const chanheHandler = (e) => {
        const { id, value } = e.target
        setNotificationData(prevState => ({
            ...prevState,
            [id]: value
        }));
    }
    

    const submitHandler = async (e) => {
        e.preventDefault()
        const data = await create(notificationData)
        notification.notifications.push(data)
        props.visible(false)
        setNotificationData({name: "", date: "", amount: 0, userId: user.user.id})
    }

    return ( 
        <div className={classes.NewNotificationModal}>
            <div className={classes.Header}>Создать напоминание</div>
            <form onSubmit={submitHandler}>
                
                <MyInput id={'name'}
                         required={'required'}
                         caption={'Имя'}
                         value={notificationData.name}
                         onChange={chanheHandler}/>

                <MyInput id={'date'}
                         type={'date'}
                         required={'required'}
                         caption={'Дата'}
                         value={notificationData.date}
                         onChange={chanheHandler}/>

                <MyInput id={'amount'}
                         required={'required'}
                         caption={'Сумма'}
                         min={'0'}
                         value={notificationData.amount}
                         onChange={chanheHandler}/>
                
                <MyButton type={"submit"} className={classes.SubmitButton}>Создать</MyButton>
                
                
            </form>
        </div>
     );
})
 
export default NewNotificationModal;