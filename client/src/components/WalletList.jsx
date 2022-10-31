import { useContext } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "..";
import classes from './WalletList.module.css'
import { useState } from "react";

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
                </div>
                )}
        </div>
    )
})

export default WalletList