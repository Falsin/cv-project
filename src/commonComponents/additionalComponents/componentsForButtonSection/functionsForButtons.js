import cloneObj from "../CloneObj";
import clickHandler from "../ClickHandler";

function createObj(duplicateState) {
  let arrayOfKeysAndValues = Object.entries(duplicateState);

  let objectWithProps = arrayOfKeysAndValues[0][1];
  let arrayWithObjects = arrayOfKeysAndValues[1] ? arrayOfKeysAndValues[1][1] : null;

  let array = [];

  for (const key in objectWithProps) {
    if (typeof objectWithProps[key] === 'object') {
      array.push(objectWithProps[key])
    }
  }

  let check = array.every(elem => elem.value !== '');

  return {arrayOfKeysAndValues, objectWithProps, arrayWithObjects, check};
}

function addInfo(duplicateState) {
  let {arrayOfKeysAndValues, objectWithProps, arrayWithObjects, check} = createObj(this.state);

  if (check) {
    arrayWithObjects.push(objectWithProps);

    let name1 = arrayOfKeysAndValues[0][0];
    let name2 = arrayOfKeysAndValues[1][0];

    new Promise((res) => {
      this.setState({
        [name1]: cloneObj(this.defaultState),
        [name2]: arrayWithObjects
      })
      res(this)
    })
  } 
}

function sendInfo(duplicateState, propName) {
  let {objectWithProps, arrayWithObjects, check} = createObj(duplicateState);

  let checkСondition = arrayWithObjects.find((elem) => {
    return elem.isValid === false;
  })

  if (check && !checkСondition) {
    arrayWithObjects.push(objectWithProps);

    let subObj = {
      [propName]: duplicateState,
    }
    
    clickHandler(subObj, this.commonParentScope);
  }
}

function sendSingleInformation() {
  let {check} = createObj(this.state);

  if (check) {
    clickHandler(this.state, this.commonParentScope);
  }
}

function deleteInfoCard(duplicateState) {
  let arrayOfStateObj = Object.values(duplicateState);
  arrayOfStateObj[1].splice(-1, 1);
  this.setState(duplicateState);
}

export {addInfo, sendInfo, sendSingleInformation, deleteInfoCard};