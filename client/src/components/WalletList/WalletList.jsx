import { useContext } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../..";
import classes from './WalletList.module.css'
import settingsIcon from '../../assets/images/settings.png'

const WalletList = observer((props) => {
    const {wallet} = useContext(Context)
    return (
        <div className={classes.List}>
            {wallet.wallets.map(wal =>
                <div 
                    key={wal.id}
                    className={wal.id === wallet.selectedWallet.id ? `${classes.ListItem} ${classes.active}` : classes.ListItem}
                    onClick={() => wallet.setSelectedWallet(wal)}
                >
                    {wal.name}
                    <div className={classes.WalletSettingsButton}
                         onClick={props.settingsHandler}>
                            <img src={settingsIcon} alt={'settings'}/>
                    </div>
                </div>
                )}

            <div className={classes.ListItem} onClick={props.clickHandler}>Создать кошелек</div> 
        </div>
    )
})

export default WalletList