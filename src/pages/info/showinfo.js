import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import axios from '../../util/axios';
const Showinfo = () => {
    let info = useSelector(state=>state.info);
    const navi = useNavigate();
    const update = ()=>{
        navi('/app/person/changeinfo')
    }
  return (
    <div className="row infor--block infor__body">
        <Table striped>
            <tbody>
                <tr className="table_control">
                    <td></td>
                    <td><Button variant='outline-primary' onClick={update}>Cập Nhật</Button></td>
                </tr>
                <tr>
                    <td>Mã Số</td>
                    <td>{info.id}</td>
                </tr>
                <tr>
                    <td>Họ Và Tên</td>
                    <td>{info.name}</td>
                </tr>
                <tr>
                <td>Giới tính</td>
                <td>{info? "NAM":"NỮ"}</td>
                </tr>
                <tr>
                <td>Email</td>
                <td>{info.gmail}</td>
                </tr>
                <tr>
                <td>Số Điện Thoại</td>
                <td>{info.phone_number}</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default Showinfo