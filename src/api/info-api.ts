import { AxiosResponse } from "axios";
import {instance} from "./instance";


export type UserInfo = {
    email: string,
    first_name: string,
    last_name: string,
    error?: UserInfoError
}


type UserInfoError = {
    detail: string
}

export const infoApi = {
    vacancyInfo: () => instance
        .get<UserInfo, AxiosResponse<UserInfo>>('hrs')
}
