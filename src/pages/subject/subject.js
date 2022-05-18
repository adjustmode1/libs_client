import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import './subject.scss';
import axios from '../../util/axios';
const Subject = () => {
  const param = useParams();
  const nav = useNavigate();
  const location = useLocation();
  const [title_subject,setTitle_subject] = useState('');
  useEffect(()=>{
      axios.get('/subject/findOne',{params:{id_subject:param.id}})
      .then(res=>{
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
        </div>
        <Outlet/>   
    </>
  )
}

export default Subject