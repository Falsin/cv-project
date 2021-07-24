import React from 'react';
import changeHandler from './ChangeHandler';
import uniqid from 'uniqid';

class CreateListCompForTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.scope = this.props.scope;

    this.state = {
      idHtmlWithError: [],
    }
  }

  click(e, id) {
    if (e.target.localName === 'li' && this.state.idHtmlWithError.includes(id)) {
      e.target.classList.remove('error');
      let input = e.target.lastChild;
      input.focus();
    }
  }

  blur(object) {
    let {obj, e, elem, id, subObj} = object;
    
    changeHandler.call(obj, e, elem);

    if (e.target.value) {               
      new Promise(res => {
        let index = this.state.idHtmlWithError.indexOf(id);

        if (index !== -1) {
          this.reduceArray(index);
        }
        res(this)
      })
      .then(response => {
        if (response.state.idHtmlWithError.length === 0) {
          subObj.isValid = true;
          response.scope.setState(obj);
        }
      })

    } else {
      e.target.parentNode.classList.add('error');
      new Promise(res => {
        this.setState({
          idHtmlWithError: [...this.state.idHtmlWithError, id],
        })
        res(this);
      })
      .then(response => {
        subObj.isValid = false;
        response.scope.setState(obj);
      })
    }
  }

  reduceArray(index) {
    let interimArr = [...this.state.idHtmlWithError];
          interimArr.splice(index, 1);
          this.setState({
            idHtmlWithError: interimArr
          })
  }

  render() {
    let subObj = this.props.subObj;

    return (
      <ul>
        {Object.entries(subObj).map((elem, id) => {
          let myOwnClassName = this.state.idHtmlWithError.includes(id) ? 'error' : '';

          if (typeof elem[1] === 'object') {
            return (
              <li key={uniqid()} className={myOwnClassName}
                onClick={e => {
                  this.click(e, id)
                }}
              >
                <label>{elem[0]}</label>

                {elem[1].returnInputElem(this.scope, elem[0], id, subObj, this)}
              </li>
            )
          } 
          return null;
        })}
      </ul>
    )
  }
}

/* class CreateListCompForTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.scope = this.props.scope;

    this.state = {
      idHtmlWithError: [],
    }
  }

  click(e, id) {
    if (e.target.localName === 'li' && this.state.idHtmlWithError.includes(id)) {
      e.target.classList.remove('error');
      let input = e.target.lastChild;
      input.focus();
    }
  }

  blur(object) {
    let {obj, e, elem, id, subObj} = object;
    
    changeHandler.call(obj, e, elem);

    if (e.target.value) {               
      new Promise(res => {
        let index = this.state.idHtmlWithError.indexOf(id);

        if (index !== -1) {
          this.reduceArray(index);
        }
        res(this)
      })
      .then(response => {
        if (response.state.idHtmlWithError.length === 0) {
          subObj.isValid = true;
          response.scope.setState(obj);
        }
      })

    } else {
      e.target.parentNode.classList.add('error');
      new Promise(res => {
        this.setState({
          idHtmlWithError: [...this.state.idHtmlWithError, id],
        })
        res(this);
      })
      .then(response => {
        subObj.isValid = false;
        response.scope.setState(obj);
      })
    }
  }

  reduceArray(index) {
    let interimArr = [...this.state.idHtmlWithError];
          interimArr.splice(index, 1);
          this.setState({
            idHtmlWithError: interimArr
          })
  }

  render() {
    let obj = this.props.obj;
    let subObj = this.props.subObj;

    return (
      <ul>
        {Object.entries(subObj).map((elem, id) => {

          let myOwnClassName = this.state.idHtmlWithError.includes(id) ? 'error' : '';

          if (typeof elem[1] === 'object') {
            return (
              <li key={uniqid()} className={myOwnClassName}
                onClick={e => {
                  this.click(e, id)
                }}
              >
                <label>{elem[0]}</label>
                <input type={elem[1].type} data-name={elem[0]}
                  onBlur={(e) => {
                    let propObj = {
                      obj: obj,
                      e: e,
                      elem: elem[1],
                      id: id,
                      subObj: subObj,
                    }
  
                    this.blur(propObj);
                  }} 
                  defaultValue={elem[1].value}
                ></input>
              </li>
            )
          } else {
            return null;
          }
        })}
      </ul>
    )
  }
} */

export default CreateListCompForTemplate;