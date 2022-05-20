import React, { useState } from 'react'
import { Collapse, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './sidebar.scss';
const SideBar = () => {
  const [open,setOpen] = useState([false,false,false,false])
  return (
<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">LIBS</div>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item">
          <a className="nav-link" to="index.html">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span></a>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">
          Interface
        </div>
        {/* Nav Item - Pages Collapse Menu */}
        <Nav.Item>
          <Nav.Link className="nav-link collapsed" onClick={()=>{
            setOpen([!open[0],false,false,false])
          }}>
            <i className="fa-solid fa-book"></i>
            <span>Môn Học</span>
          </Nav.Link>
          <Collapse className="collapse" in={open[0]} aria-labelledby="headingUtilities">
            <div className="bg-white py-2 collapse-inner rounded" >
              <Link className="collapse-item" to="/admin/subject/list">Danh sách</Link>
              <Link className="collapse-item" to="/admin/subject/create">Thêm</Link>
            </div>
          </Collapse>
        </Nav.Item>
        {/* Nav Item - Utilities Collapse Menu */}
        <Nav.Item>
          <Nav.Link className="nav-link collapsed" onClick={()=>{
            setOpen([false,!open[1],false,false])
          }}>
            <i className="fa-solid fa-user"></i>
            <span>Sinh Viên</span>
          </Nav.Link>
          <Collapse className="collapse" in={open[1]} aria-labelledby="headingUtilities">
            <div className="bg-white py-2 collapse-inner rounded" >
            <Link className="collapse-item" to="/admin/student/list">Danh sách</Link>
              <Link className="collapse-item" to="/admin/student/create">Thêm</Link>
            </div>
          </Collapse>
        </Nav.Item>
        {/* Nav Item - Utilities Collapse Menu */}
        <Nav.Item>
          <Nav.Link className="nav-link collapsed" onClick={()=>{
            setOpen([false,false,!open[2],false])
          }}>
            <i className="fa-solid fa-user"></i>
            <span>Giáo Viên</span>
          </Nav.Link>
          <Collapse className="collapse" in={open[2]} aria-labelledby="headingUtilities">
            <div className="bg-white py-2 collapse-inner rounded" >
            <Link className="collapse-item" to="/admin/lecture/list">Danh sách</Link>
              <Link className="collapse-item" to="/admin/lecture/create">Thêm</Link>
            </div>
          </Collapse>
        </Nav.Item>
        {/* Nav Item - Utilities Collapse Menu */}
        <Nav.Item>
          <Nav.Link className="nav-link collapsed" onClick={()=>{
            setOpen([false,false,false,!open[3]])
          }}>
            <i className="fa-solid fa-tag"></i>
            <span>Lĩnh Vực</span>
          </Nav.Link>
          <Collapse className="collapse" in={open[3]} aria-labelledby="headingUtilities">
            <div className="bg-white py-2 collapse-inner rounded" >
            <Link className="collapse-item" to="/admin/fields/list">Danh sách</Link>
              <Link className="collapse-item" to="/admin/fields/create">Thêm</Link>
            </div>
          </Collapse>
        </Nav.Item>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
  )
}

export default SideBar;
