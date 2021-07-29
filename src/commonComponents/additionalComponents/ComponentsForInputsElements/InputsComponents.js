import React from 'react';
import callFuncFromParentComp from './CallFuncFromParentComp';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
  }

  render() {

    let parentState = this.props.parentScope.state;
    let objKeys = !this.parentScope.readonly ? parentState.obj : null;

    return ((this.parentScope.readonly) 
      ? <input type={this.props.type} value={this.props.obj[1].value} readOnly />
      : <input type={this.props.type} onBlur={callFuncFromParentComp.bind(this)} 
          defaultValue={this.props.obj[1].value} id={objKeys[this.props.obj[0]]}/>
    )
  }
}

class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
  }

  render() {

    let parentState = this.props.parentScope.state;
    let objKeys = !this.parentScope.readonly ? parentState.obj : null;
    
    return ((this.parentScope.readonly)
      ? <textarea value={this.props.obj[1].value} readOnly />
      : <textarea onBlur={callFuncFromParentComp.bind(this)} 
        id={objKeys[this.props.obj[0]]}
         defaultValue={this.props.obj[1].value} /> 
    )
  }
}


/* class Input extends React.Component {
  constructor(props) {
    super(props);

    this.parentScope = props.parentScope;
  }

  render() {


    if (!this.parentScope.readonly) {
      //console.log(this.props.obj[0])
      console.log(this.props.parentScope.state.obj[this.props.obj[0]]);
    }
    return ((this.parentScope.readonly) 
      ? <input type={this.props.type} value={this.props.obj[1].value} readOnly />
      : <input type={this.props.type} onBlur={callFuncFromParentComp.bind(this)} 
          defaultValue={this.props.obj[1].value} id={this.props.parentScope.state.obj[this.props.obj[0]]}/>
      
     // <input type={this.props.type} onBlur={callFuncFromParentComp.bind(this)} 
     //    defaultValue={this.props.obj[1].value} id={this.props.id}/>
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
} */

export {Input, TextArea};