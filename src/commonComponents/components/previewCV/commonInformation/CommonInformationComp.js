import React from 'react';
import OutputEducationalExperience from './compForCommonInformation/OutputEducationalExperience';
import changeHandler from '../../../additionalComponents/ChangeHandler';
import { Input1 } from '../../../additionalComponents/ComponentsForInputsElements/InputsComponents';

class CommonInformation extends React.Component {
  componentDidMount() {
    this.setState(this.props.obj);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
        this.setState(this.props.obj);
      }
  }

  render() {
    console.log(this.state)
    return (
      <div id='commonInformation'>
        {this.state && <OutputEducationalExperience obj={this.state.educExp}/>}
        {this.state && <OutputPracticalExperience obj={this.state.practicExp}/>}
      </div>
    )
  }
}

class OutputPracticalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.readonly = true;
  }

  render() {
  let obj = this.props.obj,
      collectionPracticExp = obj.practicalExperienceCollection,
      templatePracticExp = obj.practicalExperience,
      renderComp = (collectionPracticExp.length) 
                  ? <CollectionPracticExp array={collectionPracticExp}/> 
                  : <TemplatePracticExp obj={templatePracticExp}/>; 


    return (
      <div>
        <h2>Practical Experience</h2>

        {renderComp}
{/*         <ul>
          {obj.practicalExperienceCollection.map((elem, id) => {
            return (
              <li key={id}>
                <ul>
                  {Object.entries(elem).map((item, id) => {
                    console.log(item[1])
                    if (typeof item[1] === 'object') {
                      return (
                        <li>
                          <label>{item[0]}</label>
                          {item[1].returnInputElem.call(this, item, id)}
                        </li>
                      )   
                    }
                    return null;
                  })}
                </ul>
              </li>
            )
          })}
        </ul> */}
      </div>
    )
  }
}

class TemplatePracticExp extends React.Component {
  render() {
    return (
      /* <CreateListCompForPreview obj={this.props.obj} /> */
      <ul>
        {Object.entries(this.props.obj).map((elem, id) => {
          console.log(elem)
          if (typeof elem[1] === 'object') {
            <li key={id}>
              <label>{elem[0]}</label>
              {elem[1].returnInputElem.call(this, elem, id)}
            </li>
          } else {
            return null;
          }
          return (
            <li key={id}>
              <label>{elem[0]}</label>
              {elem[1].returnInputElem.call(this, elem, id)}
              {/* <ul>
                {Object.entries(elem).map((item, id) => {
                  console.log(item[1])
                  if (typeof item[1] === 'object') {
                    return (
                      <li>
                        <label>{elem[0]}</label>
                        {item[1].returnInputElem.call(this, item, id)}
                      </li>
                    )   
                  }
                  return null;
                })}
              </ul> */}
            </li>
          )
        })}
      </ul>
    )
  }
}

class CollectionPracticExp extends React.Component {
  render() {
    return (
      <ul>
        {this.props.array.map((elem, id) => {
          return (
            <li key={id} className='EducExpBlock'>
              <ul>
                {Object.entries(elem).map((item, id) => {
                  console.log(item[1])
                  if (typeof item[1] === 'object') {
                    return (
                      <li>
                        <label>{item[0]}</label>
                        {item[1].returnInputElem.call(this, item, id)}
                      </li>
                    )   
                  }
                  return null;
                })}
              </ul>
            </li>
          )
        })}
      </ul>

    )
  }
}


/*
      <ul>
          {this.props.obj.practicalExperienceCollection.map((elem, id) => {
            return (
              <li key={id}>
                <ul>
                  {Object.entries(elem).map((item, id) => {
                    console.log(item[1])
                    if (typeof item[1] === 'object') {
                      return (
                        <li>
                          <label>{item[0]}</label>
                          {item[1].returnInputElem.call(this, item, id)}
                        </li>
                      )   
                    }
                    return null;
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
*/
export default CommonInformation;