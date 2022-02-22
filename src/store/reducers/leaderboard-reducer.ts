import {Dispatch} from "redux"
import {v1} from "uuid";
import {LeaderboardDataType, statisticsApi} from "../../api/statistics-api";


enum LEADERBOARD_ACTIONS_TYPES {
    LEADERBOARD_DATA = 'LEADERBOARD/LEADERBOARD_DATA',
}

type LeaderboardActionType =
    | ReturnType<typeof leaderboardData>


export type LeaderboardInitialState = LeaderboardDataType & { id: string }

const InitialState: Array<LeaderboardInitialState> = []


export const leaderboardReducer = (state = InitialState, action: LeaderboardActionType): Array<LeaderboardInitialState> => {
    switch (action.type) {

        case LEADERBOARD_ACTIONS_TYPES.LEADERBOARD_DATA:
            return action.payload.leaderboardData.map(leader => ({id: v1(), ...leader}))

        default:
            return state
    }
}


export const leaderboardData = (leaderboardData: Array<LeaderboardDataType>) => ({
    type: LEADERBOARD_ACTIONS_TYPES.LEADERBOARD_DATA,
    payload: {leaderboardData}
} as const)


export const setStatisticInfo = () => {
    return (dispatch: Dispatch) => {
        statisticsApi.leaderboard()
            .then((res) => {
                dispatch(leaderboardData(res.data))
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {

            })

    }
}
