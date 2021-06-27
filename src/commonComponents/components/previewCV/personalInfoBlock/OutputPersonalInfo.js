import React from 'react';

class OutputPersonalInfo extends React.Component {
  render() {

    return (
      <form>
        <h2>Personal information</h2>

        {Object.entries(this.props.obj).map((elem, id) => {
          return (
            <div key={id}>
              <label>{elem[0]}</label>
              <input value={elem[1]} readOnly></input>
            </div>
          )
        })}
      </form>
    )
  }
}

export default OutputPersonalInfo;