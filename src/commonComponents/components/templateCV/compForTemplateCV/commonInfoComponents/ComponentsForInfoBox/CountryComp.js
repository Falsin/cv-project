import React from 'react';
import uniqid from 'uniqid';

class CountryComp extends React.Component {
  constructor(props) {
    super(props);
    this.parentScope = props.parentScope;
    this.countryNamesArr = [];
    this.objName = props.obj[0];

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
    return((this.parentScope.readonly)
      ? <input type={this.props.type} value={this.props.obj[1].value} readOnly/>
      : <div>
          <input type={this.props.type} list='cityName'
            onChange={(e) => this.enteredValHandler(e)}
            onBlur={(e) => this.parentScope.blur(e, this)}
            id={this.props.obj[1].uniqIndex}
            defaultValue={this.props.obj[1].value} />
          <datalist id='cityName'>
            {this.createListElements().map(elem => {
              return <option key={elem.id}>{elem.name}</option>
            })} 
          </datalist>
        </div>
    )
  }
}

export default CountryComp;