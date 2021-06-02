import React from 'react';
import TemplateCV from './components/TemplateCV'
import PreviewCV from './components/PreviewCV'

class CommonParentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.returnCommonParentComponent = this.returnCommonParentComponent.bind(this);
  }

  returnCommonParentComponent() {
    return this;
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <TemplateCV parentScope={this.returnCommonParentComponent} />
        <PreviewCV />
      </div>
    )
  }
}

export default CommonParentComponent