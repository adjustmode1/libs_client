import * as actions from '../constants/subject';

export const InitSubject = (subjects)=>{
    return{
        type:actions.InitSubject,
        data:subjects
    }
}