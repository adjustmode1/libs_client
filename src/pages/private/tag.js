import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'

const Tag = (props) => {
  const [arr,setArr] = useState([])
    useEffect(()=>{
        // setArr(props.arr||[]);
        let arrr = []
        props.arr.forEach(el => {
            arrr.push(
                <Badge pill variant="primary" key={'badge'+el} className="text-white">{el}</Badge>
            )
        });
        setArr(arrr)
    },[])
  return (
    <div>{arr}</div>
  )
}

export default Tag