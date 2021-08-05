import React from 'react'
import cloneObj from '../../../additionalComponents/CloneObj';
import CreateListCompForTemplate from '../../../additionalComponents/CreateListCompForTemplate';
import { addInfo, sendInfo } from '../../../additionalComponents/componentsForButtonSection/functionsForButtons';
import ButtonsSection from '../../../additionalComponents/componentsForButtonSection/ButtonsSectionComp';
import { input } from '../../../additionalComponents/ComponentsForInputsElements/InputsComponents';

class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educationalExperience: {
        'School name': {
          value: '',
          inputElem: input.bind(this, 'text'),
        },
        'Title of study': {
          value: '',
          inputElem: input.bind(this, 'text'),
        },
        'Date of study': {
          value: '',
          inputElem: input.bind(this, 'date'),
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
      <section className='expBlock'>
        <h2>Educational experience</h2>

        <ul className='specialStyleKit'>
          {duplicateState.educationalExperienceCollection.map((item, id) => {
            //console.log(item)
            return (
              <li key={id}>
                <CreateListCompForTemplate subObj={item} obj={duplicateState} scope={this}/>
              </li>
            )
          })}
        </ul>

        <CreateListCompForTemplate subObj={duplicateState.educationalExperience} obj={duplicateState} scope={this}/>

        <ButtonsSection btns={[
          {
            value: 'Add information', 
            func: sendInfo.bind(this, duplicateState, 'educExp')
          },
          {
            value: 'Plus', 
            func: addInfo.bind(this, duplicateState)
          }
        ]}/>
      </section>
    )
  }
}

export default EducationalExperience;