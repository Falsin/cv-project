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
      <section id='commonInformation'>
        <OutputInfoComp obj={this.props.obj.educExp} headline='Educational experience'/>
        <OutputInfoComp obj={this.props.obj.practicExp} headline='Practical experience'/>
      </section>
    )
  }
}

export default CommonInformation;