import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Flight extends Component{

  flightList = () => {
    const { flights, search } = this.props

    if ( flights){
      const flightFilter = flights.filter((flight) => {
        return (
          flight.number.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
      })
      return (
        <div>
          {flightFilter
            .map((flight) => (
                <Link to={`/flights/${flight.id}`} key={flight.id} className='flight-info'>
                <div className='date'>{flight.date.toDateString()} </div>
                <div className='number'>{flight.number.toUpperCase()}</div>
              </Link>
            ))
          }
        </div>
      )
    }
  }


  render(){
    return(
      <div>
        {this.flightList()}
      </div>
    )
  }
}

export default Flight
