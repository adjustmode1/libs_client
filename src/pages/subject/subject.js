import React from 'react'
import { Button } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import './subject.scss'
const Subject = () => {
  return (
    <>
        <div className="subject__header subject--block">
            <p>Lý Thuyết Đồ Thị </p>
            <Button  variant='outline-primary'>
                Tạo bài viết
            </Button>
        </div>
        <Outlet/>   
    </>
  )
}

export default Subject