import React from 'react';
import OutputPersonalInfo from './personalInfoBlock/OutputPersonalInfo';
import CloneObj from '../../additionalComponents/CloneObj';
import OutputEducationalExperience from './personalInfoBlock/OutputEducationalExperience';

class PreviewCV extends React.Component {
  constructor(props) {
    super(props)

    this.CommonParentScope = props.parentScope();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState === this.state) {
      this.setState(CloneObj(this.CommonParentScope.state))
    }
  }

  returnParentScope() {
    return this;
  }

  render() {
    console.log(this.state)
    return (
      <section id='previewCV'>
        <div id='commonInformation'>
          <OutputEducationalExperience />
        </div>
        <div id='personalInformation'>
          <div id='photoBlock'></div>
          {this.CommonParentScope.state && 
          <OutputPersonalInfo returnParentScope={this.returnParentScope.bind(this)} />}
        </div>
      </section>
    )
  }
}

export default PreviewCV