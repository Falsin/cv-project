import React from 'react';
import ButtonsSection from '../../../additionalComponents/componentsForButtonSection/ButtonsSectionComp';
import cloneObj from '../../../additionalComponents/CloneObj';
import { textArea, input } from '../../../additionalComponents/ComponentsForInputsElements/InputsComponents';
import { addInfo, sendInfo } from '../../../additionalComponents/componentsForButtonSection/functionsForButtons';
import CreateListCompForTemplate from '../../../additionalComponents/CreateListCompForTemplate';

class PracticalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      practicalExperience: {
        'Company name': {
          value: '',
          inputElem: input('text'),
        },
        'Position title': {
          value: '',
          inputElem: input('text'),
        },
        'Main tasks of your jobs': {
          value: '',
          inputElem: textArea('text'),
        },
        'From': {
          value: '',
          inputElem: input('date'),
        },
        'To': {
          value: '',
          inputElem: input('date'),
        },

        isValid: true,
      },
      practicalExperienceCollection: []
    }

    this.parentScope = props.parentScope();
    this.commonParentScope = this.parentScope.commonParentScope;
    this.defaultState = cloneObj(this.state.practicalExperience);
  }

  componentDidMount() {
    this.parentScope.setState({practicExp: cloneObj(this.state)});
  }

  render() {
    let duplicateState = cloneObj(this.state);

    return (
      <section className='expBlock'>
        <h2>Practical experience</h2>

        <ul className='specialStyleKit'>
          {duplicateState.practicalExperienceCollection.map((item, id) => {
              return (
                <li key={id}>
                  <CreateListCompForTemplate subObj={item} obj={duplicateState} scope={this}/>
                </li>
              )
            })}
        </ul>

        <CreateListCompForTemplate subObj={duplicateState.practicalExperience} obj={duplicateState} scope={this}/>

        <ButtonsSection btns={[
            {
              value: 'Add information', 
              func: sendInfo.bind(this, duplicateState, 'practicExp')
            },
            {
              value: 'Plus', 
              func: addInfo.bind(this, duplicateState)
            }
          ]} />
      </section>
    )
  }
}

export default PracticalExperience;