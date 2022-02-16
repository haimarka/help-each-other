import "./App.css";
import axios from "axios";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import LogIn from './pages/login/LogIn';
import Register from './pages/register/Register';
import Search from './pages/search/Search';
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
const [auth,setAuth]=useState(null);
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
    <Switch> 
        <Route exact path='/' component={Home}/>
        <Route exact path='/About' render={()=><About/>}/>
        <Route exact path='/LogIn' render={()=><LogIn/>}/>
        <Route exact path='/Register' render={()=><Register auth={auth} setAuth={setAuth}/>}/>
        <Route exact path='/Search' render={()=><Search/>}/>
    </Switch>
    <footer>Free To Help 2022 &copy;</footer>
    </div>
  </BrowserRouter>
  
  );
}

export default App;
