import React from 'react'
import cloneObj from '../../../additionalComponents/CloneObj';
import CreateListCompForTemplate from '../../../additionalComponents/CreateListCompForTemplate';

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

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.parentScope.setState({educExp: cloneObj(this.state)});
    }
  }

  sendInfo(duplicateState) {
    duplicateState.educationalExperienceCollection.push(duplicateState.educationalExperience);

    new Promise((res, rej) => {
      this.parentScope.setState(cloneObj(duplicateState))
      res(this)
    })
    .then(response => {
      let prevScopeState = cloneObj(response.commonParentScope.state);
      prevScopeState.educExp = duplicateState;
      response.commonParentScope.setState(prevScopeState)
    })

  }

  addInfo() {
    let array = Object.values(this.state.educationalExperience);
    let check = array.every(elem => {
      return elem.value !== '';
    })

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
    let duplicateState = cloneObj(this.state)

    return (
      <section className='EducExpBlock'>
        <h2>Educational experience</h2>

        <ul className='specialStyleKit'>
          {duplicateState.educationalExperienceCollection.map((item, id) => {
            return (
              <li key={id}>
                <CreateListCompForTemplate obj={item} scope={this}/>
              </li>
            )
          })}
        </ul>

        <CreateListCompForTemplate obj={duplicateState.educationalExperience} scope={this}/>
        
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