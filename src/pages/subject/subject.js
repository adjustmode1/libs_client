import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import './subject.scss';
import axios from '../../util/axios';
import { useSelector } from 'react-redux';
const Subject = () => {
  const param = useParams();
  const nav = useNavigate();
  const location = useLocation();
  const [title_subject,setTitle_subject] = useState('');
  const [auth,setAuth] = useState('none');
  let info = useSelector(state=>state.info);
  useEffect(()=>{
      axios.get('/subject/findOne',{params:{id_subject:param.id}})
      .then(res=>{
        if(res.data[0].id_lecture===info.id){
          setAuth('flex');
        }
        setTitle_subject(res.data[0].title_subject.toUpperCase())
      })
      .catch(err=>{
        nav('/')
        console.log(err)
      })
  },[])
  const buttonuFunction = ()=>{
    
  }
  return (
    <>
        <div className="subject__header subject--block">
            <p>{title_subject}</p>
            <div className="controll" style={{'display':auth}}>
              <Button  variant='outline-primary' onClick={()=>{
                  nav(`/subject/create/${param.id}`)
              }}>
                  Tạo bài viết
              </Button>
              <Button  variant='outline-primary' onClick={()=>{
                  nav(`/subject/edit/${param.id}`)
              }}>
                  Chỉnh Sửa
              </Button>
              <Button style={{'display': location.pathname.indexOf('create')!==-1||location.pathname.indexOf('edit')!==-1? 'block':'none'}} variant='outline-primary' onClick={()=>{
                  nav(`/subject/${param.id}`)
              }}>
                  Quay Về
              </Button>
            </div>
        </div>
        <Outlet/>   
    </>
  )
}

export default Subject