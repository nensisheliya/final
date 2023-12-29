import { LOGIN, LOGOUT, SIGNOUT } from "../ActionType"

let initialState = {
    userdata: {},
    isLogin: false,
}

export const User = (state = initialState, action) => {
console.log(action)

    switch (action.type) {
        // case SIGNOUT:
        //     return {
        //         ...state,
        //         userdata: payload,
        //         isLogin: true,
        //     }
        // case LOGIN:
        //     return {
        //         ...state,
        //         userdata: payload,
        //         isLogin: true,
        //     }
        // case LOGOUT:
        //     return {
        //         ...state,
        //         userdata: payload,
        //         isLogin: false,
        //     }

        default:
            return state
    }
}