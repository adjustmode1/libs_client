import React, { useState } from 'react';
import {Navbar} from 'react-bootstrap';
import {useDispatch, useSelector } from 'react-redux';
import avt from '../../assets/img/avt.png';
import './header.scss';

import * as actions from '../../actions/nav';
import * as login_actions from '../../actions/login';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = (props) => {
  const [isshow,setisshow] = useState(false);
  let classOverflow = (isshow)? "top_right__overflow top_right__overflow--show":"top_right__overflow";
  const dispath = useDispatch()
  const [token,setToken,deleteToken] = useCookies(['token_libs']);
  let info = useSelector(state=>state.info)
  const change = ()=>{
        dispath(actions.change())
  }
  const changestate = () =>{
      setisshow(!isshow)
  }
  const logout = ()=>{
      deleteToken('token_libs');
      dispath(login_actions.signout())
  }
  const nav = useNavigate();
  const home = ()=>{
        nav('/')
  }
  return (
    <header>
        <Navbar bg="light" expand="sm" fixed='top' className='top'>
            <div className="top__left">
                <div className="top__left--control" onClick={()=>{change()}} ><i className="fa-solid fa-bars"></i></div>
                <div className="top__left--logo" onClick={home}>LIBS</div>
            </div>
            <div className="top__right">
                <div className="top__right--noitce"><i className="fa-solid fa-bell"></i></div>
                <div className="top__right--name"><p>{info.name}</p></div>
                <div className="top__right--image"><img src={info.avatar===null? avt:info.avatar} alt=""/></div>
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