import {Dispatch} from "redux"
import {UserInfo} from "../../api/info-api";

enum INFO_ACTIONS_TYPES {
    USER_EMAIL = 'INFO/USER_EMAIL',
    USER_FIRST_NAME = 'INFO/USER_FIRST_NAME',
    USER_LAST_NAME = 'INFO/USER_LAST_NAME',

}

type InfoActionType =
    | ReturnType<typeof userEmail>
    // | ReturnType<typeof userFirstName>
    // | ReturnType<typeof userLastName>


export type InfoInitialState = {
    userEmail: UserInfo | null
    userFirstName: string
    userLastName: string
}

const InitialState: InfoInitialState = {
    userEmail: null,
    userFirstName: '',
    userLastName: '',
}


export const userInfoReducer = (state = InitialState, action: InfoActionType): InfoInitialState => {
    switch (action.type) {

        case INFO_ACTIONS_TYPES.USER_EMAIL:
            return {...state, userEmail: [...action.payload.userInfo]}

        // case INFO_ACTIONS_TYPES.USER_FIRST_NAME:
        //     return {...state, userFirstName: action.payload.first_name}
        //
        // case INFO_ACTIONS_TYPES.USER_LAST_NAME:
        //     return {...state, userLastName: action.payload.last_name}

        default:
            return state
    }
}
// [...action.payload.values]


export const userEmail = (userInfo: UserInfo) => ({
    type: INFO_ACTIONS_TYPES.USER_EMAIL,
    payload: {userInfo}
} as const)

// export const userFirstName = (first_name: string) => ({
//     type: INFO_ACTIONS_TYPES.USER_FIRST_NAME,
//     payload: {first_name}
// } as const)
//
// export const userLastName = (last_name: string) => ({
//     type: INFO_ACTIONS_TYPES.USER_LAST_NAME,
//     payload: {last_name}
// } as const)



