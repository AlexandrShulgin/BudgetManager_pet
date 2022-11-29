import { $authHost} from "./index";

export const create = async (notificationData) => {
    const {data} = await $authHost.post('api/notification/create', notificationData)
    return data
}

export const destroy = async (id) => {
    const {data} = await $authHost.post(`api/notification/destroy/${id}`)
    return data
}

export const getAll = async (id) => {
    const {data} = await $authHost.get(`api/notification/getall/${id}`)
    return data
}
/* */