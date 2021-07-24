import React from 'react';
import cloneObj from './CloneObj';
import changeHandler from './ChangeHandler';

class Input extends React.Component {
  render() {
    return (
      <input type={this.props.type} onBlur={(e) => {
        
        let propObj = {
          obj: this.props.secondScope.props.obj,
          e: e,
          elem: this.props.currentScope,
          id: this.props.id,
          subObj: this.props.subObj,
        }
        
        this.props.secondScope.blur(propObj);
          
      }} defaultValue={this.props.currentScope.value}></input>
    )
  }
}

class TextArea extends React.Component {
  render() {
    return (
      <textarea onBlur={(e) => {
        let propObj = {
          obj: this.props.secondScope.props.obj,
          e: e,
          elem: this.props.currentScope,
          id: this.props.id,
          subObj: this.props.subObj,
        }
        
        this.props.secondScope.blur(propObj);

      }} defaultValue={this.props.currentScope.value}> 
      </textarea>
    )
  }
}

export {Input, TextArea};