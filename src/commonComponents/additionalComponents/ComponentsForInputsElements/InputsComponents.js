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
      stack: [],
    }
  }

  afterBlur(element, animationDuration) {
    console.log('Blur')
    if (!element.value.length) {
      element.classList.remove('active');
      element.offsetParent.classList.add('error');
      element.blur();

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

    /* this.discoverAnimation(element)
      //.then(() => element.classList.remove('afterError'))
      .then(() => this.setState({defaultValue: element.value})) */

      this.discoverAnimation(element, animationDuration)
      .then(() => {
        return (this.setState(state => {
          return {stack: state.stack.slice(0, -1)}
        }))
      })
      .then(() => {
        if (this.state.stack[this.state.stack.length - 1]) {
          this.state.stack[this.state.stack.length - 1].func();
        }
      })
  }

  afterFocus(e, animationDuration) {
    console.log('focus')
    e.offsetParent.classList.remove('error');

    const className = !this.state.isValidValue ? 'afterError' : 'active';
    e.classList.add(className);

    this.discoverAnimation(e, animationDuration)
      .then(() => {
        e.classList.remove('afterError');
        e.classList.add('active');
      })
      .then(() => {
        //console.log(this.state.stack[this.state.stack.length - 1])
        return (this.setState(state => {
          return {stack: state.stack.slice(0, -1)}
        }))
      })
      .then(() => {
        //console.log(this.state.stack[this.state.stack.length - 1])
        if (this.state.stack[this.state.stack.length - 1]) {
          this.state.stack[this.state.stack.length - 1].func();
        }
      })
  }

  discoverAnimation(e) {
    return (Promise.all(e.getAnimations().map(elem => {
      //console.log(this.state.stack)

      return elem.finished;
    }))
      .then(() => {
        const computedStyle = getComputedStyle(e);
        const currentStyle = computedStyle.backgroundPosition;
        e.style.backgroundPosition = currentStyle;

/*         console.log('this.state.backgroundPosition')
        console.log(this.state.backgroundPosition)
        console.log('currentStyle')
        console.log(currentStyle) */

        if (this.state.backgroundPosition !== currentStyle) {
          this.setState({backgroundPosition: currentStyle})
        }
      })
      .catch((err) => null)
    )
  }

  componentDidUpdate(prevProps, prevState) {  //отредактировать
    if (prevProps.array[1].value !== this.props.array[1].value) {
      this.setState({defaultValue: this.props.array[1].value})
    } else if (!this.parentScope.readonly) {
      if (prevState.defaultValue !== this.state.defaultValue) {
        this.parentScope.props.subObj[this.objName].value = this.state.defaultValue;
        this.parentScope.props.scope.setState(this.parentScope.props.obj);
      }
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

    return((templateScope.readonly) 
      ? <input key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
      : <input key={uniqid()} type={type} defaultValue={this.state.defaultValue}
          className={(this.state.isActive ? 'active' : '')} id={uniqIndex}
          //onFocus={e => this.afterFocus(e.target)}
          onFocus={e => {
            //console.log(this.state.stack)
            new Promise(res => {
              let check = this.state.stack.find((elem, id) => {
                if (this.state.stack.length > 0 && elem.name === 'afterFocus') {
                  return true;
                }
                return false;
              })

              if (!check) {
                new Promise(res => {
                  this.setState(state => {
                    return {stack: [
                      {
                        name: 'afterFocus',
                        func: this.afterFocus.bind(this, e.target)
                      }, 
                      ...state.stack]
                    }
                  })

                  //console.log(!check)
                   res(this);
                })
                .then(() => {
                  //console.log(this.state.stack)
                  if (this.state.stack.length === 1) {
                    this.state.stack[this.state.stack.length - 1].func();
                  }
                  //this.state.stack[this.state.stack.length - 1].func();
                })
              }
            })

            /* new Promise(res => {
              if (this.state.stack.length >= 2) {
                this.setState(state => {
                  return {stack: [this.afterFocus.bind(this, e.target), ...state.stack]}
                })
              } else {
                this.setState(state => {
                  return {stack: [this.afterFocus.bind(this, e.target), ...state.stack]}
                })
              }
              res(this)
            })
            .then(() => { //
              if (this.state.stack.length === 1) {
                this.state.stack[this.state.stack.length - 1]();
              }
              return this;
            }) */
          }}
          //onBlur={e => this.afterBlur(e.target)}
          onBlur={e => {
            new Promise(res => {
              let check = this.state.stack.find((elem, id) => {
                if (this.state.stack.length > 0 && elem.name === 'afterBlur') {
                  return true;
                }
                return false;
              })

              //console.log(!check)

              if (!check) {
                new Promise(res => {
                  this.setState(state => {
                    return {stack: [
                      {
                        name: 'afterBlur',
                        func: this.afterBlur.bind(this, e.target)
                      }, 
                      ...state.stack]
                    }
                  })
                  res(this);
                })
                .then(() => {
                  //this.state.stack[this.state.stack.length - 1].func()
                  if (this.state.stack.length === 1) {
                    this.state.stack[this.state.stack.length - 1].func();
                  }
                  //this.state.stack[this.state.stack.length - 1].func();
                })
              }
            })


/*             new Promise(res => {
              if (this.state.stack.length >= 2) {
                const animationDuration = 0;
                this.setState(state => {
                  return {stack: [this.afterBlur.bind(this, e.target), ...state.stack]}
                })
              } else {
                this.setState(state => {
                  return {stack: [this.afterBlur.bind(this, e.target), ...state.stack]}
                })
              }
              res(this)
            })
            .then(() => { //
              if (this.state.stack.length === 1) {
                this.state.stack[this.state.stack.length - 1]();
              }

              return this;
            }) */
            /* new Promise(res => {
              //console.log(this)
              this.setState(state => {
                return {stack: [this.afterBlur.bind(this, e.target), ...state.stack]}
              })
              res(this)
            })
            .then(() => { // 
              let animationDuration
              if (this.state.stack.length > 2) {
                for (let i = 0; i < this.state.stack.length; i++) {
                  animationDuration = 0;
                }
              } else if (this.state.stack.length === 1) {
                this.state.stack[this.state.stack.length - 1](e.target, animationDuration);
              }

              return this;
            }) */
            
            /* .then(() => { // 
              if (this.state.stack.length > 2) {
                this.setState(state =>  {
                  return {stack: state.stack.slice(0, 2)}
                })
              }
              return this;
            }) */

            /* .then(() => {
              if (this.state.stack.length === 1) {
                this.state.stack[this.state.stack.length - 1]();
              }
            }) */

            /* this.setState(state => {
              return {stack: [this.onBlur.bind(this, e.target), ...state.stack]}
            }) */
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
              //onFocus={e => this.whileFocus(e)} id={uniqIndex}
              onFocus={e => this.afterFocus(e.target)}
              onChange={e => enteredVal = e.target.value}
              onBlur={e => this.afterBlur(e.target)}  />
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
              onFocus={e => this.afterFocus(e.target)}
              onChange={enteredValHandler.bind(this)}
              onBlur={(e) => {
                this.afterBlur(e.target)
              }} 
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

/* class InputComp extends React.Component {
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
      stack: [],  // 
    }
  }

  workWithStack() {
    
  }

  afterBlur(element) {
    if (!element.value.length) {
      element.classList.remove('active');
      element.offsetParent.classList.add('error');
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
      //.then(() => element.classList.remove('afterError'))
      .then(() => this.setState({defaultValue: element.value}))
  }

  afterFocus(e) {
    e.offsetParent.classList.remove('error');

    const className = !this.state.isValidValue ? 'afterError' : 'active';
    e.classList.add(className);

    this.discoverAnimation(e).then(() => e.classList.remove('afterError'))
  }

  discoverAnimation(e) {
    return (Promise.all(e.getAnimations().map(elem => {
      console.log(elem)
      return elem.finished;
    }))
      .then(() => {
        const computedStyle = getComputedStyle(e);
        const currentStyle = computedStyle.backgroundPosition;
        e.style.backgroundPosition = currentStyle;

        console.log('this.state.backgroundPosition')
        console.log(this.state.backgroundPosition)
        console.log('currentStyle')
        console.log(currentStyle)

        if (this.state.backgroundPosition !== currentStyle) {
          this.setState({backgroundPosition: currentStyle})
        }
      })
      .catch((err) => console.log(err))
    )
  }

  componentDidUpdate(prevProps, prevState) {  //отредактировать
    if (prevProps.array[1].value !== this.props.array[1].value) {
      this.setState({defaultValue: this.props.array[1].value})
    } else if (!this.parentScope.readonly) {
      if (prevState.defaultValue !== this.state.defaultValue) {
        this.parentScope.props.subObj[this.objName].value = this.state.defaultValue;
        this.parentScope.props.scope.setState(this.parentScope.props.obj);
      }
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

    return((templateScope.readonly) 
      ? <input key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
      : <input key={uniqid()} type={type} defaultValue={this.state.defaultValue}
          className={(this.state.isActive ? 'active' : '')}  
          onFocus={e => this.afterFocus(e.target)} id={uniqIndex}
          onBlur={e => this.afterBlur(e.target)}
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
              //onFocus={e => this.whileFocus(e)} id={uniqIndex}
              onFocus={e => this.afterFocus(e.target)}
              onChange={e => enteredVal = e.target.value}
              onBlur={e => this.afterBlur(e.target)}  />
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
              onFocus={e => this.afterFocus(e.target)}
              onChange={enteredValHandler.bind(this)}
              onBlur={(e) => {
                this.afterBlur(e.target)
              }} 
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
} */

export {input, textArea, countryComp, InputComp};