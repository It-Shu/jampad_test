import {Dispatch} from "redux"
import {authAPI, RequestErrorsType, RequestLoginType, ResponseLoginType} from "../../api/auth-api";
import { AppDispatch } from "../store";


enum AUTH_ACTIONS_TYPES {
    IS_LOGGED_IN = 'AUTH/IS_LOGGED_IN',
    SET_LOGIN_ERROR = "AUTH/SET_LOGIN_ERROR",
    IS_LOADING = 'AUTH/IS_LOADING',
    IS_TOKEN = 'AUTH/IS_TOKEN',
}

type AuthActionType =
    | ReturnType<typeof isToken>
    | ReturnType<typeof loginError>
    | ReturnType<typeof isLoading>
    | ReturnType<typeof isLoggedIn>

export type AuthInitialState = {
    getToken: string
    isError: RequestErrorsType | null
    status: boolean
    loading: boolean
}

const InitialState: AuthInitialState = {
    getToken: '',
    isError: null,
    status: false,
    loading: false
}


export const authReducer = (state = InitialState, action: AuthActionType): AuthInitialState => {
    switch (action.type) {

        case AUTH_ACTIONS_TYPES.IS_LOGGED_IN:
            return {...state, status: action.payload.status}

        case AUTH_ACTIONS_TYPES.IS_LOADING:
            return {...state, loading: action.payload.loading}

        case AUTH_ACTIONS_TYPES.IS_TOKEN:
            return {...state, getToken: action.payload.token}

        case AUTH_ACTIONS_TYPES.SET_LOGIN_ERROR:
            return {...state, isError: action.payload.errors}

        default:
            return state
    }
}


// ACTIONS

// Check if auth
export const isLoggedIn = (status: boolean) => ({
    type: AUTH_ACTIONS_TYPES.IS_LOGGED_IN,
    payload: {status}
} as const)

// Get token
export const isToken = (token: string) => ({
    type: AUTH_ACTIONS_TYPES.IS_TOKEN,
    payload: {token}
} as const)

// Errors

export const loginError = (errors: RequestErrorsType | null) => ({ // Types for error : email and password !!!!!!
    type: AUTH_ACTIONS_TYPES.SET_LOGIN_ERROR,
    payload: {errors}
} as const)


// Loading before auth
const isLoading = (loading: boolean) => ({
    type: AUTH_ACTIONS_TYPES.IS_LOADING,
    payload: {loading}
} as const)

//     hr@gmail.com     12345678qQ    //

//THUNKS

// export const setLogin = (email: string, password: string) => (dispatch: Dispatch) => {
//
//         dispatch(isLoading(true)) // loading before auth
//         authAPI.Login(email, password) // request
//             .then((res) => {
//                 let newToken = dispatch(isToken(res.data.token)) // get token
//                 console.log(newToken)
//                 dispatch(isLoggedIn(true)) // login success
//             })
//             .catch((e) => {
//                 dispatch(loginError(e.errors))
//             })
//             .finally(() => {
//                 dispatch(isLoading(false))
//             })
// }

export const setLogin = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(isLoading(true)) // loading before auth
        const response = await authAPI.Login(email, password) // request
        dispatch(isToken(response.data.token))
        dispatch(isLoggedIn(true))
    } catch (e: any) {
        loginError(e.errors)
    } finally {
        dispatch(isLoading(false))
    }
}
