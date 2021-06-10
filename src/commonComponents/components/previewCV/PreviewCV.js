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

          <form>
            <h2>Personal information</h2>

            <label>Name</label>
            <input id='currentName' readOnly></input>

            <label>Email</label>
            <input id='currentEmail' readOnly></input>

            <label>Phone</label>
            <input id='currentPhone' readOnly></input>

            <label>Country</label>
            <input id='currentCountry' readOnly></input>
          </form>
        </div>
      </section>
    )
  }
}

export default PreviewCV