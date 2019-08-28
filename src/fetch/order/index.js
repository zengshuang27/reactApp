import { gethttp } from "../http/get"

export function getOrderList(userName){
    return gethttp(`/api/cart?userName=${userName}`)
}