import React from 'react';
import axios from 'axios';
import './App.css';
import AddFeeling from '../Feeling/Feeling';
import AddUnderstanding from '../Understanding/Understanding';
import AddSupport from '../Support/Support';
import AddComment from '../Comments/Comments';
import DisplaySummary from '../Summary/Summary';
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
        <AddFeeling />
      </Route>

      <Route exact path="/understanding">
        <AddUnderstanding />
      </Route>

      <Route exact path="/support">
        <AddSupport />
      </Route>

      <Route exact path="/comment">
        <AddComment />
      </Route>

      <Route exact path="/summary">
        <DisplaySummary />
      </Route>
      

      </Router>
    </div>
    
    
    
  );
}

export default App;
