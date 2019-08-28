import * as actionTypes from "../constants/city"

const initialState = {}

export default function city( state = initialState , action ){
    switch(action.type){
        case actionTypes.UPDATE_CITY:
            return state = action.data;
        default:
            return state;
    }
}