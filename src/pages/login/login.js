
import React, { useState} from 'react';
import {useCookies} from 'react-cookie'
import './login.scss';

import {Alert, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from '../../util/axios';

import * as actions from '../../actions/login';
import { useDispatch } from 'react-redux';
import * as actions_info from '../../actions/info';
const Login = (props) => {
  let navigate = useNavigate();
  let [username,setusername] = useState('');
  let [password,setpassword] = useState('');
  let [error,setError] = useState(false);
  let [note,setNote] = useState('Sai tài khoản hoặc mật khẩu');
  let dispath = useDispatch();
  const [cookie,setCookie] = useCookies(['token_libs']);
  const signin = (e)=>{
    e.preventDefault();
    axios.post('/login',{username,password})
    .then(res=>{
      if(res.status===200){
        setCookie('token_libs',res.data.token);
        dispath(actions_info.setInfoInit(res.data.data));
        setError(false);
        dispath(actions.signin())
        navigate('/')
      }
      if(res.status===204){
        setError(true);
      }
    })
    .catch(err=>{
      console.log(err)
    })

  }

    return (
        <div className="login">
          <h1>Login</h1>
            <form onSubmit={signin}>
              <Alert variant='danger'show={error}>{note}</Alert>
              <input type="text" name="username" placeholder="Username" required="required" value={username} onChange={(e)=>{
                setusername(e.target.value)
              }}/>
              <input type="password" name="password" placeholder="Password" required="required" value={password} onChange={(e)=>{
                setpassword(e.target.value)
              }}/>
              <Button type="submit" className="btn btn-primary btn-block btn-large">Sign In</Button>
            </form>
        </div>
    );
}


export default Login;