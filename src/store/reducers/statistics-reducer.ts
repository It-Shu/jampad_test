import {Dispatch} from "redux"
import {LeaderboardDataType} from "../../api/statistics-api";

enum STATISTIC_ACTIONS_TYPES {
    LEADERBOARD_DATA = 'STATISTIC/LEADERBOARD_DATA',
    STATISTIC_ERROR = 'STATISTIC/STATISTIC_ERROR',


}

type StatisticActionType =
    | ReturnType<typeof leaderboardData>
    | ReturnType<typeof statisticError>



export type StatisticInitialState = {
    leaderboardData: LeaderboardDataType[] | null
}

const InitialState: StatisticInitialState = {
    leaderboardData: null
}


export const statisticReducer = (state = InitialState, action: StatisticActionType): StatisticInitialState => {
    switch (action.type) {


        default:
            return state
    }
}


export const leaderboardData = (leaderboardData: LeaderboardDataType[]) => ({
    type: STATISTIC_ACTIONS_TYPES.LEADERBOARD_DATA,
    payload: {leaderboardData}
} as const)

export const statisticError = (error: LeaderboardDataType | null) => ({
    type: STATISTIC_ACTIONS_TYPES.STATISTIC_ERROR,
    payload: {error}
} as const)



export const setStatisticInfo = () => {
    return (dispatch: Dispatch) => {


    }
}
