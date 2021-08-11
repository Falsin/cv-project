import React from 'react'
import cloneObj from '../../../additionalComponents/CloneObj';
import CreateListCompForTemplate from '../../../additionalComponents/CreateListCompForTemplate';
import ButtonsSection from '../../../additionalComponents/componentsForButtonSection/ButtonsSectionComp';
import { input } from '../../../additionalComponents/ComponentsForInputsElements/InputsComponents';
import createBtnsAttr from '../../../additionalComponents/componentsForButtonSection/createBtnsAttr';

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
    const btns = createBtnsAttr.call(this, duplicateState, 'educExp');

    return (
      <section className='expBlock'>
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

        <ButtonsSection btns={btns}/>
      </section>
    )
  }
}

export default EducationalExperience;