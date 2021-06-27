import React from 'react';
import GeneralInfo from './generalInfo/GeneralInfo';
import EducationalExperience from './EducationalExperience';

class TemplateCV extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope();
  }

  returnParentScope() {
    return this;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.parentScope.setState(this.state)
    }
  }

  changeHandler(e, propertyName) {
    if (e.target.value.length > 0 && ![...e.target.classList].includes('active')) {
      e.target.classList.add('active');
    } else if (!e.target.value.length) {
      e.target.classList.remove('active');
    }

    this.addPropertiesInState(e, propertyName)
  }

  clickHandler(propertyName) { 
    this.parentScope.setState({
      [propertyName]: Object.assign(this.state[propertyName])
    })
  }

  addPropertiesInState(e, propertyName) {
    console.log(propertyName)
    console.log(this.state)
    let cloneObj = Object.assign(this.state[propertyName]);
    cloneObj[e.target.id] = e.target.value;

    this.setState({
      [propertyName]: cloneObj,
    })
  }

  render() {
    return(
      <section id='templateCV'>
        <GeneralInfo parentScope={this.returnParentScope.bind(this)}/>
        <EducationalExperience parentScope={this.returnParentScope.bind(this)}/>
      </section>
    )
  }
}

export default TemplateCV;