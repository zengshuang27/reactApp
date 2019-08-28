import * as actionTypes from "../constants/city"

export function updateCity(data){
    return{
        type: actionTypes.UPDATE_CITY,
        data
    }
}