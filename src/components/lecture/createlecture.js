import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Form, Row, ToggleButton } from 'react-bootstrap'
const CreateLecture = () => {
    const [id,setId] = useState('')
    const [pass,setPass] = useState('')
    const [name,setName] = useState('')
    const [gender,setGender] = useState(false)
    const [address,setAddress] = useState('')
    const [gmail,setGmail] = useState('')
    const [phone,setPhone] = useState('')
    const [coure,setCoure] = useState('')
    const [birthday,setBirthDay] = useState('')
    
        return (
          <div>
            <Form>
              <Row>
                <Col md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    ID Lecture
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
                    htmlFor="defaultFormRegisterConfirmEx3"
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
                        variant="secondary"
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
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Address
                  </label>
                  <input
                    value={coure}
                    className={coure? "form-control" : "form-control"}
                    onChange={(e)=>{setCoure(e.target.value)}}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="city"
                    placeholder="address"
                    required
                  />
                </Col>
                <Col md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Gmail
                  </label>
                  <input
                    value={coure}
                    className={coure? "form-control" : "form-control"}
                    onChange={(e)=>{setCoure(e.target.value)}}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="city"
                    placeholder="Gmail"
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
                    Phone
                  </label>
                  <input
                    value={coure}
                    className={coure? "form-control" : "form-control"}
                    onChange={(e)=>{setCoure(e.target.value)}}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="city"
                    placeholder="phone number"
                    required
                  />
                </Col>
                <Col md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Birthday
                  </label>
                  <input
                    value={coure}
                    className={coure? "form-control" : "form-control"}
                    onChange={(e)=>{setCoure(e.target.value)}}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="city"
                    placeholder="Birthday"
                    required
                  />
                </Col>
                <Col md="6" className="mb-3">
                  <Form.Check  label="Admin" type="checkbox"/>
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Tạo
              </Button>
            </Form>
          </div>
  )
}

export default CreateLecture;