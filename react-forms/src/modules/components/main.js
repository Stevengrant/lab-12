import React from 'react';

import SearchBox from './search-box.js';
import SearchResults from './api-results.js';
import GoogleMaps from './maps.js';

function Main(props) {
  console.log(props.state)
  return (
    <React.Fragment>
      <SearchBox handleSearchFormClick={props.handleSearchFormClick} ></SearchBox>
      <GoogleMaps></GoogleMaps>
      <SearchResults></SearchResults>
      <SearchResults></SearchResults>
      <SearchResults></SearchResults>
      <SearchResults></SearchResults>
      <SearchResults></SearchResults>

    </React.Fragment>
  )
}

export default Main;
