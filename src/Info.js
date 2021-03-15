import React, { useState } from 'react';
import {Link} from "react-router-dom";


function Info(props) {



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
            <Link exact to={"/0"}>
                <div>Name: Jalon - Age: Infinite - Color: blue - Id: 0</div>
            </Link>
            <Link exact to={"/data/1"}>
                <div>Name: Bob - Age: 55 - Color: red - Id: 1</div>
            </Link>
            <Link exact to={"/data/2"}>
                <div>Name: Devin - Age: 22 - Color: pink - Id: 2</div>
            </Link>

        </div>


    );
}

export default Info;