import React from 'react'

const Showsubject = () => {
  return (
        <div className="subject__body subject--block">
            <div className="subject__body--topic">
                <div className="subject_body__topic--header">
                    <p>Đây là chủ đề 1</p>
                    <a href="#">Lưu</a>
                </div>
                
                <div className="subject_body__topic--body">
                    đây là mô tả nội dung
                </div>
                <div className="subject_body__topic--linker">
                    đây là các file tài liệu đính kèm
                </div>
            </div>
            <div className="subject__body--topic">
                <div className="subject_body__topic--header">
                    Đây là chủ đề 12
                </div>
                <div className="subject_body__topic--body">
                    đây là mô tả nội dung
                </div>
                <div className="subject_body__topic--linker">
                    đây là các file tài liệu đính kèm
                </div>
            </div>
        </div> 
  )
}

export default Showsubject