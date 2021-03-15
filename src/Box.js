import React, { useState } from 'react';
import {Link} from "react-router-dom";


function Box(props) {



        const [boxColor, setBoxColor] = useState("red");
        const [borderColor, setBorderColor] = useState("blue");

        const boxStyle =  {
            height: "100px",
            width: "100px",
            backgroundColor: "red",
        }
        const boxStyle2 =  {
                height: "100px",
                width: "100px",
                backgroundColor: "yellow",
            }
        const boxStyle3 =  {
            height: "100px",
            width: "100px",
            backgroundColor: "blue",
        }

    function increase() {

        if (boxColor == "red") {
            setBoxColor("blue");
            setBorderColor("green");
        }else if (boxColor == "blue"){
            setBoxColor("green");
            setBorderColor("red");
        }
        else if (boxColor == "green"){
            setBoxColor("red");
            setBorderColor("blue");
        }


    }


    return (
        <div>
            <Link exact to={"/fullpage/red"}>
                <div style={boxStyle}></div>
            </Link>

            <Link exact to={"/fullpage/red"}>
                <div style={boxStyle2}></div>
            </Link>
            <Link exact to={"/fullpage/red"}>
                <div style={boxStyle3}></div>
            </Link>
        </div>


    );
}

export default Box;