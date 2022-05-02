import React from 'react';
import { connect} from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RouteAuth = (props)=>{
    let location = useLocation();
    return props.islogin? props.children:<Navigate to='/login' state={{from:location}}/>
}

const mapProps = (state,props)=>{
    return{
        islogin:state.islogin
    }
}

export default connect(mapProps,null)(RouteAuth);