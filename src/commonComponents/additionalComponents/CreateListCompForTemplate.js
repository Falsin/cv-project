import React from 'react';
import changeHandler from './ChangeHandler';

class CreateListCompForTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.className = 'template'
  }

  render() {
    let duplicateState = this.props.obj;
    let scope = this.props.scope;

    return (
      <ul className={this.className}>
          {duplicateState.educationalExperienceCollection.map((item, index) => {
            return (
              <li key={item.id}>
                <ul>
                  {Object.entries(item.info).map((elem, id) => {
                    return (
                      <li key={id} className={id}>
                        <label>{elem[0]}</label>
                        <input defaultValue={elem[1].value} type={elem[1].type} data-name={elem[0]}
                          onBlur={(e) => {
                            scope.setState(changeHandler.call(duplicateState, e, elem[1]));
                          }}>
                        </input>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
    )
  }
}

export default CreateListCompForTemplate;