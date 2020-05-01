import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Grid.js";
import CenteredGrid from "./components/Grid.js";
import ReactVirtualizedTable from "./components/Table.js";
import BasicTextFields from "./components/Textfield.js";
import ButtonAppBar from "./components/AppBar.js";
import Clock from "./components/Time.js";


function App() {
  return (
    <div className="App">
      {ButtonAppBar()}
      {CenteredGrid()}
    </div>
  );
}

export default App;
