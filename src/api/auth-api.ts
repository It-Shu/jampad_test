import axios, {AxiosResponse} from "axios"


export const instance = axios.create({
    baseURL: 'https://api.jampad.ml/api',
    withCredentials: true
})


// TYPES
export type RequestLoginType = {
    email: string
    password: string
}

export type ResponseLoginType = {
   token: string
}

export type RequestErrorsType = {
    email: string
    password: string
}


export const authAPI = {
    Login: (email: string, password: string) => instance
        .post<RequestLoginType, AxiosResponse<ResponseLoginType, RequestErrorsType>>
        ('/hrs/login', {email, password})
}

// https://api.jampad.ml/api/ui/#/statistics/leaderboard
// https://api.jampad.ml/api/hrs/login
