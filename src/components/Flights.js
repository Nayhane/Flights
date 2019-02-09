import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFlights } from "../actions/fetch";
// import FlightDetails from './FlightDetails'
import Search from "./Search";
import '../scss/Flights.scss'



class Flights extends Component {

  componentDidMount(flights){
   this.props.dispatch(fetchFlights())
 }


  render() {
    const { flights } = this.props

    return (
      <div className='flights'>
        <Search
          flights={flights}
          onChange={this.onChange}
        />
        {/* <FlightDetails
          flights={flights}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ flights }) => ({ flights });

export default connect(mapStateToProps)(Flights);
