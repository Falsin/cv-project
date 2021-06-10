import React from 'react';
import CountryComp from './commonInfoComponents/CountryComp'
import PhotoComp from './commonInfoComponents/PhotoComp'

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeElemArr: [],
      generalInfo: {},
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
        activeElemArr: this.state.activeElemArr.filter(elem => elem !== e.target)
      })
    }

    this.addPropertiesInState(e)
  }

  returnParentScope() {
    return this;
  }

  clickHandler() { 
    this.parentScope.setState({
      generalInfo: this.state.generalInfo,
    })
  }

  addPropertiesInState(e) {
    let cloneObj = {...this.state.generalInfo};

    if (!e.target.value.length) {
      delete cloneObj[e.target.labels[0].textContent]
    } else {
      cloneObj[e.target.labels[0].textContent] = e.target.value
    }

    this.setState({generalInfo: cloneObj})
  }
  
  render() {
    return(
      <section>
        <form>
          <div className='infoBlocks'>
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
          <input type='button' value='Add information' onClick={() => this.clickHandler()}></input>
        </form>

      </section>
    )
  }
}

export default GeneralInfo;