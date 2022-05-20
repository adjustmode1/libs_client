import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/style.css';

const F404 = () => {
  const nav = useNavigate()
  return (
    <div id="notfound">
      <div className="notfound">
          <div className="notfound-404"></div>
          <h1>404</h1>
          <h2>Oops! Page Not Be Found</h2>
          <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
          <Link to="/app">Back to homepage</Link>
      </div>
	</div>
  )
}

export default F404;