import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { MultiSelect } from "react-multi-select-component";
const CreatePrivate = () => {
    const [value,setValue] = useState([])
    const [tag,setTag] = useState([{value:1,label:'AI'},{value:2,label:'Trí Tuệ Nhân Tạo'},{value:3,label:'Cấu Trúc Dữ Liệu'}]);
  return (
    <div>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tên Tài Liệu</Form.Label>
                <Form.Control type="file" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasictag" className='mt-2'>
                <Form.Label>Chủ Đề</Form.Label>
                <MultiSelect
                    options={tag}
                    value={value}
                    onChange={setValue}
                    labelledBy="Select"
                />
            </Form.Group>
            <Button variant="primary" className="mt-5" type="submit">
                Submit
            </Button>
        </Form>

    </div>
  )
}

export default CreatePrivate