import React from 'react';
import changeHandler from './ChangeHandler';
import uniqid from 'uniqid';
import { InputComp } from './ComponentsForInputsElements/InputsComponents';
import cloneObj from './CloneObj';

class CreateListCompForTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.scope = this.props.scope;

    this.state = {
      idHtmlWithError: [],     // убрать
      objKeys: {},             // убрать
      collectionCompElem: [],  // убрать
      countElemWithError: 0,
    }
  }

  reduceArray(index) {
    let interimArr = [...this.state.idHtmlWithError];
    interimArr.splice(index, 1);
    this.setState({
      idHtmlWithError: interimArr
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.subObj)

/*    let checkPrevProps = Object.values(this.props.subObj).every(elem => {
    return typeof elem === 'object' && elem.value !== '';
  }); */

  let initianArray = Object.values(this.props.subObj);
  let array = [];

  for (const iterator of initianArray) {
    if (typeof iterator === 'object') {
      array.push(iterator)
    }
  }

  let checkThisProps = array.every(elem => {
    return elem.value !== '';
  });

   /* let checkThisProps = Object.values(this.props.subObj).every(elem => {
     return typeof elem === 'object' && elem.value !== '';
   }); */


/*    console.log(prevProps)
   console.log(this.props) */
   //console.log(checkThisProps)

   if (checkThisProps) {
     this.props.subObj.isValid = true;
   } else {
    this.props.subObj.isValid = false;
   }
    /* if (checkThisProps && prevProps.scope === checkThisProps) {
      this.props.subObj.isValid = true;
      this.scope.setState(this.props.obj);
    } else if (!checkThisProps && checkPrevProps === checkThisProps) {
      this.props.subObj.isValid = false;
      this.scope.setState(this.props.obj);
    } */
  }

  render() {
    //console.log(this.state)
    return (
      <ul>
        {Object.entries(this.props.subObj).map(item => {
          if (typeof item[1] === 'object') {
            return <InputComp scope={this} array={item} elem={item[1].inputElem} />
          } 
          return null;
        })}
      </ul>
    )
  }
}

export default CreateListCompForTemplate;