import { useState } from 'react';


function Intro(props) {

    const [age, setAge] = useState(parseInt(props.age));

    function increment () {
        setAge((prevState) => prevState = prevState + 1)
    }


    return (
        <div onClick={increment}>
            <h1>Name: {props.name}</h1>
            <h2>I am {age} years old</h2>
            <h3>My Fav color is {props.color}</h3>
        </div>

    );
}

export default Intro;