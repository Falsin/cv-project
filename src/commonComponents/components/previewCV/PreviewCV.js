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
      this.setState(CloneObj(this.CommonParentScope.state));
    }
  }

  render() {
    return (
      <section id='previewCV'>
        <div id='commonInformation'>
          {this.state && <OutputEducationalExperience parentState={this.state}/>}
        </div>

        <div id='personalInformation'>
          <div id='photoBlock'></div>
          {this.state && <OutputPersonalInfo parentState={this.state} />}
        </div>
      </section>
    )
  }
}

export default PreviewCV