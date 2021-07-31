import React from 'react';
import uniqid from 'uniqid';
import cloneObj from '../../../../../additionalComponents/CloneObj';

class CountryComp extends React.Component {
  constructor(props) {
    super(props);
    //this.parentScope = props.parentScope;
    this.countryNamesArr = [];
    //this.objName = props.obj[0];

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

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
    if (prevState === null) {
      let duplicateState = cloneObj(this.parentScope.state);
      duplicateState.objKeys.objName = this.props.obj[0];
      this.props.parentScope.setState(duplicateState);
    }
  }
  
  render() {
    if (this.parentScope) {
      return ((this.parentScope.readonly) 
        ? <input type={this.props.type} value={this.props.obj[1].value} readOnly />
        : <input type={this.props.type} onBlur={(e) => {
          this.parentScope.blur(e, this);
          //this.parentScope.forceUpdate();
          //this.changeClassName(e)
          /* if (e.target.value.length > 0) {
            console.log(e.target.value.length)
            this.setState({className: 'validValue'})
          } */
        }}
            defaultValue={this.props.obj[1].value} id={this.props.obj[1].uniqIndex}
            className={this.state.className}
            />
      )
    }
    return null;

    /* return((this.parentScope.readonly)
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
    ) */
  }
}

export default CountryComp;