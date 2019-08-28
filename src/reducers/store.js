import * as actionTypes from "../constants/store"

const initialState = []

export default function store( state = initialState , action ){
    switch(action.type){
        case actionTypes.ADD_STORE:
            //unshift()在头部添加,修改原数组，返回新数组的长度，
            state.unshift(action.data);
            return state;
        case actionTypes.UPDATE_STORE:
            return state = action.data;
        case actionTypes.CANCLE_STORE:
            return state.filter(item=>{
                //filter()过滤遍历，返回一个新的数组，当要删除的数据存在时则被过滤掉，其余的数据全都返回
                if(item.id !== action.data.id ){
                    return item;
                }
            })
        default:
            return state;
    }
}