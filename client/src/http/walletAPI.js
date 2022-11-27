import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode'

export const create = async (walletData) => {
    const {data} = await $authHost.post('api/wallet/create', walletData)
    return data
}

export const update = async (id, walletData) => {
    const {data} = await $authHost.post(`api/wallet/update/${id}`, walletData)
    return data
}

export const destroy = async (id) => {
    const {data} = await $authHost.post(`api/wallet/destroy/${id}`)
    return data
}

export const getAll = async (id) => {
    console.log(id)
    const {data} = await $authHost.get(`api/wallet/getall/${id}`)
    return data
}