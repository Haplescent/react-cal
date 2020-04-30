import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Grid.js";
import CenteredGrid from "./components/Grid.js";
import ReactVirtualizedTable from "./components/Table.js";
import BasicTextFields from "./components/Textfield.js";

function App() {
  return (
    <div className="App">
      {ReactVirtualizedTable()}
      {CenteredGrid()}
    </div>
  );
}

export default App;
