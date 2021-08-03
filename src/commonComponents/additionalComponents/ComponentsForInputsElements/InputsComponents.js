import React from 'react';
import uniqid from 'uniqid'

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

  afterBlur(e) {
    //console.log(this)
    if (!e.target.value.length) {
      new Promise(res => {
        this.setState({
          isValidValue: false,
          isFocus: false,
          defaultValue: '',
        });
        res(this.parentScope)
      })
      /* .then(response => {
        let prevStateElem = response.state.countElemWithError;
        response.setState({countElemWithError: --prevStateElem});
      }) */
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
      /* .then(response => {
        let prevStateElem = response.state.countElemWithError;
        response.setState({countElemWithError: ++prevStateElem});
      }) */
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isFocus) {
      let input = document.getElementById(this.uniqIndex);
      input.focus();
    }

    /* if (!this.parentScope.readonly) {
      console.log(this.parentScope)
    } */

    /* console.log('prevState')
    console.log(prevState)
    console.log('this.state')
    console.log(this.state) */

/*     if (!this.parentScope.readonly) {
      if (prevState.isValidValue !== this.state.isValidValue && this.state.isValidValue) {
        console.log(this.parentScope)
        let prevStateElem = this.parentScope.state.countElemWithError;
        this.parentScope.setState({countElemWithError: ++prevStateElem});
      } else if (prevState.isValidValue !== this.state.isValidValue && !this.state.isValidValue) {
        let prevStateElem = this.parentScope.state.countElemWithError;
        this.parentScope.setState({countElemWithError: --prevStateElem});
      }
    } */


/*     if (prevState.defaultValue !== this.state.defaultValue && !prevState.isValidValue && this.state.isValidValue) {
      let prevStateElem = this.parentScope.state.countElemWithError;
      this.parentScope.setState({countElemWithError: ++prevStateElem})
    } else if (prevState.defaultValue !== this.state.defaultValue && prevState.isValidValue && !this.state.isValidValue) {
      let prevStateElem = this.parentScope.state.countElemWithError;
      this.parentScope.setState({countElemWithError: --prevStateElem})
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
/*     console.log(this.props.array)
    console.log(nextProps.array) */

    if (this.props === nextProps && this.state === nextState) {
      return false;
    }

    /* if (this.props.array[1].value === nextProps.array[1].value && this.state === nextState) {
      return false;
    } */

    /* if (this.props === nextProps && this.state === nextState) {
      return false;
    } else if (this.props.array[1].value === nextProps.array[1].value) {
      return false;
    } */
    /* console.log(this.props);
    console.log(nextProps); */
    //console.log(this.props !== nextProps)
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

    //console.log(this.state.defaultValue);
    //console.log(this.props.array[1].value)

    return((templateScope.readonly) 
      ? <input type={type} value={this.props.array[1].value} readOnly />
      : <input key={uniqid()} type={type} onBlur={(e) => props.afterBlur(e)}
          onFocus={(e) => props.whileFocus(e)}
          id={uniqIndex} defaultValue={this.state.defaultValue} />)
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
      let list = removeAllChildElements('cityName', 'li');
      let htmlNodeCollection = createListElements();

      htmlNodeCollection.forEach(elem => {
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
            removeAllChildElements('cityName', 'li')
            return (this.parentScope)
          })
          .then(response => {
            response.props.subObj[this.objName].value = this.state.defaultValue;
            response.props.scope.setState(response.props.obj);
          })
        })

      })
    })
  }

  function removeAllChildElements(parentId, childTag) {
    let list = document.getElementById(parentId);
    let options = list.querySelectorAll(childTag);
    options.forEach(elem => elem.remove());
    return list;
  }

  return function () {
    let templateScope = this.parentScope;
    let uniqIndex = this.uniqIndex;

    return ((templateScope.readonly) 
        ? <input type={type} value={this.props.array[1].value} readOnly />
        : <div>
            <input type={type} 
              onBlur={(e) => this.afterBlur(e)} 
              onChange={enteredValHandler.bind(this)}
              value={this.state.defaultValue} id={uniqIndex} list='cityName'/>

            <ul id='cityName'></ul>
          </div>
      )
  }
}

export {input, textArea, countryComp, InputComp};