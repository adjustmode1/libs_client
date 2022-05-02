
import React, { useState } from 'react';
import './login.scss';

import {Button, Card, Col, Container,Form,Row} from 'react-bootstrap';
import { parsePath, useNavigate } from 'react-router-dom';
import axios from '../../util/axios';

import * as actions from '../../actions/login';
import { useDispatch } from 'react-redux';

const Login = (props) => {
  let navigate = useNavigate();
  let [username,setusername] = useState('');
  let [password,setpassword] = useState('');
  let dispath = useDispatch();
  const signin = (e)=>{
    e.preventDefault();
    axios.post('/login',{username,password})
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
    // dispath(actions.signin())
    // navigate('/');

  }
  const change = (e)=>{
    console.log(e.target.value)
  }
    return (
        <div className="login">
          <h1>Login</h1>
            <form onSubmit={signin}>
              <input type="text" name="username" placeholder="Username" required="required" value={username} onChange={(e)=>{
                setusername(e.target.value)
              }}/>
              <input type="password" name="password" placeholder="Password" required="required" value={password} onChange={(e)=>{
                setpassword(e.target.value)
              }}/>
              <button type="submit" className="btn btn-primary btn-block btn-large">Sign In</button>
            </form>
        </div>
    );
}


export default Login;