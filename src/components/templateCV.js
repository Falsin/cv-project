import React from 'react';

class TemplateCV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeElemArr: [],
      cityNamesArr: [],
      enteredVal: '',
    }
  }

  getCountryList() {
    return fetch(`https://restcountries.eu/rest/v2/all`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      this.setState({
        cityNamesArr: response,
      })
    })
  }

  componentDidMount(prevProps, prevState) {
    if (prevState !== this.state) {
      this.getCountryList()
    }
  }

  changeHandler(e) {
    if (e.target.value.length >= 0) {
      if (![...e.target.classList].includes('active')) {
        e.target.classList.add('active')
        this.setState({
          activeElemArr: [...this.state.activeElemArr, e.target]
        })
      }
      if (e.target.id === 'country') {
        this.setState({
          enteredVal: e.target.value
        })
      }
    } else if (!e.target.value.length) {
      e.target.classList.remove('active')
    }
  }

  render() {
    return (
      <section>
        <div id='generalInfo'>
          <div>
            <label htmlFor='name'>Name</label>
            <input id='name' onChange={this.changeHandler.bind(this)}></input>

            <label htmlFor='email'>Email</label>
            <input id='email' type='email' onChange={this.changeHandler.bind(this)}></input>

            <label htmlFor='phone' type='tel'>Phone</label>
            <input id='phone' onChange={this.changeHandler.bind(this)}></input>

            <label htmlFor='country'>Country</label>
            <input id='country' type='text' onChange={this.changeHandler.bind(this)} list='cityName'></input>
            <datalist id='cityName'>
              {this.state.cityNamesArr.map(item => {
                if (this.state.enteredVal.length >= 2 && item.name.includes(this.state.enteredVal)) {
                  return <option>{item.name}</option>
                }
                return <option></option>
              })}
            </datalist>
          </div>

          <div className='photo'>
            <input type='file'></input>
          </div>
        </div>
      </section>
    )
  }
}

export default TemplateCV;