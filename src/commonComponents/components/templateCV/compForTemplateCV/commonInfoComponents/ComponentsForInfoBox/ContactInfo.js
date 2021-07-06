import React from 'react'
import ChangeHandler from '../../../../../additionalComponents/ChangeHandler';

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
  }

  render() {
    let nameElem = this.props.nameElem;

    return (
      <li key={this.props.id}>
        <label htmlFor={nameElem}>{nameElem}</label>
        <input id={nameElem} type={this.parentScope.state.generalInfo[nameElem].type}
          onChange={(e) => {
          ChangeHandler.call(this.parentScope, e, Object.keys(this.props.parentScope.state)[0], 'hello')
        }} />
      </li>
    )
  }
}

export default ContactInfo