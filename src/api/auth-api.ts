import axios, {AxiosResponse} from "axios"


export const instance = axios.create({
    baseURL: 'https://api.jampad.ml/api/',
    withCredentials: true
})

// Interceptors
instance.interceptors.request.use((config) => {
    config.headers!.Authurization = `Bearer ${localStorage.getItem('token')}`
    return config
})


// TYPES
export type RequestLoginType = {
    email: string
    password: string
}

export type ResponseLoginType = {
    token: string
    error: string
}

export type ResponseErrorsType = [
    { error: string },
    { email: string },
    { password: string }
]


export const authAPI = {
    login: (email: string, password: string) => instance
        .post<RequestLoginType, AxiosResponse<ResponseLoginType>>
        ('hrs/login', {email, password})


}

// https://api.jampad.ml/api/statistics/leaderboard
// https://api.jampad.ml/api/hrs/login
