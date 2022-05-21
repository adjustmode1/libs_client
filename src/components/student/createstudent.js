import React, { useEffect, useState } from 'react'
import { Alert, Button, ButtonGroup, Col, Form, Row, ToggleButton } from 'react-bootstrap';
import axios from '../../util/axios';
const CreateStudent = () => {
    const [id,setId] = useState('')
    const [pass,setPass] = useState('')
    const [name,setName] = useState('')
    const [gender,setGender] = useState(false)
    const [address,setAddress] = useState('')
    const [gmail,setGmail] = useState('')
    const [phone,setPhone] = useState('')
    const [coure,setCoure] = useState('')
    const [birthday,setBirthDay] = useState('')
    const [note,setNote] = useState('');
    const [show,setShow] = useState(false);
    const [error,setError] = useState(false);
    const create = (e) =>{
      e.preventDefault();
      if(
        id===''||
        pass===''||
        coure===''
      ){
        setError('Vui lòng đừng để tróng')
        // return false;
      }else{
        let data = {
          id,pass,name,gender,address,gmail,phone,birthday,coure
        }
        console.log(data)
        axios.post('/student/create',data)
        .then(res=>{
          console.log(res)
          if(res.status===200){
            ShowSuccess('Tạo thành công')
          }
        })
        .catch(err=>{
            ShowError('Đã có sinh viên này')
        })
        return true;
      }
      return true;
    }
    const ShowError = (mes)=>{
      setError(true)
      setShow(false);
      setNote(mes)
    }
    const ShowSuccess = (mes)=>{
      setError(false)
      setShow(true);
      setNote(mes)
    }
        return (
          <div>
            <Alert variant='danger' show={error}>{note}</Alert>
            <Alert variant='success' show={show}>{note}</Alert>
            <form onSubmit={create}>
              <Row>
                <Col md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    ID Student
                  </label>
                  <input
                    value={id}
                    className={id? "form-control is-valid" : "form-control is-invalid"}
                    name="fname"
                    onChange={(e)=>{setId(e.target.value)}}
                    type="text"
                    id="defaultFormRegisterNameEx"
                    placeholder="ID Student"
                    required
                  />
                </Col>
                <Col md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterEmailEx2"
                    className="grey-text"
                  >
                    PASSWORD
                  </label>
                  <input
                    value={pass}
                    className={pass? "form-control is-valid" : "form-control is-invalid"}
                    name="lname"
                    onChange={(e)=>{setPass(e.target.value)}}
                    type="text"
                    id="defaultFormRegisterEmailEx2"
                    placeholder="password"
                    required
                  />
                </Col>
                
              </Row>
              <Row>
                <Col md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx3"
                    className="grey-text"
                  >
                    Tên
                  </label>
                  <input
                    value={name}
                    className={name? "form-control is-valid" : "form-control is-invalid"}
                    name="fname"
                    onChange={(e)=>{setName(e.target.value)}}
                    type="text"
                    id="defaultFormRegisterNameEx3"
                    placeholder="Tên sinh viên"
                    required
                  />
                </Col>
                <Col md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Coure
                  </label>
                  <input
                    value={coure}
                    className={coure? "form-control is-valid" : "form-control is-invalid"}
                    onChange={(e)=>{setCoure(e.target.value)}}
                    type="number"
                    id="defaultFormRegisterPasswordEx4"
                    name="city"
                    placeholder="Coure"
                    required
                  />
                </Col>
              </Row>
              <Row>
              <Col md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterConfirmEx5"
                    className="grey-text"
                  >
                    Gender
                  </label>{"  "}
                  <ButtonGroup className='mb-2'>
                      <ToggleButton
                        id="toggle-checked"
                        type='radio'
                        value={1}
                        checked={gender}
                        variant="outline-primary"
                        onChange={(e)=>{
                            console.log(true)
                            setGender(true)
                        }}
                      >
                          Nam
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-checked1"
                        type='radio'
                        value={0}
                        variant="outline-primary"
                        checked={!gender}
                        onChange={(e)=>{
                            setGender(false)
                        }}
                      >
                          Nữ
                      </ToggleButton>
                  </ButtonGroup>
                </Col>
              </Row>
                  <Row>

                <Col md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx6"
                    className="grey-text"
                  >
                    Gmail
                  </label>
                  <input
                    value={gmail}
                    className="form-control"
                    onChange={(e)=>{setGmail(e.target.value)}}
                    type="gmail"
                    id="defaultFormRegisterPasswordEx4"
                    name="city"
                    placeholder="Gmail"
                    />
                </Col>
                <Col md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx6"
                    className="grey-text"
                  >
                    Address
                  </label>
                  <input
                    value={address}
                    className="form-control"
                    onChange={(e)=>{setAddress(e.target.value)}}
                    type="text"
                    id="defaultFormRegisterPasswordEx7"
                    name="city"
                    placeholder="address"
                  />
                </Col>
                  </Row>
              <Row>
                <Col md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx7"
                    className="grey-text"
                  >
                    Phone
                  </label>
                  <input
                    value={phone}
                    className="form-control"
                    onChange={(e)=>{setPhone(e.target.value)}}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="city"
                    placeholder="phone number"
                  />
                </Col>
                <Col md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx8"
                    className="grey-text"
                  >
                    Birthday
                  </label>
                  <input
                    value={birthday}
                    className="form-control"
                    onChange={(e)=>{setBirthDay(e.target.value)}}
                    type="date"
                    id="defaultFormRegisterPasswordEx8"
                    name="city"
                    placeholder="Birthday"
                  />
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Tạo
              </Button>
            </form>
          </div>
  )
}

export default CreateStudent