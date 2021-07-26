import React from 'react';
import callFuncFromParentComp from './CallFuncFromParentComp';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
  }

  render() {
    return ((this.parentScope.readonly) 
      ? <input type={this.props.type} value={this.props.obj[1].value} readOnly />
      : <input type={this.props.type} onBlur={callFuncFromParentComp.bind(this)} 
          defaultValue={this.props.obj[1].value} />
    )
  }
}

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
  }

  render() {
    return ((this.parentScope.readonly)
      ? <textarea value={this.props.obj[1].value} readOnly />
      : <textarea onBlur={callFuncFromParentComp.bind(this)} 
         defaultValue={this.props.obj[1].value} /> 
    )
  }
}

export {Input, TextArea};