import React from 'react'
import './blogtag.scss';
import img from '../../assets/img/avt.png';
import { Link } from 'react-router-dom';
const BlogtTag = (props) => {
  return (
        <div className="blog-card">
            <div className="meta">
            <div className="photo" style={{'backgroundImage': `url(${props.img||img})`}}></div>
            </div>
            <div className="description">
            <h1>{props.title_subject}</h1>
            <Link to={`/app/lecture/${props.id_lecture}`}><h2>{props.name_lecture}</h2></Link>
            <p className="read-more">
                <Link to={`/app/subject/${props.id_subject}`} >Read More</Link>
            </p>
            </div>
        </div>
  )
}

export default BlogtTag