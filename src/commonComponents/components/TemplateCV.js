import React from 'react';
import uniqid from 'uniqid';
import CountryComp from './previewCV/generalInfo/CountryComp'
import PhotoComp from './previewCV/generalInfo/PhotoComp'

class TemplateCV extends React.Component {
  returnParentScope() {
    return this;
  }

/*   componentWillUpdate() {
    console.log(this.state)
  } */

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state)
  }

  render() {
    return(
      <GeneralInfo parentScope={this.returnParentScope.bind(this)}/>
    )
  }
}

export default TemplateCV;

class GeneralInfo extends React.Component {
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
    
    this.parentScope = this.props.parentScope();
  }

  changeHandler(e) {
    console.log(this.state.enteredVal.value)
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

    this.parentScope.setState({
      activeElemArr: this.state.activeElemArr,
      enteredVal: {
        value: this.state.enteredVal.value,
        id: this.state.enteredVal.id
      }
    })

    //console.log(this.state.enteredVal.value)
  }

  returnParentScope() {
    return this;
  }

/*   componentDidUpdate(prevProps, prevState) {
    console.log(this.state)
  } */

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
      </section>
    )
  }
}