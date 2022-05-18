import * as fieldActions from '../constants/field';
let initField = [{
    id_field:'',
    name_field:''
}]

if(localStorage.getItem('field_libs')){
    initField = JSON.parse(localStorage.getItem('field_libs'));
}

const field = (state=initField,actions)=>{
    switch (actions.type) {
        case fieldActions.initField:
            let newstate = [...actions.field];
            localStorage.setItem('field_libs',JSON.stringify(newstate));
            return newstate;
        default:
            return state;
    }
}

export default field; 