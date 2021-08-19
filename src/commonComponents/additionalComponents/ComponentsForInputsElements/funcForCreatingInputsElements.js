import uniqid from 'uniqid'

function input(arram) {
  let type = arram;

  return function () {
    let templateScope = this.parentScope;
    let uniqIndex = this.uniqIndex;

    return((templateScope.readonly) 
      ? <input key={uniqid()} type={type} value={this.state.defaultValue} readOnly style={{backgroundPosition: this.state.backgroundPosition}}/>
      : <input key={uniqid()} type={type} defaultValue={this.state.defaultValue}
          id={uniqIndex} style={{backgroundPosition: this.state.backgroundPosition}}
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
          }} />)
  }
}

function textArea (arram) {
  let type = arram;

  return function () {
    let templateScope = this.parentScope;

    return ((templateScope.readonly) 
          ? <textarea key={uniqid()} type={type} value={this.state.defaultValue} readOnly style={{backgroundPosition: this.state.backgroundPosition}}/>
          : <textarea key={uniqid()} type={type} defaultValue={this.state.defaultValue}
              style={{backgroundPosition: this.state.backgroundPosition}} id={this.uniqIndex}
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
              }}  />
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
        ? <input key={uniqid()} type={type} value={this.state.defaultValue} readOnly style={{backgroundPosition: this.state.backgroundPosition}}/>
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

export {input, textArea, countryComp}