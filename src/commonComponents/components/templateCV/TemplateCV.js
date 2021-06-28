import React from 'react';
import GeneralInfo from './compForTemplateCV/GeneralInfo';
import EducationalExperience from './compForTemplateCV/EducationalExperience';

class TemplateCV extends React.Component {
  constructor(props) {
    super(props);

    this.commonParentScope = props.parentScope();
  }

  returnParentScope() {
    return this;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === null) {
      this.commonParentScope.setState(this.state)
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

   clickHandler(propertyName, scope) { 
    scope.setState(
      Object.assign({}, this.parentScope.state, {[propertyName]: this.state[propertyName]})
    )
  }

  componentDidMount() {
    this.commonParentScope.setState(this.state)
  }

  addPropertiesInState(e, propertyName) {
    let cloneObj = Object.assign(this.state[propertyName]);
    cloneObj[e.target.id] = e.target.value;
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