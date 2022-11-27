import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../..';
import { destroy, update } from '../../http/walletAPI';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import classes from './WalletSettingsModal.module.css'

const WalletSettingsModal = observer((props) => {
    const {wallet} = useContext(Context)
    const {history} = useContext(Context)
    const [name, setName] = useState(wallet.selectedWallet.name)
    
    const wal = wallet.wallets.find(item => item.id === wallet.selectedWallet.id)
    
    const RenameHandler = async(e) => {
    const regex = /(?=.*[A-z0-9\W])/g
        e.preventDefault()
        if (regex.test(name) && name.length < 32) {
            wal.name = name
            await update(wal.id, {name: name})
            setName(wallet.selectedWallet.name)
            props.visible(false)
        } else {
            console.log('loh')
        }
    }

    const DeleteHandler = async (e) => {
        e.preventDefault()
        wallet.setSelectedWallet(wallet.wallets[0])
        wallet.wallets.splice(wallet.wallets.indexOf(wal), 1)
        await destroy(wal.id)

        const filteredList = history.history.filter(his => his.wal_id === wallet.selectedWallet.id)
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