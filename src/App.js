import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import  customerMaster  from './components/CustomerMaster';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={ customerMaster } />      
        
      </div>
    );
  }
}

export default App;
