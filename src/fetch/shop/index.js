import { gethttp } from "../http/get"

export function getShopList(cityName,page){
    return gethttp(`/api/shop?cityName=${cityName}&page=${page}`)
}