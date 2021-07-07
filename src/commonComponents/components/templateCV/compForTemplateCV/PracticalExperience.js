import React from 'react';
import ChangeHandler from '../../../additionalComponents/ChangeHandler';

class PracticalExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      practicalExperience: {
        'Company name': {
          value: '',
          type: 'text',
        },
        'Position title': {
          value: '',
          type: 'text',
        },
        'Main task of your job': {
          value: '',
          type: 'text',
        },
        'From': {
          value: '',
          type: 'date',
        },
        'To': {
          value: '',
          type: 'date',
        },
      }
    }
  }

  render() {
    return (
      <div>
        <ul>
          {Object.entries(this.state.practicalExperience).map((elem, id) => {
            return (
              <li key={id}>
                <label>{elem[0]}</label>
                <input type={elem[1].type} onChange={() => {
                  ChangeHandler.call()
                }}></input>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PracticalExperience;