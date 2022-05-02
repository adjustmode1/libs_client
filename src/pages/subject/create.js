import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Create = () => {
  return (
    <>
        <div className="subject__body subject--block">
            <div className="subject__body--subject-temp subject_body__topic">
                <div className="subject__body--topic">
                    <div className="subject_body__topic--header">
                        <input type="text" name="" id="" placeholder="nhập tên chủ đề"/>
                    </div>
                    
                    <div className="subject_body__topic--body">
                        Nhập Nội Dung
                        <CKEditor
                            editor={ClassicEditor}
                        />
                    </div>
                    <div className="subject_body__topic--linker">
                        <input type="file" draggable="" multiple name="" id=""/>
                    </div>
                </div>
            </div>
            <div className="subject__body--plus">
                <i className="fa-solid fa-circle-plus"></i>
            </div>
        </div>
    </>
  )
}

export default Create