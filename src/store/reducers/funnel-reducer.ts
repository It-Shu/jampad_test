import {Dispatch} from "redux"
import {statisticsApi} from "../../api/statistics-api";


enum FUNNEL_ACTIONS_TYPES {
    FUNNEL_PASSED = 'FUNNEL/FUNNEL_PASSED',
    FUNNEL_UNSUCCESSFUL = 'FUNNEL/FUNNEL_UNSUCCESSFUL',
    FUNNEL_OVERALL = 'FUNNEL/FUNNEL_OVERALL',
}


type FunnelActionType =
    | ReturnType<typeof funnelPassed>
    | ReturnType<typeof funnelUnsuccessful>
    | ReturnType<typeof funnelOverall>


export type FunnelInitialState = {
    passed: number | null
    unsuccessful: number | null
    overall: number | null
}

const InitialState: FunnelInitialState = {
    passed: null,
    unsuccessful: null,
    overall: null
}


export const funnelReducer = (state = InitialState, action: FunnelActionType): FunnelInitialState => {
    switch (action.type) {

        case FUNNEL_ACTIONS_TYPES.FUNNEL_PASSED:
            return {...state, passed: action.payload.passed}

        case FUNNEL_ACTIONS_TYPES.FUNNEL_UNSUCCESSFUL:
            return {...state, unsuccessful: action.payload.unsuccessful}

        case FUNNEL_ACTIONS_TYPES.FUNNEL_OVERALL:
            return {...state, overall: action.payload.overall}

        default:
            return state
    }
}


export const funnelPassed = (passed: number | null) => ({
    type: FUNNEL_ACTIONS_TYPES.FUNNEL_PASSED,
    payload: {passed}
} as const)

export const funnelUnsuccessful = (unsuccessful: number | null) => ({
    type: FUNNEL_ACTIONS_TYPES.FUNNEL_UNSUCCESSFUL,
    payload: {unsuccessful}
} as const)

export const funnelOverall = (overall: number | null) => ({
    type: FUNNEL_ACTIONS_TYPES.FUNNEL_OVERALL,
    payload: {overall}
} as const)


export const setFunnelData = () => {
    return (dispatch: Dispatch) => {
        statisticsApi.funnel()
            .then(res => {
                dispatch(funnelPassed(res.data.passed))
                dispatch(funnelUnsuccessful(res.data.unsuccessful))
                dispatch(funnelOverall(res.data.overall))
            })
            .catch(e => {

            })
            .finally(() => {

            })
    }
}
