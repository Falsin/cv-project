import React from 'react'
import CloneObj from '../../../additionalComponents/CloneObj';
import ChangeHandler from '../../../additionalComponents/ChangeHandler';
import ClickHandler from '../../../additionalComponents/ClickHandler';
import cloneObj from '../../../additionalComponents/CloneObj';
import uniqid from 'uniqid';
import CreateListCompForTemplate from '../../../additionalComponents/CreateListCompForTemplate';

class EducationalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educationalExperience: {
        id: uniqid(),
        info: {
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
        }
      },
      educationalExperienceCollection: [],
    }

    this.parentScope = props.parentScope();
    this.commonParentScope = this.parentScope.commonParentScope;
    this.defaultState = CloneObj(this.state.educationalExperience);
  }

  componentDidMount() {
    this.parentScope.setState({educExp: CloneObj(this.state)});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.parentScope.setState({educExp: CloneObj(this.state)});
    }
  }

  sendInfo(duplicateState) {
    duplicateState.educationalExperienceCollection.push(duplicateState.educationalExperience)

    new Promise((res, rej) => {
      this.parentScope.setState({educExp: cloneObj(duplicateState)})
      res(this)
    })
    .then(response => {
      let prevScopeState = CloneObj(response.commonParentScope.state);
      prevScopeState.educExp = duplicateState;
      response.commonParentScope.setState(prevScopeState)
    })
  }

  addInfo() {
    let array = Object.values(this.state.educationalExperience.info);
    let check = array.every(elem => {
      return elem.value !== '';
    })

    if (check) {
      let newObj = CloneObj(this.state.educationalExperience);
      newObj.id = uniqid();
      let newArray = this.state.educationalExperienceCollection.slice(0);
      newArray.push(newObj)

      this.setState({
        educationalExperienceCollection: newArray,
        educationalExperience: CloneObj(this.defaultState),
      })
    }    
  }

  render() {
    let duplicateState = cloneObj(this.state)

    return (
      <section className='EducExpBlock'>
        <h2>Educational experience</h2>

        <CreateListCompForTemplate obj={duplicateState} scope={this}/>

        <ul>
          {Object.entries(duplicateState.educationalExperience.info).map((elem, id) => {
            return (
              <li key={uniqid()}>
                <label htmlFor={elem[0]}>{elem[0]}</label>
                <input type={elem[1].type} data-name={elem[0]}
                  onBlur={(e) => {
                    this.setState(ChangeHandler.call(duplicateState, e, elem[1]));
                  }} 
                defaultValue={elem[1].value}></input>
              </li>
            )
          })}
        </ul>
        
        <input type='button' value='Add information' 
          onClick={() => {
            this.sendInfo(duplicateState)
          }}>
        </input>

        <input type='button' value='Plus' 
          onClick={() => {
            this.addInfo()
          }}>  
        </input>
      </section>
    )
  }
}

export default EducationalExperience;