import React, { useState } from 'react';
import style from './style'
import {Link} from "react-router-dom";



function Fullpage(props) {

    alert(props.color);

    const fullStyle =  {
            height: "500px",
            width: "500px",
        }


    return (
        <div style={{backgroundColor:props.match.color}}>
            <div style={fullStyle}></div>
        </div>

    );
}

export default Fullpage;