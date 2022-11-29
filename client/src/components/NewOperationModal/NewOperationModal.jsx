import classes from './NewOperationModal.module.css'
import MyInput from '../UI/MyInput/MyInput'
import MyRadio from '../UI/MyCheckbox/MyRadio';
import MyButton from '../UI/MyButton/MyButton';
import { CATEGORIES } from '../../utils/consts';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../..';
import MySelect from '../UI/MySelect/MySelect';
import { update } from '../../http/walletAPI';
import { create } from '../../http/historyAPI';

const NewOperationModal = observer((props) => {

    const {wallet} = useContext(Context)
    const {history} = useContext(Context)
    
    const [type, setType] = useState("income")
    const [amount, setAmount] = useState(0)
    const [hisData, setHisData] = useState({name: '', description: '', category: 'other', date: '', type: ''})

    const wal = wallet.wallets.find(item => item.id === wallet.selectedWallet.id)
    
    const changeHandler = (e) => {
        const { id, value } = e.target
        setHisData(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        if (type === "income") {
           await update(wal.id, 
                       {income: wal.income += parseFloat(amount), amount: wal.amount += parseFloat(amount)})
        } else {
            await update(wal.id, 
                        {expense: wal.expense += parseFloat(amount),amount: wal.amount -= parseFloat(amount)})
        }
        const newHistoryItem = {name: hisData.name, 
                                description: hisData.description,
                                category: hisData.category,
                                date: hisData.date, 
                                type: type, 
                                amount: parseFloat(amount),
                                walletId: wal.id}
        
        await create(newHistoryItem)
        history.setUpdate(hisData)
        
        setType("income")
        setAmount(0)
        setHisData({name: '', description: '', category: 'other', date: '', type: ''})
        props.visible(false)
    }

    return (
        <div className={classes.NewOperationModal}>
            <div className={classes.Header}>Добавить операцию</div>
            
            <form onSubmit={submitHandler}>

                <MyInput id={"name"} 
                         required={"required"}
                         caption={"Название"}
                         value={hisData.name}
                         onChange={changeHandler}/>

                <MyInput id={"description"}
                         caption={"Описание"}
                         value={hisData.description}
                         onChange={changeHandler}/>

                <MySelect id={"category"}
                          options={CATEGORIES} 
                          defaultValue={"Категория"} 
                          caption={"Категория"} 
                          value={hisData.category}
                          onChange={changeHandler}/>

                Тип операции*
                <div className={classes.RadioArea}>
                    <MyRadio id={"income"} 
                             name={"type"}
                             label={"Доход"}
                             about={"green"}
                             onChange={(e) => setType(e.target.id)}/>

                    <MyRadio id={"expense"} 
                             name={"type"}
                             label={"Расход"}
                             about={"red"}
                             onChange={(e) => setType(e.target.id)}/>          
                </div>

                <MyInput id={"date"}
                         type={"date"}
                         required={"required"} 
                         caption={"Дата"}
                         value={hisData.date}
                         onChange={changeHandler}/>

                <MyInput id={"amount"}
                         type={"number"}
                         required={"required"} 
                         caption={"Сумма"}
                         min={'0'}
                         max={'100000000'}
                         onChange={(e) => setAmount(e.target.value)}
                         value={amount}/>
                         
                <MyButton type={"submit"} className={classes.SubmitButton} disabled={amount > 0 ? '' : "disabled"}>Подтвердить</MyButton>
            </form>

        </div>
     );
})
 
export default NewOperationModal;