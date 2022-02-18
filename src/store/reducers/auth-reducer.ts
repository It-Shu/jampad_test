import {Dispatch} from "redux"
import {authAPI, LoginData} from "../../api/auth-api";
import {AppDispatch, RootState, ThunkType} from "../store";


enum AUTH_ACTIONS_TYPES {
    IS_LOGGED_IN = 'AUTH/IS_LOGGED_IN',
    SET_LOGIN_ERROR = "AUTH/SET_LOGIN_ERROR"
}

type AuthActionType =
    | ReturnType<typeof isAuth>
    | ReturnType<typeof loginError>

export type AuthInitialState = {
    isLogin: string
    isError: string
}

const InitialState: AuthInitialState = {
    isLogin: '',
    isError: '',
}


export const authReducer = (state = InitialState, action: AuthActionType): AuthInitialState => {
    switch (action.type) {

        case AUTH_ACTIONS_TYPES.IS_LOGGED_IN:
            return {...state, isLogin: action.payload.token}

        case AUTH_ACTIONS_TYPES.SET_LOGIN_ERROR:
            return {...state, isError: action.payload.error}

        default:
            return state
    }
}


export const isAuth = (token: string) => ({
    type: AUTH_ACTIONS_TYPES.IS_LOGGED_IN,
    payload: {token}
} as const)

export const loginError = (error: string) => ({
    type: AUTH_ACTIONS_TYPES.SET_LOGIN_ERROR,
    payload: {error}
} as const)


// export const login = (payload: LoginData) => async (dispatch: AppDispatch) => {
//     try {
//         const response = await authAPI.login(payload)
//         dispatch(isAuth(response.data.updatedUser.token))
//     } catch (e) {
//         errorsHandler(e, dispatch)
//     } finally {
//
//     }
// }

//
// export const errorsHandler = (error: any, dispatch: AppDispatch) => {
//     dispatch(loginError(error.response ? error.response.data.error : error))
// }

export const  setLogin = (payload: LoginData) => {
    return (dispatch: Dispatch,  getState: () => RootState) => {
       authAPI.login(payload)
        .then((res) => {
            dispatch(isAuth(res.data.updatedUser.token))
        })
    }

}
