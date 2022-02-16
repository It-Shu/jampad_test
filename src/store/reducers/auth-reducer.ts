


enum AUTH_ACTIONS_TYPES {
    IS_LOGGED_IN = 'AUTH/IS_LOGGED_IN'
}

type AuthActionType =
    ReturnType<typeof isLoggedIn>

type AuthInitialState = {
    isLogin: boolean
}

const InitialState: AuthInitialState = {
    isLogin: false
}



export const authReducer = (state = InitialState, action: AuthActionType) :AuthInitialState => {
switch (action.type) {
    case AUTH_ACTIONS_TYPES.IS_LOGGED_IN: {
        return {...state, isLogin: action.payload.status}
    }
}
}


export const isLoggedIn = (status: boolean) => ({
    type: AUTH_ACTIONS_TYPES.IS_LOGGED_IN,
    payload: {status}
} as const)


// export const login = (loginData: LoginData) => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(setAppIsLoading(true))
//         const response = await authAPI.login(loginData)
//         dispatch(setUsersInfo(response.data))
//         dispatch(setIsLoggedIn(true))
//         dispatch(setAppInfo(`Successful login, ${response.data.name}`))
//     } catch (e) {
//         errorsHandler(e, dispatch)
//     } finally {
//         dispatch(setAppIsLoading(false))
//     }
// }
