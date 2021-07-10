import React from 'react';
import CreateList from '../../../../additionalComponents/CreateListComp';


class TemplateEducExp extends React.Component {
  render() {
    return (
      <CreateList obj={this.props.obj} />
    )
  }
}

export default TemplateEducExp;