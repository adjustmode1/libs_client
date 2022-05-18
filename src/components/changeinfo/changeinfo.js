import React, { useEffect, useState } from 'react'
import axios  from './../../util/axios'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import './changeinfo.scss'
import * as actions from '../../actions/info';
const Changeinfo = () => {
    // info{
    //     id,
    //     name,
    //     gender,
    //     coure,
    //     avatar,
    //     birthday,
    //     phone_number,
    //     address,
    //     gmail
    // }
    let info = useSelector(state=>state.info);
    let dispath = useDispatch();
    let [id,setId] = useState('');
    let [name,setName] = useState('');
    let [gender,setGender] = useState(true);
    let [gmail,setGmail] = useState('');
    let [phone_number,setPhone] = useState('');
    let [coure,setCoure] = useState('');
    let [birthday,setBirthday] = useState('');
    let [address,setAddress] = useState('');
    let [file,setFile] = useState(new FormData())
    let [valueFile,setValueFile] = useState('');
    useEffect(()=>{
        setId(info.id);
        setName(info.name);
        setGender(info.gender);
        setCoure(info.coure);
        setGmail(info.gmail===null? '':info.gmail);
        setPhone(info.phone_number===null? '':info.phone_number);
        setBirthday(info.birthday===null? '':info.birthday);
        setAddress(info.address===null? '':info.address);
        setValueFile(info.avatar===null? '':info.avatar);
    },[])
    const save = ()=>{
        let send = false;
        let data = {}
        if(compare()){
            send = true;
            data = {
                id,name,gender,gmail,phone_number,coure,birthday,address
            }
            alert('đã set data')
        }
        let newdata = setData();
        if(file.has('avatar')){
            if(send){
                let path = '/info/changeinfo'
                if(info.rule!==undefined){
                    path = path + '_lecture';
                }else{
                    path = path + '_student';
                }
                console.log(path)
                axios.post(path,{data})
                .then(res=>{
                    console.log('send file....',res)
                        axios.post('/changeinfo_image',file,{
                            headers:{
                                'Content-Type':'multipart/form-data'
                            }
                        })
                        .then(res=>{
                            newdata.avatar = res.avatar;
                            console.log('send ok',res)
                            dispath(actions.setInfoInit(newdata));
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                })
                .catch(err=>{
                    console.log(err)
                })
                alert('send file + data')
            }else{
                axios.post('/info/changeinfo_image',file)
                .then(res=>{
                    newdata.avatar = res.avatar;
                    console.log('send file ok',res)
                    dispath(actions.setInfoInit(newdata));
                })
                .catch(err=>{
                    console.log(err)
                })
                alert('gửi file')
            }
        }else{
            if(send){
                let path = '/info/changeinfo'
                if(info.rule!==undefined){
                    path = path + '_lecture';
                }else{
                    path = path + '_student';
                }
                console.log(path)
                axios.post(path,data)
                .then(res=>{
                    console.log(res)
                    dispath(actions.setInfoInit(newdata));
                })
                .catch(err=>{
                    console.log(err)
                })
                alert('gửi data')
            }else{
                alert('không gửi')
            }
        }
    }
    const setData = ()=>{
        return {
            id,
            name,
            gender,
            coure,
            gmail,
            phone_number,
            birthday,
            address,
            avatar:info.avatar
        }
    }
    const compare = ()=>{
        if(
           (birthday!==''&&info.birthday===null)||
           (birthday!==info.birthday&&info.birthday!==null)||
           (phone_number!==''&&info.phone_number===null)||
           (phone_number!==info.phone_number&&info.phone_number!==null)||
           (address!==''&&info.address===null)||
           (address!==info.address&&info.address!==null)||
           (gmail!==''&&info.gmail===null)||
           (gmail!==info.gmail&&info.gmail!==null)
           ){
            return true;
        }
        return false;
    }
    const cancel = ()=>{
        setValueFile('')
        setFile(new FormData())
    }
  return (
        <div className="row infor--block infor__body">
            <Table striped>
                <tbody>
                    <tr>
                        <td>Mã Số</td>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td>Họ Và Tên</td>
                        <td><input type="text" name="name" id="" className="infor__body--input" placeholder="Nhập Tên" value={name}  onChange={(e)=>{
                            setName(e.target.value);
                        }}/></td>
                    </tr>
                    <tr>
                    <td>Giới tính</td>
                    <td>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="sex" onChange={()=>{
                                    setGender(true)
                                }} checked={gender}/>Nam
                            </label>
                            </div>
                            <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="sex" onChange={()=>{
                                    setGender(false)
                                }} checked={!gender}/>Nữ
                            </label>
                            </div>
                    </td>
                    </tr>
                    <tr>
                    <td>Email</td>
                    <td><input type="email" name="email" id="" className="infor__body--input" placeholder="nhập Email" value={gmail} onChange={(e)=>{
                        setGmail(e.target.value)
                        
                    }}/></td>
                    </tr>
                    <tr>
                    <td>Địa chỉ</td>
                    <td><input type="text" name="phone" id="" className="infor__body--input" placeholder="nhập địa chỉ" value={address} onChange={(e)=>{
                        setAddress(e.target.value)
                    }}/></td>
                    </tr>
                    <tr>
                    <td>Số Điện Thoại</td>
                    <td><input type="number" name="phone" id="" className="infor__body--input" placeholder="nhập Số" value={phone_number} onChange={(e)=>{
                        setPhone(e.target.value)
                    }}/></td>
                    </tr>
                    <tr key='1'>
                    <td>coure</td>
                    <td><input type="number" name="cour" id="" className="infor__body--input" placeholder="nhập Số" value={coure} onChange={(e)=>{
                        setCoure(e.target.value)
                    }}/></td>
                </tr>
                    <tr>
                        <td>Birthday</td>
                        <td><input type="date" name="birthday" id="" className="infor__body--input" placeholder="nhập Số" value={birthday} onChange={(e)=>{
                            setBirthday(e.target.value)
                        }}/></td>
                    </tr>
                    <tr>
                        <td>Avatar</td>
                        <td style={{'display':'flex'}}>
                            <input type="file" name="avatar" id="" className="infor__body--input" value={valueFile} onChange={(e)=>{
                                console.log(e.target.files[0])
                                let f = new FormData();
                                f.append('avatar',e.target.files[0])
                                setValueFile(e.target.value);
                                setFile(f);
                            }}  accept=".jpeg,.jpg,.png,"/>
                            <Button variant='outline-primary' onClick={cancel}>X</Button>
                        </td>
                    </tr>
                    <tr className="table_control">
                        <td></td>
                        <td>
                            <button className="btn btn-outline-success" onClick={save}>Lưu</button>
                            <button className="btn btn-outline-danger">Hủy Bỏ</button>
                        </td>
                    </tr>
                </tbody>
                </Table>
        </div> 
  )
}

export default Changeinfo