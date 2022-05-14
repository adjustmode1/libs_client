import * as types from '../constants/info';
let infoInit = {};
if(localStorage.getItem('info_libs')){
    infoInit = JSON.parse(localStorage.getItem('info_libs'));
}

const info = (state=infoInit,actions)=>{
    switch (actions.type) {
        case types.setInfoInit:
            let newstate = {...actions.data};
            localStorage.setItem('info_libs',JSON.stringify(newstate))
            return newstate;
        default:
            return state;
    }
}

export default info;

