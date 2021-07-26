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
            return (
              <li key={uniqid()} className={myOwnClassName}
                onClick={e => {
                  this.click(e, id)
                }}
              >
                <label>{elem[0]}</label>

                {elem[1].returnInputElem.call(this, elem, id)}
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