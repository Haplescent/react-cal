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
      <CenteredGrid hour="10am"/>
      <CenteredGrid hour="11am"/>
      <CenteredGrid hour="12pm"/>
      <CenteredGrid hour="1pm"/>
      <CenteredGrid hour="2pm"/>
      <CenteredGrid hour="3pm"/>
      <CenteredGrid hour="4pm"/>
      <CenteredGrid hour="5pm"/>
    </div>
  );
}

export default App;
