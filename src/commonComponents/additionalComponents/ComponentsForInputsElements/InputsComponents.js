import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
    this.objName = props.obj[0];
  }

  render() {
    return ((this.parentScope.readonly) 
      ? <input type={this.props.type} value={this.props.obj[1].value} readOnly />
      : <input type={this.props.type} onBlur={(e) => this.parentScope.blur(e, this)}
          defaultValue={this.props.obj[1].value} id={this.props.obj[1].uniqIndex}/>
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
      : <textarea onBlur={(e) => this.parentScope.blur(e, this)}
          defaultValue={this.props.obj[1].value} id={this.props.obj[1].uniqIndex} /> 
    )
  }
}

export {Input, TextArea};