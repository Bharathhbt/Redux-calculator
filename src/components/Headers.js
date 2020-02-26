import React from 'react'
import '../styles/Headers.css';
import imgs from '../assets/cl.jpeg';

export default class Headers extends React.Component{
    render(){
        return(
            <div className="headerss">
            <h1>React Calculator</h1>
            <img src={imgs} alt='' width="60" height="60" />
            </div>
        )
    }
    

}