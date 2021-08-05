import React from 'react';
import GeneralInfo from './compForTemplateCV/GeneralInfo';
import EducationalExperience from './compForTemplateCV/EducationalExperience';
import PracticalExperience from './compForTemplateCV/PracticalExperience';

import CloneObj from '../../additionalComponents/CloneObj';

class TemplateCV extends React.Component {
  constructor(props) {
    super(props);

    this.commonParentScope = props.parentScope;
  }

  returnParentScope() {
    return this;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === null) {
      this.commonParentScope.setState(CloneObj(this.state));
    }
  }

  render() {
    return(
      <section id='templateCV'>
        <GeneralInfo parentScope={this.returnParentScope.bind(this)}/>
        <EducationalExperience parentScope={this.returnParentScope.bind(this)}/>
        {/* <PracticalExperience parentScope={this.returnParentScope.bind(this)} /> */}
      </section>
    )
  }
}

export default TemplateCV;