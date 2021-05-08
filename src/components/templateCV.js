import React from 'react';

let countryList;

function getCountryList() {
  return fetch(`https://restcountries.eu/rest/v2/all`, {mode: 'cors'})
  .then(response => response.json())
  .then(response => countryList = response)
}

getCountryList()


class TemplateCV extends React.Component {

  changeHandler(e) {
    console.log(e.target.value)
    console.log(countryList)

  }

  render() {
    return (
      <section>
        <div id='generalInfo'>
          <div>
            <label htmlFor='name'>Name</label>
            <input id='name'></input>

            <label htmlFor='email'>Email</label>
            <input id='email' type='email'></input>

            <label htmlFor='phone' type='tel'>Phone</label>
            <input id='phone'></input>

            <label htmlFor='country'>Country</label>
            <input id='country' type='country' onChange={(e) => this.changeHandler(e)}></input>
          </div>
          <div className='photo'>Hello!</div>
        </div>
      </section>
    )
  }
}

export default TemplateCV;