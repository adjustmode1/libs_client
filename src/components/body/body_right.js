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
    const [showblogTag,setShowBlogTag] = useState([])
    const [searchSend,SetSearchSend] = useState({
        string:'',
        select:'subject'
    });
    const [option,setOption] = useState('subject');
    const dispatch = useDispatch();
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
        setActive(blogtag.index)
        let arr= [];
        blogtag.data.map((el,index) => {
            arr.push(<BlogtTag key={'blog'+index} id_subject={el.id_subject} title_subject={el.title_subject} img={el.avatar_lecture} id_lecture={el.id_lecture} name_lecture={el.name_lecture}/>);
        });
        setShowBlogTag(arr)
    },[blogtag])
    useEffect(()=>{
        let arr = []
        let num_element = 4;
        if(blogtag.total_page<=num_element){
            if(blogtag.total_item!==1){
                for (let index = 1; index <= blogtag.total_page; index++) {
                    arr.push(
                        <Pagination.Item key={index+'pgitem'} active={index === active} onClick={()=>{
                            choice(index);
                        }} activeLabel=''>
                            {index} 
                        </Pagination.Item>
                    )
                }
            }
            setItem(arr)
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
    },[showblogTag])
    const choice = (index)=>{
        if(index!==active){
            let title_subject = '';
            let name_lecture = '';
            if(option==='subject'){
                title_subject = searchSend.string;
                name_lecture = '';
            }else{
                name_lecture = searchSend.string;
                title_subject = '';
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
                let data = {
                    index,
                    total_item:res.data.total_item,
                    data:res.data.data
                }
                dispatch(blogtagActions.InitBlogTag(data));
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
    const find = ()=>{
        SetSearchSend({
            string:search,
            option
        })
        console.log({
            index:1,
            max_size:9,
            title_subject:option==='subject'? search:'',
            name_lecture:option==='lecture'? search:''
    })
        axios.get('/subject/list',{params:{
                index:1,
                max_size:9,
                title_subject:option==='subject'? search:'',
                name_lecture:option==='lecture'? search:''
        }})
        .then(res=>{
            let init = {
                index:1,
                total_item:res.data.total_item,
                data:[...res.data.data]
            }
            console.log(init)
            dispatch(blogtagActions.InitBlogTag(init))
        })
        .catch(err=>{
            console.log(err)
        })
    }

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
                {showblogTag.length>0? showblogTag:''}
            </Row>
                <Pagination className="justify-content-center">{item}</Pagination>   
        </div>  
    )
}

export default BodyRight;