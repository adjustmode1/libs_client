import React, { useState } from 'react';
import {Navbar} from 'react-bootstrap';
import {useDispatch } from 'react-redux';
import avt from '../../assets/img/avt.png';
import './header.scss';

import * as actions from '../../actions/nav';
import * as login_actions from '../../actions/login';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [isshow,setisshow] = useState(false);
  let classOverflow = (isshow)? "top_right__overflow top_right__overflow--show":"top_right__overflow";
  const dispath = useDispatch()
  const change = ()=>{
        dispath(actions.change())
  }
  const changestate = () =>{
      setisshow(!isshow)
  }
  const logout = ()=>{
      dispath(login_actions.signout())
  }
  return (
    <header>
        <Navbar bg="light" expand="sm" className="top sticky">
            <div className="top__left">
                <div className="top__left--control" onClick={()=>{change()}} ><i className="fa-solid fa-bars"></i></div>
                <div className="top__left--logo">LIBS</div>
            </div>
            <div className="top__right">
                <div className="top__right--noitce"><i className="fa-solid fa-bell"></i></div>
                <div className="top__right--name"><p>Name A</p></div>
                <div className="top__right--image"><img src={avt} alt=""/></div>
                <div className="top__right--arror" onClick={()=>{changestate()}}><i className="fa-solid fa-sort-down"></i></div>
                <div className={classOverflow}>
                    <div className="top_right__overflow--item">
                        <Link to="/person">
                            <i className="fa-solid fa-user"></i>Hồ sơ
                        </Link>
                    </div>
                    <div className="top_right__overflow--item">
                        <Link to="/person/changepass"  >
                             <i className="fa-solid fa-lock"></i>Đổi Mật Khẩu 
                        </Link>
                    </div>
                    <div className="top_right__overflow--item">
                        <Link to="/login"  onClick={logout}>
                            <i className="fa-solid fa-right-from-bracket"></i>Đăng Xuất
                        </Link>
                    </div>
                </div>
            </div>
        </Navbar>
    </header>
  )
}


export default Header;