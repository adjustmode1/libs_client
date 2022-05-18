import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../util/axios';
import Topic from './topic';
const Showsubject = () => {
    const params = useParams();
    const [topic,setTopic] = useState([]);
    const [link,setLink] = useState([]);
    useEffect(()=>{
        let id = params.id;
        console.log(id)
        axios.get('/topic/list',{
            params:{id:params.id}
        })
        .then(res=>{
            console.log(res)
            let arr = [];
            res.data.forEach((el,index) => {
                if(el.status===1){
                    arr.push(<Topic key={index+'topic'} {...el}/>)
                }
            });
            setTopic(arr)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]);
  return (
        // {topic}
        <>
            {topic}
        </>
  )
}

export default Showsubject