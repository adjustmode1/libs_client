import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';


import axios from '../../util/axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Alert, Table } from 'react-bootstrap';
import FormData from 'form-data';

const Create = () => {
    const param = useParams();
    const nav = useNavigate();
    const [content,setContent] = useState('');
    const [note,setNote] = useState('');
    const [variant,setVariant] = useState('');
    const [show,setShow] = useState(false);
    const [title,setTitle] = useState('');
    const [valueFile,setValueFile] = useState('')
    const [file,setFile] = useState(new FormData());
    const [row,setRow] = useState([]);
    useEffect(()=>{
        axios.get('/subject/findOne',{params:{id_subject:param.id}})
        .then(res=>{
        })
        .catch(err=>{
            nav('/')
          console.log(err)
        })
    },[])
    useEffect(()=>{
        let arr = [];
        if(file.has('link_doc')){
            for(var el of file.entries()){
                let name = el[1].name;
                arr.push(
                    <tr key={`row${name}`}>
                        <td>{name}</td>
                        <td><i className="fa-solid fa-trash-can" onClick={()=>{
                            deleteRow(name)
                        }}></i></td>
                    </tr>
                );
            }
        }
        setRow(arr)
    },[file])
    const deleteRow = (name)=>{
        let arr = [];
        let filearr = new FormData();
        console.log('delete',name)
        for(var el of file.entries()){
            if(el[1].name !== name){
                arr.push(
                    <tr key={`row${el[1].name}`}>
                        <td>{el[1].name}</td>
                        <td><i className="fa-solid fa-trash-can" onClick={()=>{
                            deleteRow(el[1].name)
                        }}></i></td>
                    </tr>
                );
                filearr.append('link_doc',el[1]);
            }
        }
        setFile(filearr)
        setRow(arr);
    }
    const create = ()=>{
        let iscreate = true;
        if(content===''&&!file.has('link_doc')){
            setNote('vui lòng nhập nội dung')
            iscreate = false; 
        }
        if(title.trim()===''){
            setNote('vui lòng nhập tiêu đề')
            iscreate = false;
        }
        if(iscreate){
            let data = {
                id_subject:param.id,
                topic_title:title,
                topic_content:content,
            }
            
            if(file.has('link_doc')){
                axios.post('/topic/create/file',file,{
                    headers:{
                        'Content-Type':'multipart/form-data',
                        data:encodeURIComponent(JSON.stringify(data))
                    }
                })
                .then(res=>{
                    console.log(res)
                    axios.post('/topic/create/data',data)
                    .then(result=>{
                        console.log(result)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                })
                .catch(err=>{
                    console.log(err)
                })
            }else{
                axios.post('/topic/create/data',data)
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })
            }
            setNote('tạo thành công');
            setVariant('success');
        }else{
            setVariant('danger');
        }
        setShow(true)
    }
  return (
    <>
        <div className="subject__body subject--block">
            <Alert show={show} variant={variant}>
                {note}
            </Alert>
            <div className="subject__body--subject-temp subject_body__topic">
                <div className="subject__body--topic">
                    <div className="subject_body__topic--header">
                        <input type="text" name="" id="" placeholder="nhập tên chủ đề" value={title} onChange={(e)=>{
                            setTitle(e.target.value);
                        }}/>
                    </div>
                    
                    <div className="subject_body__topic--body">
                        Nhập Nội Dung
                        <Editor
                            apiKey='mc7cnjo9kfos7x8kd6ub70r9o489rsqj9osba49zmv54ks68'
                            onEditorChange={(newtext)=>{
                                setContent(newtext)
                            }}
                            init={{
                                menubar: false,
                                plugins: [
                                    'table','link'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | table | link' ,
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                    </div>
                    <div className="subject_body__topic--linker">
                        <input type="file" draggable="" multiple onChange={(e)=>{
                                console.log(e.target.files)
                                let f = new FormData();
                                for (let index = 0; index < e.target.files.length; index++) {
                                    f.append(`link_doc`,e.target.files[index]);
                                }
                                setFile(f);   
                        }}/>
                    </div>
                    {
                        file.has('link_doc')? <Table className='showFile'>
                                            <thead>
                                                <tr>
                                                <th>
                                                    Tên tệp
                                                </th>
                                                <th>
                                                    
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {row}
                                            </tbody>
                                        </Table>:''
                    }
                </div>
            </div>
            <div className="subject__body--plus" onClick={()=>{
                create();
            }}>
                <i className="fa-solid fa-circle-plus"></i>
            </div>
        </div>
    </>
  )
}

export default Create