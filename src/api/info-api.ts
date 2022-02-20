import { AxiosResponse } from "axios";
import {instance} from "./auth-api";


export type UserInfo = {
    email: string,
    first_name: string,
    last_name: string,
    error: UserInfoError
}


type UserInfoError = {
    detail: string
}
const token = localStorage.getItem('token')

export const infoApi = {
    vacancyInfo: () => instance
        .get<UserInfo, AxiosResponse<UserInfo>>('hrs')
}
