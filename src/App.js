import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Grid.js";
import CenteredGrid from "./components/Grid.js";


import ButtonAppBar from "./components/AppBar.js";




function App() {
  return (
    <div className="App">
      {ButtonAppBar()}
      <CenteredGrid hour="9am"/>
    </div>
  );
}

export default App;
