import {Dispatch} from "redux"
import {authAPI} from "../../api/auth-api";


enum AUTH_ACTIONS_TYPES {
    IS_LOGGED_IN = 'AUTH/IS_LOGGED_IN',
    SET_LOGIN_ERROR = "AUTH/SET_LOGIN_ERROR",
    IS_LOADING = 'AUTH/IS_LOADING',
    IS_TOKEN = 'AUTH/IS_TOKEN',
    EMAIL_ERROR = 'AUTH/EMAIL_ERROR',
    PASSWORD_ERROR = 'AUTH/PASSWORD_ERROR',
}

type AuthActionType =
    | ReturnType<typeof isToken>
    | ReturnType<typeof loginError>
    | ReturnType<typeof isLoading>
    | ReturnType<typeof isLoggedIn>
    | ReturnType<typeof emailError>
    | ReturnType<typeof passwordError>

export type AuthInitialState = {
    getToken: string
    isError: string
    emailError: string
    passwordError: string
    status: boolean
    loading: boolean
}

const InitialState: AuthInitialState = {
    getToken: '',
    isError: '',
    emailError: '',
    passwordError: '',
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
            return {...state, isError: action.payload.error}

        case AUTH_ACTIONS_TYPES.EMAIL_ERROR:
            return {...state, emailError: action.payload.emailError}

        case AUTH_ACTIONS_TYPES.PASSWORD_ERROR:
            return {...state, passwordError: action.payload.passwordError}

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

export const loginError = (error: string) => ({ // Types for error : email and password !!!!!!
    type: AUTH_ACTIONS_TYPES.SET_LOGIN_ERROR,
    payload: {error}
} as const)

export const emailError = (emailError: string) => ({ // Types for error : email and password !!!!!!
    type: AUTH_ACTIONS_TYPES.EMAIL_ERROR,
    payload: {emailError}
} as const)

export const passwordError = (passwordError: string) => ({ // Types for error : email and password !!!!!!
    type: AUTH_ACTIONS_TYPES.PASSWORD_ERROR,
    payload: {passwordError}
} as const)


// Loading before auth
export const isLoading = (loading: boolean) => ({
    type: AUTH_ACTIONS_TYPES.IS_LOADING,
    payload: {loading}
} as const)

//     hr@gmail.com     12345678qQ    //

//THUNKS
export const setLogin = (email: string, password: string) => {
    return (dispatch: Dispatch) => {
        // dispatch(isLoading(true)) // loading before auth
        authAPI.login(email, password) // request
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                console.log(res.data.token)
                dispatch(isLoggedIn(true)) // login success
            })
            .catch((e) => {
                dispatch(emailError(e.response.data.email))
                dispatch(passwordError(e.response.data.password))
                dispatch(loginError(e.response.data.error))
                // console.log(e.response.data.email)
                // console.log(e.response.data.password)
                // console.log(e.response.data.error)

            })
            .finally(() => {
                // dispatch(isLoading(false))
            })
    }

}
