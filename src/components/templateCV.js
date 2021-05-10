import React from 'react';

class TemplateCV extends React.Component {

  getCountryList() {
    return fetch(`https://restcountries.eu/rest/v2/all`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      this.setState({
        cityArray: response
      })
    })
  }

  componentDidMount(prevProps, prevState) {
    if (prevState !== this.state) {
      this.getCountryList()
    }
  }

  changeHandler(e) {
    console.log(this.state.cityArray)
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
            <input id='country' type='country' onChange={(e) => this.changeHandler(e)} list='cityName'></input>
          </div>
          <div className='photo'>Hello!</div>
        </div>
      </section>
    )
  }
}

export default TemplateCV;