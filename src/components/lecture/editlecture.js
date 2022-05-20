import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Form, Row, ToggleButton } from 'react-bootstrap'
const EditLecture = () => {
    const [id,setId] = useState('GV1809222')
    const [name,setName] = useState('Lê Văn A')
    const [gender,setGender] = useState(false)
    const [address,setAddress] = useState('')
    const [gmail,setGmail] = useState('gmail11@gmail.com')
    const [phone,setPhone] = useState('0123578215')
    const [coure,setCoure] = useState('Yes')
    const [admin,setAdmin] = useState(true)
    const [password,setpPassword] = useState('44fawfwef')
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
                    ID Giáo Viên
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
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    PASSWORD
                  </label>
                  <input
                    value={password}
                    className={id? "form-control is-valid" : "form-control is-invalid"}
                    name="fname"
                    onChange={(e)=>{setId(e.target.value)}}
                    type="password"
                    id="defaultFormRegisterNameEx"
                    placeholder="ID Student"
                    disabled
                  />
                </Col>
              </Row>
              <Row>
              <Col md="6" className="mb-3">
                  <Form.Check  label="Admin" type="checkbox" checked={admin}/>
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
                    value={address}
                    className={address? "form-control" : "form-control"}
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
                    value={gmail}
                    className={gmail? "form-control" : "form-control"}
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
                    value={phone}
                    className={phone? "form-control is-valid" : "form-control is-invalid"}
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
                    value={birthday}
                    className={birthday? "form-control" : "form-control"}
                    onChange={(e)=>{setCoure(e.target.value)}}
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    name="city"
                    placeholder="Birthday"
                    required
                  />
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Lưu
              </Button>
            </Form>
          </div>
  )
}

export default EditLecture;