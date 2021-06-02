import React from 'react';
import uniqid from 'uniqid';
import CountryComp from './generalInfo/CountryComp'

class TemplateCV extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeElemArr: [],
      countryNamesArr: [],
      enteredVal: {
        value: '',
        id: uniqid()
      },
    }
  }

  changeHandler(e) {
    if (e.target.value.length > 0 && ![...e.target.classList].includes('active')) {
      e.target.classList.add('active')
      this.setState({
        activeElemArr: [...this.state.activeElemArr, e.target]
      })
    } else if (!e.target.value.length) {
      e.target.classList.remove('active');
      this.setState({
        activeElemArr: this.state.activeElemArr.filter(elem => elem !== e.target),
      })
    }
  }

  returnParentScope() {
    return this;
  }

  render() {
    return (
      <section>
        <div id='generalInfo'>
          <div>
            <label htmlFor='name'>Name</label>
            <input id='name' onChange={this.changeHandler.bind(this)}></input>

            <label htmlFor='email'>Email</label>
            <input id='email' type='email' onChange={this.changeHandler.bind(this)}></input>

            <label htmlFor='phone' type='tel'>Phone</label>
            <input id='phone' onChange={this.changeHandler.bind(this)}></input>

            <CountryComp parentScope={this.returnParentScope.bind(this)}/>
          </div>

          <div className='photo'>
            <label><input type='file' onChange={this.returnParentScope.bind(this)}></input></label>
          </div>
        </div>
      </section>
    )
  }
}

class PhotoComp extends React.Component {
  constructor(props) {
    super(props)

    this.parentScope = this.props.parentScope()
  }

  onFileSelected(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile !== undefined) {
      const reader = new FileReader();
      const elemTag = document.querySelector('.photo');

      reader.onload = (e) => {
        elemTag.style.backgroundImage = `url(${e.target.result})`;
      }

      reader.readAsDataURL(selectedFile);

      this.parentScope.setState({
        avatar: e.target.result,
      })
    }
  }

  render() {
    return (
      <div className='photo'>
          <label><input type='file' onChange={this.onFileSelected.bind(this)}></input></label>
      </div>
    )
  }
}

export default TemplateCV;