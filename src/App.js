import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Grid.js';
import CenteredGrid from './components/Grid.js';
import './components/Table.js';
import ReactVirtualizedTable from './components/Table.js';

function App() {
  return (
    <div className="App">
      {CenteredGrid()}
      {ReactVirtualizedTable()}
    </div>
  );
}

export default App;
