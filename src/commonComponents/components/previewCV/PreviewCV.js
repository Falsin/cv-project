import React from 'react';

class PreviewCV extends React.Component {
  constructor(props) {
    super(props)

    this.parentScope = props.parentScope();
  }

  render() {
    console.log(this.parentScope.state)
    return (
      <section id='previewCV'>
        <div id='commonInformation'>
          hello
        </div>
        <div id='personalInformation'>
          <div id='photoBlock'></div>
        </div>
      </section>
    )
  }
}

export default PreviewCV