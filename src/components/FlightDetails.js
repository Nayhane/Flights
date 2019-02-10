import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchFlights } from "../actions/fetch"
import airplane from '../airplane.png'
import '../scss/FlightDetails.scss'


class FlightDetails extends Component{

  componentDidMount(flights){
    this.props.dispatch(fetchFlights())
  }


  renderDetails = () => {
    const { flights, match } = this.props
    const flight = flights.find((flight) => flight.id === match.params.flightId)

    if (flight){
      return (
        <div>
          <div className='header-airport'>
            <img src={airplane} alt='airplane'/>
            <div className='airport'>{flight.departureAirport}</div>
            <Link to='/' className='details-link'> Back </Link>
          </div>
        <div key={flight} className='details-flight'>
          <div className='details-header'>
            <div className='details-number'>
              <div> Flight number: </div>
              <span>{flight.number.toUpperCase()}</span>
            </div>
            <div className='bar'/>
            <div className='details-date'>
              <div> Date: </div>
              <span>{flight.date.toDateString()}</span>
            </div>
            <div className='bar'/>
            <div className='details-airliner'>
              <div> Operate by: </div>
              <span>{flight.airliner}</span>
            </div>
            <div className='bar'/>
            <div className='details-from'>
              <div> From: </div>
              <span>{flight.departureAirport} </span>
            </div>
            <div className='bar'/>
            <div className='details-to'>
              <div> To: </div>
              <span>{flight.arrivalAirport} </span>
            </div>
            <div className='bar'/>
            <div className='details-departure'>
              <div> Departure at: </div>
              <span>{flight.departureTime} </span>
            </div>
            <div className='bar'/>
            <div className='details-arrival'>
              <div> Arrival at: </div>
              <span>{flight.arrivalTime} </span>
            </div>
          </div>
        </div>
      </div>
      )
    }
    else {
      return null
    }
  }


  render(){
    return(
      <div>
        {this.renderDetails()}
      </div>
    )
  }
}


const mapStateToProps = ({ flights }) => ({ flights });

export default connect(mapStateToProps)(FlightDetails);
