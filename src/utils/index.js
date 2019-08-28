import * as key from "./key"

//设置本地存储的值
export function setCityDefaultName(cityName){
    localStorage.setItem(key.LOCALE_CITY,encodeURIComponent(cityName))
}
//获取本地存储的值
export function getCityDefaultName(){
    const value = localStorage.getItem(key.LOCALE_CITY);
    if(value){
        return decodeURIComponent(value);
    }
    return value;
}
//清除本地存储的值
export function clearDefault(){
    localStorage.clear()
}