import * as actions from '../constants/blogtag';

export const InitBlogTag = (blogtag)=>{
    return{
        type:actions.InitBlogTag,
        data:blogtag
    }
}