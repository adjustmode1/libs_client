import React from 'react';
import {Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import nav from '../../reducers/nav';
import './body_right.scss';
const BodyLeft = (props) => {
    let ison = useSelector(state=>state.nav)
    let classNav = ison? "nav_right":"nav_right nav_right--hide";
  return (
        <Col lg={2} className={classNav}>
            <div className="nav_right__control ">
                <div className="nav_right__control--item nav_right__control--active">
                    <a href="#"><i className="fa-solid fa-house"></i>HOME</a>
                </div>
                <div className="nav_right__control--item">
                    <a href="#"><i className="fa-solid fa-house"></i>Danh sách Lĩnh Vực</a>
                </div>
                <div className="nav_right__control--item">
                    <a href="#"><i className="fa-solid fa-floppy-disk"></i>Đã Lưu</a>
                </div>
                <div className="nav_right__control--item nav_right__control--disable">
                    <i className="fa-solid fa-bookmark"></i>Quan Tâm
                </div>
                <div className="nav_right__control--item">
                    <a href="#"><i className="fa-solid fa-book"></i>Máy học</a>
                </div>
                <div className="nav_right__control--item">
                    <a href="#"><i className="fa-solid fa-book"></i>CTDL</a>
                </div>
            </div>
        </Col>
  )
}

export default BodyLeft;