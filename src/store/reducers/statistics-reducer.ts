import {Dispatch} from "redux"
import {LeaderboardDataType, statisticsApi} from "../../api/statistics-api";


enum STATISTIC_ACTIONS_TYPES {
    LEADERBOARD_DATA = 'STATISTIC/LEADERBOARD_DATA',
    STATISTIC_ERROR = 'STATISTIC/STATISTIC_ERROR',


}

type StatisticActionType =
    | ReturnType<typeof leaderboardData>
    | ReturnType<typeof statisticError>


// export type StatisticInitialState = {
//     leaderboardData: LeaderboardDataType | []
//     statisticError: LeaderboardDataType | string
// }

// const InitialState: StatisticInitialState = {
//     leaderboardData: [],
//     statisticError: ''
// }

export type StatisticInitialState = LeaderboardDataType

const InitialState: Array<StatisticInitialState> = []


export const statisticReducer = (state = InitialState, action: StatisticActionType): Array<StatisticInitialState> => {
    switch (action.type) {

        case STATISTIC_ACTIONS_TYPES.LEADERBOARD_DATA:
            return action.payload.leaderboardData.map(leader => ({...leader}))
        //
        // case STATISTIC_ACTIONS_TYPES.STATISTIC_ERROR:
        //     return {...state, statisticError: action.payload.error}

        default:
            return state
    }
}


export const leaderboardData = (leaderboardData: Array<any>) => ({
    type: STATISTIC_ACTIONS_TYPES.LEADERBOARD_DATA,
    payload: {leaderboardData}
} as const)

export const statisticError = (error: LeaderboardDataType | string) => ({
    type: STATISTIC_ACTIONS_TYPES.STATISTIC_ERROR,
    payload: {error}
} as const)


export const setStatisticInfo = () => {
    return (dispatch: Dispatch) => {
        statisticsApi.leaderboard()
            .then((res) => {
                dispatch(leaderboardData(res.data))
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {

            })

    }
}
