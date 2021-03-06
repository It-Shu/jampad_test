import {Dispatch} from "redux"
import {infoApi} from "../../api/info-api";

enum INFO_ACTIONS_TYPES {
    USER_EMAIL = 'INFO/USER_EMAIL',
    USER_FIRST_NAME = 'INFO/USER_FIRST_NAME',
    USER_LAST_NAME = 'INFO/USER_LAST_NAME',
    INFO_ERROR = 'INFO/INFO_ERROR',

}

type InfoActionType =
    | ReturnType<typeof userEmail>
    | ReturnType<typeof userFirstName>
    | ReturnType<typeof userLastName>
    | ReturnType<typeof infoError>


export type InfoInitialState = {
    email: string,
    first_name: string,
    last_name: string,
    detail: string
}

const InitialState: InfoInitialState = {
    email: '',
    first_name: '',
    last_name: '',
    detail: ''
}


export const userInfoReducer = (state = InitialState, action: InfoActionType): InfoInitialState => {
    switch (action.type) {

        case INFO_ACTIONS_TYPES.USER_EMAIL:
            return {...state, email: action.payload.email}

        case INFO_ACTIONS_TYPES.USER_FIRST_NAME:
            return {...state, first_name: action.payload.first_name}

        case INFO_ACTIONS_TYPES.USER_LAST_NAME:
            return {...state, last_name: action.payload.last_name}

        case INFO_ACTIONS_TYPES.INFO_ERROR:
            return {...state, detail: action.payload.infoError}

        default:
            return state
    }
}


export const userEmail = (email: string) => ({
    type: INFO_ACTIONS_TYPES.USER_EMAIL,
    payload: {email}
} as const)

export const userFirstName = (first_name: string) => ({
    type: INFO_ACTIONS_TYPES.USER_FIRST_NAME,
    payload: {first_name}
} as const)

export const userLastName = (last_name: string) => ({
    type: INFO_ACTIONS_TYPES.USER_LAST_NAME,
    payload: {last_name}
} as const)

export const infoError = (infoError: string) => ({
    type: INFO_ACTIONS_TYPES.INFO_ERROR,
    payload: {infoError}
} as const)


export const setUserInfo = () => {
    return (dispatch: Dispatch) => {
        infoApi.vacancyInfo()
            .then(res => {
                dispatch(userEmail(res.data.email))
                dispatch(userFirstName(res.data.first_name))
                dispatch(userLastName(res.data.last_name))
            })
            .catch(e => {
                dispatch(infoError(e.response.data.detail))
                console.log(e.response.data.detail)
            })
            .finally(() => {

            })
    }
}
