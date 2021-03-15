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

function App() {
  return (
   <Router>
       <div className="App">
           <Nav></Nav>
           <Switch>
               <Route exact path={"/"} component={Box}/>
               <Route path={"/data"} component={Info}/>
               <Route path={"/0"} component={Indvidual}/>
               <Route path={"/1"} component={Person}/>
               <Route path={"/2"} component={Self}/>
               <Route path={"/Cool"} component={Cool}/>
               <Route path={"/fullpage/:color"} component={Fullpage}/>
           </Switch>



       </div>
   </Router>

  );
}

export default App;
