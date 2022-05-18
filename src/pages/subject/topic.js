import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import { Link, useLocation } from 'react-router-dom';
import axios from '../../util/axios';
const Topic = (props) => {
  const [page,setPage] = useState('view');
  const [show,setShow] = useState(false);
  const [file,setFile] = useState([]);
  const [loca,setLoca] = useState('');
  const [status,setStatus] = useState(1);
  const location = useLocation();
  useEffect(()=>{
    //   console.log(props)
    setStatus(props.status)
    if(props.doc!==undefined){
        let arr = []
        props.doc.forEach((el,index) => {
            arr.push(
                <li key={el.id_document+'doc'+index} style={{'color':'blue','cursor':'pointer'}} onClick={()=>{
                    downfile(el.link_doc,el.name_doc);
                }}>
                    {el.name_doc}
                </li>
            )
        });
        setFile(arr)
    }
  },[])
  useEffect(()=>{
    if(location.pathname.indexOf('edit') !== -1){
        setShow(true);
    }else{
        setShow(false)
    }
  },[location.pathname])
  const downfile = (link,name)=>{
        axios.get('/download_file',{params:{
            path:link
        }
    ,responseType:'blob'})
        .then(res=>{
            console.log(res)
            const url = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a')
            link.href = url;
            link.setAttribute('download',name)
            document.body.appendChild(link);
            link.click();
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const hidden = ()=>{
        console.log('hidden',props.id_topic+'/'+props.id_subject)
        axios.post('/topic/hidden',{
            id_topic:props.id_topic,
            status:status===1? 0:1
        })
        .then(res=>{
            setStatus(status===1? 0:1)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const deleteTopic = ()=>{
        axios.post('/topic/delete',{
            id_topic:props.id_topic,
            id_subject:props.id_subject
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const update = ()=>{

    }
    const save = ()=>{

    }
  const styleSave = show? {'display':'none'}:{'display':'block'};
  const styleControll = show? {'display':'block'}:{'display':'none'};
  return (
        <div className="subject__body subject--block">
            <div className="subject__body--topic">
                <div className="subject_body__topic--header">
                    <p>{props.title_topic}</p>
                    <div style={styleControll}>
                        <span style={{'color':'green','cursor':'pointer'}} onClick={()=>{
                            hidden();
                        }}>{status===1? "Ẩn":"Hiện"}</span>{' '}
                        <span style={{'color':'red','cursor':'pointer'}} onClick={()=>{
                            deleteTopic();
                        }}>Xóa</span>{' '}
                        <span style={{'cursor':'pointer'}} onClick={()=>{
                            update();
                        }}>Cập Nhật</span>
                    </div>
                    <div style={styleSave}>
                        <span style={{'cursor':'pointer'}} onClick={()=>{
                            save()
                        }}>Lưu</span>
                    </div>
                </div>
                
                <div className="subject_body__topic--body">
                    {parse(props.topic_content)}
                </div>
                <div className="subject_body__topic--linker">
                    <ul>
                        {file}
                    </ul>
                </div>
            </div>
        </div> 
  )
}

export default Topic;