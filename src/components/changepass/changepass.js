import React, { useState } from 'react'
import { Alert, Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import axios from '../../util/axios';
const Changepass = () => {
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('');
    const [note,setNote] = useState('');
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    const info = useSelector(state=>state.info)
    const cancel = ()=>{
        setPassword('')
        setRePassword('')
    }
    const save = ()=>{
        let path = '/changepassword'
        if(info.rule===undefined){
            path = path + '_student';
        }else{
            path = path+'_lecture';
        }
        axios.post(path,{
            password,repassword:rePassword
        })
        .then(res=>{
            console.log(res)
            if(res.status===204){
                setNote('Mật khẩu không đúng')
                setSuccess(false)
                setError(true)
            }else if(res.status===200){
                setNote('Tạo Thành Công')
                setSuccess(true)
                setError(false)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <div className="row infor--block infor__body">
    <Alert show={error} variant={'danger'}>
        {note}
    </Alert>
    <Alert show={success} variant={'primary'}>
                {note}
    </Alert>
    <Table>
        <tbody>
            <tr>
                <td>Mật Khẩu Cũ</td>
                <td><input type="password" name="" id="" className="infor__body--input" placeholder="nhập mã số" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/></td>
            </tr>
            <tr>
                <td>Mật Khẩu Mới</td>
                <td><input type="password" name="" id="" className="infor__body--input" placeholder="nhập mã số" value={rePassword} onChange={(e)=>{
                    setRePassword(e.target.value)
                }} /></td>
            </tr>
            <tr className="table_control">
            <td></td>
            <td>
                <Button variant="btn-outline-success" onClick={()=>{save()}}>Lưu</Button>
                <Button Variant="btn btn-outline-danger" onClick={()=>{cancel()}}>Hủy Bỏ</Button>
            </td>
        </tr>
        </tbody>
    </Table>
</div>
  )
}

export default Changepass