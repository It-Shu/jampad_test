import { instance } from "./auth-api";


export type UserInfo = [
  email: string,
  first_name: string,
  last_name: string
]



export const infoApi = {
  vacancyInfo: () => instance
      .get<UserInfo>('hrs')
}
