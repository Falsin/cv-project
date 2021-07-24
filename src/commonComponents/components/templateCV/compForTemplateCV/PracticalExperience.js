import React from 'react';
import ButtonsSection from '../../../additionalComponents/componentsForButtonSection/ButtonsSectionComp';
import cloneObj from '../../../additionalComponents/CloneObj';
import { TextArea, Input } from '../../../additionalComponents/InputsComponents';
import { addInfo, sendInfo } from '../../../additionalComponents/componentsForButtonSection/functionsForButtons';
import CreateListCompForTemplate from '../../../additionalComponents/CreateListCompForTemplate';

class PracticalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      practicalExperience: {
        'Company name': {
          value: '',
          returnInputElem(parentScope, name, id, subObj, secondScope) {
            return <Input type='text' name={name} parentScope={parentScope} currentScope={this} id={id} subObj={subObj} secondScope={secondScope}/>
          }
        },
        'Position title': {
          value: '',
          returnInputElem(parentScope, name, id, subObj, secondScope) {
            return <Input type='text' name={name} parentScope={parentScope} currentScope={this} id={id} subObj={subObj} secondScope={secondScope}/>
          }
        },
        'Main tasks of your jobs': {
          value: '',
          returnInputElem(parentScope, name, id, subObj, secondScope) {
            return <TextArea name={name} parentScope={parentScope} currentScope={this} id={id} subObj={subObj} secondScope={secondScope}/>
          }
        },
        'From': {
          value: '',
          returnInputElem(parentScope, name, id, subObj, secondScope) {
            return <Input type='date' name={name} parentScope={parentScope} currentScope={this} id={id} subObj={subObj} secondScope={secondScope}/>
          }
        },
        'To': {
          value: '',
          returnInputElem(parentScope, name, id, subObj, secondScope) {
            return <Input type='date' name={name} parentScope={parentScope} currentScope={this} id={id} subObj={subObj} secondScope={secondScope}/>
          }
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
      <section>
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