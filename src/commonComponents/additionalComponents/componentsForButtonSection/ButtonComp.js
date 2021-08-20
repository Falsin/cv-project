import React from 'react'

class Button extends React.Component {


  render() {;

    return (
      <button className={this.props.class} onClick={() => this.props.func()}>{this.props.value !== undefined ? this.props.value : ''}</button>
/*       <input type='button' value={this.props.value}
        onClick={() => this.props.func()}>
      </input> */
    )
  }
}

export default Button