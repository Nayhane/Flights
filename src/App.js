import React, { Component } from "react";
import Flights from "./components/Flights.js";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Flights />
      </div>
    );
  }
}

export default App;
