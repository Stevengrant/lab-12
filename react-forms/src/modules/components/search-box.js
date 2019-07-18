import React from 'react';
//superagent
function SearchBox(props) {
  let handleClick = (e) => {
    e.preventDefault()
    props.handleSearchFormClick(e.target.form[0].value)
  }
  return (
    <React.Fragment>
      <form>
        <input></input>
        <button onClick={handleClick}>search</button>
      </form>
    </React.Fragment>
  )
}

export default SearchBox;