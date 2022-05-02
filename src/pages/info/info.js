import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import Changeinfo from '../../components/changeinfo/changeinfo';
import Changepass from '../../components/changepass/changepass';
import './info.scss';
import Showinfo from './showinfo';

const Info = () => {
  return (
        <div className="infor">
            <div className="infor--block infor__top">
                <div className="infor__top--avt">
                    <img src="https://else.ctu.edu.vn/theme/image.php/boost/core/1646209955/u/f2" alt="" />
                </div>
                <div className="infor__top--name"><p>Name A</p></div>
            </div>
            <Outlet/>
        </div> 
  )
}

export default Info