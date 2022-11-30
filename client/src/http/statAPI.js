import { $authHost} from "./index";

export const create = async (statData) => {
    const {data} = await $authHost.post('api/stat/create', statData)
    return data
}

export const getAll = async (id) => {
    const {data} = await $authHost.get(`api/stat/getall/${id}`)
    return data
}