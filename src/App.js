import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import Body from './components/Body'
import Navigation from './components/Navigation'
import About from './components/About'
import Contact from './components/Contact'
import Users from './components/Users'

function App() {
  return (  
      <div className="App">
        <Router>
          <Header />
          <Navigation />

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} /> 
            <Route exact path="/" component={Body} />     
          </Switch>
        </Router>
      </div>
    

  );
}

export default App;
