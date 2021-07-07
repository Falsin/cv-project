import React from 'react'

class CreateList extends React.Component {

  render() {
    return (
      <ul>
        {Object.entries(this.props.obj).map((elem, id) => {
          return (
            <li key={id}>
              <label>{elem[0]}</label>
              <input value={elem[1].value} readOnly type={elem[1].type}></input>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default CreateList;