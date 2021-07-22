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
      </div>
    )
  }
}

export default CommonInformation;