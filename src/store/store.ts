import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk, {ThunkAction} from 'redux-thunk'
import {authReducer} from "./reducers/auth-reducer";
import {userInfoReducer} from "./reducers/userInfo-reducer";
import {statisticReducer} from "./reducers/statistics-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userInfoReducer,
    statistic: statisticReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
// export type AppDispatch = typeof store.dispatch
// export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, any>

// @ts-ignore
window.store = store
