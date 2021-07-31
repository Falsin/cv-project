import React from 'react';
import changeHandler from './ChangeHandler';
import uniqid from 'uniqid';
import { InputComp } from './ComponentsForInputsElements/InputsComponents';

class CreateListCompForTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.scope = this.props.scope;

    this.state = {
      idHtmlWithError: [],     // убрать
      objKeys: {},             // убрать
      collectionCompElem: [],  // убрать
      countElemWithError: 0,
    }
  }

/*   click(e, id) {    // убрать
    if (this.state.idHtmlWithError.includes(id)) {
      if (e.target.localName === 'li') {
        e.target.classList.remove('error');
        let input = e.target.lastChild;
        input.classList.add('afterError')
        input.focus();
      } else if (e.target.localName === 'input') {
        e.target.parentNode.classList.remove('error');
        e.target.classList.add('afterError')
      }
    }
  } */

/*   blur(e, childScope) {


    let obj = this.props.obj;
    let subObj = this.props.subObj;
    let childObj = subObj[childScope.objName];
    let id = childObj.uniqIndex;

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
  } */

  reduceArray(index) {
    let interimArr = [...this.state.idHtmlWithError];
    interimArr.splice(index, 1);
    this.setState({
      idHtmlWithError: interimArr
    })
  }

/*   componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      for (const key in this.props.subObj) {
        if (typeof this.props.subObj[key] === 'object') {
          this.props.subObj[key].uniqIndex = this.state.objProps.subObj[key].uniqIndex;
        }
      }
      this.setState({
        objProps: this.props,
      })
    }
  } */

/*   componentDidMount() {
    console.log(this.scope.state)
  } */

  render() {
    //console.log(this.state.idHtmlWithError)
    //console.log(this)
    /* console.log(this.props.scope.state)
    console.log(this.props.obj) */
    return (
      <ul>
        {Object.entries(this.props.subObj).map(item => {
          if (typeof item[1] === 'object') {
            return <InputComp scope={this} array={item} elem={item[1].inputElem} />
          } 
          return null;
        })}
      </ul>

      /* <ul>
        {Object.entries(this.state.objProps.subObj).map(item => {
          if (typeof item[1] === 'object') {
            let myOwnClassName = this.state.idHtmlWithError.includes(item[1].uniqIndex) ? 'error' : '';
            return (
              <li key={uniqid()} className={myOwnClassName}
                onClick={e => this.click(e, item[1].uniqIndex)}>

                <label htmlFor={item[1].uniqIndex}>{item[0]}</label>
                {item[1].returnInputElem.call(this, item)}
              </li>
            )
          } 
          return null;
        })}
      </ul> */
    )
  }
}

/* class CreateListCompForTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.scope = this.props.scope;

    this.state = {
      idHtmlWithError: [],
      objProps: this.returnObj(props)
    }
  }

  returnObj(props) {
    for (const key in props.subObj) {
      if (typeof props.subObj[key] === 'object') {
        props.subObj[key].uniqIndex = uniqid();
      }
    }
    return props;
  }

  click(e, id) {
    if (this.state.idHtmlWithError.includes(id)) {
      if (e.target.localName === 'li') {
        e.target.classList.remove('error');
        let input = e.target.lastChild;
        input.classList.add('afterError')
        input.focus();
      } else if (e.target.localName === 'input') {
        e.target.parentNode.classList.remove('error');
        e.target.classList.add('afterError')
      }
    }
  }

  blur(e, childScope) {
    let obj = this.state.objProps.obj;
    let subObj = this.state.objProps.subObj;
    let childObj = subObj[childScope.objName];
    let id = childObj.uniqIndex;

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

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      for (const key in this.props.subObj) {
        if (typeof this.props.subObj[key] === 'object') {
          this.props.subObj[key].uniqIndex = this.state.objProps.subObj[key].uniqIndex;
        }
      }
      this.setState({
        objProps: this.props,
      })
    }
  }

  render() {
    return (
      <ul>
        {Object.entries(this.state.objProps.subObj).map(item => {
          if (typeof item[1] === 'object') {
            let myOwnClassName = this.state.idHtmlWithError.includes(item[1].uniqIndex) ? 'error' : '';
            return (
              <li key={uniqid()} className={myOwnClassName}
                onClick={e => this.click(e, item[1].uniqIndex)}>

                <label htmlFor={item[1].uniqIndex}>{item[0]}</label>
                {item[1].returnInputElem.call(this, item)}
              </li>
            )
          } 
          return null;
        })}
      </ul>
    )
  }
} */

export default CreateListCompForTemplate;