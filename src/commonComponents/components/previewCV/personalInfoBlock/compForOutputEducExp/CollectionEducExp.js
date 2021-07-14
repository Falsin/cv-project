import React from 'react';
import CreateListCompForPreview from '../../../../additionalComponents/CreateListCompForPreview';

class CollectionEducExp extends React.Component {
  render() {
    return (
      <ul>
        {this.props.array.map((elem, id) => {
          return (
            <li key={id} className='EducExpBlock'>
              <CreateListCompForPreview obj={elem}/>
            </li>
          )
        })}
      </ul>

    )
  }
}

export default CollectionEducExp;