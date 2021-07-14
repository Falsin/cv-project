import React from 'react';
import changeHandler from './ChangeHandler';
import uniqid from 'uniqid';

class CreateListCompForTemplate extends React.Component {
  render() {
    let duplicateState = this.props.obj;
    let scope = this.props.scope;

    return (
      <ul>
        {Object.entries(duplicateState).map((elem, id) => {
          return (
            <li key={uniqid()}>
              <label>{elem[0]}</label>
              <input type={elem[1].type} data-name={elem[0]}
                onBlur={(e) => {
                  scope.setState({
                    educationalExperience: changeHandler.call(duplicateState, e, elem[1]),
                  });
              }} 
              defaultValue={elem[1].value}
              ></input>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default CreateListCompForTemplate;