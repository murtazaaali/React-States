import React, { Component } from "react";
import "./App.css";
import Newcomp from "./Component/Newcomp";
class App extends Component {
  styles = {
    fontstyle: "bold",
    color: "teal",
  };
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <Newcomp />
      </div>
    );
  }
}

export default App;
