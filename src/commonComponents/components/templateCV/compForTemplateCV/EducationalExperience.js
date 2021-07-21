import React from 'react'
import cloneObj from '../../../additionalComponents/CloneObj';
import CreateListCompForTemplate from '../../../additionalComponents/CreateListCompForTemplate';
import {addInfo, sendInfo} from '../../../additionalComponents/functionsForButtons';
import Button from '../../../additionalComponents/ButtonComp';

class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educationalExperience: {
        'School name': {
          value: '',
          type: 'text',
        },
        'Title of study': {
          value: '',
          type: 'text',
        },
        'Date of study': {
          value: '',
          type: 'date',
        },

        isValid: true,
      },

      educationalExperienceCollection: [],
    }

    this.parentScope = props.parentScope();
    this.commonParentScope = this.parentScope.commonParentScope;
    this.defaultState = cloneObj(this.state.educationalExperience);
  }

  componentDidMount() {
    this.parentScope.setState({educExp: cloneObj(this.state)});
  }

  render() {
    let duplicateState = cloneObj(this.state);

    return (
      <section className='EducExpBlock'>
        <h2>Educational experience</h2>

        <ul className='specialStyleKit'>
          {duplicateState.educationalExperienceCollection.map((item, id) => {
            return (
              <li key={id}>
                <CreateListCompForTemplate subObj={item} obj={duplicateState} scope={this}/>
              </li>
            )
          })}
        </ul>

        <CreateListCompForTemplate subObj={duplicateState.educationalExperience} obj={duplicateState} scope={this}/>
        
        <Button value='Add information' func={sendInfo.bind(this, duplicateState)} parentScope={this}/>
        <Button value='Plus' func={addInfo.bind(this)} parentScope={this}/>
      </section>
    )
  }
}

export default EducationalExperience;