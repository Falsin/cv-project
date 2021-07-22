import React from 'react';
import OutputPersonalInfo from './personalInfoBlock/OutputPersonalInfo';
import CloneObj from '../../additionalComponents/CloneObj';
import CommonInformation from './commonInformation/CommonInformationComp';

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
        {this.state && <CommonInformation obj={this.state}/>}

        {this.state && <OutputPersonalInfo parentState={this.state} />}
      </section>
    )
  }
}

export default PreviewCV