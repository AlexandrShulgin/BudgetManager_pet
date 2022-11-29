import { $authHost} from "./index";

export const create = async (historyData) => {
    const {data} = await $authHost.post('api/history/create', historyData)
    return data
}

export const destroy = async (id) => {
    const {data} = await $authHost.post(`api/history/destroy/${id}`)
    return data
}

export const getAll = async (id, sortType) => {
    const {data} = await $authHost.get(`api/history/getall/${id}/${sortType}`)
    return data
}