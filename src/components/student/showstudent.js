import React, { useState } from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import './showstudent.scss';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const ShowsTudent = () => {
  const nav = useNavigate();
const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'ID',
        field: 'ID',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
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
        label: 'Giới Tính',
        field: 'gender',
        width: 270,
      },
      {
        label: 'Địa Chỉ',
        field: 'address',
        width: 200,
      },
      {
        label: 'Gmail',
        field: 'gmail',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Số điện thoại',
        field: 'phone',
        width: 150,
      },
      {
        label: 'Ngày Sinh',
        field: 'birthday',
        width: 150,
      },
      {
        label: 'Khóa',
        field: 'coure',
        width: 100,
      },
      {
        label: 'Control',
        field: 'control',
        width: 100,
      },
    ],
    rows: [
      {
        ID: 'B1809222',
        name: 'Nguyễn Văn A',
        gender: 'Nam',
        address: '',
        gmail: 'gmail1@gmail.com',
        phone:'0123578215',
        coure: '44',
        control: <div>
                    <Button variant='danger' onClick={()=>{
                        deleteRow('123')
                    }}><i className="fa-solid fa-trash-can"></i></Button>
                    
                    <Button variant='info' onClick={()=>{
                        update('B1809222')
                    }}><i className="fa-solid fa-pen"></i></Button>
                </div>,
      },
      {
        ID: 'B1809223',
        name: 'Nguyễn Văn B',
        gender: 'Nam',
        address: 'Trà Vinh',
        gmail: 'gmail2@gmail.com',
        phone:'0123874585',
        coure: '44',
        control: <div>
                    <Button variant='danger' onClick={()=>{
                        deleteRow('123')
                    }}><i className="fa-solid fa-trash-can"></i></Button>
                    
                    <Button variant='info' onClick={()=>{
                        update('B1809222')
                    }}><i className="fa-solid fa-pen"></i></Button>
                </div>,
      },
      {
        ID: 'B1809224',
        name: 'Nguyễn Văn C',
        gender: 'Nam',
        address: 'Hậu Giang',
        gmail: 'gmail3@gmail.com',
        phone:'0123875185',
        coure: '44',
        control: <div>
                    <Button variant='danger' onClick={()=>{
                        deleteRow('123')
                    }}><i className="fa-solid fa-trash-can"></i></Button>
                    
                    <Button variant='info' onClick={()=>{
                        update('123')
                    }}><i className="fa-solid fa-pen"></i></Button>
                </div>,
      },
      {
        ID: 'B1809225',
        name: 'Trịnh Thị Vy',
        gender: 'Nữ',
        address: 'Bạc Liêu',
        gmail: 'gmail4@gmail.com',
        phone:'0123785585',
        coure: '43',
        control: <div>
                    <Button variant='danger' onClick={()=>{
                        deleteRow('123')
                    }}><i className="fa-solid fa-trash-can"></i></Button>
                    
                    <Button variant='info' onClick={()=>{
                        update('123')
                    }}><i className="fa-solid fa-pen"></i></Button>
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
  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false}  />;
}

export default ShowsTudent