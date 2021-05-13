import React from 'react';
import uniqid from 'uniqid';

class TemplateCV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeElemArr: [],
      countryNamesArr: [],
      enteredVal: {
        value: '',
        id: uniqid()
      },
    }
  }

/*   changeHandler(e) {
    console.log(e.target.value.length === 0)
    if (e.target.value.length > 0) {
      if (![...e.target.classList].includes('active')) {
        e.target.classList.add('active')
        this.setState({
          activeElemArr: [...this.state.activeElemArr, e.target]
        })
      }
      if (e.target.id === 'country') {
        this.setState({
          enteredVal: {
            value: e.target.value,
            id: uniqid(),
          }
        })
      }
      
    } else if (!e.target.value.length) {
      console.log('remove')
      e.target.classList.remove('active')
      const index = this.state.activeElemArr.indexOf(e.target);
      const newArr = this.state.activeElemArr;
      newArr.splice(index, 1);
      this.setState({
        activeElemArr: newArr,
      })
    }
  } */

  changeHandler(e) {
    if (e.target.value.length > 0 && ![...e.target.classList].includes('active')) {
      e.target.classList.add('active')
      this.setState({
        activeElemArr: [...this.state.activeElemArr, e.target]
      })
    } else if (!e.target.value.length) {
      e.target.classList.remove('active');
      this.setState({
        activeElemArr: this.state.activeElemArr.filter(elem => elem !== e.target),
      })
    }
  }

  returnParentScope() {
    return this;
  }

  render() {
    console.log(this.state)
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

            <CountryComp parentScope={this.returnParentScope.bind(this)}/>
          </div>

          <div className='photo'>
            <input type='file'></input>
          </div>
        </div>
      </section>
    )
  }
}

class CountryComp extends React.Component {
  constructor(props) {
    super(props);
    this.parentScope = props.parentScope();
  }

  getCountryList() {
    return fetch(`https://restcountries.eu/rest/v2/all`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      this.parentScope.setState({
        countryNamesArr: response,
      })
    })
  }

  componentDidMount(prevProps, prevState) {
    if (prevState !== this.state) {
      this.getCountryList()
    }
  }

  createListElements() {
    let collection = [];
    let enteredVal = this.parentScope.state.enteredVal.value;

    for (const {name} of this.parentScope.state.countryNamesArr) {
      if(enteredVal.length >= 2 && name.includes(enteredVal)) {
        collection.push({
          id: uniqid(),
          name: name,
        });
      }
    }
    return collection;
  }

  enteredValHandler(e) {
    this.parentScope.changeHandler.bind(this.parentScope);
    this.parentScope.setState({
      enteredVal: {
        value: e.target.value,
        id: uniqid(),
      }
    })
  }
  
  render() {
    return (
      <div>
        <label htmlFor='country'>Country</label>
            {/* <input id='country' type='text' onChange={this.parentScope.changeHandler.bind(this.parentScope)} list='cityName'></input> */}
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

/* class TemplateCV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeElemArr: [],
      countryNamesArr: [],
      enteredVal: {
        value: '',
        id: uniqid()
      },
    }
  }

  getCountryList() {
    return fetch(`https://restcountries.eu/rest/v2/all`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      this.setState({
        countryNamesArr: response,
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
          enteredVal: {
            value: e.target.value,
            id: uniqid(),
          }
        })
      }
    } else if (!e.target.value.length) {
      e.target.classList.remove('active')
    }
  }

  createListElements() {
    let collection = [];
    let enteredVal = this.state.enteredVal.value;

    for (const {name} of this.state.countryNamesArr) {
      if(enteredVal.length >= 2 && name.includes(enteredVal)) {
        collection.push({
          id: uniqid(),
          name: name,
        });
      }
    }
    return collection;
  }

  returnParentScope() {
    return this;
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
               {this.createListElements().map(elem => {
                return <option key={elem.id}>{elem.name}</option>
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
} */



export default TemplateCV;