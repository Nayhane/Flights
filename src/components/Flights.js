import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFlights } from "../actions/fetch";
import FlightDetails from './FlightDetails'
import Search from "./Search";



class Flights extends Component {


  componentDidMount(flights){
   this.props.dispatch(fetchFlights())
 }


  render() {

    return (
      <div>
        <Search />
        <FlightDetails flights={this.props.flights} />
      </div>
    );
  }
}

const mapStateToProps = ({ flights }) => ({ flights });

export default connect(mapStateToProps)(Flights);
