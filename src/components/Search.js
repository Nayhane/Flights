import React, { Component } from "react";
import '../scss/Search.scss'

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      search:'',
      sorted: false
    }
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value})
  }

  render() {
    const { search } = this.state
    const { flights } = this.props
    let flightFilter = flights.filter((flight) => {
        return (
          flight.number.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
      })

    return (
      <div className='search'>
        <input
          className='input'
          placeholder='Search'
          type='search'
          value={this.state.search}
          onChange={this.updateSearch}
        />
        <div className='flight-list'>
          <div className='header'>
            <div className='date-info'> Date </div>
            <div className='space-info' />
            <div className='flight-number'> Flight Number </div>
          </div>
          <div>
            {flightFilter
              .map((flight) => (
                <div key={flight.id} className='flight-info'>
                  <div className='date'>{flight.date.toDateString()} </div>
                  <div className='number'>{flight.number.toUpperCase()}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
