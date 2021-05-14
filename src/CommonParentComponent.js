import React from 'react';
import TemplateCV from './components/templateCV'
import PreviewCV from './components/PreviewCV'

class CommonParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TemplateCV />
        <PreviewCV />
      </div>
    )
  }
}

export default CommonParentComponent