import React from 'react';
import uniqid from 'uniqid'
import cloneObj from '../CloneObj';

class InputComp extends React.Component {
  constructor(props) {
    super(props);

    this.uniqIndex = uniqid();
    this.parentScope = props.scope;
    this.objName = props.array[0];

    this.state = {
      isValidValue: true,
      isFocus: false,
      defaultValue: '',
    }
  }

  afterBlur(e, props) {
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
        res(this.parentScope);
      })
      .then(response => {
        response.props.subObj[this.objName].value = this.state.defaultValue;
        response.scope.setState(response.props.obj);
        return response
      })
      .then(response => {
        console.log(response.scope)
        //console.log(this.state.defaultValue)
        let prevStateElem = response.state.countElemWithError;
        response.setState({countElemWithError: ++prevStateElem});
        return response;
      })



/*       new Promise(res => {
        this.setState({
          isValidValue: true,
          isFocus: false,
          defaultValue: e.target.value,
        });
        res(this.parentScope);
      })
      .then(response => {///
        //console.log(this.state.defaultValue)
        let prevStateElem = response.state.countElemWithError;
        response.setState({countElemWithError: ++prevStateElem});
        return response;
      })
      .then(response => {///
        response.props.subObj[this.objName].value = this.state.defaultValue;
        response.scope.setState(response.props.obj);
        return response
      })
      .then(response => {
        console.log(response.scope);
        console.log(response.scope.state);
      }) */

      // почему-то subObj не относится к obj
    }
  }

  componentDidUpdate(prevProps) {
/*     if (prevProps !== this.props) {
    //if (prevProps.array[1].value !== this.props.array[1].value) {
      //console.log('hel')
      new Promise(res => {
        this.setState({defaultValue: this.props.array[1].value});
        res(this)
      })
      //.then(response => console.log(response.state))
    } */
 
    if (this.state.isFocus) {
      let input = document.getElementById(this.uniqIndex);
      input.focus();
    }
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
    if (this.props === nextProps && this.state === nextState) {
      return false;
    } 
    return true;
  }

  render() {
    return (
      <li className={this.state.isValidValue ? '' : 'error'}>
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

    if (templateScope.readonly) {
      return <input type={type} value={this.props.array[1].value} readOnly />
    } else {
      return (
        <input key={uniqid()} type={type} onBlur={(e) => {
          props.afterBlur(e);
        }}
        onFocus={(e) => {
          props.whileFocus(e);
        }}
        id={uniqIndex} defaultValue={this.props.array[1].value} />
      )
    }
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

      htmlNodeCollection.forEach(elem => {
        let list = document.getElementById('cityName'); //
        let option = document.createElement('li');
        option.textContent = elem.name;
        option.key = elem.id;
        list.append(option);

        option.addEventListener('click', (e) => {
          new Promise(res => {
            response.setState({
              defaultValue: e.target.textContent,
            })
            res(response)
          })
          .then(() => {
            let list = document.getElementById('cityName');
            let options = list.querySelectorAll('li');

            options.forEach(elem => elem.remove());
          })
        })

      })
      return response;
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
            }} 
            onChange={(e) => {
              enteredValHandler.call(this, e);
            }}
            value={this.state.defaultValue} id={uniqIndex} list='cityName'/>
            <ul id='cityName'></ul>
          </div>
      )
  }
}

export {input, textArea, countryComp, InputComp};