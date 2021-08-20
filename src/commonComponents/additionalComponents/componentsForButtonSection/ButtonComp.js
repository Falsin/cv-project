import React from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.class = this.props.elem.class;
    this.func = this.props.elem.func;
    this.value = this.props.elem.value !== undefined ? this.props.elem.value : '';
  }

  render() {
    return (
      <button className={this.class} onClick={() => this.func()}>{this.value}</button>

    )
  }
}

export default Button