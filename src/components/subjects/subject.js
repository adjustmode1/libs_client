import React from 'react'

const Subject = () => {
  return (
    <>
        <div class="subject__header subject--block">
        <p>Lý Thuyết Đồ Thị </p>
        </div>
        <div class="subject__body subject--block">
            <div class="subject__body--subject-temp subject_body__topic">
                <div class="subject__body--topic">
                    <div class="subject_body__topic--header">
                        <input type="text" name="" id="" placeholder="nhập tên chủ đề"/>
                    </div>
                    
                    <div class="subject_body__topic--body">
                        Nhập Nội Dung
                        <textarea name="content_topic_1" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="subject_body__topic--linker">
                        <input type="file" draggable="" multiple name="" id=""/>
                    </div>
                </div>
            </div>
            <div class="subject__body--plus">
                <i class="fa-solid fa-circle-plus"></i>
            </div>
        </div>
    </>
  )
}

export default Subject