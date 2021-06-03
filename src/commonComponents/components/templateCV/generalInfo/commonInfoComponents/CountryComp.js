import React from 'react';
import uniqid from 'uniqid';

class CountryComp extends React.Component {
  constructor(props) {
    super(props);
    this.parentScope = props.parentScope();
    this.countryNamesArr = [];

    this.state = {
      enteredVal: {
        value: '',
        id: uniqid()
      },
    }
  }

  /* getCountryList() {
    return fetch(`https://restcountries.eu/rest/v2/all`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      this.parentScope.setState({
        countryNamesArr: response,
      })
    })
  } */

  getCountryList() {
    return fetch(`https://restcountries.eu/rest/v2/all`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      /* this.parentScope.setState({
        countryNamesArr: response,
      }) */
      this.countryNamesArr = response;
    })
  }

  /* createListElements() {
    let collection = [];
    const enteredVal = this.parentScope.state.enteredVal.value;
    const lowerCaseVal = enteredVal.toLowerCase();

    for (const {name} of this.parentScope.state.countryNamesArr) {
      const lowerCaseName = name.toLowerCase()
      if(enteredVal.length > 2 && lowerCaseName.includes(lowerCaseVal)) {
        collection.push({
          id: uniqid(),
          name: name,
        });
      }
    }
    return collection;
  } */

  createListElements() {
    let collection = [];
    const enteredVal = this.state.enteredVal.value;
    const lowerCaseVal = enteredVal.toLowerCase();

    for (const {name} of this.countryNamesArr) {
      const lowerCaseName = name.toLowerCase()
      if(enteredVal.length > 2 && lowerCaseName.includes(lowerCaseVal)) {
        collection.push({
          id: uniqid(),
          name: name,
        });
      }
    }
    return collection;
  }

  enteredValHandler(e) {
/*     Promise.resolve(this.parentScope)
      .then(response => {
        response.setState({
          enteredVal: {
            value: e.target.value,
            id: uniqid(),
          }
        })
        return response;
      })
      .then(response => response.changeHandler(e)) */

/*       this.setState({
        enteredVal: {
          value: e.target.value,
          id: uniqid()
        },
      })

      Promise.resolve(this.parentScope)
      .then(response => {
        response.setState(this.state)
        return response;
      })
      .then(response => response.changeHandler(e)) */

      Promise.resolve(this)
        .then(response => {
          response.setState({
            enteredVal: {
              value: e.target.value,
              id: uniqid()
            }
          })
          return this.parentScope
        })
        .then(response => {
          response.setState(this.state)
        })

  }

  componentDidMount() {
    this.getCountryList()
  }
  
  render() {
    return (
      <div>
        <label htmlFor='country'>Country</label>
            <input id='country' type='text' onChange={this.enteredValHandler.bind(this)} list='cityName'></input>
            <datalist id='cityName'>
               {this.createListElements().map(elem => {
                return <option key={elem.id}>{elem.name}</option>
              })} 
            </datalist>
      </div>
    )
  }
}

export default CountryComp