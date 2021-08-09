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
      isActive: (props.array[1].value) ? true : false,
      queue: [],
    }
  }

  afterBlur(element) {
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

    this.discoverAnimation(element)
      .then(() => {
        return (this.setState(state => {
          return {queue: state.queue.slice(0, -1)}
        }))
      })
      .then(() => {
        if (this.state.queue[this.state.queue.length - 1]) {
          this.state.queue[this.state.queue.length - 1].func();
        }
        return (this)
      })
      .then(() => this.setState({defaultValue: element.value}))
  }

  afterFocus(e) {
    e.offsetParent.classList.remove('error');

    const className = !this.state.isValidValue ? 'afterError' : 'active';
    e.classList.add(className);

    this.discoverAnimation(e)
      .then(() => {
        e.classList.remove('afterError');
        e.classList.add('active');
      })
      .then(() => {
        return (this.setState(state => {
          return {queue: state.queue.slice(0, -1)}
        }))
      })
      .then(() => {
        if (this.state.queue[this.state.queue.length - 1]) {
          this.state.queue[this.state.queue.length - 1].func();
        }
      })
  }

  discoverAnimation(e) {
    return (Promise.all(e.getAnimations().map(elem => {
      return elem.finished;
    }))
      .then(() => {
        const computedStyle = getComputedStyle(e);
        const currentStyle = computedStyle.backgroundPosition;
        e.style.backgroundPosition = currentStyle;

        if (this.state.backgroundPosition !== currentStyle) {
          this.setState({backgroundPosition: currentStyle})
        }
      })
      .catch((err) => null)
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.array[1].value !== this.props.array[1].value) {
      this.setState({defaultValue: this.props.array[1].value})

    } else if (!this.parentScope.readonly) {
      if (prevState.defaultValue !== this.state.defaultValue) {
        this.parentScope.props.subObj[this.objName].value = this.state.defaultValue;
        this.parentScope.props.scope.setState(this.parentScope.props.obj);
      } else if (prevProps.array[1].value !== this.props.array[1].value) {
        new Promise(res => {
          res(this.setState({defaultValue: this.props.array[1].value}));
        })
          .then(() => {
            console.log(this.state.backgroundPosition)
            return (
              this.setState({
                isActive: (this.props.array[1].value) ? true : false,
                backgroundPosition: '200% 100%, 100% 100%',
              })
            )
          })
          .then(() => {
            let inputElem = document.getElementById(this.uniqIndex);
            inputElem.classList.remove('active');
            inputElem.classList.add('afterFocus');
            this.discoverAnimation(inputElem)
              .then(() => inputElem.classList.remove('afterFocus'))
          })
      }
    }
  }

  /* componentDidUpdate(prevProps, prevState) {
    if (prevProps.array[1].value !== this.props.array[1].value) {
      //this.setState({
      //  defaultValue: this.props.array[1].value,
      //  isActive: (this.props.array[1].value) ? true : false,
      //  backgroundPosition: '200% 100%, 100% 100%',
      //})

      console.log('update')
      new Promise(res => {
        res(this.setState({defaultValue: this.props.array[1].value}));
      })
        .then(() => {
          console.log(this.state.backgroundPosition)
          return (
            this.setState({
              isActive: (this.props.array[1].value) ? true : false,
              backgroundPosition: '200% 100%, 100% 100%',
            })
          )
        })
        .then(() => {
          let inputElem = document.getElementById(this.uniqIndex);
          inputElem.classList.remove('active');
          inputElem.classList.add('afterFocus');
          this.discoverAnimation(inputElem)
            .then(() => inputElem.classList.remove('afterFocus'))
        })

    } else if (!this.parentScope.readonly) {
      if (prevState.defaultValue !== this.state.defaultValue) {
        this.parentScope.props.subObj[this.objName].value = this.state.defaultValue;
        this.parentScope.props.scope.setState(this.parentScope.props.obj);
      }
    }
  } */

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.defaultValue !== nextState.defaultValue ||
        nextProps.array[1].value !== this.state.defaultValue) {
      return true;
    }
    return false;
  }

  workWithQueue(obj) {
    let check = this.state.queue.find(elem => {
      return (this.state.queue.length > 0 && elem.name === obj.name) ? true : false;
    })

    if (!check) {
      new Promise(res => {
        res( this.setState(state => ({queue: [obj].concat(state.queue)})) )
      })
      .then(() => {
        if (this.state.queue.length === 1) {
          this.state.queue[this.state.queue.length - 1].func();
        }
      })
    }
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
          onFocus={e => {
            const obj = {
              name: 'afterFocus',
              func: this.afterFocus.bind(this, e.target)
            }

            this.workWithQueue(obj)
          }}

          onBlur={e => {
            const obj = {
              name: 'afterBlur',
              func: this.afterBlur.bind(this, e.target)
            }

            this.workWithQueue(obj)
          }}

          style={{backgroundPosition: this.state.backgroundPosition}} />)
  }
}

function textArea (arram) {
  let type = arram;

  return function () {
    let templateScope = this.parentScope;
    let uniqIndex = this.uniqIndex;

    return ((templateScope.readonly) 
          ? <textarea key={uniqid()} type={type} value={this.state.defaultValue} readOnly />
          : <textarea key={uniqid()} type={type} defaultValue={this.state.defaultValue}
              style={{backgroundPosition: this.state.backgroundPosition}}
              onFocus={e => {
                const obj = {
                  name: 'afterFocus',
                  func: this.afterFocus.bind(this, e.target)
                }
    
                this.workWithQueue(obj)
              }}
    
              onBlur={e => {
                const obj = {
                  name: 'afterBlur',
                  func: this.afterBlur.bind(this, e.target)
                }
    
                this.workWithQueue(obj)
              }}

              //onFocus={e => this.whileFocus(e)} id={uniqIndex}
              //onFocus={e => this.afterFocus(e.target)}
              //onChange={e => enteredVal = e.target.value}
              /* onBlur={e => this.afterBlur(e.target)} */  />
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
            isValidValue: true
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
              onChange={enteredValHandler.bind(this)}
              onFocus={e => {
                const obj = {
                  name: 'afterFocus',
                  func: this.afterFocus.bind(this, e.target)
                }
    
                this.workWithQueue(obj)
              }}
    
              onBlur={e => {
                const obj = {
                  name: 'afterBlur',
                  func: this.afterBlur.bind(this, e.target)
                }
    
                this.workWithQueue(obj)
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

export {input, textArea, countryComp, InputComp};