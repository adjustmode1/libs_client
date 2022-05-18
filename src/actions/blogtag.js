import * as actions from '../constants/blogtag';

// {
//     index: vị trí trang,
//     total_item: số lượng phần tử,
//     max_size: số lượng phần tử hiện ra
//     data: [] phần tử hiện có
// }

export const InitBlogTag = (blogtag)=>{
    return{
        type:actions.InitBlogTag,
        data:blogtag
    }
}