import cloneObj from "./CloneObj";

 function addPropertiesInState(e, keyName) {
  let cloneObject = cloneObj(this.state)
  changeObj(cloneObject[keyName], e);

  this.setState(cloneObject);
}

function changeObj(obj, e) {
  for (const key in obj) {
    if (typeof obj[key] !== 'object') {
      if (key === e.target.id) {
        obj[key] = e.target.value;
      }
    } else {
      if (key === e.target.id) {
        obj[key].value = e.target.value;
      }
      changeObj(obj[key], e)
    }
  }
}

export default addPropertiesInState;