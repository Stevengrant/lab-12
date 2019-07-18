import React from 'react';
let genFakeArray = () => {
  let rn = Math.floor(Math.random() * 20) + 1;
  let res = [];
  for (let i = 0; i < rn; i++) {
    res.push('Fake Data');
  }
  return res;
}

function SearchResults(props) {
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
export default SearchResults;
