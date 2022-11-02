import { useContext, useEffect, useState } from "react"
import { Context } from ".."

export const useWalletStore = (input) => {
    const {wallet} = useContext(Context)
    const [data, setData] = useState(input)
    useEffect(() => {
        setData(input.map(item => item = wallet.selectedWallet.item))
    }, [input,wallet.selectedWallet])
    return [data]
}
/*
const {wallet} = useContext(Context)
const [name, setName] = useState('name')
useEffect(() => {
    setName(wallet.selectedWallet.name)
}, [wallet.selectedWallet])

const {wallet} = useContext(Context)
    const [money, setMoney] = useState({income: 0, expense: 0, amount: 0})
    useEffect(() => {
        setMoney({income: wallet.selectedWallet.income, expense: wallet.selectedWallet.expense, amount: wallet.selectedWallet.amount})
    }, [wallet.selectedWallet])*/