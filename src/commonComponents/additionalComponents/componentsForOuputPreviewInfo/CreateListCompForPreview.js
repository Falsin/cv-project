import React from 'react';
import { InputComp } from '../ComponentsForInputsElements/InputsComponents';

class CreateListCompForPreview extends React.Component {
  constructor(props) {
    super(props);

    this.readonly = true;
  }

  render() {
    return (
      <ul>
        {Object.entries(this.props.obj).map((item, id) => {
          if (typeof item[1] === 'object') {
            return <InputComp key={id} scope={this} array={item} elem={item[1].inputElem} />
          }
          return null;
        })}
      </ul>
    )
  }
}

export default CreateListCompForPreview;