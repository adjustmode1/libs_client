import * as types from './../constants/login';

export const signin = ()=>{
    return{
        type:types.signin
    }
}

export const signout = ()=>{
    return{
        type:types.signout
    }
}
