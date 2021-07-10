import React from 'react'
import CloneObj from '../../../additionalComponents/CloneObj';
import ChangeHandler from '../../../additionalComponents/ChangeHandler';
import ClickHandler from '../../../additionalComponents/ClickHandler';
import cloneObj from '../../../additionalComponents/CloneObj';
import uniqid from 'uniqid';

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
    //this.parentScope.setState(CloneObj(this.state));
    this.parentScope.setState({educExp: CloneObj(this.state)});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      //this.parentScope.setState(cloneObj(this.state))
      this.parentScope.setState({educExp: CloneObj(this.state)});
    }
  }

  render() {
    return (
      <section>
        <h2>Educational experience</h2>
        <ul>
          {this.state.educationalExperienceCollection.map((item) => {
            return (
              Object.entries(item.info).map((elem, id) => {
                return (
                  <li key={id} className={id}>
                    <label>{elem[0]}</label>
                    <input defaultValue={elem[1].value} type={elem[1].type}></input>
                  </li>
                )
              })
            )
          })}
        </ul>

        <ul>
          {Object.entries(this.state.educationalExperience.info).map((elem, id) => {
            return (
              <li key={uniqid()} className={id}>
                <label htmlFor={elem[0]}>{elem[0]}</label>
                <input type={elem[1].type} id={elem[0]} 
                onBlur={(e) => {
                  ChangeHandler.call(this, e, Object.keys(this.state)[0]);
                }} defaultValue={elem[1].value}></input>
              </li>
            )
          })}
        </ul>
        
        <input type='button' value='Add information' onClick={() => {
          let testObj = cloneObj(this.state);
          testObj.educationalExperienceCollection.push(testObj.educationalExperience)

          new Promise((res, rej) => {
            /* this.setState({
              educationalExperienceCollection: cloneObj(this.state.educationalExperience)
            }) */
            //this.setState(cloneObj(testObj))
            this.parentScope.setState({educExp: cloneObj(testObj)})
            res(this)
          })
          .then(response => {
            let prevScopeState = CloneObj(response.commonParentScope.state);
            prevScopeState.educExp = testObj;
            response.commonParentScope.setState(prevScopeState)
            
            //ClickHandler.call(response, Object.keys(response.state)[0], response.commonParentScope);
          })
        }}></input>

        <input type='button' value='Plus' onClick={() => {
          let newObj = CloneObj(this.state.educationalExperience);
          newObj.id = uniqid();
          let newArray = this.state.educationalExperienceCollection.slice(0);
          newArray.push(newObj)
          console.log(newArray)

          this.setState({
            educationalExperienceCollection: newArray,
            educationalExperience: CloneObj(this.defaultState),
          })

        }}></input>
      </section>
    )
  }
}

/* 
function clickHandler(propertyName, scope) {
  let prevScopeState = CloneObj(scope.state);
  console.log(prevScopeState)
  prevScopeState[propertyName] = this.state[propertyName];
  console.log(prevScopeState)
  scope.setState(prevScopeState);
}

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
      }

    }

    this.parentScope = props.parentScope();
    this.commonParentScope = this.parentScope.commonParentScope;
  }

  componentDidMount() {
    this.parentScope.setState(CloneObj(this.state));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.parentScope.setState(cloneObj(this.state))
    }
  }

  render() {
    return (
      <section>
        <h2>Educational experience</h2>
        <ul>
          {Object.entries(this.state.educationalExperience).map((elem, id) => {
            return (
              <li key={id}>
                <label htmlFor={elem[0]}>{elem[0]}</label>
                <input type={elem[1].type} id={elem[0]} onChange={(e) => {
                  ChangeHandler.call(this, e, Object.keys(this.state)[0]);
                }}></input>
              </li>
            )
          })}
        </ul>
        
        <input type='button' value='Add information' onClick={() => {
          ClickHandler.call(this, Object.keys(this.state)[0], this.commonParentScope);
        }}></input>
      </section>
    )
  }
} */

export default EducationalExperience;