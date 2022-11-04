import {makeAutoObservable} from 'mobx';
import { configure } from "mobx"

configure({
    enforceActions: "never",
})
export default class WalletStore {
    constructor() {
        this._wallets = [
            {id: 1, name: "wal1", income: 0, expense: 0, amount: 0, userId: 1},
            {id: 2, name: "wal2", income: 10, expense: 10, amount: 0, userId: 1},
            {id: 3, name: "wal3", income: 100, expense: 1, amount: 99, userId: 1},
            {id: 4, name: "wal4", income: 2, expense: 1, amount: 1, userId: 2},
            {id: 5, name: "wal5", income: 5, expense: 1, amount: 4, userId: 2},
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