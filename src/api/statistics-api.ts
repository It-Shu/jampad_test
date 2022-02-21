import {AxiosResponse} from "axios";
import {instance} from "./instance";


export type LeaderboardDataType = {
    first_name: string,
    last_name: string,
    success_rate: number,
}


type StatisticsError = {
    detail: string
}


export const statisticsApi = {
    leaderboard: () => instance
        .get<LeaderboardDataType[]>('statistics/leaderboard')
}
