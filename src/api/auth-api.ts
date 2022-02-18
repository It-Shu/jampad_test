import axios, {AxiosResponse} from "axios"


export const instance = axios.create({
    baseURL: 'https://api.jampad.ml/api/ui/#/',
    withCredentials: true
})

export type LoginData = {
    email: string,
    password: string,
}

export type LoginInfoResponse = {
    token: string
}

export type ErrorResponse = {
    email: string
    password: string
}

type UpdateUserResponse = {
    updatedUser: LoginInfoResponse
    error?: ErrorResponse
}

type AuthResponseType = {
    email: string
    first_name: string
    last_name: string
}

type AuthResponseError = {
    detail: string
}

export type AuthResponse = {
    isAuth: AuthResponseType
    error?: AuthResponseError
}



export const authAPI = {

    Auth: (payload?: AuthResponse) => instance
        .get<AuthResponse>('hrs', {params: payload}),

    login: (payload: LoginData) => instance
        .post<LoginData, AxiosResponse<UpdateUserResponse>>(`hrs/login`, payload),

}

export const statisticAPI = {
    LeaderBoard: () => instance
        .get('statistics/leaderboard')
}

// https://api.jampad.ml/api/ui/#/statistics/leaderboard
