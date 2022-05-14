import * as action from '../constants/blogtag';

let initblog = {
    total_page:1,
    index:1,
    max_size:9,
    data:[]
}
if(localStorage.getItem('blogtag_libs')){
    initblog = JSON.parse(localStorage.getItem('blogtag_libs'))
}
const blogtag = (state=initblog,actions)=>{
    let newstate = {...state}
    switch (actions.type) {
        case action.InitBlogTag:
            newstate.total_item = actions.data.total_item;
            newstate.total_page = Math.ceil(newstate.total_item/newstate.max_size)
            newstate.index = actions.data.index;
            newstate.data = [...actions.data.data];
            localStorage.setItem('blogtag_libs',JSON.stringify(newstate))
            return newstate;            
        default:
            return state;
    }
}

export default blogtag;