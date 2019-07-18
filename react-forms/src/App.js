import React from 'react';
import './App.css';

import Main from './modules/components/main.js';
import Header from './modules/components/header.js';
import superagent from 'superagent';

let base = 'https://city-explorer-backend.herokuapp.com/';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locationQueryString: null,
      geocodeResult: null,
      lat: null,
      lng: null,
      id: null,
    }
  }

  handleSearchFormClick = (data) => {
    superagent.get(`${base}location?data=${data}`)
      .then(result => {
        let peeejlfdljk = result.body
        // console.log(peeejlfdljk) 
        console.log('setstate type:', typeof this.state.setState)

        this.state.locationQueryString = result.body.search_query;
        this.state.geocodeResult = result.body;
        this.state.lat = parseFloat(result.body.latitude);
        this.state.lng = parseFloat(result.body.longitude);

      }
      ).catch(error => {
        console.error('error', error);
      })
  }

  sayThings = (e) => { e.preventDefault(); console.log('im dynamic') }

  render() {
    return (
      <React.Fragment>
        {/* <form>
          <Form handleClick={this.sayThings}></Form>
        </form> */}
        <Header></Header>
        <Main handleSearchFormClick={this.handleSearchFormClick}>

        </Main>
        {/* Form is the constructor function that will build my form and button */}
        {/* <Form handleClick={this.handleClick} nicholas="teacher"></Form> */}
      </React.Fragment>
    )
  }
}

export default App;
