import React from 'react';
import uniqid from 'uniqid';
import ChangeHandler from '../../../../../additionalComponents/ChangeHandler';
import cloneObj from '../../../../../additionalComponents/CloneObj';

class CountryComp extends React.Component {
  constructor(props) {
    super(props);
    this.parentScope = props.parentScope;
    this.countryNamesArr = [];

    this.state = {
      enteredVal: {
        value: '',
        id: uniqid()
      },
    }
  }

  getCountryList() {
    return fetch(`https://restcountries.eu/rest/v2/all`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => this.countryNamesArr = response)
  }

  createListElements() {
    let collection = [];
    const enteredVal = this.state.enteredVal.value;
    const lowerCaseVal = enteredVal.toLowerCase();

    for (const {name} of this.countryNamesArr) {
      const lowerCaseName = name.toLowerCase()
      if(enteredVal.length > 2 && lowerCaseName.includes(lowerCaseVal) && enteredVal !== name) {
        collection.push({
          id: uniqid(),
          name: name,
        });
      }
    }
    return collection;
  }

  enteredValHandler(e) {
    this.setState({
      enteredVal: {
        value: e.target.value,
        id: uniqid()
      }
    })
  } 

  componentDidMount() {
    this.getCountryList();
  }
  
  render() {
    let nameElem = this.props.nameElem;
    let duplicateState = cloneObj(this.parentScope.state);


    return (
      <li>
        <label htmlFor={this.props.nameElem}>{this.props.nameElem}</label>
          <input data-name={this.props.nameElem} type='text' list='cityName'
            onChange={(e) => this.enteredValHandler(e)}

            onBlur={(e) => {
              this.parentScope.setState(ChangeHandler.call(duplicateState, e, duplicateState.generalInfo[nameElem]));
            }}>
          </input>
          <datalist id='cityName'>
              {this.createListElements().map(elem => {
              return <option key={elem.id}>{elem.name}</option>
            })} 
          </datalist>
      </li>
    )
  }
}

export default CountryComp