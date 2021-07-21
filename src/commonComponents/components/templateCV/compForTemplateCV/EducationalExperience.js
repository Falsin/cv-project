import React from 'react'
import cloneObj from '../../../additionalComponents/CloneObj';
import CreateListCompForTemplate from '../../../additionalComponents/CreateListCompForTemplate';
import clickHandler from '../../../additionalComponents/ClickHandler';

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

  sendInfo(duplicateState) {
    let array = Object.values(this.state.educationalExperience);
    let check = array.every(elem => elem.value !== '');

    let checkСondition = this.state.educationalExperienceCollection.find((elem) => {
      return elem.isValid === false;
    })

    if (check && !checkСondition) {
      duplicateState.educationalExperienceCollection.push(duplicateState.educationalExperience);
      new Promise(res => {
        this.setState(duplicateState);
        res(this);
      })
      .then(response => {
        let subObj = {
          educExp: response.state,
        }

        clickHandler(subObj, response.commonParentScope);
        return response;
      })
      .then(response => {
        response.setState({educationalExperience: cloneObj(response.defaultState)})
      })
    }
  }

  addInfo() {
    let array = Object.values(this.state.educationalExperience);
    let check = array.every(elem => elem.value !== '')

    if (check) {
      let newObj = cloneObj(this.state.educationalExperience);
      let newArray = this.state.educationalExperienceCollection.slice(0);
      newArray.push(newObj)

      this.setState({
        educationalExperienceCollection: newArray,
        educationalExperience: cloneObj(this.defaultState),
      })
    }    
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