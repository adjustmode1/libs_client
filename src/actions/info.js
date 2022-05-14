import * as types from "../constants/info";

export const setInfoInit = (info)=>{
    return{
        type:types.setInfoInit,
        data:info
    }
}   