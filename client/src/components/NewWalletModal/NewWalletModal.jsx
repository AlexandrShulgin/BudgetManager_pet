import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../..';
import MyButton from '../UI/MyButton/MyButton';
import MyRadio from '../UI/MyCheckbox/MyRadio';
import MyInput from '../UI/MyInput/MyInput';
import classes from './NewWalletModal.module.css'
const NewWalletModal = observer((props) => {

    const {wallet} = useContext(Context)

    const [walletData, setWalletData] = useState({id: wallet.wallets[wallet.wallets.length - 1].id + 1, name: "", income: 0, expense: 0, amount: 0, userId: 0})

    const chanheHandler = (e) => {
        const { id, value } = e.target
        setWalletData(prevState => ({
            ...prevState,
            [id]: id === 'name' ? value : parseFloat(value)
        }));
    }
    

    const submitHandler = (e) => {
        e.preventDefault()
        wallet.wallets.push(walletData)
        props.visible(false)
        setWalletData({id: wallet.wallets[wallet.wallets.length - 1].id + 1, name: "", income: 0, expense: 0, amount: 0, userId: 0})
    }

    return ( 
        <div className={classes.NewWalletModal}>
            <div className={classes.Header}>Создать кошелек</div>
            <form onSubmit={submitHandler}>
                
                <MyInput id={'name'}
                         required={'required'}
                         caption={'Имя'}
                         value={walletData.name}
                         onChange={chanheHandler}/>

                <div className={classes.MoneyArea}>    
                    <MyInput id={'income'}
                            type={'number'}
                            caption={'Доход'}
                            min={'0'}
                            value={walletData.income}
                            onChange={chanheHandler}/>

                    <MyInput id={'expense'}
                         type={'number'}
                         caption={'Расход'}
                         min={'0'}
                         value={walletData.expense}
                         onChange={chanheHandler}/>

                    <MyInput id={'amount'}
                         type={'number'}
                         caption={'Сумма на счете'}
                         min={'0'}
                         value={walletData.amount}
                         onChange={chanheHandler}/>
                </div>

                <div className={classes.RadioArea}>
                    <MyRadio id={"private"} 
                             name={"type"}
                             label={"Приватный"}
                             about={"green"}
                             /*onChange={(e) => setType(e.target.id)}*//>

                    <MyRadio id={"public"} 
                             name={"type"}
                             label={"Публичный"}
                             about={"red"}
                             /*onChange={(e) => setType(e.target.id)}*//>          
                </div>
                
                <MyButton type={"submit"} className={classes.SubmitButton}>Создать</MyButton>
                
                
            </form>
        </div>
     );
})
 
export default NewWalletModal;