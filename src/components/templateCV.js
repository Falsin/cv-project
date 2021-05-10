import React from 'react';

class TemplateCV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeElemArr: [],
    }
  }


  getCountryList() {
    return fetch(`https://restcountries.eu/rest/v2/all`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      this.setState({
        cityArray: response,
      })
    })
  }

  componentDidMount(prevProps, prevState) {
    if (prevState !== this.state) {
      this.getCountryList()
    }
  }

  changeHandler(e) {
    if (e.target.value.length >= 0 && ![...e.target.classList].includes('active')) {
      e.target.classList.add('active')
      console.log(this.state.activeElemArr)
      this.setState({
        activeElemArr: [...this.state.activeElemArr, e.target]
      })
    } 
  }

  render() {
    return (
      <section>
        <div id='generalInfo'>
          <div>
            <label htmlFor='name'>Name</label>
            <input id='name' onChange={this.changeHandler.bind(this)} className='classEX DCCWF'></input>

            <label htmlFor='email'>Email</label>
            <input id='email' type='email' onChange={this.changeHandler.bind(this)}></input>

            <label htmlFor='phone' type='tel'>Phone</label>
            <input id='phone' onChange={this.changeHandler.bind(this)}></input>

            <label htmlFor='country'>Country</label>
            <input id='country' type='country' onChange={this.changeHandler.bind(this)} list='cityName'></input>
          </div>
          <div className='photo'>Hello!</div>
        </div>
      </section>
    )
  }
}

export default TemplateCV;