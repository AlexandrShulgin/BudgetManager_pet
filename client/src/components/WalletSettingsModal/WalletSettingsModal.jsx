import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../..';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import classes from './WalletSettingsModal.module.css'

const WalletSettingsModal = observer((props) => {
    
    const {wallet} = useContext(Context)
    const {history} = useContext(Context)
    const wal = wallet.wallets.find(item => item.id === wallet.selectedWallet.id)
    
    const [name, setName] = useState(wallet.selectedWallet.name)

    const RenameHandler = (e) => {
    const regex = /(?=.*[A-z0-9\W])/g
        e.preventDefault()
        if (regex.test(name) && name.length < 32) {
            wal.name = name
            setName(wallet.selectedWallet.name)
            props.visible(false)
        } else {
            console.log('loh')
        }
    }

    const DeleteHandler = (e) => {
        e.preventDefault()
        const filteredList = history.history.filter(his => his.wal_id === wallet.selectedWallet.id)

        wallet.setSelectedWallet(wallet.wallets[0])
        wallet.wallets.splice(wallet.wallets.indexOf(wal), 1)

        filteredList.map(his => history.history.splice(history.history.indexOf(his) , 1))

        props.visible(false)
    }

    return (
        <div className={classes.WalletSettingsModal}>
            Параметры
            <form>
                <MyInput id={"name"}
                      required={"required"} 
                      caption={"Имя"}
                      onChange={(e) => setName(e.target.value)}
                      value={name}/>
                <MyButton onClick={RenameHandler} className={classes.RenameButton}>Переименовать</MyButton>
                
                {wallet.selectedWallet !== wallet.wallets[0] &&
                    <MyButton onClick={DeleteHandler} className={classes.DeleteButton}>Удалить кошелек</MyButton>
                }
                 
            </form> 
        </div>
     );
})
 
export default WalletSettingsModal;