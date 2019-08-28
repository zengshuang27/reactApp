import qs from "qs"

export function posthttp(url,params){
    return fetch(url,{
        method:"post",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:qs.stringify(params)
    })
}