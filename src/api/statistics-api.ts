import {instance} from "./instance";
import {AxiosResponse} from "axios";


export type LeaderboardDataType = {
    first_name: string,
    last_name: string,
    success_rate: number,
}

export type FunnelType = {
    passed: number | null
    unsuccessful: number | null
    overall: number | null
}


export const statisticsApi = {
    leaderboard: () => instance
        .get<LeaderboardDataType[], AxiosResponse<LeaderboardDataType[]>>('statistics/leaderboard'),

    funnel: () => instance
        .get<FunnelType, AxiosResponse<FunnelType>>('statistics/funnel')
}
