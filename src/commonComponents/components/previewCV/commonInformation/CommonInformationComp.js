import React from 'react';
import OutputEducationalExperience from './compForCommonInformation/OutputEducationalExperience';

class CommonInformation extends React.Component {
  componentDidMount() {
    this.setState(this.props.obj);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
        this.setState(this.props.obj);
      }
  }

  render() {
    return (
      <div id='commonInformation'>
        {this.state && <OutputEducationalExperience parentState={this.state}/>}
        {this.state && <OutputPracticalExperience parentState={this.state}/>}
      </div>
    )
  }
}

class OutputPracticalExperience extends React.Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}

export default CommonInformation;