import { combineReducers, legacy_createStore } from "redux";
import { User } from "./Reducers/User";

let combine = combineReducers({
    user:User
})

export const store =legacy_createStore(combine,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())