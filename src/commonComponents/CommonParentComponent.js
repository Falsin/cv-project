import React from 'react';
import TemplateCV from './components/TemplateCV'
import PreviewCV from './components/previewCV/PreviewCV'

class CommonParentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.returnCommonParentComponent = this.returnCommonParentComponent.bind(this);
  }

  returnCommonParentComponent() {
    return this;
  }

/*   componentWillUpdate() {
    console.log(this.state)
  } */

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <TemplateCV parentScope={this.returnCommonParentComponent} />
        <PreviewCV />
      </div>
    )
  }
}

export default CommonParentComponent