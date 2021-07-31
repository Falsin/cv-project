import React from 'react';
import uniqid from 'uniqid'
import cloneObj from '../CloneObj';

class InputComp extends React.Component {
  constructor(props) {
    super(props);

    this.uniqIndex = uniqid();
    this.parentScope = props.scope;
    this.objName = this.props.array[0];

    this.state = {
      isValidValue: true,
      isFocus: false,
      defaultValue: '',
    }
  }

  afterBlur(e, props) {
    //console.log(this.parentScope.scope.state);
    if (!e.target.value.length) {
      new Promise(res => {
        this.setState({
          isValidValue: false,
          isFocus: false,
          defaultValue: '',
        });
        res(this.parentScope)
      })
      .then(response => {
        let prevStateElem = response.state.countElemWithError;
        response.setState({countElemWithError: --prevStateElem});
      })
    } else {
      new Promise(res => {
        this.setState({
          isValidValue: true,
          isFocus: false,
          defaultValue: e.target.value,
        });
        //console.log(this.parentScope.scope.state);
        res(this.parentScope);
      })
      .then(response => {
        let prevStateElem = response.state.countElemWithError;
        response.setState({countElemWithError: ++prevStateElem});
        //console.log(this.parentScope.scope.state);
        return response;
      })
      .then(response => {
        //console.log(response.props.subObj[this.objName].value);

        response.props.subObj[this.objName].value = this.state.defaultValue;
        response.scope.setState(response.props.obj)
        return response;
      })
    }
  }

  componentDidUpdate() {
    if (this.state.isFocus) {
      let input = document.getElementById(this.uniqIndex);
      input.focus();
    }

    /* if (!this.parentScope.readonly) {
      console.log(this.parentScope.scope.state);
    } */
  }

  whileFocus(e) {
    if (!this.state.isValidValue) {
      this.setState({
        isValidValue: true,
        isFocus: true,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
/*     if (!this.parentScope.readonly) {
      console.log(this)
      console.log(this.parentScope.scope.state);
      //console.log(this.state)
    } */
    if (this.state === nextState) {
      return false;
    } 
    return true;
  }

  /* componentDidMount() {
    if (!this.parentScope.readonly) {
      console.log(this.parentScope.scope.state);
    }
  } */

  render() {
    return (
      <li key={uniqid()} className={this.state.isValidValue ? '' : 'error'}>
        <label htmlFor={this.uniqIndex}>{this.objName}</label>
        {this.props.elem.call(this, this)}
      </li>
    )
  }
}

function input(arram) {
  let type = arram;

  return function (props) {
    let templateScope = props.parentScope;
    let uniqIndex = props.uniqIndex;

  return ((templateScope.readonly) 
        ? <input type={type} value={this.props.array[1].value} readOnly />
        : <input type={type} onBlur={(e) => {
          //console.log(this)
          props.afterBlur(e);
        }}
        onFocus={(e) => {
          props.whileFocus(e);
        }}
        id={uniqIndex} defaultValue={props.state.defaultValue} />
      )
  }
}

function textArea (arram) {
  let type = arram;

  return function (props) {
    let templateScope = props.parentScope;
    let uniqIndex = props.uniqIndex;

  return ((templateScope.readonly) 
        ? <textarea type={type} value={this.props.array[1].value} readOnly />
        : <textarea type={type} onBlur={(e) => {
          props.afterBlur(e);
        }}
        onFocus={(e) => {
          props.whileFocus(e);
        }}
        id={uniqIndex} defaultValue={props.state.defaultValue} />
      )
  }
}

function countryComp(arram) {
  let type = arram;
  let countryNamesArr = [];
  let enteredVal = {
    value: '',
    id: uniqid(),
  }

  fetch(`https://restcountries.eu/rest/v2/all`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => countryNamesArr = response);

  function createListElements() {
    let collection = [];
    const enteredItem = enteredVal.value;
    const lowerCaseVal = enteredItem.toLowerCase();

    for (const {name} of countryNamesArr) {
      const lowerCaseName = name.toLowerCase();
      if(enteredItem.length > 2 && lowerCaseName.includes(lowerCaseVal) && enteredItem !== name) {
        collection.push({
          id: uniqid(),
          name: name,
        });
      }
    }
    return collection;
  }

  function enteredValHandler(e) {
    enteredVal.value = e.target.value;
    enteredVal.id = uniqid();
    new Promise(res => {
      this.setState({
        defaultValue: enteredVal.value,
        isFocus: true,
      })
      res(this)
    })
    .then(response => {
      let htmlNodeCollection = createListElements();
      let input = document.getElementById(e.target.id);
   
      let list = document.createElement('ul');
      list.id = 'cityName'
      input.after(list);

      htmlNodeCollection.forEach(elem => {
        let option = document.createElement('li');
        option.textContent = elem.name;
        option.key = elem.id;
        list.append(option);

        option.addEventListener('click', (e) => {
          //console.log(e.target.textContent);
          response.setState({
            defaultValue: e.target.textContent,
          })
        })
      })
    })
  }

  return function (props) {
    let templateScope = props.parentScope;
    let uniqIndex = props.uniqIndex;

    return ((templateScope.readonly) 
        ? <input type={type} value={this.props.array[1].value} readOnly />
        : <div>
            <input type={type} 
            onBlur={(e) => {
              props.afterBlur(e);
              //templateScope.blur(e, this)
            }} 
            onChange={(e) => {
              enteredValHandler.call(this, e);
            }}
            defaultValue={props.state.defaultValue} id={uniqIndex} list='cityName'/>
          </div>
      )
  }
}

export {input, textArea, countryComp, InputComp};