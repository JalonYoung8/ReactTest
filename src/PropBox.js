import { useState } from 'react';
import style from './style'
import React from 'react';


function PropBox(props) {


        const boxStyle2 =  {
            height: "100px",
            width: "100px",
            backgroundColor: (props.bgColor),
            borderStyle: "solid",
            borderWeight: "2px",
            borderColor: (props.borderColor)
        }



    return (
        <div style={boxStyle2}></div>
)   ;
}

export default PropBox;