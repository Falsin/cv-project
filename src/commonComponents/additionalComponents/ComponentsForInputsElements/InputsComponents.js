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
      defaultValue: props.array[1].value,
      backgroundPosition: '200% 100%, 100% 100%',
      isActive: false,
    }
  }

  afterBlur(element) {
    //element.classList.remove('afterError');

    if (!element.value.length) {
      element.parentNode.classList.add('error');
      element.classList.remove('active');
      this.setState({
        isValidValue: false,
        isActive: false
      });
    } else {
      this.setState({
        isValidValue: true,
        isActive: true
      });
    }

    this.discoverAnimation(element)
      .then(() => element.classList.remove('afterError'))
      .then(() => this.setState({defaultValue: element.value}))
  }

  afterFocus(e) {
    e.parentNode.classList.remove('error');

    if (!this.state.isValidValue) {
      e.classList.add('afterError');
    } else {
      e.classList.add('active');
    }

    this.discoverAnimation(e);
  }

  discoverAnimation(e) {
    return (Promise.all(e.getAnimations().map(elem => elem.finished))
      .then(() => {
        let computedStyle = getComputedStyle(e);
        let currentStyle = computedStyle.backgroundPosition;
        e.style.backgroundPosition = currentStyle;

        if (this.state.backgroundPosition !== currentStyle) {
          this.setState({backgroundPosition: currentStyle})
        }

        return Promise.resolve('promise');
      })
      //.then(() => this.setState({defaultValue: e.value}))
      .catch((err) => {
        console.log(err)
        this.discoverAnimation(e)
      })
    )
  }

  componentDidUpdate(prevProps, prevState) {  //отредактировать
    if (prevState.defaultValue !== this.state.defaultValue) {
      this.parentScope.props.subObj[this.objName].value = this.state.defaultValue;
      this.parentScope.scope.setState(this.parentScope.props.obj);
    } else if (prevProps.array[1].value !== this.props.array[1].value) {
      this.setState({defaultValue: this.props.array[1].value})
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.defaultValue !== nextState.defaultValue ||
        nextProps.array[1].value !== this.state.defaultValue) {
      return true;
    }
    return false;
  }

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

  return function () {
    let templateScope = this.parentScope;
    let uniqIndex = this.uniqIndex;
    //let backgroundPosition = this.state.backgroundPosition;

    return((templateScope.readonly) 
      ? <input key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
      : <input key={uniqid()} type={type} defaultValue={this.state.defaultValue}
          onFocus={e => this.afterFocus(e.target)} id={uniqIndex}
          //onChange={e => enteredVal = e.target.value}
          className={(this.state.isActive ? 'active' : '')}  
          onBlur={e => {
            //console.log('this is blur')
            this.afterBlur(e.target)
          }}
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
              onBlur={e => this.afterBlur(e.target.value)}  />
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
              onBlur={() => this.afterBlur(enteredVal)} 
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

export {input, textArea, countryComp, InputComp};