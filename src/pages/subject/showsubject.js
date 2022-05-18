import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../util/axios';
import Topic from './topic';
const Showsubject = () => {
    const params = useParams();
    const [topic,setTopic] = useState([]);
    useEffect(()=>{
        let id = params.id;
        axios.get('/topic/list',{
            params:{id:params.id}
        })
        .then(res=>{
            let arr = [];
            let arr_doc = {};
            axios.get('/topic/list/doc',{
                params:{
                    id:params.id
                }
            })
            .then(result=>{
                result.data.forEach(el=>{
                    if(arr_doc[el.id_topic]===undefined){
                        arr_doc[el.id_topic] = [el];
                    }else{
                        arr_doc[el.id_topic].push(el);
                    }
                })
                res.data.forEach((el,index) => {
                        arr.push(<Topic key={index+'topic'} {...el} doc={arr_doc[el.id_topic]}/>)
                });
                setTopic(arr)
            })
            .catch(err=>{
                console.log(err)
            })

        })
        .catch(err=>{
            console.log(err)
        })
    },[]);
  return (
        <>
            {topic}
        </>
  )
}

export default Showsubject