import React from 'react';
import CreateListCompForPreview from './CreateListCompForPreview';

class CreateCollectionComp extends React.Component {
  render() {
    return (
      <ul>
        {this.props.array.map((item, id) => {
          return (
            <li key={id} className='expBlock'>
              <CreateListCompForPreview subObj={item}/>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default CreateCollectionComp;