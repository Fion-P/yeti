import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './reset.css';
import './App.css';
import NavBar from './nav-bar';
import Splash from './splash';

function App() {
  return (
    <div className='App'>
      <NavBar />
      < Splash />
    </div>
  );
}

export default App;