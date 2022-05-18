import React, { useEffect } from 'react';
import {Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './body_right.scss';

const BodyLeft = (props) => {
    let ison = useSelector(state=>state.nav)
    let classNav = ison? "nav_right":"nav_right nav_right--hide";
    let subject = useSelector(state=>state.subject)||[];
    let tagSubject = subject.map((el,index)=>{
        return el.id_subject?   <div key={'tag_subject'+el.id+index} className="nav_right__control--item">
                            <Link to={'/subject/'+el.id_subject}><i className="fa-solid fa-book"></i>{el.title_subject}</Link>
                        </div>:'';
    });
  return (
        <Col lg={2} className={classNav}>
            <div className="nav_right__control ">
                <div className="nav_right__control--item nav_right__control--active">
                    <Link  to='/'><i className="fa-solid fa-house"></i>HOME</Link>
                </div>
                <div className="nav_right__control--item">
                    <Link to="#"><i className="fa-solid fa-house"></i>Danh sách Lĩnh Vực</Link>
                </div>
                <div className="nav_right__control--item">
                    <Link to="/private"><i className="fa-solid fa-floppy-disk"></i>Trang cá nhân</Link>
                </div>
                <div className="nav_right__control--item nav_right__control--disable">
                    <i className="fa-solid fa-bookmark"></i>Quan Tâm
                </div>
                {tagSubject}
            </div>
        </Col>
  )
}

export default BodyLeft;