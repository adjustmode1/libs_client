import React, { useState } from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const ShowField = () => {
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
        label: 'Control',
        field: 'control',
        width: 270,
      },
    ],
    rows: [
      {
        ID: '1',
        name: 'Cấu Trúc Dữ Liệu',
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
        ID: '2',
        name: 'Mạng Máy Tính',
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
        ID: '3',
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
        ID: '4',
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
        ID: '5',
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
        ID: '6',
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
    nav('/admin/fields/edit/CT103');
  }
  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false}  />;
}

export default ShowField;