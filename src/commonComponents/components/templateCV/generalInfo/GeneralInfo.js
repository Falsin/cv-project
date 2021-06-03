import React from 'react';
import uniqid from 'uniqid';
import CountryComp from './commonInfoComponents/CountryComp'
import PhotoComp from './commonInfoComponents/PhotoComp'

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeElemArr: [],
      //countryNamesArr: [],
      /* enteredVal: {
        value: '',
        id: uniqid()
      }, */
    }
    
    this.parentScope = props.parentScope();
  }

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

  clickHandler() {
    this.parentScope.setState({
      activeElemArr: this.state.activeElemArr,
      enteredVal: {
        value: this.state.enteredVal.value,
        id: this.state.enteredVal.id
      },
      avatar: this.state.avatar,
    })
  }
  
  render() {
    return(
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

          <PhotoComp parentScope={this.returnParentScope.bind(this)} />
        </div>

        <button onClick={() => this.clickHandler()}>Add information</button>
      </section>
    )
  }
}

export default GeneralInfo;