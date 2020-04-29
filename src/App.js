import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Grid.js';
import CenteredGrid from './components/Grid.js';

function App() {
  return (
    <div className="App">
      {CenteredGrid()}
    </div>
  );
}

export default App;
