import React from 'react';

class OutputPersonalInfo extends React.Component {
  render() {
    return (
      <form>
        <h2>Personal information</h2>

        <ul>
          {Object.entries(this.props.obj).map((elem, id) => {
            return (
              <li key={id}>
                <label>{elem[0]}</label>
                <input value={elem[1]} readOnly></input>
              </li>
            )
          })}
        </ul>
      </form>
    )
  }
}

export default OutputPersonalInfo;