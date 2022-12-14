import { useContext, useState } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../..";
import classes from './WalletList.module.css'
import settingsIcon from '../../assets/images/settings.png'
import { getAll } from "../../http/walletAPI";
import { useEffect } from "react";

const WalletList = observer((props) => {

    const {wallet} = useContext(Context)
    const {user} = useContext(Context)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAll(user.user.id).then((data) => {
            wallet.setWallets(data)
            wallet.setSelectedWallet(data[0])
        })
    }, [])
    
    return (
        <div className={classes.List}>
            {!loading && wallet.wallets.map(wal =>
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