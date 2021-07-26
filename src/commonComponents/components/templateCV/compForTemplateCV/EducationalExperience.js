import React from 'react'
import cloneObj from '../../../additionalComponents/CloneObj';
import CreateListCompForTemplate from '../../../additionalComponents/CreateListCompForTemplate';
import { addInfo, sendInfo } from '../../../additionalComponents/componentsForButtonSection/functionsForButtons';
import ButtonsSection from '../../../additionalComponents/componentsForButtonSection/ButtonsSectionComp';
import { Input } from '../../../additionalComponents/ComponentsForInputsElements/InputsComponents';

class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educationalExperience: {
        'School name': {
          value: '',
          returnInputElem(childObj, id) {
            return <Input type='text' obj={childObj} id={id} parentScope={this}/>
          }
        },
        'Title of study': {
          value: '',
          returnInputElem(childObj, id) {
            return <Input type='text' obj={childObj} id={id} parentScope={this}/>
          }
        },
        'Date of study': {
          value: '',
          returnInputElem(childObj, id) {
            return <Input type='date' obj={childObj} id={id} parentScope={this}/>
          }
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