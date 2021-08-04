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
      backgroundPosition: '200% 100%, 100% 100%'
    }
  }

  afterBlur(e) {
    if (!e.target.value.length) {
      this.setState({
        isValidValue: false,
        isFocus: false,
        defaultValue: '',
      });
    } else {
      this.setState({
        isValidValue: true,
        isFocus: false,
        defaultValue: e.target.value,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {  //отредактировать
/*     let input = document.getElementById(this.uniqIndex);
    console.log('hey')
    this.observer(input); */

    let input = document.getElementById(this.uniqIndex);
    let computedStyle = getComputedStyle(input);
    console.log(computedStyle.backgroundPosition);

    if (!this.parentScope.readonly) {
      if (this.state.isFocus) {
        let input = document.getElementById(this.uniqIndex);
        input.focus();
      }

      if (prevState !== this.state) {  // отредактировать условие
        this.parentScope.props.subObj[this.objName].value = this.state.defaultValue;
        this.parentScope.scope.setState(this.parentScope.props.obj);
      } else if (prevProps.array[1].value !== this.props.array[1].value) {
        this.setState({defaultValue: this.props.array[1].value})
      }
    } else {
      this.setState({defaultValue: this.props.array[1].value});
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
    if (!this.parentScope.readonly) {
      return ((this.state !== nextState || 
              this.props.array[1].value !== nextProps.array[1].value) 
              ? true : false);
    } else {
      return ((this.state.defaultValue !== nextState.defaultValue || 
              nextProps.array[1].value !== this.state.defaultValue)
              ? true : false);
    }
  }

  /* componentDidMount() {
    if (this.state.defaultValue !== this.props.array[1].value) {
      this.setState({defaultValue: this.props.array[1].value})
    }
  }

  observer(target) {
    //let input = document.getElementById(this.uniqIndex);

    const config = {
      attributes: true,
    };

    const callback = function(mutationsList) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          console.log(mutation)
        }
      }
    };

    const testObserver = new MutationObserver(callback);

    testObserver.observe(target, config);
  } */

  render() {

    return (
      <li key={uniqid()} className={this.state.isValidValue ? '' : 'error'}
        onClick={e => {
          //this.observer(e);
          this.setState({isFocus: true})
        }}>

        <label htmlFor={this.uniqIndex}>{this.objName}</label>
        {this.props.elem.call(this, this)}

      </li>
    )
  }
}

function input(arram) {
  let type = arram;

  return function () {
    let templateScope = this.parentScope;
    let uniqIndex = this.uniqIndex;

    return((templateScope.readonly) 
      ? <input key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
      : <input key={uniqid()} type={type} onBlur={e => this.afterBlur(e)}
          onFocus={e => this.whileFocus(e)} id={uniqIndex} 
          defaultValue={this.state.defaultValue} />)
  }
}

function textArea (arram) {
  let type = arram;

  return function (props) {
    let templateScope = this.parentScope;
    let uniqIndex = this.uniqIndex;

  return ((templateScope.readonly) 
        ? <textarea key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
        : <textarea key={uniqid()} type={type} onBlur={e => this.afterBlur(e)}
            onFocus={e => this.whileFocus(e)} id={uniqIndex} 
            defaultValue={props.state.defaultValue} />
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

        option.addEventListener('mousedown', e => {
          new Promise(res => {
            response.setState({
              defaultValue: e.target.textContent,
            })
            res(response)
          })
          .then(() => removeAllChildElements('cityName', 'li'));
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
        ? <input key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
        : <div>
            <input type={type} key={uniqid()}
              onBlur={e => this.afterBlur(e)} 
              onChange={enteredValHandler.bind(this)}
              value={this.state.defaultValue} id={uniqIndex} list='cityName'/>

            <ul id='cityName'></ul>
          </div>
      )
  }
}

export {input, textArea, countryComp, InputComp};