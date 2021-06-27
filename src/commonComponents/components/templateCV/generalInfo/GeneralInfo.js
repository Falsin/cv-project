import React from 'react';
import InfoBox from './commonInfoComponents/InfoBox';
import PhotoComp from './commonInfoComponents/PhotoComp'

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        Name: '',
        Email: '',
        Phone: '',
        Country: '',
      }
    }
    
    this.parentScope = props.parentScope();
    this.commonParentScope = this.parentScope.commonParentScope;

    this.changeHandler = this.parentScope.changeHandler.bind(this);
    this.clickHandler = this.parentScope.clickHandler.bind(this);
    this.addPropertiesInState = this.parentScope.addPropertiesInState.bind(this);
  }

  returnParentScope() {
    return this;
  }

  componentDidMount() {
    this.parentScope.setState(this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log(this.state)
      this.parentScope.setState(this.state)
    }
  }
  
  render() {
    return(
      <section>
        <form>
          <div className='infoBlocks'>
            <InfoBox parentScope={this.returnParentScope.bind(this)}/>

            <PhotoComp parentScope={this.returnParentScope.bind(this)} />
          </div>
          <input type='button' value='Add information' onClick={() => {
            this.clickHandler(Object.keys(this.state)[0], this.commonParentScope)}
          }></input>
        </form>

      </section>
    )
  }
}

export default GeneralInfo;