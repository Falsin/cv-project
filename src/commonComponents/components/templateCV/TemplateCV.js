import React from 'react';
import GeneralInfo from './generalInfo/GeneralInfo'

class TemplateCV extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = this.props.parentScope();
  }

  returnParentScope() {
    return this;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.parentScope.setState(this.state)
    }
  }

  render() {
    return(
      <GeneralInfo parentScope={this.returnParentScope.bind(this)}/>
    )
  }
}

export default TemplateCV;