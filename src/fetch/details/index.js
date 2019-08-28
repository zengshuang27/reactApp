import { gethttp } from "../http/get"

export function getDetails(id){
    return gethttp(`/api/details?id=${id}`)
}

export function getComments(id){
    return gethttp(`/api/comments?id=${id}`)
}