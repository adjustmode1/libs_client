import React, { useEffect, useState } from 'react'
import { Alert, Button, ButtonGroup, Col, Form, Row, ToggleButton } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../util/axios';
const EditStudent = () => {
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
  const nav = useNavigate()
  const params = useParams();
    useEffect(()=>{
      axios.get('/student/findOne',{params:{id:params.id}})
      .then(res=>{
        if(res.data.length===1){
          let info = res.data[0];
          setId(info.id_student);
          setName(info.name_student);
          setCoure(info.coure_student);
          setGender(info.gender_student===1);
          setGmail(info.gmail_student);
          setPhone(info.phone_number_student);
          setAddress(info.address_student)
          setBirthDay(info.birthday_student==='0000-00-00'? '':info.birthday_student)
        }else{
          alert('không có sinh viên này')
          nav('/admin/student/list')
        }
      })
      .catch(err=>{
        console.log(err)
      })
    },[])
    const update = (e) =>{
      e.preventDefault();
      if(
        id===''||
        coure===''){
        setError('Vui lòng đừng để tróng')
      }else{
        let data = {
          idold:params.id,id,pass,name,gender,address,gmail,phone,birthday,coure
        }
        console.log(data)
        axios.post('/student/update',data)
        .then(res=>{
          console.log(res)
          if(res.status===200){
            ShowSuccess('cập nhật thành công')
          }
        })
        .catch(err=>{
            ShowError('Đã có sinh viên này')
        })
        }
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
          <div>
            <Alert variant='danger' show={error}>{note}</Alert>
            <Alert variant='success' show={show}>{note}</Alert>
            <form onSubmit={update}>
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
                
              </Row>
              <Row>
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
                Cập nhật
              </Button>
              <Button onClick={()=>{
                nav('/admin/student/list')
              }}>
                Quay Về
              </Button>
            </form>
          </div>
          </div>
  )
}

export default EditStudent