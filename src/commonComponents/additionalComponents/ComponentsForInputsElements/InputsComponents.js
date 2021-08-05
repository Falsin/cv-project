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
      defaultValue: props.array[1].value,
      backgroundPosition: '200% 100%, 100% 100%',
      isMount: true,
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

  afterBlurTest(event) {
    console.log('hello')
    console.log(event)
    if (!event.length) {
      this.setState({
        isValidValue: false,
        isFocus: false,
        defaultValue: '',
      });
    } else {
      this.setState({
        isValidValue: true,
        isFocus: false,
        defaultValue: event,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {  //отредактировать
    let input = document.getElementById(this.uniqIndex);

    if (!this.parentScope.readonly) {
      if (this.state.isFocus) {
        input.focus();
      }

      const animations = input.getAnimations();
      animations.forEach(elem => {
        elem.onfinish = () => {
          let computedStyle = getComputedStyle(input);
          let currentStyle = computedStyle.backgroundPosition;
          if (this.state.backgroundPosition !== currentStyle) {
            this.setState({backgroundPosition: currentStyle})
          }
        }
      })
/* 
      console.log(this.state);
      console.log(this.props.array); */

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

  whileFocus() {
    //console.log(this)
    if (!this.state.isValidValue) {
      this.setState({
        isValidValue: true,
        isFocus: true,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
/*     if (this.objName === 'Country') {
      console.log(this.state);
      console.log(nextState)
    } */
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

  componentDidMount() {
    this.setState({isMount: false})
  }

  render() {
    //console.log(this)
    //console.log(this.state.defaultValue)
    return (
      <li key={uniqid()} className={this.state.isValidValue ? '' : 'error'}
        onClick={e => this.setState({isFocus: true})}>

        <label htmlFor={this.uniqIndex}>{this.objName}</label>
        {this.props.elem.call(this, this)}

      </li>
    )
  }
}

/* function input(arram) {
  let type = arram;

  return function () {
    let templateScope = this.parentScope;
    let uniqIndex = this.uniqIndex;

    <InputComponent scope={this} />
  }
    
}
 */
/* class InputComponent extends React.Component {
  render() {
    return ((templateScope.readonly)
      ? <input key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
      : <input key={uniqid()} type={type} onBlur={e => this.afterBlur(e)}
          style={{backgroundPosition: this.state.backgroundPosition}}
          onFocus={e => this.whileFocus(e)} id={uniqIndex} 
          defaultValue={this.state.defaultValue} />
    )
  }
} */

/* function input(arram) {
  let enteredVal = '';

  function enteredValHandler(e) {
    enteredVal.value = e.target.value;
    enteredVal.id = uniqid();
  }

  let type = arram;

  return function () {
    let templateScope = this.parentScope;
    let uniqIndex = this.uniqIndex;

    return((templateScope.readonly) 
      ? <input key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
      : <input key={uniqid()} type={type} onBlur={e => this.afterBlur(e)}
          style={{backgroundPosition: this.state.backgroundPosition}}
          onFocus={e => this.whileFocus(e)} id={uniqIndex} 
          defaultValue={this.state.defaultValue} />)
  }
} */

function input(arram) {
  let enteredVal = '';
  let type = arram;

/*   console.log(this)
  console.log(type) */

  return function () {
    let templateScope = this.parentScope;
    let uniqIndex = this.uniqIndex;

    if (!this.parentScope.readonly && this.state.isMount) {
      enteredVal = this.state.defaultValue;
    }

/*     
    не работает из-за прослушивателя анимации, который
    повторно рендерит
    if (enteredVal !== this.state.defaultValue) {
      enteredVal = this.state.defaultValue
    } */

    return((templateScope.readonly) 
      ? <input key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
      : <input key={uniqid()} type={type} defaultValue={enteredVal}
          onFocus={e => this.whileFocus(e)} id={uniqIndex}
          onChange={e => enteredVal = e.target.value}  
          onBlur={e => this.afterBlurTest(e.target.value)}
          style={{backgroundPosition: this.state.backgroundPosition}} />)
  }
}

function textArea (arram) {
  let enteredVal = '';
  let type = arram;

  return function () {
    let templateScope = this.parentScope;
    let uniqIndex = this.uniqIndex;

    return ((templateScope.readonly) 
          ? <textarea key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
          : <textarea key={uniqid()} type={type} defaultValue={enteredVal}
              style={{backgroundPosition: this.state.backgroundPosition}}
              onFocus={e => this.whileFocus(e)} id={uniqIndex}
              onChange={e => enteredVal = e.target.value}
              onBlur={e => this.afterBlurTest(e.target.value)}  />
      )
  }
}

function countryComp(arram) {
  let type = arram;
  let countryNamesArr = [];
  let enteredVal = '';

  fetch(`https://restcountries.eu/rest/v2/all`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => countryNamesArr = response);

  function createListElements() {
    let collection = [];
    const enteredItem = enteredVal;
    const lowerCaseVal = enteredItem.toLowerCase();

    for (const {name} of countryNamesArr) {
      const lowerCaseName = name.toLowerCase();
      if(enteredItem.length > 2 && lowerCaseName.includes(lowerCaseVal) && enteredItem !== name) {
        collection.push({
          name: name,
        });
      }
    }
    return collection;
  }

  function enteredValHandler(e) {
    enteredVal = e.target.value;
 
    let list = removeAllChildElements('cityName', 'li');
    let htmlNodeCollection = createListElements();

    htmlNodeCollection.forEach((elem, id) => {
      let option = document.createElement('li');
      option.textContent = elem.name;
      option.key = id;
      list.append(option);

      option.addEventListener('mousedown', e => {
        enteredVal = e.target.textContent;
        new Promise(res => {
          this.setState({
            defaultValue: e.target.textContent,
          })
          res(this)
        })
        .then(() => removeAllChildElements('cityName', 'li'));
      })
    })
  }

  function removeAllChildElements(parentId, childTag) {
    let list = document.getElementById(parentId);
    let options = list.querySelectorAll(childTag);
    options.forEach(elem => elem.remove());
    return list;
  }

  function mouseDownListener(e) {
    enteredVal = e.target.textContent;
    this.setState({
      defaultValue: e.target.textContent,
    })
  }

  return function () {
    let templateScope = this.parentScope;
    let uniqIndex = this.uniqIndex;

    return ((templateScope.readonly) 
        ? <input key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
        : <div>
            <input type={type} key={uniqid()}
              style={{backgroundPosition: this.state.backgroundPosition}}
              onBlur={() => this.afterBlurTest(enteredVal)} 
              onChange={enteredValHandler.bind(this)}
              defaultValue={enteredVal} id={uniqIndex} list='cityName'/>

            <ul id='cityName'>
              {createListElements().map((elem, id) => {
                return (
                <li key={id} onMouseDown={mouseDownListener.bind(this)}>{elem.name}</li>
                )
              })}
            </ul>
          </div>
      )
  }
}

/* function countryComp(arram) {
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
              style={{backgroundPosition: this.state.backgroundPosition}}
              onFocus={this.whileFocus()}
              onBlur={e => this.afterBlur(e)} 
              onChange={enteredValHandler.bind(this)}
              value={this.state.defaultValue} id={uniqIndex} list='cityName'/>

            <ul id='cityName'></ul>
          </div>
      )
  }
} */

export {input, textArea, countryComp, InputComp};