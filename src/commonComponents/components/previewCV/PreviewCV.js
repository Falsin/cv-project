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
            <input id='currentName' readOnly data-unique-key='Name' onLoad={() => console.log('hello!')}></input>

            <label>Email</label>
            <input id='currentEmail' readOnly data-unique-key='Email'></input>

            <label>Phone</label>
            <input id='currentPhone' readOnly data-unique-key='Phone'></input>

            <label>Country</label>
            <input id='currentCountry' readOnly data-unique-key='Country'></input>
          </form>
        </div>
      </section>
    )
  }
}

export default PreviewCV