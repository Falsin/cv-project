import React from 'react'

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
  }

  render() {
    return (
      <div key={this.props.id}>
        <label htmlFor={this.props.nameElem}>{this.props.nameElem}</label>
        <input id={this.props.nameElem} onChange={(e) => {
          this.parentScope.changeHandler(e);
        }} />
      </div>
    )
  }
}

export default ContactInfo