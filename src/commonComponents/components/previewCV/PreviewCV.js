import React from 'react';
import OutputPersonalInfo from './personalInfoBlock/OutputPersonalInfo';

class PreviewCV extends React.Component {
  constructor(props) {
    super(props)

    this.parentScope = props.parentScope();
  }

  render() {
/* 
    if (this.parentScope.state) {
      console.log(this.parentScope.state)
    } */

    return (
      <section id='previewCV'>
        <div id='commonInformation'>
          hello
        </div>
        <div id='personalInformation'>
          <div id='photoBlock'></div>

          {this.parentScope.state && 
          <OutputPersonalInfo obj={this.parentScope.state.generalInfo} />}

        </div>
      </section>
    )
  }
}

export default PreviewCV