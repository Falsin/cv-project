import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <input type='button' value={this.props.value}
        onClick={() => {
          this.props.func()
        }}>
      </input>
    )
  }
}

export default Button