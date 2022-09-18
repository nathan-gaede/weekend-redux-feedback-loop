import React from 'react';
import axios from 'axios';
import './App.css';
import AddComment from '../Comments/Comments';
import AddUnderstanding from '../Understanding/Understanding';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Router>
      <header className='App-header'>
      
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
         
      </header>
      
      <Route exact path="/">
        <AddComment />
      </Route>

      <Route exact path="/understanding">
        <AddUnderstanding />
      </Route>
      

      </Router>
    </div>
    
    
    
  );
}

export default App;
