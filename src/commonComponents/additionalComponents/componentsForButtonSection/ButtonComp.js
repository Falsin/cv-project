import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.myOwnClass = this.props.elem.class;
    this.value = this.props.elem.value !== undefined ? this.props.elem.value : '';
  }

  render() {
    return (
      <button className={this.myOwnClass} onClick={() => this.props.elem.func()}>
        {this.value}
      </button>
    )
  }
}

export default Button