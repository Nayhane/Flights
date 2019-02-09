import React, { Component } from 'react'

class FlightDetails extends Component{
  renderFlights(){
    const { flights } = this.props


    const FlightInfo = flights.map((flight) => (
      <div key={flight.id}>
        <div>
          <div> Flight number: {flight.number.toUpperCase()} </div>
          <div> Date: {flight.date}</div>
        </div>
        <div>operate by {flight.airliner} </div>
        <div> from : {flight.departureAirport} to: {flight.arrivalAirport} </div>
        <div>Departure at: {flight.departureTime} - Expected arrival at: {flight.arrivalTime}</div>
      </div>
    ))
    return FlightInfo
  }

  render(){
    return(
      <div>
        {this.renderFlights()}
      </div>
    )
  }
}


export default FlightDetails
