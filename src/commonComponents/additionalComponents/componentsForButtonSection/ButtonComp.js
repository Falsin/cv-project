import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button className={this.props.elem.class} onClick={() => {
        this.props.elem.func();
      }}>{this.props.elem.value !== undefined ? this.props.elem.value : ''}</button>

    )
  }
}

export default Button