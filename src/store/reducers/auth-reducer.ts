import {Dispatch} from "redux"
import {authAPI} from "../../api/auth-api";


enum AUTH_ACTIONS_TYPES {
    IS_LOGGED_IN = 'AUTH/IS_LOGGED_IN',
    SET_LOGIN_ERROR = "AUTH/SET_LOGIN_ERROR",
    EMAIL_ERROR = 'AUTH/EMAIL_ERROR',
    PASSWORD_ERROR = 'AUTH/PASSWORD_ERROR',
    DETAIL_ERROR = 'AUTH/DETAIL_ERROR',
}

type AuthActionType =
    | ReturnType<typeof loginError>
    | ReturnType<typeof isLoggedIn>
    | ReturnType<typeof emailErrors>
    | ReturnType<typeof passwordErrors>
    | ReturnType<typeof detailErrors>

export type AuthInitialState = {
    error: string
    detail: string
    email: string
    password: string
    status: boolean

}

const InitialState: AuthInitialState = {
    error: '',
    detail: '',
    email: '',
    password: '',
    status: false,

}


export const authReducer = (state = InitialState, action: AuthActionType): AuthInitialState => {
    switch (action.type) {

        case AUTH_ACTIONS_TYPES.IS_LOGGED_IN:
            return {...state, status: action.payload.status}

        case AUTH_ACTIONS_TYPES.SET_LOGIN_ERROR:
            return {...state, error: action.payload.error}

        case AUTH_ACTIONS_TYPES.EMAIL_ERROR:
            return {...state, email: action.payload.email}

        case AUTH_ACTIONS_TYPES.PASSWORD_ERROR:
            return {...state, password: action.payload.password}

        case AUTH_ACTIONS_TYPES.DETAIL_ERROR:
            return {...state, detail: action.payload.detail}

        default:
            return state
    }
}


// ACTIONS

export const isLoggedIn = (status: boolean) => ({
    type: AUTH_ACTIONS_TYPES.IS_LOGGED_IN,
    payload: {status}
} as const)


export const loginError = (error: string) => ({
    type: AUTH_ACTIONS_TYPES.SET_LOGIN_ERROR,
    payload: {error}
} as const)


export const emailErrors = (email: string) => ({
    type: AUTH_ACTIONS_TYPES.EMAIL_ERROR,
    payload: {email}
} as const)


export const passwordErrors = (password: string) => ({
    type: AUTH_ACTIONS_TYPES.PASSWORD_ERROR,
    payload: {password}
} as const)

export const detailErrors = (detail: string) => ({
    type: AUTH_ACTIONS_TYPES.DETAIL_ERROR,
    payload: {detail}
} as const)


//     hr@gmail.com     12345678qQ    //


export const setLogin = (email: string, password: string) => {
    return (dispatch: Dispatch) => {

        authAPI.login(email, password)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                dispatch(isLoggedIn(true))
            })
            .catch((e) => {
                dispatch(emailErrors(e.response.data.email))
                dispatch(passwordErrors(e.response.data.password))
                dispatch(loginError(e.response.data.error))
                dispatch(detailErrors(e.response.data.detail))
            })
            .finally(() => {

            })
    }

}
