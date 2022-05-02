import React from 'react'
import { Col } from 'react-bootstrap'

import './fields_tag.scss';

const FieldsTag = (props) => {
  let Tag = props.tag_tag.map((el,index)=>{
        return <span key={`tag_tag+${index}`}>{el}</span>
  })
  return (
        <Col lg={4} className="fields_tag col-lg-4">
            <div className="fields_tag__image">
                <img src="https://dictionary.cambridge.org/vi/images/thumb/tree_noun_001_18152.jpg?version=5.0.234" alt=""/>
            </div>
            <div className="fields_tag__content">
                <div className="fields_tag__content--title"><h2>{props.tag_title}</h2></div>
                <div className="fields_tag__content--date"><i className="fa-solid fa-calendar-days"></i>{props.tag_date}</div>
                <div className="fields_tag__content--tag">
                    {Tag}
                </div>
                <a href="#">read more</a>
            </div>
        </Col>
  )
}

export default FieldsTag