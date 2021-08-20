import React from 'react';
import ButtonsSection from '../../../additionalComponents/componentsForButtonSection/ButtonsSectionComp';
import cloneObj from '../../../additionalComponents/CloneObj';
import CreateListCompForTemplate from '../../../additionalComponents/CreateListCompForTemplate';
import createBtnsAttr from '../../../additionalComponents/componentsForButtonSection/createBtnsAttr';
import {input, textArea} from '../../../additionalComponents/ComponentsForInputsElements/funcForCreatingInputsElements'

class PracticalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      practicalExperience: {
        'Company name': {
          value: '',
          inputElem: input.bind(this, 'text'),
        },
        'Position title': {
          value: '',
          inputElem: input.bind(this, 'text'),
        },
        'Main tasks of your jobs': {
          value: '',
          inputElem: textArea.bind(this, 'text'),
        },
        'From': {
          value: '',
          inputElem: input.bind(this, 'date'),
        },
        'To': {
          value: '',
          inputElem: input.bind(this, 'date'),
        },

        isValid: true,
      },

      practicalExperienceCollection: [],
      removedElements: []
    }

    this.parentScope = props.parentScope();
    this.commonParentScope = this.parentScope.commonParentScope;
    this.defaultState = cloneObj(this.state.practicalExperience);
  }

  componentDidMount() {
    this.parentScope.setState({practicExp: cloneObj(this.state)});
  }

  shouldComponentUpdate(prevProps, prevState) {
    return prevState !== this.state;
  }

  render() {
    let duplicateState = cloneObj(this.state);
    const btns = createBtnsAttr.call(this, duplicateState, 'practicExp');

    let templateComp = (this.state.removedElements.length) 
                        ? <CreateListCompForTemplate subObj={duplicateState.practicalExperience} obj={duplicateState} scope={this} isRemoved={true}/>
                        : <CreateListCompForTemplate subObj={duplicateState.practicalExperience} obj={duplicateState} scope={this}/>

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

        {templateComp}

        <ButtonsSection btns={btns} />
      </section>
    )
  }
}

export default PracticalExperience;