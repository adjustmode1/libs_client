import * as types from '../constants/login';
let init = false;
if(localStorage.getItem('islogin')){
    init = JSON.parse(localStorage.getItem('islogin'))
}else{
    init = false;
}

const islogin = (state=init,actions)=>{
    switch(actions.type){
        case types.signin:
            localStorage.setItem('islogin',true)
            return true;
        case types.signout:
            localStorage.setItem('islogin',false)
            return false;
        default:
            return state;
    }
}

export default islogin;