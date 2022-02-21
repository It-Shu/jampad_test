import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {authReducer} from "./reducers/auth-reducer";
import {userInfoReducer} from "./reducers/userInfo-reducer";
import {leaderboardReducer} from "./reducers/leaderboard-reducer";
import {funnelReducer} from "./reducers/funnel-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    user: userInfoReducer,
    leader: leaderboardReducer,
    funnel: funnelReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
