import React from 'react';
import './index.scss';

import Header  from '../../components/header/header';
import BodyLeft  from '../../components/body/body_left';
import {Outlet} from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';

const Index = (props) => {
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

export default Index;