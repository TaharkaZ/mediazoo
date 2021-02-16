import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import ServicesOffered from './components/ServicesOffered';
import Careers from './components/Careers.js';
import WorkWithUs from './components/WorkWithUs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div id = "homepage">
      <Router>
           <Switch>
             <Route path="/"  exact component = {Home}/>
             <Route path="/Contact" component = {Contact}/>
             <Route path="/Services" component = {ServicesOffered}/>
             <Route path="/Blog"  component = {Blog}></Route>
             <Route path="/WorkWithUs"  component = {WorkWithUs}></Route>
             <Route path="/Careers"  component = {Careers}></Route>
           </Switch>
      </Router> 
    </div>
  );
}

export default App;