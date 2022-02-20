import {AxiosResponse} from "axios"
import {instance} from "./instance";


// TYPES
export type RequestLoginType = {
    email: string
    password: string
}

export type ResponseLoginType = {
    token: string
    error: string
}


export const authAPI = {
    login: (email: string, password: string) => instance
        .post<RequestLoginType, AxiosResponse<ResponseLoginType>>
        ('hrs/login', {email, password})


}

// https://api.jampad.ml/api/statistics/leaderboard
// https://api.jampad.ml/api/hrs/login
