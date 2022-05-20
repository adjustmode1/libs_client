import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Dropdown, Form, Row, ToggleButton } from 'react-bootstrap'
const CreateSubject= () => {
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
                <Col md="12" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    ID Subject
                  </label>
                  <input
                    value={id}
                    className={id? "form-control is-valid" : "form-control is-invalid"}
                    name="fname"
                    onChange={(e)=>{setId(e.target.value)}}
                    type="text"
                    id="defaultFormRegisterNameEx"
                    placeholder="ID Subject"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col md="12" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Tên tiêu đề
                  </label>
                  <input
                    value={id}
                    className={id? "form-control is-valid" : "form-control is-invalid"}
                    name="fname"
                    onChange={(e)=>{setId(e.target.value)}}
                    type="text"
                    id="defaultFormRegisterNameEx"
                    placeholder="Title"
                    required
                  />
                </Col>
              </Row>
              <Row>
                    <Col md="12" className="mb-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Sở Hữu
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
              </Row>
              
              <Button variant="primary" type="submit">
                Tạo
              </Button>
            </Form>
          </div>
  )
}

export default CreateSubject;