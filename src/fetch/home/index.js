import { gethttp } from "../http/get"

export function getHomeHot(cityName){
    return gethttp(`/api/homehot?cityName=${cityName}`)
}

export function getHomeHot2(cityName){
    return gethttp(`/api/homehot2?cityName=${cityName}`)
}