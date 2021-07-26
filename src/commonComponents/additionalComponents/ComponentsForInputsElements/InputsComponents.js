import React from 'react';
import callFuncFromParentComp from './CallFuncFromParentComp';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
  }

  render() {
    return (
      <input type={this.props.type} onBlur={callFuncFromParentComp.bind(this)} 
      defaultValue={this.props.obj[1].value}></input>
    )
  }
}

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
  }

  render() {
    return (
      <textarea onBlur={callFuncFromParentComp.bind(this)} 
      defaultValue={this.props.obj[1].value}> 
      </textarea>
    )
  }
}

export {Input, TextArea};