import { gethttp } from "../http/get"

export function getSearchList(cityName,page,keyword){
    return gethttp(`/api/search?cityName=${cityName}&page=${page}&keyword=${keyword}`)
}