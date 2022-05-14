import * as types from './../constants/nav';

let init = false;
if(localStorage.getItem('nav')){
    init = JSON.parse(localStorage.getItem('nav'))
}else{
    localStorage.setItem('nav',false)
}


const nav = (state=init,actions) =>{
    switch(actions.type){
        case types.CHANGE:
            localStorage.setItem('nav',!state)
            return !state;
        default:
            return state;
    }
}

export default nav;