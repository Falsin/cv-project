import React from 'react';
import OutputInfoComp from '../../../additionalComponents/componentsForOuputPreviewInfo/OutputInfoComp';

class CommonInformation extends React.Component {
  componentDidMount() {
    this.setState(this.props.obj);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
        this.setState(this.props.obj);
      }
  }

  render() {
    return (
      <div id='commonInformation'>
        {this.state && <OutputInfoComp obj={this.state.educExp} headline='Educational experience'/>}
        {this.state && <OutputInfoComp obj={this.state.practicExp} headline='Practical experience'/>}
      </div>
    )
  }
}

export default CommonInformation;