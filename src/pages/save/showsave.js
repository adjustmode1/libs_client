import React, { useState } from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import { Badge, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Tag from '../private/tag';
const ShowSave = () => {
  const nav = useNavigate();
const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Tên',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Ngày Tạo',
        field: 'createat',
        width: 270,
      },
      {
        label: 'Thể Loại',
        field: 'field',
        width: 270,
      },
      {
        label: 'doc',
        field: 'link',
        width: 200,
      },
      {
        label: 'control',
        field: 'control',
        width: 200,
      }
    ],
    rows: [
      {
        name: 'Báo Khoa Học 1',
        status: <Badge className="text-white" variant="success">Hiện</Badge>,
        createat: '25-03-2017',
        field:<Tag arr={['Machine Learning','Computer Science','Khoa Học Máy Tính']}/>,
        link: <Link to="#">bckh1.pdf</Link>,
        control: <div>
                    <Button variant='danger' onClick={()=>{
                        deleteRow('123')
                    }}><i className="fa-solid fa-trash-can"></i></Button>
                </div>,
      },
      {
        name: 'Trí Tuệ Nhân Tạo',
        status:<Badge className="text-white" variant="danger">Ẩn</Badge>,
        createat: '26-03-2018',
        field:<Tag arr={[]}/>,
        link: <Link to="#">bckh2.pdf</Link>,
        control: <div>
                    <Button variant='danger' onClick={()=>{
                        deleteRow('123')
                    }}><i className="fa-solid fa-trash-can"></i></Button>
                </div>,
      },
      {
        name: 'Báo Khoa Học 3',
        status: <Badge className="text-white" variant="success">Hiện</Badge>,
        createat: '25-06-2019',
        field:<Tag arr={['Trí Tuệ Nhân Tạo','Artificial intelligence']}/>,
        link: <Link to="#">bckh3.pdf</Link>,
        control: <div>
                    <Button variant='danger' onClick={()=>{
                        deleteRow('123')
                    }}><i className="fa-solid fa-trash-can"></i></Button>
                </div>,
      },
      {
        name: 'Báo Khoa Học 4',
        status: <Badge className="text-white" variant="success" color='white'>Hiện</Badge>,
        createat: '25-03-2020',
        field:<Tag arr={['Trí Tuệ Nhân Tạo','Artificial intelligence']}/>,
        link: <Link to="#">bckh4.pdf</Link>,
        control: <div>
                    <Button variant='danger' onClick={()=>{
                        deleteRow('123')
                    }}><i className="fa-solid fa-trash-can"></i></Button>
                </div>,
      },
    ],
  });
  const deleteRow = (id)=>{
    alert('xóa'+id)
  }
  const update = (id)=>{
    console.log('update','/admin/student/create/'+id)
    nav('/admin/student/edit/'+id);
  }
  return <>
        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false}  />;
  </>
}

export default ShowSave;