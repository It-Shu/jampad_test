import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://api.jampad.ml/api/',
    withCredentials: true
})


instance.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
