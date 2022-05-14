import * as action from '../constants/subject';

let init = [
    {
        id_subject:'',
        title_subject:''
    }
]
if(localStorage.getItem('subject_libs')){
    init = JSON.parse(localStorage.getItem('libs_subject'))
}

const subject = (state=init,actions)=>{
    let newstate = [...state];
    switch (actions.type) {
        case action.InitSubject:
            newstate= [...actions.data]
            localStorage.setItem('subject_libs',JSON.stringify(newstate))
            return state;
        default:
            return state;
    }
}

export default subject;