import React from 'react';
import { InputComp } from '../ComponentsForInputsElements/InputsComponents';

class CreateListCompForPreview extends React.Component {
  constructor(props) {
    super(props);

    this.readonly = true;
    this.collectionInputElements = (() => {
      return Object.values(props.subObj).map(elem => {
        if (typeof elem === 'object') {
          return elem.inputElem()
        }
      })
    })()
  }

  render() {
    return (
      <ul>
        {Object.entries(this.props.subObj).map((item, id) => {
          if (typeof item[1] === 'object') {
            return <InputComp key={id} scope={this} array={item} elem={this.collectionInputElements[id]} />
          }
          return null;
        })}
      </ul>
    )
  }
}

export default CreateListCompForPreview;