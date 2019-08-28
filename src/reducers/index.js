import { combineReducers } from "redux"
import city from "./city"
import userinfo from "./userinfo"
import store from "./store"

const rootReducer = combineReducers({
    city,
    userinfo,
    store
})

export default rootReducer