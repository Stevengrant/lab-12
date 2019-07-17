import React from 'react';
import './App.css';
let genFakeArray = () => {
  let rn = Math.floor(Math.random() * 20) + 1;
  let res = [];
  for (let i = 0; i < rn; i++) {
    res.push('Fake Data');
  }
  return res;
}
function SearchBox(props) {
  return (
    <React.Fragment>
      <form>
        <input></input>
        <button>search</button>
      </form>
    </React.Fragment>
  )
}
function GoogleMaps(props) {
  return (
    <React.Fragment>
      <div>
        <p>Google Maps goes here</p>
      </div>
    </React.Fragment>
  )
}
function Header(props) {
  return (
    <React.Fragment>
      <h1>City Explorer</h1>
      <p>Enter a location below to learn about the weather, events, restaurants, movies, and more!</p>
    </React.Fragment>
  )
}
function ApiResultsBox(props) {
  return (
    <section className="apiResultsContainer">
      {genFakeArray().map((element, i) => {
        return (<ApiResultItem key={Date.now().toString() + i.toString()}></ApiResultItem>)
      })}
    </section>
  )
}
function ApiResultItem(props) {
  return (
    <div>
      <h3>Pass title though props</h3>
      <p>Pass discription though props</p>

      <hr></hr>

    </div>
  )
}
function Main(props) {
  return (
    <React.Fragment>
      <SearchBox handleClick={props.handleClick}></SearchBox>
      <GoogleMaps></GoogleMaps>
      <ApiResultsBox></ApiResultsBox>
      <ApiResultsBox></ApiResultsBox>
      <ApiResultsBox></ApiResultsBox>
      <ApiResultsBox></ApiResultsBox>
      <ApiResultsBox></ApiResultsBox>

    </React.Fragment>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }

  handleClick = e => {
    console.log('hdl ck')
    e.preventDefault();
  }

  sayThings = (e) => { e.preventDefault(); console.log('im dynamic') }

  render() {
    return (
      <React.Fragment>
        {/* <form>
          <Form handleClick={this.sayThings}></Form>
        </form> */}
        <Header></Header>
        <Main handleClick={this.handleClick}>

        </Main>
        {/* Form is the constructor function that will build my form and button */}
        {/* <Form handleClick={this.handleClick} nicholas="teacher"></Form> */}
        <ul>

          {this.state.results.map((character, i) => (
            <li key={character.url}><a href={character.url}>{character.name}</a></li>
          ))}

        </ul>
      </React.Fragment>
    )
  }
}

export default App;
