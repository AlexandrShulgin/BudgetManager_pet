import { useContext } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "..";

const WalletList = observer(() => {
    const {wallet} = useContext(Context)
    return (
        <div>
            {wallet.wallets.map(wal =>
                <div>
                    {wal.name}
                </div>
                )}
        </div>
    )
})

export default WalletList