
import React, { useState} from 'react';
import {useCookies} from 'react-cookie'
import './login.scss';

import {Alert, Button, Form} from 'react-bootstrap';
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
        console.log(res.data.token)
        setCookie('token_libs',res.data.token);
        dispath(actions_info.setInfoInit(res.data.data));
        setError(false);
        dispath(actions.signin())
        navigate('/app')
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
        <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Login</h1>
                      </div>
                      <form className="user" onSubmit={signin}>
                      <Alert variant='danger'show={error}>{note}</Alert>
                        <div className="form-group">
                              <input type="text" name="username" className="form-control form-control-user" placeholder="Username" required="required" value={username} onChange={(e)=>{
                              setusername(e.target.value)
                            }}/>
                        </div>
                        <div className="form-group">
                             <input type="password" name="password" className="form-control form-control-user" placeholder="Password" required="required" value={password} onChange={(e)=>{
                              setpassword(e.target.value)
                            }}/>
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember
                              Me</label>
                          </div>
                        </div>
                        <Button type="submit" className="btn btn-primary btn-block btn-large">Sign In</Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Login;