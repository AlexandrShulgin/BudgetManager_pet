import {makeAutoObservable} from 'mobx';
import { configure } from "mobx"

configure({
    enforceActions: "never",
})
export default class WalletStore {
    constructor() {
        this._wallets = [
            {id: 1, name: "Wallet", income: 0, expense: 0, amount: 0, userId: 1},
        ]
        this._selectetWallet = this.wallets[0]
        makeAutoObservable(this)
    }

    setWallets(wallets) {
        this._wallets = wallets
    }

    setSelectedWallet(wallet) {
        this._selectetWallet = wallet
    }

    get wallets() {
        return this._wallets
    }

    get selectedWallet() {
        return this._selectetWallet
    }

}