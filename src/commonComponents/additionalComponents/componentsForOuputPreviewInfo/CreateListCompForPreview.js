import React from 'react';

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
            return (
              <li key={id}>
                <label>{item[0]}</label>
                {item[1].returnInputElem.call(this, item, id)}
              </li>
            )
          }
          return null;
        })}
      </ul>
    )
  }
}

export default CreateListCompForPreview;