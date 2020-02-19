import React from 'react'
import './Headers.css';
import imgs from '/home/bharath/Documents/reactjs/reduxcalci/src/components/cl.jpeg';

export default class Headers extends React.Component{
    render(){
        return(
            <div className="headerss">
            <h1>React Calculator</h1>
            <img src={imgs}  width="60" height="60" />
            </div>
        )
    }
    

}