import React from 'react';
import TemplateCV from './components/templateCV/TemplateCV'
import PreviewCV from './components/previewCV/PreviewCV'

class CommonParentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.returnCommonParentComponent = this.returnCommonParentComponent.bind(this);
  }

  returnCommonParentComponent() {
    return this;
  }

  render() {
    return (
      <div>
        <TemplateCV parentScope={this.returnCommonParentComponent} />
        <PreviewCV parentScope={this.returnCommonParentComponent}/>
      </div>
    )
  }
}

export default CommonParentComponent