import React from 'react'
import ChangeHandler from '../../../../../additionalComponents/ChangeHandler';

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
  }

  render() {
    let nameElem = this.props.nameElem;
    let parentState = this.parentScope.state;

    return (
      <li key={this.props.id}>
        <label htmlFor={nameElem}>{nameElem}</label>
        <input id={nameElem} type={parentState.generalInfo[nameElem].type}
          onChange={(e) => {
          ChangeHandler.call(this.parentScope, e, Object.keys(parentState)[0])
        }} />
      </li>
    )
  }
}

export default ContactInfo