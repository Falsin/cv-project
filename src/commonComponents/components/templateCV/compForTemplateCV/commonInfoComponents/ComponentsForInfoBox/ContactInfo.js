import React from 'react'
import ChangeHandler from '../../../../../additionalComponents/ChangeHandler';
import cloneObj from '../../../../../additionalComponents/CloneObj';

class ContactInfo extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
  }

  render() {
    let nameElem = this.props.nameElem;
    let parentState = this.parentScope.state;
    let duplicateState = cloneObj(parentState);

    return (
      <li key={this.props.id}>
        <label htmlFor={nameElem}>{nameElem}</label>
        <input type={parentState.generalInfo[nameElem].type}
          onBlur={(e) => {
            this.parentScope.setState(ChangeHandler.call(duplicateState, e, duplicateState.generalInfo[nameElem]));
        }} />
      </li>
    )
  }
}

export default ContactInfo