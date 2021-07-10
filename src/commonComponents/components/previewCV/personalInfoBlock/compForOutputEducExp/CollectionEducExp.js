import React from 'react';
import CreateList from '../../../../additionalComponents/CreateListComp';

class CollectionEducExp extends React.Component {
  render() {
    return (
      <ul>
        {this.props.array.map((elem, id) => {
          return (
            <li key={id} className='EducExpBlock'>
              <CreateList obj={elem.info}/>
            </li>
          )
        })}
      </ul>

    )
  }
}

export default CollectionEducExp;