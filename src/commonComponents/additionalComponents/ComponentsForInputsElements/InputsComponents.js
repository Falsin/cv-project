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
    }
  }

/*   afterBlur(e) {
    this.setState({defaultValue: e.target.value});
    if (!e.target.value.length) {
      this.setState({
        isValidValue: false,
      });
    } else {
      this.setState({
        isValidValue: true,
      });
    }
  } */

  afterBlurTest(element) {
    console.log('afterblur')
    this.setState({defaultValue: element.value});
    this.discoverAnimation(element);

    if (!element.value.length) {
      console.dir(element)
      element.parentNode.classList.add('error');
      this.setState({isValidValue: false});
    } else {
      this.setState({isValidValue: true});
    }
  }

  afterFocus(e) {
    this.discoverAnimation(e);
  }

  discoverAnimation(e) {
    const animations = e.getAnimations();
    animations.forEach(elem => {
      elem.onfinish = () => {
        let computedStyle = getComputedStyle(e);
        let currentStyle = computedStyle.backgroundPosition;
        console.log(currentStyle)
        e.style.backgroundPosition = currentStyle;
        if (this.state.backgroundPosition !== currentStyle) {
          this.setState({backgroundPosition: currentStyle})
        }
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {  //отредактировать
    let input = document.getElementById(this.uniqIndex);

    if (!this.parentScope.readonly) {
      /*const animations = input.getAnimations();
       animations.forEach(elem => {
        elem.onfinish = () => {
          let computedStyle = getComputedStyle(input);
          let currentStyle = computedStyle.backgroundPosition;
          console.log(currentStyle)
          if (this.state.backgroundPosition !== currentStyle) {
            this.setState({backgroundPosition: currentStyle})
          }
        }
      }) */

      /* if (prevState.defaultValue !== this.state.defaultValue) {
        this.parentScope.props.subObj[this.objName].value = this.state.defaultValue;
        this.parentScope.scope.setState(this.parentScope.props.obj);
      } else if (prevProps.array[1].value !== this.props.array[1].value) {
        this.setState({defaultValue: this.props.array[1].value})
      } */
    } /* else {
      this.setState({defaultValue: this.props.array[1].value});
    } */

    if (prevState.defaultValue !== this.state.defaultValue) {
      //console.log('update2')
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
      <li key={uniqid()} className={this.state.isValidValue ? '' : 'error'}
        /* onClick={e => this.setState({isFocus: true})} */>

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
    let backgroundPosition = this.state.backgroundPosition;

    return((templateScope.readonly) 
      ? <input key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
      : <input key={uniqid()} type={type} defaultValue={this.state.defaultValue}
          onFocus={e => this.afterFocus(e.target)} id={uniqIndex}
          //onChange={e => enteredVal = e.target.value}  
          onBlur={e => this.afterBlurTest(e.target)}
          style={{backgroundPosition: backgroundPosition}} />)
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