import { LOGIN, LOGOUT, SIGNOUT, } from "./ActionType"

export const signout = (data) => {
    console.log(data);
    return {
        type: SIGNOUT,
        payload: data,
    }

}

export const Login = (data) => {
    return {
        type: LOGIN,
        payload: data,
    }
}


export const Logout = () => {
    return {
        type: LOGOUT,

    }
}
