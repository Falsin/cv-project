import React from 'react';
import InfoBox from './commonInfoComponents/InfoBox';
import PhotoComp from './commonInfoComponents/PhotoComp'

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeElemArr: [],
      generalInfo: {
        personalInfo: {
          Name: '',
          Email: '',
          Phone: '',
          Country: '',
        }
      },
    }
    
    this.parentScope = props.parentScope();
  }

  changeHandler(e) {
    if (e.target.value.length > 0 && ![...e.target.classList].includes('active')) {
      e.target.classList.add('active');
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
    cloneObj.personalInfo[e.target.id] = e.target.value;

    this.setState({generalInfo: cloneObj})
  }

  componentDidMount() {
    this.parentScope.setState({
      generalInfo: this.state.generalInfo,
    })
  }
  
  render() {
    return(
      <section>
        <form>
          <div className='infoBlocks'>
            <InfoBox parentScope={this.returnParentScope.bind(this)}/>

            <PhotoComp parentScope={this.returnParentScope.bind(this)} />
          </div>
          <input type='button' value='Add information' onClick={() => this.clickHandler()}></input>
        </form>

      </section>
    )
  }
}

export default GeneralInfo;