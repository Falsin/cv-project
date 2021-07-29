import React from 'react';
import changeHandler from './ChangeHandler';
import uniqid from 'uniqid';
import cloneObj from './CloneObj';

class CreateListCompForTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.scope = this.props.scope;

    this.state = {
      idHtmlWithError: [],
      objWithKeys: {},
      obj: this.returnObj(props.subObj)
    }
  }

  returnObj(props) {
    let duplicateProps = cloneObj(props)
    for (const key in duplicateProps) {
      if (typeof duplicateProps[key] === 'object') {
        duplicateProps[key] = uniqid();
      }
    }

    return duplicateProps;
  }

  click(e, id) {
    if (e.target.localName === 'li' && this.state.idHtmlWithError.includes(id)) {
      e.target.classList.remove('error');
      let input = e.target.lastChild;
      input.focus();
    }
  }

  blur(object) {
    let {obj, e, childObj, id, subObj} = object;
 
    changeHandler.call(obj, e, childObj);

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

            let uniqIndex = id + ':' + uniqid();
            return (
              <li key={uniqid()} className={myOwnClassName}
              onClick={e => this.click(e, id)}>

                <label htmlFor={this.state.obj[elem[0]]}>{elem[0]}</label>
                {elem[1].returnInputElem.call(this, elem, uniqIndex)}
              </li>
            )
          } 
          return null;
        })}
      </ul>
    )
  }
}

export default CreateListCompForTemplate;