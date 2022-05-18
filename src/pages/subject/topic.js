import React from 'react'
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
const Topic = (props) => {

  return (
        <div className="subject__body subject--block">
            <div className="subject__body--topic">
                <div className="subject_body__topic--header">
                    <p>{props.title_topic}</p>
                    <div>
                        <Link to="#" style={{'color':'green'}}>Ẩn</Link>{' '}
                        <Link to="#" style={{'color':'red'}}>Xóa</Link>{' '}
                        <Link to="#">Cập Nhật</Link>
                    </div>
                </div>
                
                <div className="subject_body__topic--body">
                    {parse(props.topic_content)}
                </div>
                <div className="subject_body__topic--linker">
                    đây là các file tài liệu đính kèm
                </div>
            </div>
        </div> 
  )
}

export default Topic;