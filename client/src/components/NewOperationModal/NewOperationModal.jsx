import classes from './NewOperationModal.module.css'
import MyInput from '../UI/MyInput/MyInput'
import MyRadio from '../UI/MyCheckbox/MyRadio';
import MyButton from '../UI/MyButton/MyButton';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../..';
/*Заменить Категорию из инпута в дропдаун*/

const NewOperationModal = observer((props) => {

    const {wallet} = useContext(Context)
    const wal = wallet.wallets[wallet.selectedWallet.id-1]
    const [type, setType] = useState("income")
    const [amount, setAmount] = useState(0)
    const submitHandler = (e) => {
        e.preventDefault()
        if (type === "income") {
            wal.income += parseFloat(amount)
            wal.amount += parseFloat(amount)
        } else {
            wal.expense += parseFloat(amount)
            wal.amount -= parseFloat(amount)
        }
        setType("income")
        setAmount(0)
        props.visible(false)
    }

    return (
        <div className={classes.NewOperationModal}>
            <div className={classes.Header}>Добавить операцию</div>
            <form onSubmit={submitHandler}>
                <MyInput id={"name"} 
                         /*required={"required"}*/ caption={"Название"}/>
                <MyInput id={"description"}
                         caption={"Описание"}/>
                <MyInput id={"category"} 
                         caption={"Категория"}/>
                Тип операции*
                <div className={classes.RadioArea}>
                    <MyRadio id={"income"} 
                             name={"type"} label={"Доход"}
                             onChange={(e) => setType(e.target.id)}
                             />
                    <MyRadio id={"expense"} 
                             name={"type"} label={"Расход"}
                             onChange={(e) => setType(e.target.id)}
                             />
                </div>
                <MyInput id={"date"}
                         type={"date"} caption={"Дата"}/>
                <MyInput id={"amount"}
                         type={"number"}
                         required={"required"} 
                         caption={"Сумма"}
                         onChange={(e) => setAmount(e.target.value)}
                         value={amount}/>
                <MyButton type={"submit"} className={classes.SubmitButton}>Подтвердить</MyButton>

            </form>
        </div>
     );
})
 
export default NewOperationModal;