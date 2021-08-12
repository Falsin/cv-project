import React from 'react';
import { InputComp } from './ComponentsForInputsElements/InputsComponents';

class CreateListCompForTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.scope = this.props.scope;
    this.collectionInputElements = (() => {
      return Object.values(props.subObj).map(elem => {
        if (typeof elem === 'object') {
          return elem.inputElem()
        }
      })
    })()

    this.state = {
      isRemovedElements: false
    }
  }

  reduceArray(index) {
    let interimArr = [...this.state.idHtmlWithError];
    interimArr.splice(index, 1);
    this.setState({
      idHtmlWithError: interimArr
    })
  }

  componentDidUpdate() {
    let initianArray = Object.values(this.props.subObj);
    let array = [];

    for (const iterator of initianArray) {
      if (typeof iterator === 'object') {
        array.push(iterator)
      }
    }

    let checkThisProps = array.every(elem => elem.value !== '');

    this.props.subObj.isValid = checkThisProps ? true : false;

    //console.log('update')
    if (this.props.scope.state.removedElements && this.props.scope.state.removedElements.length) {
      //console.log('update')
      new Promise(res => {
        res(this.setState({isRemovedElements: true}))
      })
      //.then(() => console.log(this.state))
    } else if (this.props.scope.state.removedElements && !this.props.scope.state.removedElements.length) {
      this.setState({isRemovedElements: false})
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state.isRemovedElements !== nextState.isRemovedElements
/*     const currentArr = this.props.scope.state.removedElements;
    const nextArr = nextProps.scope.state.removedElements;

    console.log(this.props.subObj !== nextProps.subObj)
    console.log(currentArr)

    if (currentArr) {
      if (currentArr.length === 0 && nextArr.length !== 0) {
        return true;
      } else if (currentArr.length !== 0 && nextArr.length === 0) {
        return true;
      }
    } else if (this.props.subObj !== nextProps.subObj) {
      return true;
    }
    return false; */

    /* return (currentArr && ((currentArr.length === 0 && nextArr.length !== 0)
    || (currentArr.length !== 0 && nextArr.length === 0))) */
  }

  render() {
    return (
      <ul>
        {Object.entries(this.props.subObj).map((item, id) => {
          if (typeof item[1] === 'object') {
            return <InputComp scope={this} array={item} elem={this.collectionInputElements[id]} />
          } 
          return null;
        })}
      </ul>
    )
  }
}

export default CreateListCompForTemplate;