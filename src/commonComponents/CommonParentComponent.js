import React from 'react';
import TemplateCV from './components/templateCV/TemplateCV';
import PreviewCV from './components/previewCV/PreviewCV';

class CommonParentComponent extends React.Component {

  render() {
    return (
      <div>
        <TemplateCV parentScope={this} />
        <PreviewCV parentScope={this}/>
      </div>
    )
  }
}

export default CommonParentComponent