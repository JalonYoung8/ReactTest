import { useState } from 'react';
import style from './style'


function BlueBox() {



        const [boxColor, setBoxColor] = useState("red");
        const [borderColor, setBorderColor] = useState("blue");

        const boxStyle =  {
            height: "100px",
            width: "100px",
            backgroundColor: boxColor,
            borderStyle: "solid",
            borderWeight: "2px",
            borderColor: borderColor
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
        <div style={style.box}></div>
)   ;
}

export default BlueBox;