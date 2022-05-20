import React from 'react'
import { Button, Dropdown, Image, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './index.scss';
import SideBar from '../../components/sidebar/sidebar';
const Index = () => {
  return (
    <div>
    {/* Page Wrapper */}
    <div id="wrapper">
      {/* Sidebar */}
      <SideBar />
      {/* End of Sidebar */}
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <Navbar bg="light" expand="lg" className="bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <Button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars" />
            </Button>
            {/* Topbar Navbar */}
            <Nav className="ml-auto">
              {/* Nav Item - User Information */}
                <div>
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">Ly</span>
                  <Image className="rounded-circle" src={process.env.PUBLIC_URL+"/avt.png"} alt="..." width={50} height={50}/>
                </div>
                <Link to="/admin">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
                </Link>
            </Nav>
          </Navbar>
          {/* End of Topbar */}
          {/* Begin Page Content */}
          <div className="container-fluid">
            {/* Page Heading */}
            <Outlet/>
          </div>
          {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}
      </div>
      {/* End of Content Wrapper */}
    </div>
    {/* End of Page Wrapper */}
    {/* Scroll to Top Button*/}
    <a className="scroll-to-top rounded" href="#page-top">
      <i className="fas fa-angle-up" />
    </a>
    {/* Logout Modal*/}
    <Modal className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <Modal.Dialog role="document">
        <div className="modal-content">
          <Modal.Header className="modal-header">
            <Modal.Title className="modal-title" id="exampleModalLabel">Ready to Leave?</Modal.Title>
            <Button className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </Button>
          </Modal.Header>
          <Modal.Body >Select "Logout" below if you are ready to end your current session.</Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="btn-secondary" data-dismiss="modal">Cancel</Button>
            <Link className="btn btn-primary" to="/admin/login">Logout</Link>
          </Modal.Footer>
        </div>
      </Modal.Dialog>
    </Modal>
  </div>
  )
}

export default Index;
