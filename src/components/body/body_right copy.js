import React from 'react';
import './body_left.scss';
import { Col, Row } from 'react-bootstrap';
import FieldsTag from '../fields_tag/fields_tag';

const BodyRight = () => {
  let tag = [
      {
          id:'1',
          title:'đây là name 1',
          date:'10/02/2019',
          img:'https://dictionary.cambridge.org/vi/images/thumb/tree_noun_001_18152.jpg?version=5.0.234',
          tag:['tag 1','tag 2','tag 3']
      },
      {
          id:'2',
          title:'đây là name 2',
          date:'10/02/2019',
          img:'https://dictionary.cambridge.org/vi/images/thumb/tree_noun_001_18152.jpg?version=5.0.234',
          tag:['tag 1','tag 2','tag 3']
      },
      {
          id:'3',
          title:'đây là name 3',
          date:'10/02/2019',
          img:'https://dictionary.cambridge.org/vi/images/thumb/tree_noun_001_18152.jpg?version=5.0.234',
          tag:['tag 1','tag 2','tag 3']
      },
      {
          id:'4',
          title:'đây là name 4',
          date:'10/02/2019',
          img:'https://dictionary.cambridge.org/vi/images/thumb/tree_noun_001_18152.jpg?version=5.0.234',
          tag:['tag 1','tag 2','tag 3']
      },
  ]
  let tagElement  = tag.map(el=>{
      return <FieldsTag key={`tag+${el.id}`} tag_id={el.id} tag_title={el.title} tag_date={el.date} tag_img={el.img} tag_tag={el.tag}/>
  })
  return (
    <div>
        <Col lg={3} className="search_bar col-lg-3">
            <div className="search_bar__input">
                <input type="text" placeholder="Loại Tài Liệu"/>
                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </Col>
        <Row>
            {tagElement}
        </Row>
    </div>  
  )
}

export default BodyRight;