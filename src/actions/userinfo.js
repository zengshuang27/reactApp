import * as actionTypes from "../constants/userinfo"

export function login(data){
    return{
        type: actionTypes.LOGIN,
        data
    }
}