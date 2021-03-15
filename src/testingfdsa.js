import PropBox from "./PropBox";
import Box from "./Box";
import Intro from "./Intro";
import logo from "./logo.svg";

<PropBox bgColor="blue" borderColor="red" />
<PropBox bgColor="purple" borderColor="green" />
<PropBox bgColor="orange" borderColor="yellow" />
<Box></Box>
<Box></Box>
<Box></Box>
<Intro name="Dude" age = "265" color = "blue" />
<Intro name="Bruh" age = "5" color = "pink" />
<Intro name="amogus" age = "175" color = "red" />
<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
        Name: Jalond Young (I Think?)
        <br></br>
        Job: UI Designer
        <br></br>
        Fav Number: 8
    </p>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn React
    </a>
</header>