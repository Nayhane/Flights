import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFlights } from "../actions/fetch";
import Flight from './Flight'
import Search from "./Search";
import '../scss/Flights.scss'


class Flights extends Component {
  constructor(props){
    super(props)
    this.state = {
      search:''
    }
  }


  componentDidMount(flights){
    this.props.dispatch(fetchFlights())
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value})
  }

  render() {
    const { flights } = this.props

    return (
      <div className='flights'>
        <Search
          onChange={this.updateSearch}
        />
        <div className='flight-list'>
          <div className='header'>
            <div className='date-info'> Date </div>
            <div className='space-info' />
            <div className='flight-number'> Flight Number </div>
          </div>
          <Flight
            flights={flights}
            search={this.state.search}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ flights }) => ({ flights });

export default connect(mapStateToProps)(Flights);
