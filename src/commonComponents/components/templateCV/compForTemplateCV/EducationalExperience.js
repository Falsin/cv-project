import React from 'react'
import CloneObj from '../../../additionalComponents/CloneObj';
import ChangeHandler from '../../../additionalComponents/ChangeHandler';
import ClickHandler from '../../../additionalComponents/ClickHandler';

class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educationalExperience: {
        'School name': {
          value: '',
          type: 'text'
        },
        'Title of study': {
          value: '',
          type: 'text'
        },
        'Date of study': {
          value: '',
          type: 'date'
        },
      }
    }

    this.parentScope = props.parentScope();
    this.commonParentScope = this.parentScope.commonParentScope;
  }

  componentDidMount() {
    this.parentScope.setState(CloneObj({}, this.state));
  }

  render() {
    return (
      <section>
        <ul>
          {Object.entries(this.state.educationalExperience).map((elem, id) => {
            return (
              <li key={id}>
                <label htmlFor={elem[0]}>{elem[0]}</label>
                <input type={elem[1].type} id={elem[0]} onChange={(e) => {
                  ChangeHandler.call(this.parentScope, e, Object.keys(this.state)[0])
                }}></input>
              </li>
            )
          })}
        </ul>
        
        <input type='button' value='Add information' onClick={() => {
          ClickHandler.call(this.parentScope, Object.keys(this.state)[0], this.commonParentScope)
        }}></input>
      </section>
    )
  }
}

export default EducationalExperience;