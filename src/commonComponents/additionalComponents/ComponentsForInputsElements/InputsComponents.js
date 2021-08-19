import React from 'react';
import uniqid from 'uniqid';

class InputComp extends React.Component {
  constructor(props) {
    super(props);

    this.uniqIndex = uniqid();
    this.parentScope = props.scope;
    this.objName = props.array[0];

    this.state = {
      isValidValue: true,
      defaultValue: props.array[1].value,
      isActive: (props.array[1].value) ? true : false,
      backgroundPosition: '200% 100%, 100% 100%',
      queue: [],
    }
  }

  componentDidMount() {
    if (!this.parentScope.readonly) {
      const elem = document.getElementById(this.uniqIndex);
      this.discoverAnimation(elem);
    }
  }

  afterBlur(element) {
    element.blur()
    if (!element.value.length) {
      element.offsetParent.className = 'error';
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
    e.focus()

    const className = !this.state.isValidValue ? 'afterError' : 'active';
    e.offsetParent.className = className;

    this.discoverAnimation(e)
      .then(() => e.offsetParent.className = 'active')
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
      .catch(() => null)
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.array[1].value !== this.props.array[1].value && this.parentScope.readonly) {
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
            return (
              this.setState({
                isActive: (this.props.array[1].value) ? true : false,
              })
            )
          })
          .then(() => {
            let inputElem = document.getElementById(this.uniqIndex);
            inputElem.offsetParent.className = 'afterActive'
            this.discoverAnimation(inputElem)
          })
      } else if (this.parentScope.props.isRemoved !== undefined) {
        const requiredElementId = this.parentScope.props.scope.state.removedElements
          .findIndex(elem => elem.objName === this.objName);

        if (requiredElementId !== -1) {
          let cloneArr = [...this.parentScope.props.scope.state.removedElements];
          const requiredElement = cloneArr.splice(requiredElementId, 1)[0];

          new Promise(res => {
            this.parentScope.props.scope.setState({
              removedElements: cloneArr,
            })
            res(this.parentScope.props.scope)
          })
            .then(() => this.setState(requiredElement.state))
        }
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.defaultValue !== nextState.defaultValue ||
      nextProps.array[1].value !== this.state.defaultValue ||
      this.parentScope.props.isRemoved !== undefined
    )
  }

  workWithQueue(obj) {
    const check = this.state.queue.find(elem => elem.name === obj.name ? true : false)

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

  componentWillUnmount() {
    let obj = {
      objName: this.objName,
      state: this.state,
    }

    if (!this.parentScope.readonly) {
      this.parentScope.props.scope.setState(state => {
        return {removedElements: [...state.removedElements, obj]}
      })
    }
  }

  render() {

    let classNameForLi =  (this.parentScope.readonly) ? '' :
                          (this.state.isActive) ? 'active' :
                          (!this.state.isValidValue) ? 'error' : '';
                          
    return (
      <li key={uniqid()} className={classNameForLi} 
        onClick={(e) => {
          if (e.target.localName === 'li') {
            document.getElementById(this.uniqIndex).focus()
          }
        }}>
        <label htmlFor={this.uniqIndex}>{this.objName}</label>
        {this.props.elem.call(this, this)}
      </li>
    )
  }
}

export default InputComp;