import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import ServicesOffered from './components/ServicesOffered';

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
           </Switch>
      </Router> 
    </div>
  );
}

export default App;