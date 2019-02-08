import React, { Component } from 'react'

class FlightDetails extends Component{

  renderFlights(){
    const { flights } = this.props
    const FlightInfo = flights.map((flight) => (
      <div key={flight.id}>
        <div> {flight.number} - {flight.date} </div>
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
