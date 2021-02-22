import logo from './logo.svg';
import './App.css';
import Intro from './Intro'

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
