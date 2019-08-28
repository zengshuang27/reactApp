import * as actionTypes from "../constants/store"

//增加收藏
export function add(item){
    return{
        type: actionTypes.ADD_STORE,
        data:item
    }
}

//修改收藏
export function update(data){
    return{
        type: actionTypes.UPDATE_STORE,
        data
    }
}

//取消收藏
export function del(item){
    return{
        type: actionTypes.CANCLE_STORE,
        data: item
    }
}