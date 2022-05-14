import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet} from 'react-router-dom';
import './info.scss';

const Info = () => {
    let info = useSelector(state=>state.info);
  return (
        <div className="infor">
            <div className="infor--block infor__top">
                <div className="infor__top--avt">
                    <img src="https://else.ctu.edu.vn/theme/image.php/boost/core/1646209955/u/f2" alt="" />
                </div>
                <div className="infor__top--name"><p>{info.name}</p></div>
            </div>
            <Outlet/>
        </div> 
  )
}

export default Info