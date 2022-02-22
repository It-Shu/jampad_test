import axios, {AxiosResponse} from "axios"



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
    login: (email: string, password: string) => axios
        .post<RequestLoginType, AxiosResponse<ResponseLoginType>>
        ('https://api.jampad.ml/api/hrs/login', {email, password})


}

