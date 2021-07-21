import React from 'react';

class CreateListCompForPreview extends React.Component {
  render() {
    return (
      <ul>
        {Object.entries(this.props.obj).map((elem, id) => {
          if (typeof elem[1] === 'object') {
            return (
              <li key={id}>
                <label>{elem[0]}</label>
                <input value={elem[1].value} readOnly type={elem[1].type}></input>
              </li>
            )
          } else {
            return null;
          }
        })}
      </ul>
    )
  }
}

export default CreateListCompForPreview;