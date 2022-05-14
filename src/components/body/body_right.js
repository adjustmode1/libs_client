import React, { useEffect, useState } from 'react';
import './body_left.scss';
import { Col, Pagination, Row } from 'react-bootstrap';
import BlogtTag from '../blog_tag/blogtag';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../util/axios';
import * as blogtagActions from '../../actions/blogtag';

// {
//     id_subject:'',
//     title_subject:'',
//     avatar_lecture:'',
//     id_lecture:''
// }

const BodyRight = () => {
    let blogtag = useSelector(state=>state.blogtag)||[];
    const [active,setActive] = useState(1);
    const [item,setItem] = useState([]);
    const [search,setSearch] = useState('');
    const [searchSend,SetSearchSend] = useState('');
    const [option,setOption] = useState('subject');
    const dispatch = useDispatch();
    const choice = (index)=>{
        setActive(index);
        let title_subject = '';
        let name_lecture = '';
        if(option==='subject'){
            title_subject = search;
        }else{
            name_lecture = search;
        }
        axios.get('/subject/list',{params:
                                        {
                                            index,
                                            max_size:9,
                                            title_subject,
                                            name_lecture
                                        }
                                    })
        .then(res=>{
            console.log(res)
        })
        .cathch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        setActive(blogtag.index)
        axios.get('/subject/list',{params:{max_size:9}})
        .then(res=>{
            let data = {
              index:1,
              total_item:res.data.total_item,
              data:res.data.data
            }
            dispatch(blogtagActions.InitBlogTag(data));
        })
        .catch(err=>{
          console.log(err)
        })
    },[])
    useEffect(()=>{
        let arr = []
        let num_element = 4;
        if(blogtag.total_page<=num_element){
            for (let index = 1; index <= blogtag.total_page; index++) {
                arr.push(
                    <Pagination.Item key={index+'pgitem'} active={index === active} onClick={()=>{
                        console.log(index)
                        choice(index);
                    }} activeLabel=''>
                        {index}
                    </Pagination.Item>
                )
                setItem(arr)
            }
        }else{
            arr.push(
                <Pagination.Prev key="prevpgitem" onClick={()=>{
                    setActive(Math.max(1,active-1))
                }}/>
            )

            let start = Math.max(active - 1,1);
            let end = Math.min(active + 2,blogtag.total_page);
            if(active===1){
                start = 1
                end = num_element;
            }
            if(active === blogtag.total_page){
                start = start - (num_element-2)
            }
            if(active === blogtag.total_page-1){
                start = start - (num_element-3)
            }

            for (let index = start; index <= end; index++) {
                arr.push(
                    <Pagination.Item key={index+'pgitem'} active={index === active} onClick={()=>{
                        choice(index);
                    }} activeLabel=''>
                        {index}
                    </Pagination.Item>
                )
            }

            arr.push(
                <Pagination.Next key="nextpgitem" onClick={()=>{
                    setActive(Math.min(blogtag.total_page,active+1))
                }}/>
            )
            setItem(arr)
        }
    },[active])
    const find = ()=>{
        SetSearchSend(search);
    }
    let tagElement  = blogtag.data.map((el,index)=>{
        return el.id_subject? <BlogtTag key={'blog'+index} id={el.id_subject} title={el.title_subject} img={el.avatar_lecture} id_lecture={el.id_lecture} name_lecture={el.name_lecture}/>:""
    })
    return (
        <div>
            <Col lg={3} className="search_bar col-lg-3">
                <div className="search_bar__input">
                    <input type="text" placeholder="Search..." value={search} onChange={(e)=>{
                        setSearch(e.target.value);
                    }}/>
                    <div className="dropdown">
                        <select value={option} className="dropdown-select" onChange={(e)=>{
                                setOption(e.target.value)
                            }}>
                            <option value="subject" >Môn học</option>
                            <option value="lecture">Giáo Viên</option>
                        </select>
                    </div>
                    <button onClick={find}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </Col>
            <Row>
                {tagElement}
            </Row>
                <Pagination className="justify-content-center">{item}</Pagination>   
        </div>  
    )
}

export default BodyRight;