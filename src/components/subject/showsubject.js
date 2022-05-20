import React, { useState } from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const ShowSubject = () => {
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
        label: 'Chủ',
        field: 'auth',
        width: 270,
      },
      {
        label: 'Control',
        field: 'control',
        width: 270,
      },
    ],
    rows: [
      {
        ID: 'CT103',
        name: 'Cấu Trúc Dữ Liệu',
        auth: 'Lê Văn A',
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
        ID: 'CT112',
        name: 'Mạng Máy Tính',
        auth: 'Lê Văn A',
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
        ID: 'CT172',
        name: 'Cấu Trúc Dữ Liệu',
        auth: 'Lê Văn B',
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
        ID: 'CT173',
        name: 'Kiến Trúc Máy Tính',
        auth: 'Lê Văn B',
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
        ID: 'CT176',
        name: 'Lập Trình Hướng Đối Tượng',
        auth: 'Lê Văn B',
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
        ID: 'CT180',
        name: 'Cơ Sở Dữ Liệu',
        auth: 'Lê Văn A',
        control: <div>
                    <Button variant='danger' onClick={()=>{
                        deleteRow('123')
                    }}><i className="fa-solid fa-trash-can"></i></Button>
                    
                    <Button variant='info' onClick={()=>{
                        update('B1809222')
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
    nav('/admin/subject/edit/CT103');
  }
  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false}  />;
}

export default ShowSubject;