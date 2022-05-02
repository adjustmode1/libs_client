import React, { Children, useState } from 'react';
import './index.scss';

import Header  from '../../components/header/header';
import BodyLeft  from '../../components/body/body_left';
import  BodyRight from '../../components/body/body_right';

import {Outlet, Route, Routes} from 'react-router-dom';

import { Row,Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Info from '../info/info';
import F404 from '../F404/F404';

const Index = (props) => {
  let classRight = props.ison? "main col-lg-10":"main main--hide col-lg-12";
  // console.log(classRight)
  return (
    <div>
        <Header/>
        <BodyLeft/> 
        <Row className='content'>
            <Col lg={10} className="main col-lg-12">
                <Outlet/>
            </Col>           
        </Row>
    </div>
  )
}

const mapProps = (state,props) =>{
  return {
    ison: state.nav
  }
}

export default connect(mapProps)(Index);