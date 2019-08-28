export function gethttp(url){
    return fetch(url,{
        method:"get",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}