import {AxiosResponse} from "axios"
import {instance} from "./instance";


// TYPES
export type RequestLoginType = {
    email: string
    password: string
}

export type ResponseLoginType = {
    token: string
    error?: ResponseErrorsType
}

export type ResponseErrorsType = {

    detail: string
    error: string
    email: string
    password: string

}




export const authAPI = {
    login: (email: string, password: string) => instance
        .post<RequestLoginType, AxiosResponse<ResponseLoginType>>
        ('hrs/login', {email, password})


}

