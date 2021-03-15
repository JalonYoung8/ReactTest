import { useState } from 'react';


function Background() {



    const [boxColor, setBoxColor] = useState("red");
    const [borderColor, setBorderColor] = useState("blue");

    const fullpage =  {
        height: "100%",
        width: "100%",
        backgroundColor: (props.backgroundColor.match.params.id)
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
        <div style={fullpage} ></div>
    );
}

export default Background;