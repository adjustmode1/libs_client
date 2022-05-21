import React, { useEffect, useState } from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import './showstudent.scss';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from '../../util/axios';
const ShowsTudent = () => {
  const nav = useNavigate();
  const [vari,setI] = useState('');
  const [datatable, setDatatable] = useState([]);
  const [column] = useState([{
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
  ]);
  useEffect(()=>{
    axios.get('/student/list')
    .then(res=>{
      let arr = [];
      res.data.forEach(elm => {
        let el = {};
        el.ID = elm.id_student
        el.name = elm.name_student;
        el.gender = elm.gender_student===1? "Nam":"Nữ";
        el.address = elm.address_student;
        el.phone = elm.phone_number_student;
        el.birthday = elm.birthday_student==='0000-00-00'? "":elm.birthday_student;
        el.coure = elm.coure_student;
        el.control = <div>
                      <Button variant='danger' onClick={()=>{
                          if(window.confirm('Xóa: '+elm.id_student)){
                            deleteRow(elm.id_student)
                          }
                      }}><i className="fa-solid fa-trash-can"></i></Button>
                      
                      <Button variant='info' onClick={()=>{
                          update(elm.id_student)
                      }}><i className="fa-solid fa-pen"></i></Button>
                  </div>
         arr.push(el);
      });
      setDatatable(arr)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  const deleteRow = (id)=>{

    axios.post('/student/delete',{id})
    .then(res=>{
      // console.log(res);
      alert('đã xóa '+id);
      // let row = []
      // row = [...datatable];
      // console.log(datatable)
      // console.log(row)
      // row = row.filter(el => el.ID!==id);
      // console.log(row)
      // setDatatable(row)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const update = (id)=>{
    console.log('update','/admin/student/create/'+id)
    nav('/admin/student/edit/'+id);
  }
  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={{columns:column,rows:datatable}} searchTop searchBottom={false}  />;
}

export default ShowsTudent