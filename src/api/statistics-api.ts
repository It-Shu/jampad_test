
import {AxiosResponse} from "axios";
import {instance} from "./instance";


export type LeaderboardDataType = [
    {
        first_name: string,
        last_name: string,
        success_rate: number,
        error?: StatisticsError,
    }
]


type StatisticsError = {
    detail: string
}


export const statisticsApi = {
    leaderboard: () => instance
        .get<LeaderboardDataType[], AxiosResponse<LeaderboardDataType[]>>('statistics/leaderboard')
}
