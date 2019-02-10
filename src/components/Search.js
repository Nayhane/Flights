import React, { Component } from "react";
import '../scss/Search.scss'

class Search extends Component {
  render() {

    return (
        <input
          className='input'
          placeholder='Search'
          type='search'
          value={this.props.search}
          onChange={this.props.onChange}
        />
    );
  }
}

export default Search;
