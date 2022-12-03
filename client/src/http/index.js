import axios from 'axios';

const $host = axios.create({
    baseURL: 'https://bm-backend.onrender.com'
})

const $authHost = axios.create({
    baseURL: 'https://bm-backend.onrender.com'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)
$authHost.interceptors.response.use(authInterceptor)

export {
    $host,
    $authHost
}
