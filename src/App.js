import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Flights from "./components/Flights.js";
import FlightDetails from "./components/FlightDetails";
import store from "./store";
import "./scss/App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Route exact path='/' component={Flights} />
            <Route path='/flights/:flightId' component={FlightDetails} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
