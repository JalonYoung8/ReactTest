import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro';
import Box from './Box';
import BlueBox from './BlueBox';
import PropBox from "./PropBox";
import Hero from "./Hero";
import Fullpage from "./Fullpage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./Nav";
import Info from "./Info";
import Indvidual from "./Indvidual";
import Person from "./Person";
import Self from "./Self";
import Cool from "./Cool";
import Counter from "./Counter";


const User = ({ match }) => {
    return(<h1>Welcome User {match.params.username}</h1>)

}

function App() {
  return (
   <Router>
       <div className="App">
           <Counter></Counter>

       </div>
   </Router>

  );
}

export default App;
