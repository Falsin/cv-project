import React from 'react'
import ChangeHandler from '../../../../../additionalComponents/ChangeHandler';

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
  }

  render() {
    return (
      <li key={this.props.id}>
        <label htmlFor={this.props.nameElem}>{this.props.nameElem}</label>
        <input id={this.props.nameElem} onChange={(e) => {
          ChangeHandler.call(this.parentScope, e, Object.keys(this.parentScope.state)[0])
        }} />
      </li>
    )
  }
}

export default ContactInfo