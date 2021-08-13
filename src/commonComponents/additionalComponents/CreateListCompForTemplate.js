import React from 'react';
import { InputComp } from './ComponentsForInputsElements/InputsComponents';

class CreateListCompForTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.scope = this.props.scope;
    this.collectionInputElements = (() => {
      return Object.values(props.subObj).map(elem => {
        return typeof elem === 'object' ? elem.inputElem() : null;
      })
    })()
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