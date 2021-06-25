import React from 'react';

class PreviewCV extends React.Component {
  constructor(props) {
    super(props)

    this.parentScope = props.parentScope();
  }

  render() {
    return (
      <section id='previewCV'>
        <div id='commonInformation'>
          hello
        </div>
        <div id='personalInformation'>
          <div id='photoBlock'></div>

          {this.parentScope.state && 
          <OutputPersonalInfo obj={this.parentScope.state.generalInfo.personalInfo} />}
          
        </div>
      </section>
    )
  }
}

export default PreviewCV

class OutputPersonalInfo extends React.Component {
  render() {
    console.log('the component')
    return (
      <form>
        <h2>Personal information</h2>

        {Object.entries(this.props.obj).map((elem, id) => {
          return (
            <div key={id}>
              <label>{elem[0]}</label>
              <input value={elem[1]} readOnly></input>
            </div>
          )
        })}
      </form>
    )
  }
}